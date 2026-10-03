import { Resend } from "resend";
import { site } from "@/lib/data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot: bots fill every field, humans never see this one.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const consent = body.consent === true;

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 120) errors.name = "Indiquez votre nom.";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "Indiquez une adresse e-mail valide.";
  if (message.length < 10 || message.length > 5000) errors.message = "Votre message doit faire au moins 10 caractères.";
  if (!consent) errors.consent = "Cochez la case pour accepter la politique de confidentialité.";
  if (Object.keys(errors).length) return Response.json({ errors }, { status: 422 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Trop d'envois en peu de temps. Réessayez dans quelques minutes." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY manquant : le message n'a pas été envoyé.");
    return Response.json(
      { error: `L'envoi est momentanément indisponible. Écrivez directement à ${site.email}.` },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "WebSite Studio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL || site.email,
    replyTo: email,
    subject: `Nouveau message de ${name} — felixtech.space`,
    text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`,
  });

  if (error) {
    console.error("[contact] Resend:", error);
    return Response.json(
      { error: `L'envoi a échoué. Réessayez ou écrivez directement à ${site.email}.` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
