"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BRAND_VIOLET } from "@/lib/site";

const basiqueIncluded = [
  "Site vitrine sur mesure (jusqu’à 5 sections)",
  "Design responsive mobile & desktop",
] as const;

const basiqueNotIncluded = [
  "Formulaire de contact sécurisé",
  "Hébergement & nom de domaine (selon offre)",
  "Mise en ligne et formation courte",
] as const;

const plans = [
  {
    id: "basique",
    name: "Basique",
    badge: "Essentiel",
    description: "Pour lancer une présence web claire et professionnelle sans complexité.",
    price: 990,
    features: [] as string[],
    cta: "S'inspirer",
    href: "/productions",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Le plus choisi",
    description: "Notre offre phare : plus de pages, plus d’impact, idéal pour convaincre et convertir.",
    price: 1390,
    features: [
      "Tout le pack Basique",
      "Jusqu’à 10 sections / pages",
      "Animations & micro-interactions",
      "Optimisation SEO de base",
      "Intégrations (réseaux, outils métier)",
    ],
    cta: "S'inspirer",
    href: "/productions",
    featured: true,
  },
  {
    id: "sur-mesure",
    name: "Sur mesure",
    badge: "Sur devis",
    description: "Projet ambitieux, intégrations avancées ou besoin d’une équipe dédiée.",
    price: null,
    features: [
      "Audit & cahier des charges",
      "Architecture sur mesure",
      "Développements spécifiques",
      "Accompagnement prioritaire",
      "SLA & maintenance possible",
    ],
    cta: "Réserver un appel",
    href: "/rendez-vous",
    featured: false,
  },
] as const;

const cardMotion = {
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
};

export function PricingPlans() {
  return (
    <div className="relative -mt-28 min-h-screen overflow-hidden bg-transparent pb-24 pt-28 sm:-mt-32 sm:pb-28 sm:pt-32">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Choisissez le plan qui vous correspond
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600 sm:text-base">
            Des offres claires avec un prix fixe par formule (hors options sur mesure).
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-9 md:grid-cols-3 md:gap-5 lg:gap-6">
          {plans.map((plan, i) => {
            const isFeatured = plan.featured;
            const price = plan.price != null ? `${plan.price}€` : null;

            /* Centre (Pro) : apparaît avant les encadrés gauche et droite */
            const staggerDelay = i === 1 ? 0.05 : 0.16;

            return (
              <motion.article
                key={plan.id}
                id={plan.id === "pro" ? "plan-pro" : undefined}
                {...cardMotion}
                transition={{
                  duration: 0.52,
                  delay: staggerDelay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col scroll-mt-28 rounded-2xl border bg-white p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08),0_2px_8px_-4px_rgba(15,23,42,0.04)] sm:p-7 ${
                  isFeatured
                    ? "z-[1] border-[color:var(--violet)] ring-2 ring-[#7C3AED]/20 md:-mt-2 md:scale-[1.03] md:pb-8 md:pt-8"
                    : "border-gray-200/90"
                }`}
                style={
                  isFeatured
                    ? ({
                        borderColor: BRAND_VIOLET,
                        background: `linear-gradient(180deg, ${BRAND_VIOLET}14 0%, #ffffff 38%, #ffffff 100%)`,
                      } satisfies CSSProperties)
                    : undefined
                }
              >
                {isFeatured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white shadow-md sm:text-sm"
                    style={{ backgroundColor: BRAND_VIOLET }}
                  >
                    Recommandé
                  </div>
                )}

                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    isFeatured
                      ? "bg-white/90 text-[#5b21b6] ring-1 ring-[#7C3AED]/25"
                      : "text-white"
                  }`}
                  style={
                    !isFeatured
                      ? { backgroundColor: BRAND_VIOLET }
                      : undefined
                  }
                >
                  {plan.badge}
                </span>

                <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  {plan.name}
                </h2>
                <p className="mt-3 min-h-[3.5rem] text-left text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                  {plan.description}
                </p>

                <div className="mt-6 border-b border-gray-100 pb-6">
                  {price != null ? (
                    <p className="text-left">
                      <span className="text-4xl font-bold tabular-nums tracking-tight text-gray-900 sm:text-[2.75rem]">
                        {price}
                      </span>
                    </p>
                  ) : (
                    <p className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Parlons-en !
                    </p>
                  )}
                </div>

                {plan.id === "basique" ? (
                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-left text-sm text-gray-700 sm:text-[15px]">
                    {basiqueIncluded.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden>
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {basiqueNotIncluded.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span
                          className="mt-0.5 shrink-0 font-semibold text-gray-400"
                          aria-hidden
                        >
                          ✕
                        </span>
                        <span className="text-gray-600">
                          <span className="line-through decoration-gray-300">{f}</span>
                          <span className="mt-1 block text-[13px] leading-snug text-gray-500 sm:text-sm">
                            Non inclus dans Basique —{" "}
                            <Link
                              href="/pricing#plan-pro"
                              className="font-semibold underline decoration-[#7C3AED]/35 underline-offset-2 transition hover:opacity-90"
                              style={{ color: BRAND_VIOLET }}
                            >
                              voir l’offre Pro
                            </Link>
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-left text-sm text-gray-700 sm:text-[15px]">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <span className="mt-0.5 shrink-0 text-gray-900" aria-hidden>
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8">
                  <Link
                    href={plan.href}
                    className={`flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-center text-sm font-bold transition sm:text-[15px] ${
                      isFeatured
                        ? "text-white shadow-lg hover:brightness-110"
                        : "border-2 border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                    style={
                      isFeatured ? { backgroundColor: BRAND_VIOLET } : undefined
                    }
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
