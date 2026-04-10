"use client";

import Link from "next/link";
import { Anton } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { HeroCardsFan, FAN_DURATION, FAN_EASE } from "@/components/HeroCardsFan";
import { HeroCardsMobileStack } from "@/components/HeroCardsMobileStack";
import { DesktopOnly, MobileOnly } from "@/components/ResponsiveView";
import { RotatingHeroWord } from "@/components/RotatingHeroWord";
import { TestimonialsShowcase } from "@/components/TestimonialsShowcase";

/** Style proche d’Impact : condensé, percutant, lisible partout (Google Fonts). */
const heroImpact = Anton({
  weight: "400",
  subsets: ["latin"],
});

export function LandingHome() {
  const reduceMotion = useReducedMotion();

  /** Arrivée sur `/#avis` (lien depuis une autre page ou URL directe) : centrer la section */
  useEffect(() => {
    if (typeof window === "undefined" || window.location.hash !== "#avis") return;
    const el = document.getElementById("avis");
    if (!el) return;
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: instant ? "auto" : "smooth", block: "center" });
    });
  }, []);

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
    <>
    <section className="flex min-h-[calc(100vh-7rem)] w-full flex-1 flex-col items-stretch overflow-x-visible bg-white pb-10 pt-2 sm:min-h-[calc(100vh-8rem)] sm:pb-14 sm:pt-4">
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
            href="/pourquoi-refaire-site-web"
            className="inline-flex min-w-[260px] items-center justify-center rounded-full border-2 border-[#7C3AED] bg-[#7C3AED] px-10 py-4 text-center text-base font-bold text-white shadow-md transition hover:bg-white hover:text-[#7C3AED] hover:shadow-lg active:scale-[0.98] sm:min-w-[280px] sm:px-11 sm:py-4 sm:text-lg"
          >
            Pourquoi (Re)faire votre site web
          </Link>
          <Link
            href="/productions"
            className="inline-flex min-w-[260px] items-center justify-center rounded-full border border-gray-200 bg-white px-10 py-4 text-base font-bold text-gray-900 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] sm:min-w-[280px] sm:px-11 sm:py-4 sm:text-lg"
          >
            Découvrir mes réalisations
          </Link>
        </div>
      </motion.div>

      {/* Desktop : éventail animé (inchangé). Mobile : pile verticale sans chevauchement avec le titre. */}
      <MobileOnly className="relative z-10 mt-auto flex w-full justify-center pt-12">
        <HeroCardsMobileStack />
      </MobileOnly>
      <DesktopOnly className="relative z-10 mt-auto flex w-full flex-col items-center justify-end self-stretch px-4 pt-16 sm:px-8 sm:pt-20 md:pt-24">
        <div className="flex w-full justify-center overflow-x-visible overflow-y-visible pb-4">
          <HeroCardsFan />
        </div>
      </DesktopOnly>
    </section>

    <section
      id="avis"
      className="scroll-mt-28 border-t border-gray-100 bg-white px-4 py-14 sm:scroll-mt-32 sm:px-8 sm:py-20"
      aria-labelledby="temoignages-heading"
    >
      <TestimonialsShowcase />
    </section>
    </>
  );
}
