"use client";

import { usePathname } from "next/navigation";
import {
  pricingLayoutBackgroundStyle,
  productionsLayoutBackgroundStyle,
} from "@/lib/pageBackgrounds";

/**
 * Fond plein viewport, derrière tout le contenu : même source que les pages tarifs / productions.
 * Le header fixe est transparent au-dessus — pas de « bande » propre au header.
 */
export function PageBackground() {
  const pathname = usePathname();

  const style =
    pathname === "/pricing"
      ? pricingLayoutBackgroundStyle
      : pathname === "/productions"
        ? productionsLayoutBackgroundStyle
        : { backgroundColor: "#ffffff" };

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 min-h-[100dvh]"
      style={style}
    />
  );
}
