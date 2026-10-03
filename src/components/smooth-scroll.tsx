"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenis: Lenis | null = null;

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
    let id = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        requestAnimationFrame(() =>
          lenis ? lenis.scrollTo(el as HTMLElement, { offset: -90 }) : el.scrollIntoView(),
        );
        return;
      }
    }
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
