"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Montserrat, Oswald, Raleway, Space_Grotesk } from "next/font/google";

const ROTATION_MS = 1650;

const fontIdees = Oswald({ subsets: ["latin"], weight: "700" });
const fontProjets = Montserrat({ subsets: ["latin"], weight: "800" });
const fontPlans = Raleway({ subsets: ["latin"], weight: "800" });
const fontVisions = Space_Grotesk({ subsets: ["latin"], weight: "700" });

/** Même échelle que les mots animés — doit aussi être appliquée au repère invisible. */
const SIZE_CLASSES =
  "text-[1.28em] sm:text-[1.32em] md:text-[1.38em] lg:text-[1.42em] font-bold leading-[1.35]";

const WORDS = [
  {
    text: "projets",
    fontClass: fontProjets.className,
    colorClass: "text-[#22c55e]",
  },
  {
    text: "idées",
    fontClass: fontIdees.className,
    colorClass: "text-gray-900",
  },
  {
    text: "plans",
    fontClass: fontPlans.className,
    colorClass: "text-[#f97316]",
  },
  {
    text: "visions",
    fontClass: fontVisions.className,
    colorClass: "text-[#3b82f6]",
  },
] as const;

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;
const SLIDE_DURATION = 0.52;

/**
 * Largeur de référence : le mot le plus large en taille réelle (évite de couper le « s » de projets).
 */
function WidthSpacer() {
  return (
    <span
      className={`pointer-events-none invisible block select-none whitespace-nowrap px-2.5 ${SIZE_CLASSES} ${fontProjets.className}`}
      aria-hidden
    >
      projets
    </span>
  );
}

export function RotatingHeroWord() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const staticItem = WORDS[0];

  if (reduceMotion) {
    return (
      <span
        className={`inline-block align-middle ${SIZE_CLASSES} ${staticItem.fontClass} ${staticItem.colorClass}`}
      >
        {staticItem.text}
      </span>
    );
  }

  const w = WORDS[index];

  return (
    <span className="relative inline-block align-middle" aria-live="polite">
      {/* Repère hauteur / largeur (Montserrat = largeur réelle de « projets ») */}
      <span className="block pb-[0.28em]">
        <WidthSpacer />
      </span>

      <span className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.span
            key={w.text}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: SLIDE_DURATION,
              ease: SLIDE_EASE,
            }}
            className={`absolute left-2.5 right-2.5 top-0.5 bottom-2 flex items-center justify-center whitespace-nowrap ${SIZE_CLASSES} ${w.fontClass} ${w.colorClass}`}
          >
            {w.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
