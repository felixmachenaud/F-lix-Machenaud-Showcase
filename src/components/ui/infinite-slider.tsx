"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  className?: string;
  /** Pixels par seconde. */
  speed?: number;
};

/**
 * Deux copies collées, défilement au pixel : la fin de la file rejoint
 * le début sans trou ni saut (pas de translateX(-50%)).
 */
export function InfiniteSlider({
  children,
  gap = 16,
  className,
  speed = 52,
}: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const first = firstRef.current;
    if (!track || !first) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      track.style.transform = "translate3d(0,0,0)";
      return;
    }

    let x = 0;
    let raf = 0;
    let last = performance.now();
    let running = true;

    const loopWidth = () => first.getBoundingClientRect().width;

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const width = loopWidth();
      if (width > 1) {
        x -= speed * dt;
        while (x <= -width) x += width;
        track.style.transform = `translate3d(${x}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const images = [...first.querySelectorAll("img")];
    images.forEach((img) => {
      if (!img.complete) img.decode().catch(() => undefined);
    });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  const setStyle = { gap: `${gap}px`, paddingRight: `${gap}px` };

  return (
    <div className={cn("logo-marquee-host", className)}>
      <div ref={trackRef} className="logo-marquee-track">
        <div
          ref={firstRef}
          className="flex shrink-0 items-center"
          style={setStyle}
        >
          {children}
        </div>
        <div
          className="flex shrink-0 items-center"
          style={setStyle}
          aria-hidden
        >
          {children}
        </div>
      </div>
    </div>
  );
}
