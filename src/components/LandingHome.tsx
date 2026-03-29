"use client";

import Link from "next/link";
import { Anton } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { HeroCardsFan, FAN_DURATION, FAN_EASE } from "@/components/HeroCardsFan";
import { RotatingHeroWord } from "@/components/RotatingHeroWord";
import { BRAND_VIOLET } from "@/lib/site";

/** Style proche d’Impact : condensé, percutant, lisible partout (Google Fonts). */
const heroImpact = Anton({
  weight: "400",
  subsets: ["latin"],
});

export function LandingHome() {
  const reduceMotion = useReducedMotion();

  /** Même durée et courbe que l’éventail — texte part de transparent et apparaît en parallèle */
  const heroReveal = {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : FAN_DURATION,
      ease: FAN_EASE,
    },
  };

  return (
    <section className="flex min-h-[calc(100vh-7rem)] flex-col bg-white pb-10 pt-2 sm:min-h-[calc(100vh-8rem)] sm:pb-14 sm:pt-4">
      {/* Contenu hero : fondu synchronisé avec HeroCardsFan */}
      <motion.div
        className="relative z-20 mx-auto w-full max-w-4xl shrink-0 px-6 text-center"
        initial={heroReveal.initial}
        animate={heroReveal.animate}
        transition={heroReveal.transition}
      >
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.2]">
          Transformer vos <RotatingHeroWord /> en une expérience qui existe{" "}
          <span
            className={`${heroImpact.className} inline-block align-baseline text-[2.35rem] leading-[0.95] tracking-tight text-gray-900 sm:text-[2.85rem] md:text-[3.35rem] lg:text-[3.85rem] xl:text-[4.1rem]`}
          >
            vraiment
          </span>
          .
        </h1>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-5">
          <Link
            href="/productions"
            className="inline-flex min-w-[260px] items-center justify-center rounded-full px-10 py-4 text-base font-bold text-white shadow-md transition hover:brightness-110 hover:shadow-lg active:scale-[0.98] sm:min-w-[280px] sm:px-11 sm:py-4 sm:text-lg"
            style={{ backgroundColor: BRAND_VIOLET }}
          >
            Découvrir nos productions
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-w-[260px] items-center justify-center rounded-full border border-gray-200 bg-white px-10 py-4 text-base font-bold text-gray-900 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] sm:min-w-[280px] sm:px-11 sm:py-4 sm:text-lg"
          >
            Pourquoi refaire votre site web
          </Link>
        </div>
      </motion.div>

      {/* Tiers inférieur : bloc cartes uniquement — ne remonte pas au centre */}
      <div className="relative z-10 mt-auto flex w-full flex-col items-center justify-end px-4 pt-16 sm:px-8 sm:pt-20 md:pt-24">
        <div className="w-full max-w-5xl overflow-visible pb-4">
          <HeroCardsFan />
        </div>
      </div>
    </section>
  );
}
