"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { BRAND_VIOLET, WHITE_VIOLET_OUTLINE_SHADOW } from "@/lib/site";

const cardEnter = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/** Fond « nuage » violet doux pour l'offre vitrine (carte claire) */
const cloudCardStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: [
    `radial-gradient(ellipse 95% 55% at 18% 12%, rgba(124, 58, 237, 0.16), transparent 58%)`,
    `radial-gradient(ellipse 70% 48% at 88% 22%, rgba(124, 58, 237, 0.1), transparent 52%)`,
    `radial-gradient(ellipse 50% 35% at 50% 0%, rgba(124, 58, 237, 0.06), transparent 55%)`,
    `linear-gradient(180deg, rgba(124, 58, 237, 0.11) 0%, rgba(255, 255, 255, 0.98) 42%, #ffffff 100%)`,
  ].join(", "),
};

/** Fond violet → rose profond, fondu, pour l'offre outils & applications */
const deepCardStyle: CSSProperties = {
  backgroundColor: "#7e22ce",
  backgroundImage: [
    `radial-gradient(ellipse 110% 75% at 12% 6%, rgba(216, 180, 254, 0.45), transparent 62%)`,
    `radial-gradient(ellipse 95% 70% at 96% 16%, rgba(192, 38, 211, 0.5), transparent 60%)`,
    `radial-gradient(ellipse 100% 80% at 72% 104%, rgba(190, 24, 93, 0.55), transparent 66%)`,
    `radial-gradient(ellipse 80% 60% at 30% 90%, rgba(157, 23, 110, 0.4), transparent 60%)`,
    `linear-gradient(152deg, #7c3aed 0%, #9333ea 42%, #a21caf 74%, #9d2667 100%)`,
  ].join(", "),
};

const ctaClass =
  "mt-8 inline-flex w-full items-center justify-center rounded-full border-2 px-6 py-3.5 text-center text-sm font-semibold tracking-tight transition duration-200 sm:text-[15px]";

const websiteFeatures = [
  "Design sur mesure & identité soignée",
  "Développement natif, sans template",
  "100% responsive (mobile, tablette, desktop)",
  "Optimisation SEO & performances",
  "Mise en ligne & accompagnement",
];

const toolsFeatures = [
  "Chatbot client intelligent",
  "Automatisation de mailing & relances",
  "CRM d'entreprise sur mesure",
  "Intégrations & connexions API",
  "Applications & extensions web",
];

