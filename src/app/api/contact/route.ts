import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/site";

const MAX_NAME = 200;
const MAX_MESSAGE = 10_000;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Envoi d’email non configuré. Ajoutez RESEND_API_KEY sur le serveur.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("name" in body) ||
    !("email" in body) ||
    !("message" in body)
  ) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  const raw = body as {
    name: unknown;
    email: unknown;
    message: unknown;
    privacyAccepted?: unknown;
  };

  if (raw.privacyAccepted !== true) {
    return NextResponse.json(
      { error: "L’acceptation de la politique de confidentialité est requise." },
      { status: 400 }
    );
  }

  const name = String(raw.name ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const message = String(raw.message ?? "").trim();

  if (!name || name.length > MAX_NAME) {
    return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!message || message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "Message invalide." }, { status: 400 });
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "WebSite Studio <onboarding@resend.dev>";

  const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_EMAIL;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Contact site — ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "L’envoi a échoué. Réessayez plus tard." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
