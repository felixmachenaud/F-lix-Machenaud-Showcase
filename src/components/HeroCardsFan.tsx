"use client";

/**
 * HeroCardsFan — trois plaques colorées en éventail (hero bas de page)
 *
 * Ajustez les constantes ci-dessous (rotations, décalages, durée, hauteur).
 */

import { motion, useReducedMotion } from "framer-motion";

// ——— Couleurs (inchangées) ———
export const FAN_COLORS = {
  back: "#FFD600",
  mid: "#FF4FB1",
  front: "#7C3AED",
} as const;

// ——— Timing ———
/** Durée principale de l’ouverture (s) — cible 1.2–1.8 */
export const FAN_DURATION = 1.45;
/** Léger décalage entre chaque plaque (s) */
export const FAN_STAGGER = 0.06;
/** Courbe type premium (ease-out doux) */
export const FAN_EASE = [0.16, 1, 0.3, 1] as const;

// ——— Conteneur ———
/** Hauteur fixe du bloc (px) — assez grande pour ne jamais rogner les cartes */
export const FAN_CONTAINER_HEIGHT_PX = 360;
/** Largeur max du bloc */
export const FAN_MAX_WIDTH_PX = 920;

// ——— Cartes (largeur % du conteneur, hauteur px) ———
export const CARD_WIDTH_PERCENT = 88;
export const CARD_HEIGHT_PX = 200;
/** Rayon des coins (très arrondi) */
export const CARD_RADIUS = "1.75rem";

// ——— État initial (éventail resserré) ———
/** Rotations et décalages symétriques pour un groupe visuellement centré */
export const FAN_INITIAL = {
  rotate: [-3.5, -1, 3.5] as const,
  xPercent: [-2.5, 0, 2.5] as const,
  /** Pas de translation verticale animée (évite le mouvement parasite) */
  yPx: [0, 0, 0] as const,
  scale: [0.96, 0.97, 0.98] as const,
};

// ——— État final (éventail ouvert, référence) ———
export const FAN_FINAL = {
  rotate: [-9, -2.5, 9] as const,
  xPercent: [-10, 0, 10] as const,
  yPx: [0, 0, 0] as const,
  scale: [1, 1, 1] as const,
};

type Layer = "back" | "mid" | "front";

const LAYERS: { key: Layer; color: string; z: number }[] = [
  { key: "back", color: FAN_COLORS.back, z: 0 },
  { key: "mid", color: FAN_COLORS.mid, z: 1 },
  { key: "front", color: FAN_COLORS.front, z: 2 },
];

export function HeroCardsFan() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.01 : FAN_DURATION;
  const stagger = reduceMotion ? 0 : FAN_STAGGER;

  return (
    <div
      className="pointer-events-none w-full shrink-0 overflow-x-visible overflow-y-visible select-none"
      aria-hidden
    >
      <div
        className="relative left-1/2 w-full max-w-[920px] -translate-x-1/2"
        style={{
          height: FAN_CONTAINER_HEIGHT_PX,
          maxWidth: FAN_MAX_WIDTH_PX,
        }}
      >
      {LAYERS.map((layer, i) => {
        const initial = {
          rotate: FAN_INITIAL.rotate[i],
          x: `${FAN_INITIAL.xPercent[i]}%`,
          y: FAN_INITIAL.yPx[i],
          scale: FAN_INITIAL.scale[i],
        };
        const animate = {
          rotate: FAN_FINAL.rotate[i],
          x: `${FAN_FINAL.xPercent[i]}%`,
          y: FAN_FINAL.yPx[i],
          scale: FAN_FINAL.scale[i],
        };

        return (
          <div
            key={layer.key}
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: 0,
              zIndex: layer.z,
              width: `${CARD_WIDTH_PERCENT}%`,
              height: CARD_HEIGHT_PX,
            }}
          >
            <motion.div
              className="h-full w-full"
              style={{
                backgroundColor: layer.color,
                borderRadius: CARD_RADIUS,
                transformOrigin: "50% 100%",
                boxShadow:
                  layer.key === "front"
                    ? "0 20px 50px -20px rgba(0,0,0,0.16)"
                    : "0 10px 30px -15px rgba(0,0,0,0.08)",
              }}
              initial={reduceMotion ? animate : initial}
              animate={animate}
              transition={{
                duration,
                delay: i * stagger,
                ease: FAN_EASE,
              }}
            />
          </div>
        );
      })}
      </div>
    </div>
  );
}
