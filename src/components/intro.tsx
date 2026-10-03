"use client";

import { useEffect } from "react";
import { useAnimate } from "motion/react";
import { INFINITY_PATH } from "./infinity";

/** Runs before paint: flags the first visit of the session so the overlay is shown without a flash. */
export const introScript = `try{if(!sessionStorage.getItem('intro-seen')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.intro='1'}}catch(e){}`;

export function Intro() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== "1") return;
    let cancelled = false;
    (async () => {
      await animate("path", { pathLength: [0, 1] }, { duration: 1.3, ease: [0.65, 0, 0.35, 1] });
      if (cancelled) return;
      await animate(scope.current, { opacity: 0 }, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
      try {
        sessionStorage.setItem("intro-seen", "1");
      } catch {}
      delete root.dataset.intro;
    })();
    return () => {
      cancelled = true;
    };
  }, [animate, scope]);

  return (
    <div ref={scope} className="intro" aria-hidden="true">
      <svg viewBox="80 10 600 280" fill="none" width="220">
        <path d={INFINITY_PATH} stroke="#6D45F0" strokeWidth="6" strokeLinecap="round" pathLength={1} strokeDasharray="0 1" />
      </svg>
    </div>
  );
}