function CheckIcon({ tone }: { tone: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <span
      aria-hidden
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        isDark ? "bg-white/15" : "bg-[#7C3AED]/12"
      }`}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="h-3 w-3"
        stroke={isDark ? "#ffffff" : BRAND_VIOLET}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
      </svg>
    </span>
  );
}

function FeatureList({
  items,
  tone,
}: {
  items: string[];
  tone: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <ul className="mt-8 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon tone={tone} />
          <span
            className={`text-[15px] leading-snug ${
              isDark ? "text-violet-100/90" : "text-gray-700"
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Badge({ label, tone }: { label: string; tone: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center rounded-full bg-white px-5 py-2 text-lg font-bold tracking-tight text-[#5b21b6] sm:text-xl ${
        isDark
          ? "shadow-[0_8px_22px_-8px_rgba(0,0,0,0.45)]"
          : "shadow-[0_8px_22px_-8px_rgba(124,58,237,0.55)] ring-1 ring-[#7C3AED]/15"
      }`}
    >
      {label}
    </span>
  );
}

function PriceBlock({
  prefix,
  amount,
  suffix,
  tone,
}: {
  prefix?: string;
  amount: string;
  suffix?: ReactNode;
  tone: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div className="mt-8">
      {prefix ? (
        <span
          className={`block text-base font-medium ${
            isDark ? "text-violet-200/80" : "text-gray-500"
          }`}
        >
          {prefix}
        </span>
      ) : null}
      <span
        className={`mt-1 inline-flex items-end gap-1.5 text-5xl font-bold tabular-nums tracking-tight sm:text-[3.25rem] ${
          isDark ? "text-white" : "text-gray-950"
        }`}
      >
        {amount}
        {suffix ? (
          <span
            className={`pb-2 text-base font-medium ${
              isDark ? "text-violet-200/80" : "text-gray-500"
            }`}
          >
            {suffix}
          </span>
        ) : null}
      </span>
    </div>
  );
}

export function PricingPlans() {
  return (
    <div className="relative -mt-28 min-h-screen overflow-hidden bg-transparent pb-24 pt-20 sm:-mt-32 sm:pb-28 sm:pt-24">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <motion.header
          {...cardEnter}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1
            className="text-balance text-3xl font-extrabold leading-[1.55] tracking-tight text-white sm:text-4xl md:text-[2.5rem]"
            style={{ textShadow: WHITE_VIOLET_OUTLINE_SHADOW }}
          >
            Choisissez l&apos;offre qui vous ressemble
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-gray-600 sm:text-base">
            Deux offres distinctes et complémentaires : un site vitrine élégant
            pour exister en ligne, et des outils techniques pour automatiser et
            faire grandir votre activité.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Offre 1 — Site vitrine (carte claire) */}
          <motion.article
            {...cardEnter}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="relative flex scroll-mt-28 rounded-[1.35rem] border-2 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.12),0_4px_14px_-6px_rgba(124,58,237,0.08)]"
            style={{ borderColor: BRAND_VIOLET }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.3rem] ring-1 ring-[#7C3AED]/15"
              aria-hidden
            />
            <div
              className="relative flex w-full flex-col overflow-hidden rounded-[1.28rem] p-8 sm:p-10"
              style={cloudCardStyle}
            >
              <div
                className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/35 to-transparent sm:left-10 sm:right-10"
                aria-hidden
              />

              <Badge label="Site vitrine" tone="light" />

              <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-gray-600">
                Idéal pour présenter votre activité avec un site rapide, élégant
                et entièrement pensé sur mesure.
              </p>

              <PriceBlock
                prefix="à partir de"
                amount="1190€"
                tone="light"
              />

              <div className="mt-8 border-t border-[#7C3AED]/12" />

              <FeatureList items={websiteFeatures} tone="light" />

              <div className="mt-auto pt-8">
                <Link
                  href="/rendez-vous"
                  className={`${ctaClass} border-[#7C3AED] bg-[#7C3AED] text-white hover:bg-white hover:text-[#5b21b6]`}
                  style={{ borderColor: BRAND_VIOLET }}
                >
                  On se prend un café ?
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Offre 2 — Outils & applications (carte violet profond) */}
          <motion.article
            {...cardEnter}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative flex scroll-mt-28 rounded-[1.35rem] border-2 border-[#4c1d95] shadow-[0_18px_50px_-18px_rgba(76,29,149,0.55),0_6px_18px_-8px_rgba(124,58,237,0.4)]"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.3rem] ring-1 ring-white/10"
              aria-hidden
            />
            <div
              className="relative flex w-full flex-col overflow-hidden rounded-[1.28rem] p-8 text-white sm:p-10"
              style={deepCardStyle}
            >
              <div
                className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent sm:left-10 sm:right-10"
                aria-hidden
              />

              <Badge label="Outils & Applications" tone="dark" />

              <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-violet-100/85">
                Au-delà de la vitrine : des solutions techniques (CRM, chatbot,
                automatisations…) conçues pour faire grandir votre activité.
              </p>

              <PriceBlock amount="Sur devis" tone="dark" />

              <div className="mt-8 border-t border-white/15" />

              <FeatureList items={toolsFeatures} tone="dark" />

              <div className="mt-auto pt-8">
                <Link
                  href="/rendez-vous"
                  className={`${ctaClass} border-white bg-white text-[#5b21b6] hover:bg-transparent hover:text-white`}
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </motion.article>
        </div>

        <motion.p
          {...cardEnter}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl text-pretty text-center text-sm leading-relaxed text-gray-600 sm:text-[15px]"
        >
          Les prix varient selon le niveau de technicité souhaité. N&apos;hésitez
          pas à m&apos;envoyer des exemples de sites ou d&apos;outils dont vous
          aimeriez vous inspirer, ou à{" "}
          <Link
            href="/productions"
            className="font-semibold text-[#5b21b6] underline-offset-2 hover:underline"
          >
            découvrir mes réalisations
          </Link>
          .
        </motion.p>
      </div>
    </div>
  );
}
