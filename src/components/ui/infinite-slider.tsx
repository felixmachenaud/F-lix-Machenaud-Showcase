"use client";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

/**
 * Bandeau en boucle. Animation CSS (plus stable que mesurer le DOM),
 * pause au survol et arrêt si l’utilisateur demande moins de mouvement.
 */
export function InfiniteSlider({
  children,
  gap = 16,
  duration = 32,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const isVertical = direction === "vertical";

  return (
    <div className={cn("group/slider overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max motion-safe:animate-logo-marquee motion-reduce:animate-none",
          isVertical && "flex-col",
        )}
        style={
          {
            gap: `${gap}px`,
            animationDirection: reverse ? "reverse" : "normal",
            ["--logo-marquee-duration" as string]: `${duration}s`,
            ["--logo-marquee-hover" as string]: `${durationOnHover ?? duration * 2}s`,
          } as React.CSSProperties
        }
      >
        <div
          className={cn("flex shrink-0", isVertical && "flex-col")}
          style={{ gap: `${gap}px` }}
        >
          {children}
        </div>
        <div
          className={cn("flex shrink-0", isVertical && "flex-col")}
          style={{ gap: `${gap}px` }}
          aria-hidden
        >
          {children}
        </div>
      </div>
    </div>
  );
}
