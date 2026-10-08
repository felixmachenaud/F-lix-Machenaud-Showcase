"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShinyButton } from "./ui/shiny-button";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "email" | "message" | "consent";
type Errors = Partial<Record<Field, string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  // Prefilled mailto link offered when automatic sending is not configured on the server.
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      company: String(data.get("company") ?? ""),
    };

    const local: Errors = {};
    if (payload.name.trim().length < 2) local.name = "Indiquez votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.email.trim())) local.email = "Indiquez une adresse e-mail valide.";
    if (payload.message.trim().length < 10) local.message = "Votre message doit faire au moins 10 caractères.";
    if (!payload.consent) local.consent = "Cochez la case pour accepter la politique de confidentialité.";
    setErrors(local);
    setFormError("");
    if (Object.keys(local).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      if (json.errors) setErrors(json.errors);
      setFormError(json.error ?? "");
      if (json.fallback) {
        const subject = `Nouveau message de ${payload.name.trim()} — felixtech.space`;
        const body = `${payload.message.trim()}

${payload.name.trim()} — ${payload.email.trim()}`;
        setMailto(`mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      }
      setStatus("error");
    } catch {
      setFormError("Connexion impossible. Vérifiez votre réseau et réessayez.");
      setStatus("error");
    }
  }

  const clear = (field: Field) => () => {
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <div className="card contact-form">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            className="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            role="status"
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
              <circle cx="28" cy="28" r="27" fill="#F1ECFF" />
              <motion.path
                d="M18 29l7 7 13-14"
                stroke="#6D45F0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </svg>
            <h2>Message envoyé</h2>
            <p>Merci ! Je vous réponds rapidement, en général dans la journée.</p>
            <button className="btn btn-ghost" onClick={() => setStatus("idle")}>
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2>Envoyez-moi un message</h2>
            <div className="field">
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Camille Martin"
                onInput={clear("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-err" : undefined}
              />
              {errors.name && (
                <p className="err" id="name-err">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="camille@entreprise.fr"
                onInput={clear("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-err" : undefined}
              />
              {errors.email && (
                <p className="err" id="email-err">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Parlez-moi de votre projet, de vos délais et de vos envies."
                onInput={clear("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
              />
              {errors.message && (
                <p className="err" id="message-err">
                  {errors.message}
                </p>
              )}
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="company">Société</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>
            <label className="consent">
              <input type="checkbox" name="consent" onChange={clear("consent")} aria-invalid={!!errors.consent} />
              <span>
                J&apos;ai lu et j&apos;accepte la <Link href="/confidentialite">politique de confidentialité</Link> de ce
                site.
              </span>
            </label>
            {errors.consent && <p className="err">{errors.consent}</p>}
            <p className="fine">
              Vos données sont transmises à notre prestataire Resend pour l&apos;acheminement de l&apos;e-mail et ne
              seront pas revendues.
            </p>
            {formError && !mailto && (
              <p className="err form-err" role="alert">
                {formError}
              </p>
            )}
            {mailto && (
              <div className="mail-fallback" role="alert">
                <p>Votre message est prêt : envoyez-le en un clic depuis votre messagerie.</p>
                <a className="btn btn-ghost" href={mailto}>
                  Envoyer avec ma messagerie <span className="arrow">↗</span>
                </a>
              </div>
            )}
            <ShinyButton type="submit" disabled={status === "sending"}>
              {status === "sending" ? (
                "Envoi en cours…"
              ) : (
                <>
                  Envoyer <span className="arrow">→</span>
                </>
              )}
            </ShinyButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
