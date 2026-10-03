"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { testimonials } from "@/lib/data";
import { Accent } from "./reveal";

/** One tint per testimonial, all from the brand's violet family. */
const tones = [
  { c: "#6D45F0", t: "#EEE8FF" },
  { c: "#D9508F", t: "#FDEAF3" },
  { c: "#4F5DF5", t: "#EAEDFF" },
  { c: "#A64BEA", t: "#F5E9FE" },
];

const AUTOPLAY_MS = 7000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-120px" });
  const reduce = useReducedMotion();
  const n = testimonials.length;
  const go = (k: number) => setActive((k + n) % n);
  const playing = inView && !hover && !reduce;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [playing, active, n]);

  return (
    <div
      ref={ref}
      className="tst"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        if (e.key === "ArrowRight") go(active + 1);
      }}
    >
      <div className="tst-stage" aria-roledescription="carrousel" aria-label="Avis clients">
        {testimonials.map((t, i) => {
          let o = i - active;
          if (o > n / 2) o -= n;
          if (o < -n / 2 + 1) o += n;
          const ab = Math.abs(o);
          const tone = tones[i % tones.length];
          return (
            <motion.figure
              key={t.name}
              className={`tst-card${o === 0 ? " is-active" : ""}`}
              style={{ ["--c" as string]: tone.c, ["--t" as string]: tone.t }}
              aria-hidden={o !== 0}
              onClick={() => o !== 0 && go(i)}
              initial={false}
              animate={{
                x: `${o * 58}%`,
                y: ab ? 56 : 0,
                scale: ab ? 0.84 : 1,
                rotate: o * 2.5,
                opacity: ab > 1 ? 0 : 1,
                filter: ab ? "blur(3px) saturate(1.1)" : "blur(0px) saturate(1)",
                zIndex: 10 - ab,
              }}
              transition={{ type: "spring", stiffness: 170, damping: 26 }}
              drag={o === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) go(active + 1);
                else if (info.offset.x > 70) go(active - 1);
              }}
            >
              <div className="tst-avatar" aria-hidden="true">
                {t.name[0]}
              </div>
              <blockquote>
                « <Accent text={t.quote} mode="strong" /> »
              </blockquote>
              <figcaption>
                <b>{t.name}</b>, {t.role}
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

      <div className="tst-nav">
        <button className="round-btn" onClick={() => go(active - 1)} aria-label="Avis précédent">
          ←
        </button>
        <div className="tst-dots" role="tablist">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={i === active}
              aria-label={`Avis de ${t.name}`}
              className={i === active ? "on" : undefined}
              style={{ ["--c" as string]: tones[i % tones.length].c }}
              onClick={() => go(i)}
            >
              {i === active && (
                <motion.i
                  key={`${active}-${playing}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: playing ? 1 : 0.12 }}
                  transition={{ duration: playing ? AUTOPLAY_MS / 1000 : 0.3, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
        <button className="round-btn" onClick={() => go(active + 1)} aria-label="Avis suivant">
          →
        </button>
      </div>
    </div>
  );
}
