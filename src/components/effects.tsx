"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { INFINITY_PATH } from "./infinity";

/** Thin gradient bar at the top of the viewport that follows reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/** Soft colour fields drifting behind a section. Pure gradients (no blur filter) so it stays cheap. */
export function Aurora({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className={`aurora aurora-${variant}`} aria-hidden="true">
      <span className="a1" />
      <span className="a2" />
      <span className="a3" />
    </div>
  );
}

/**
 * One listener for the whole page: any `.spot` element gets --mx/--my set to the pointer
 * position, which its CSS uses to paint a light that follows the cursor.
 */
export function SpotlightTracker() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let magnet: HTMLElement | null = null;
    const release = () => {
      if (magnet) magnet.style.translate = "";
      magnet = null;
    };
    const onMove = (e: PointerEvent) => {
      const el = e.target as HTMLElement | null;
      const target = el?.closest<HTMLElement>(".spot");
      if (target) {
        const r = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${e.clientX - r.left}px`);
        target.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      // Magnetic buttons: the button leans a few pixels toward the cursor.
      if (reduce || e.pointerType !== "mouse") return;
      const btn = el?.closest<HTMLElement>(".btn-primary, .btn-dark, .round-btn");
      if (btn !== magnet) release();
      if (!btn) return;
      magnet = btn;
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
      btn.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", release);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", release);
    };
  }, []);
  return null;
}

/** Counts up to a number the first time it scrolls into view, keeping any prefix/suffix ("+70 %"). */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    const match = value.match(/^([^\d]*)([\d\s]+)(.*)$/);
    if (!match || !inView || !ref.current || reduce) return;
    const target = Number(match[2].replace(/\s/g, ""));
    const node = ref.current;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        node.textContent = `${match[1]}${Math.round(v).toLocaleString("fr-FR")}${match[3]}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

/** A static band of words (kept calm: one animation per page).
 */
export function VelocityMarquee({ items }: { items: string[]; baseVelocity?: number }) {
  const row = items.flatMap((t, i) => [
    <span key={`t${i}`} className={i % 2 ? "serif" : undefined}>
      {t}
    </span>,
    <i key={`s${i}`} aria-hidden="true">
      ∞
    </i>,
  ]);

  return (
    <div className="marquee" role="marquee" aria-label={items.join(", ")}>
      <div className="marquee-track" style={{ transform: "translateX(-25%)" }} aria-hidden="true">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}

/** Card that tilts in 3D toward the pointer. */
export function TiltCard({ children, className, max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  void max;
  return <div className={className}>{children}</div>;
}

/** Paragraph whose words light up one after another as it scrolls through the viewport. */
export function ScrollHighlight({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}

/** Image that slides slower than the page (parallax) and is revealed by an expanding mask. */
export function ParallaxReveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

/** Large infinity line that draws itself when it scrolls into view. */
export function InfinityDraw({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="80 10 600 280" fill="none" aria-hidden="true">
      <path d={INFINITY_PATH} stroke="#6D45F0" strokeOpacity="0.1" strokeWidth="1.5" />
      <motion.path
        d={INFINITY_PATH}
        stroke="url(#inf-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 1 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 2.6, ease: [0.65, 0, 0.35, 1] }}
      />
      <defs>
        <linearGradient id="inf-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#5465FF" />
          <stop offset="0.5" stopColor="#6D45F0" />
          <stop offset="1" stopColor="#D9508F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
