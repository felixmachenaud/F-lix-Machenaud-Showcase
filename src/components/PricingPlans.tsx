"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BRAND_VIOLET } from "@/lib/site";

const cardEnter = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/** Fond « nuage » violet doux, même esprit que la carte Pro précédente */
const cloudCardStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: [
    `radial-gradient(ellipse 95% 55% at 18% 12%, rgba(124, 58, 237, 0.16), transparent 58%)`,
    `radial-gradient(ellipse 70% 48% at 88% 22%, rgba(124, 58, 237, 0.1), transparent 52%)`,
    `radial-gradient(ellipse 50% 35% at 50% 0%, rgba(124, 58, 237, 0.06), transparent 55%)`,
    `linear-gradient(180deg, rgba(124, 58, 237, 0.11) 0%, rgba(255, 255, 255, 0.98) 42%, #ffffff 100%)`,
  ].join(", "),
};

const ctaClass =
  "inline-flex shrink-0 items-center justify-center rounded-full border-2 px-6 py-3 text-center text-sm font-semibold tracking-tight transition duration-200 sm:text-[15px]";

export function PricingPlans() {
  return (
    <div className="relative -mt-28 min-h-screen overflow-hidden bg-transparent pb-24 pt-28 sm:-mt-32 sm:pb-28 sm:pt-32">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <motion.article
          {...cardEnter}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-3xl scroll-mt-28 rounded-[1.35rem] border-2 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.12),0_4px_14px_-6px_rgba(124,58,237,0.08)] lg:max-w-4xl"
          style={{ borderColor: BRAND_VIOLET }}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-[1.3rem] ring-1 ring-[#7C3AED]/15"
            aria-hidden
          />
          <div
            className="relative overflow-hidden rounded-[1.28rem] p-8 sm:p-10 md:p-12"
            style={cloudCardStyle}
          >
            {/* Accent discret — ligne lumineuse */}
            <div
              className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/35 to-transparent sm:left-10 sm:right-10 md:left-12 md:right-12"
              aria-hidden
            />

            <header className="relative text-center">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6d28d9]/90"
                style={{ color: BRAND_VIOLET }}
              >
                Tarif indicatif
              </p>
              <h1 className="mt-4 text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-3xl md:text-[2.15rem]">
                Votre site{" "}
                <span className="font-[Georgia,serif] text-[1.3em] font-bold text-[#5b21b6]">
                  sur mesure
                </span>
                <span className="mt-3 block font-semibold text-gray-900">
                  <span className="block text-lg font-medium text-gray-500 sm:text-xl">
                    à partir de
                  </span>
                  <span className="mt-1 inline-block text-5xl tabular-nums tracking-tight text-gray-950 sm:text-6xl md:text-[3.5rem]">
                    990€
                  </span>
                </span>
              </h1>
            </header>

            <div className="relative mt-10 space-y-10 border-t border-[#7C3AED]/10 pt-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-gray-700 sm:text-base">
                  Chaque site étant unique, je serai ravi d’échanger avec vous sur
                  vos attentes et la direction que vous imaginez.
                </p>
                <Link
                  href="/rendez-vous"
                  className={`${ctaClass} w-full border-[#7C3AED] bg-[#7C3AED] text-white hover:bg-white hover:text-[#5b21b6] sm:w-auto sm:min-w-[14rem]`}
                  style={{ borderColor: BRAND_VIOLET }}
                >
                  On se prend un café ?
                </Link>
              </div>

              <p className="text-pretty text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                Les prix peuvent varier selon le niveau de technicité souhaité.
                N’hésitez pas à m’envoyer des exemples de pages ou de sites dont
                vous aimeriez vous inspirer : cela aide à cadrer le projet
                ensemble.
              </p>

              <div className="flex flex-col gap-5 border-t border-[#7C3AED]/10 pt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-gray-700 sm:text-base">
                  Vous pouvez aussi vous inspirer de mes réalisations.
                </p>
                <Link
                  href="/productions"
                  className={`${ctaClass} w-full border-[#7C3AED] bg-[#7C3AED] text-white hover:bg-white hover:text-[#5b21b6] sm:w-auto sm:min-w-[11rem]`}
                  style={{ borderColor: BRAND_VIOLET }}
                >
                  S&apos;inspirer
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
