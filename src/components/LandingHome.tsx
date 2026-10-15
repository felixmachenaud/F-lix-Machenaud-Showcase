"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ScrollMorphHero } from "@/components/ui/scroll-morph-hero";
import { TestimonialsShowcase } from "@/components/TestimonialsShowcase";

const ctaPrimary =
  "inline-flex w-full max-w-[18.5rem] items-center justify-center rounded-full border-2 border-[#7C3AED] bg-[#7C3AED] px-5 py-3 text-center text-[13px] font-bold leading-snug text-white shadow-md transition hover:bg-white hover:text-[#7C3AED] hover:shadow-lg active:scale-[0.98] sm:w-auto sm:min-w-[280px] sm:max-w-none sm:px-11 sm:py-4 sm:text-lg";

const ctaSecondary =
  "inline-flex w-full max-w-[18.5rem] items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-[13px] font-bold leading-snug text-gray-900 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] sm:w-auto sm:min-w-[280px] sm:max-w-none sm:px-11 sm:py-4 sm:text-lg";

export function LandingHome() {
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

  return (
    <>
      <ScrollMorphHero
        title="Construisons l'infini."
        titleClassName="text-balance text-[1.85rem] font-light leading-snug tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
      >
        <Link href="/pourquoi-refaire-site-web" className={ctaPrimary}>
          Pourquoi (Re)faire votre site web
        </Link>
        <Link href="/productions" className={ctaSecondary}>
          Découvrir mes réalisations
        </Link>
      </ScrollMorphHero>

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
