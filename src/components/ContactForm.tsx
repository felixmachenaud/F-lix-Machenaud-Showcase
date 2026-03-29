"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { BRAND_VIOLET } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setErrorMessage(null);
    setStatus("loading");

    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ??
            "L’envoi a échoué. Vérifiez votre connexion ou réessayez plus tard."
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Impossible d’envoyer le message. Réessayez dans un instant."
      );
    }
  }

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
      <h2 className="text-lg font-semibold tracking-tight text-gray-900">
        Envoyez-nous un message
      </h2>

      {status === "success" ? (
        <div className="mt-8 space-y-4">
          <p
            className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-[15px] text-emerald-900"
            role="status"
          >
            Message envoyé. Nous vous répondrons dès que possible.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-sm font-semibold text-gray-700 underline-offset-2 hover:underline"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Nom
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              disabled={status === "loading"}
              placeholder="Votre nom"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/25 focus:ring-offset-0 disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              disabled={status === "loading"}
              placeholder="vous@exemple.com"
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/25 focus:ring-offset-0 disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              disabled={status === "loading"}
              placeholder="Votre message…"
              className="min-h-[140px] w-full resize-y rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/25 focus:ring-offset-0 disabled:opacity-60"
            />
          </div>

          {status === "error" && errorMessage ? (
            <p
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-900"
              role="alert"
            >
              {errorMessage}
            </p>
          ) : null}

          <div className="pt-1">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex rounded-lg px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
              style={{ backgroundColor: BRAND_VIOLET }}
            >
              {status === "loading" ? "Envoi…" : "Envoyer"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
