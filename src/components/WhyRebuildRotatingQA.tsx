"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { WHY_REBUILD_QA_PAIRS } from "@/lib/whyRebuildContent";

const ROTATION_MS = 6000;

/** Police plus « haute » et marquée pour les questions (cohérent avec l’esprit du hero). */
const questionFont = Space_Grotesk({ subsets: ["latin"], weight: "700" });
const questionClass = `${questionFont.className} text-base font-bold leading-snug text-violet-800 sm:text-lg md:text-xl`;

const cardClass =
  "flex flex-col rounded-2xl border border-violet-200/50 bg-transparent p-6 sm:p-8";

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;
const SLIDE_DURATION = 0.52;

/**
 * Même principe que {@link RotatingHeroWord} : le couple question/réponse
 * glisse verticalement comme sur une roue (entrée par le bas, sortie par le haut).
 */
export function WhyRebuildRotatingQA() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WHY_REBUILD_QA_PAIRS.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const first = WHY_REBUILD_QA_PAIRS[0];

  if (reduceMotion) {
    return (
      <div className={cardClass} role="region" aria-label="Argument en faveur d’une refonte de site">
        <p className={questionClass}>{first.question}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-700 sm:text-base">{first.answer}</p>
      </div>
    );
  }

  const pair = WHY_REBUILD_QA_PAIRS[index];

  return (
    <div
      className="relative mx-auto min-h-[min(340px,52vh)] w-full max-w-2xl sm:min-h-[300px]"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Questions et réponses sur la refonte de site web"
      aria-live="polite"
    >
      <span className="sr-only">
        Discussion {index + 1} sur {WHY_REBUILD_QA_PAIRS.length}
      </span>

      {/* Hauteur de référence pour limiter les sauts de mise en page */}
      <div className="pointer-events-none invisible select-none rounded-2xl border border-transparent p-6 opacity-0 sm:p-8">
        <p className={questionClass}>{first.question}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-gray-700 sm:text-base">{first.answer}</p>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: SLIDE_DURATION,
              ease: SLIDE_EASE,
            }}
            className={`absolute inset-0 ${cardClass}`}
          >
            <p className={questionClass}>{pair.question}</p>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700 sm:text-base">
              {pair.answer}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
