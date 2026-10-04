"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { allProjects } from "@/lib/data";
import { HERO_3D } from "@/lib/hero-3d";

type Glyph = { text: string; bg: string; serif?: boolean };

const glyphs: Glyph[] = [
  { text: "</>", bg: "#6D45F0" },
  { text: "UI", bg: "#8B6BF5" },
  { text: "∞", bg: "#16121F", serif: true },
  { text: "www", bg: "#A88BFF" },
  { text: "Aa", bg: "#6D45F0", serif: true },
  { text: "⌘", bg: "#8B6BF5" },
  { text: "{ }", bg: "#16121F" },
  { text: "↗", bg: "#A88BFF" },
];

const COUNT = 22;
const tiles = Array.from({ length: COUNT }, (_, i) =>
  i % 2 === 0
    ? { kind: "shot" as const, src: allProjects[(i / 2) % allProjects.length].image }
    : { kind: "glyph" as const, glyph: glyphs[((i - 1) / 2) % glyphs.length] },
);

function useStageSize() {
  const [size, setSize] = useState({ w: 1440, h: 900 });
  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

function Tile({
  index,
  progress,
  mx,
  my,
  rx,
  ry,
  small,
}: {
  index: number;
  progress: MotionValue<number>;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  rx: number;
  ry: number;
  small: boolean;
}) {
  const tile = tiles[index];
  const angle = (index / COUNT) * Math.PI * 2 - Math.PI / 2;
  const tx = Math.cos(angle) * rx;
  const ty = Math.sin(angle) * ry;
  const rot = Math.cos(angle) * -28 + ((index % 3) - 1) * 6;
  const start = (index % 6) * 0.045;
  const depth = 0.4 + ((index * 7) % 5) * 0.15;

  const k = useTransform(progress, [start, start + 0.55], [0, 1], { clamp: true });
  const x = useTransform([k, mx] as MotionValue<number>[], ([v, m]: number[]) => tx * v + m * 18 * depth * v);
  const y = useTransform(
    [k, my] as MotionValue<number>[],
    ([v, m]: number[]) => ty * v + (1 - v) * 90 + m * 14 * depth * v,
  );
  const rotate = useTransform(k, (v) => rot * v);
  const scale = useTransform(k, (v) => 0.35 + 0.65 * v);

  return (
    <motion.div
      className={`ring-tile${small ? " is-small" : ""}`}
      style={{ x, y, rotate, scale, opacity: k }}
      whileHover={{ scale: 1.08, zIndex: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {tile.kind === "shot" ? (
        <Image src={tile.src} alt="" fill sizes="140px" style={{ objectFit: "cover", objectPosition: "top" }} />
      ) : (
        <span className={tile.glyph.serif ? "serif" : undefined} style={{ background: tile.glyph.bg }}>
          {tile.glyph.text}
        </span>
      )}
    </motion.div>
  );
}

export function HeroRing() {
  const stage = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { w, h } = useStageSize();
  const small = w < 760;

  const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
  const forced = useMotionValue(1);
  const progress = reduce ? forced : scrollYProgress;

  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 60, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 60, damping: 18 });

  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const tiltY = useTransform(mx, (v) => v * 7);
  const tiltX = useTransform(my, (v) => v * -5);

  // On phones the ellipse frames the screen edges so tiles never cover the title or the buttons.
  const rx = small ? w * 0.6 : Math.min(w * 0.43, 640);
  const ry = small ? h * 0.44 : Math.min(h * 0.4, 360);

  return (
    <section
      ref={stage}
      className="hero-stage"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        mxRaw.set((e.clientX / window.innerWidth - 0.5) * 2);
        myRaw.set((e.clientY / window.innerHeight - 0.5) * 2);
      }}
    >
      <div className="hero-sticky">
        <div className="hero-ring" aria-hidden="true">
          {tiles.map((_, i) => (
            <Tile key={i} index={i} progress={progress} mx={mx} my={my} rx={rx} ry={ry} small={small} />
          ))}
        </div>

        <div className="hero-center">
          {/* The real title stays for search engines and screen readers; the 3D render is its visual. */}
          <h1 className="sr-only">Construisons l&apos;infini.</h1>
          <motion.div
            className="hero-3d"
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-3d-float">
              <Image
                src="/images/construisons-linfini-3d.webp"
                alt=""
                width={HERO_3D.width}
                height={HERO_3D.height}
                priority
                sizes="(max-width: 760px) 92vw, 630px"
              />
              <svg className="hero-3d-runner" viewBox={`0 0 ${HERO_3D.width} ${HERO_3D.height}`} aria-hidden="true">
                <path id="hero-tube" d={HERO_3D.tubePath} fill="none" />
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}>
                  <circle r="36" fill="#6D45F0" fillOpacity=".18" />
                  <circle r="13" fill="#6D45F0" />
                  <circle r="5" fill="#fff" fillOpacity=".85" />
                  <animateMotion dur="9s" repeatCount="indefinite">
                    <mpath href="#hero-tube" />
                  </animateMotion>
                </motion.g>
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/pourquoi-refaire-site-web" className="btn btn-primary">
              Pourquoi (Re)faire votre site web
            </Link>
            <Link href="/productions/vitrines-web" className="btn btn-ghost">
              Découvrir mes réalisations <span className="arrow">→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div className="scroll-hint" style={{ opacity: hintOpacity }} aria-hidden="true">
          <span>Défiler</span>
          <i />
        </motion.div>
      </div>
    </section>
  );
}
