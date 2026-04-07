import type { CSSProperties } from "react";

/**
 * Fonds de page partagés (tarifs, productions, header sur /productions).
 */

/** Même base que le layout tarifs — termine en #f8f6fc (zone footer homogène). */
export const pricingLayoutBackgroundStyle: CSSProperties = {
  backgroundColor: "#f8f6fc",
  backgroundImage: `
    radial-gradient(ellipse 110% 75% at 50% -8%, rgba(124,58,237,0.30) 0%, rgba(124,58,237,0.10) 42%, rgba(124,58,237,0.03) 58%, transparent 72%),
    linear-gradient(180deg, #ebe4f7 0%, #f3effb 28%, #f5f2fb 55%, #f8f6fc 78%, #f8f6fc 100%)
  `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

/**
 * Productions : dégradé violet puis fusion vers le blanc pour enchaîner avec un footer blanc.
 */
export const productionsLayoutBackgroundStyle: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: `
    radial-gradient(ellipse 110% 75% at 50% -8%, rgba(124,58,237,0.28) 0%, rgba(124,58,237,0.09) 42%, rgba(124,58,237,0.03) 58%, transparent 70%),
    linear-gradient(180deg, #ebe4f7 0%, #f3effb 32%, #f6f2fc 62%, #faf8ff 82%, #ffffff 100%)
  `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

