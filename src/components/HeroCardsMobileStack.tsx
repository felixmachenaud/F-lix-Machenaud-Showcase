"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FAN_COLORS, FAN_DURATION, FAN_EASE } from "@/components/HeroCardsFan";

const CARD_RADIUS = "1.75rem";

/**
 * Variante mobile : cartes empilées en flux normal, sans positionnement absolu ni éventail.
 * Évite les chevauchements avec le titre sur petits écrans.
 */
export function HeroCardsMobileStack() {
  const reduceMotion = useReducedMotion();
  const layers = [
    { key: "back" as const, color: FAN_COLORS.back },
    { key: "mid" as const, color: FAN_COLORS.mid },
    { key: "front" as const, color: FAN_COLORS.front },
  ];

  return (
    <div
      className="mx-auto w-full max-w-sm shrink-0 px-4 sm:px-2"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-3">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.key}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : FAN_DURATION * 0.55,
              delay: reduceMotion ? 0 : i * 0.08,
              ease: FAN_EASE,
            }}
            className="h-[100px] w-full shadow-[0_12px_32px_-16px_rgba(0,0,0,0.12)]"
            style={{
              backgroundColor: layer.color,
              borderRadius: CARD_RADIUS,
            }}
          />
        ))}
      </div>
    </div>
  );
}
