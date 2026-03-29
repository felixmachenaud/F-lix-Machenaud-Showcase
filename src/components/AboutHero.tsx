"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { PORTRAIT_PUBLIC_PATH } from "@/lib/portrait";
import { BRAND_VIOLET, WHITE_TITLE_SHADOW } from "@/lib/site";

/** Phrase sous le cadre — relief violet */
const TAGLINE_SHADOW =
  "0 1px 0 rgba(255,255,255,0.2), 0 2px 0 rgba(0,0,0,0.06), 0 4px 12px rgba(124,58,237,0.38), 0 10px 32px rgba(124,58,237,0.24)";

export function AboutHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [hasError, setHasError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /** Image : léger parallax. */
  const imageBlockY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -24],
  );
  /** Titre blanc + phrase violette : même coefficient de sensibilité au scroll. */
  const sharedTextParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -200],
  );

  if (hasError) {
    return (
      <section className="w-full px-4 pb-8 pt-2 sm:px-6">
        <div className="mx-auto flex min-h-[40vh] max-w-4xl flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-sm text-gray-600">
            Ajoutez votre photo dans{" "}
            <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">public/images/</code>
          </p>
          <p className="mt-2 font-mono text-xs text-gray-500">portrait.jpeg</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="w-full -mt-3 sm:-mt-5">
      {/* Cadre : hauteur plafonnée pour que photo + phrase violette tiennent dans le viewport */}
      <div>
        <div className="relative mx-auto max-w-6xl overflow-hidden bg-white px-4 sm:px-6">
          {/*
            Photo intégrale, fond blanc. max-h laisse la place à la phrase violette sous le cadre.
            Le titre blanc est en motion séparé (même parallax que la phrase violette).
          */}
          <div className="relative aspect-[3/4] w-full max-h-[min(calc(100dvh-15.5rem),680px)] min-h-0 sm:aspect-[4/5] sm:max-h-[min(calc(100dvh-14rem),720px)]">
            <div className="absolute inset-0 bg-white" />
            <motion.div style={{ y: imageBlockY }} className="absolute inset-0 will-change-transform">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full origin-center scale-[0.85]">
                  <Image
                    src={PORTRAIT_PUBLIC_PATH}
                    alt="Félix Machenaud"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 1152px"
                    priority
                    onError={() => setHasError(true)}
                  />
                  {/*
                    Centré sur la même zone que le portrait (object-contain + scale), pas seulement le cadre extérieur.
                  */}
                  <motion.div
                    style={{ y: sharedTextParallaxY }}
                    className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 text-center will-change-transform sm:px-8"
                  >
                    <p
                      className="flex max-w-[min(100%,40rem)] flex-col items-center font-extrabold leading-snug tracking-tight text-white"
                      style={{ textShadow: WHITE_TITLE_SHADOW }}
                    >
                      <span className="text-[2.553rem] sm:text-[2.862rem] md:text-[3.326rem] lg:text-[3.635rem]">
                        À propos de
                      </span>
                      <span className="mt-1 text-[3.003rem] sm:text-[3.367rem] md:text-[3.913rem] md:leading-tight md:mt-1.5 lg:mt-2 lg:text-[4.277rem]">
                        WebSite Studio
                      </span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: sharedTextParallaxY }}
        className="relative z-10 mx-auto max-w-4xl -mt-[3mm] px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8"
      >
        <p
          className="text-center text-[1.755rem] font-extrabold leading-snug tracking-tight sm:text-[1.95rem] md:text-[2.275rem] md:leading-tight lg:text-[2.405rem]"
          style={{
            color: BRAND_VIOLET,
            textShadow: TAGLINE_SHADOW,
          }}
        >
          Une approche humaine, technique et orientée
          <br />
          résultats.
        </p>
      </motion.div>
    </section>
  );
}
