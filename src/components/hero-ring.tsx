"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
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

/**
 * Places the tiles on a squircle that hugs the viewport edges, so every tile stays fully on screen,
 * sizes the 3D title to fit inside, and drops the tiles that would overlap the title or the buttons.
 * Works the same on phones, tablets, laptops and wide screens, in portrait and landscape.
 */
function heroLayout(w: number, h: number, small: boolean) {
  const tw = Math.round(Math.min(118, Math.max(40, Math.min(w, h) * 0.11)));
  const th = Math.round(tw * 1.27);
  const edge = 14; // keeps rotated tiles and the mouse parallax inside the screen
  const RX = w / 2 - tw / 2 - edge;
  const RY = h / 2 - th / 2 - edge;

  // Title + buttons block, centred. Buttons stack on phones.
  const gap = Math.round(Math.min(40, Math.max(18, h * 0.035)));
  const ctaH = small ? 108 : 52;
  const ratio = HERO_3D.height / HERO_3D.width;
  const maxByHeight = (2 * (RY - th / 2) - gap - ctaH - 16) / ratio;
  const titleW = Math.round(Math.max(200, Math.min(640, w - 40, w * 0.62 + (small ? w * 0.3 : 0), maxByHeight)));
  const blockW = Math.max(titleW, small ? Math.min(w - 40, 320) : 600);
  const blockH = titleW * ratio + gap + ctaH;

  // Tiles are spread at equal distances along a rounded rectangle that follows the screen edges.
  const r = Math.min(RX, RY) * 0.45;
  const sx = RX - r;
  const sy = RY - r;
  const segs = [2 * sx, (Math.PI / 2) * r, 2 * sy, (Math.PI / 2) * r, 2 * sx, (Math.PI / 2) * r, 2 * sy, (Math.PI / 2) * r];
  const total = segs.reduce((a, b) => a + b, 0);
  const pointAt = (d: number) => {
    // starts at the top centre, clockwise
    let t = (d + sx) % total;
    const corner = (cx: number, cy: number, a0: number, u: number) => ({
      tx: cx + r * Math.cos(a0 + (u / r)),
      ty: cy + r * Math.sin(a0 + (u / r)),
    });
    if (t < segs[0]) return { tx: -sx + t, ty: -RY };
    t -= segs[0];
    if (t < segs[1]) return corner(sx, -sy, -Math.PI / 2, t);
    t -= segs[1];
    if (t < segs[2]) return { tx: RX, ty: -sy + t };
    t -= segs[2];
    if (t < segs[3]) return corner(sx, sy, 0, t);
    t -= segs[3];
    if (t < segs[4]) return { tx: sx - t, ty: RY };
    t -= segs[4];
    if (t < segs[5]) return corner(-sx, sy, Math.PI / 2, t);
    t -= segs[5];
    if (t < segs[6]) return { tx: -RX, ty: sy - t };
    t -= segs[6];
    return corner(-sx, -sy, Math.PI, t);
  };
  const clear = 12;
  const tilesPos = Array.from({ length: COUNT }, (_, i) => {
    const { tx, ty } = pointAt((i / COUNT) * total);
    const overlaps = Math.abs(tx) < blockW / 2 + tw / 2 + clear && Math.abs(ty) < blockH / 2 + th / 2 + clear;
    return overlaps ? null : { tx, ty };
  });

  return { tw, th, titleW, gap, tiles: tilesPos };
}

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
  tx,
  ty,
  tw,
  th,
  small,
}: {
  index: number;
  progress: MotionValue<number>;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  tx: number;
  ty: number;
  tw: number;
  th: number;
  small: boolean;
}) {
  const tile = tiles[index];
  const rot = ((index % 5) - 2) * 4;
  const start = (index % 6) * 0.045;
  const depth = 0.4 + ((index * 7) % 5) * 0.15;

  const k = useTransform(progress, [start, start + 0.55], [0, 1], { clamp: true });
  const x = useTransform([k, mx] as MotionValue<number>[], ([v, m]: number[]) => tx * v + m * 6 * depth * v);
  const y = useTransform(
    [k, my] as MotionValue<number>[],
    ([v, m]: number[]) => ty * v + (1 - v) * 90 + m * 5 * depth * v,
  );
  const rotate = useTransform(k, (v) => rot * v);
  const scale = useTransform(k, (v) => 0.35 + 0.65 * v);

  return (
    <motion.div
      className={`ring-tile${small ? " is-small" : ""}`}
      style={{ x, y, rotate, scale, opacity: k, width: tw, height: th, marginLeft: -tw / 2, marginTop: -th / 2, fontSize: Math.round(tw * 0.24) }}
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

  const layout = useMemo(() => heroLayout(w, h, small), [w, h, small]);

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
            layout.tiles[i] ? (
              <Tile key={i} index={i} progress={progress} mx={mx} my={my} {...layout.tiles[i]} tw={layout.tw} th={layout.th} small={small} />
            ) : null
          ))}
        </div>

        <div className="hero-center">
          {/* The real title stays for search engines and screen readers; the 3D render is its visual. */}
          <h1 className="sr-only">Construisons l&apos;infini.</h1>
          <motion.div
            className="hero-3d"
            style={{ width: layout.titleW, marginTop: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-3d-float">
              <Image
                src="/images/titre-3d-v2.webp"
                alt=""
                width={HERO_3D.width}
                height={HERO_3D.height}
                priority
                sizes="(max-width: 760px) 92vw, 630px"
              />
            </div>
          </motion.div>

          <motion.div
            className="hero-ctas"
            style={{ marginTop: layout.gap }}
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
