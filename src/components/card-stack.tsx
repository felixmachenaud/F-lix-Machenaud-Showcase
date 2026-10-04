"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type CardStackItem = {
  id: string | number;
  title: string;
  imageSrc: string;
  href?: string;
};

type CardStackProps<T extends CardStackItem> = {
  items: T[];
  /** Controlled active index. */
  active: number;
  onChange: (index: number) => void;
  /** How many cards are visible around the active one (odd recommended). */
  maxVisible?: number;
  /** Total fan angle in degrees. */
  spreadDeg?: number;
  /** How much cards overlap each other (0..0.8). */
  overlap?: number;
};

function signedOffset(i: number, active: number, len: number) {
  const raw = i - active;
  if (len <= 2) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

/** Hook returning a card size that fits the viewport (the original component used fixed pixels). */
function useCardSize() {
  const [size, setSize] = React.useState({ w: 760, h: 464, ready: false });
  React.useEffect(() => {
    const update = () => {
      const w = Math.min(window.innerWidth >= 1024 ? 760 : 620, window.innerWidth - 40);
      setSize({ w, h: Math.round(w * 0.61), ready: true });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

export function CardStack<T extends CardStackItem>({
  items,
  active,
  onChange,
  maxVisible = 5,
  spreadDeg = 24,
  overlap = 0.46,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const { w, h, ready } = useCardSize();
  const len = items.length;
  const maxOffset = Math.floor(maxVisible / 2);
  const spacing = Math.round(w * (1 - overlap));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const go = (k: number) => onChange(((k % len) + len) % len);

  return (
    <div
      className="cs-stage"
      style={{ height: "calc(min(var(--cs-max), 100vw - 40px) * 0.61 + 130px)", opacity: ready ? 1 : 0 }}
      tabIndex={0}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Projets"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(active - 1);
        if (e.key === "ArrowRight") go(active + 1);
      }}
    >
      <div className="cs-glow" aria-hidden="true" />
      <div className="cs-fan" style={{ perspective: 1100 }}>
        <AnimatePresence initial={false}>
          {items.map((item, i) => {
            const off = signedOffset(i, active, len);
            const abs = Math.abs(off);
            if (abs > maxOffset) return null;
            const isActive = off === 0;

            return (
              <motion.div
                key={item.id}
                className={`cs-card${isActive ? " is-active" : ""}`}
                style={{ width: w, height: h, marginLeft: -w / 2, zIndex: 100 - abs }}
                initial={reduceMotion ? false : { opacity: 0, y: 60, x: off * spacing, rotateZ: off * stepDeg }}
                animate={{
                  opacity: 1,
                  x: off * spacing,
                  y: isActive ? -20 : abs * 14,
                  rotateZ: off * stepDeg,
                  rotateX: isActive ? 0 : 8,
                  scale: isActive ? 1.03 : 0.9,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                onClick={() => !isActive && go(i)}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  const threshold = Math.min(140, w * 0.22);
                  if (info.offset.x > threshold || info.velocity.x > 650) go(active - 1);
                  else if (info.offset.x < -threshold || info.velocity.x < -650) go(active + 1);
                }}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 800px) 92vw, 760px"
                  draggable={false}
                  priority={isActive}
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                {isActive && item.href && (
                  <a className="cs-visit" href={item.href} target="_blank" rel="noreferrer" onPointerDown={(e) => e.stopPropagation()}>
                    Visiter le site <span aria-hidden="true">↗</span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
