"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle";

const IMG_WIDTH = 84;
const IMG_HEIGHT = 119;
const LINE_SPACING = 98;
const SCROLL_RANGE_PX = 1800;

type HeroCard =
  | { kind: "image"; src: string }
  | { kind: "emoji"; emoji: string; bg: string }
  | { kind: "sign"; label: string; bg: string; color: string };

/** Palette vive du site : éventail hero, mots animés, avis. */
const BRAND_LIVE = {
  violet: "#7C3AED",
  yellow: "#FFD600",
  pink: "#FF4FB1",
  lilac: "#A855F7",
  green: "#22c55e",
  orange: "#f97316",
  blue: "#3b82f6",
  fuchsia: "#C026D3",
  rose: "#DB2777",
} as const;

/** Photos réelles + smileys / signes du métier (web, design, lancement). */
const HERO_CARDS: HeroCard[] = [
  { kind: "image", src: "/images/komplices.jpeg" },
  { kind: "emoji", emoji: "💻", bg: BRAND_LIVE.violet },
  { kind: "image", src: "/images/presentation1.jpeg" },
  { kind: "sign", label: "</>", bg: BRAND_LIVE.yellow, color: "#111111" },
  { kind: "image", src: "/images/presentation2.jpeg" },
  { kind: "emoji", emoji: "🌐", bg: BRAND_LIVE.pink },
  { kind: "image", src: "/images/presentation3.jpeg" },
  { kind: "emoji", emoji: "✨", bg: BRAND_LIVE.lilac },
  { kind: "image", src: "/images/presentation4.jpeg" },
  { kind: "sign", label: "www", bg: BRAND_LIVE.blue, color: "#FFFFFF" },
  { kind: "image", src: "/images/carcassonne.jpeg" },
  { kind: "emoji", emoji: "🎨", bg: BRAND_LIVE.orange },
  { kind: "image", src: "/images/presentation-walt.png" },
  { kind: "emoji", emoji: "📱", bg: BRAND_LIVE.fuchsia },
  { kind: "image", src: "/images/walt_picture.jpeg" },
  { kind: "emoji", emoji: "🚀", bg: BRAND_LIVE.yellow },
  { kind: "emoji", emoji: "💡", bg: BRAND_LIVE.pink },
  { kind: "sign", label: "UI", bg: BRAND_LIVE.violet, color: "#FFFFFF" },
  { kind: "emoji", emoji: "⚡", bg: BRAND_LIVE.green },
  { kind: "emoji", emoji: "🖱️", bg: BRAND_LIVE.rose },
];

const TOTAL_IMAGES = HERO_CARDS.length;

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

function unitNoise(index: number, salt: number) {
  const n = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

type CardTarget = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
};

function FlipCard({
  card,
  target,
}: {
  card: HeroCard;
  target: CardTarget;
}) {
  return (
    <motion.div
      aria-hidden
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        marginLeft: -IMG_WIDTH / 2,
        marginTop: -IMG_HEIGHT / 2,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="pointer-events-auto cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        <div
          className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-xl shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            backgroundColor:
              card.kind === "image" ? "#e5e5e5" : card.bg,
          }}
        >
          {card.kind === "image" ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.src}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
            </>
          ) : card.kind === "emoji" ? (
            <span className="select-none text-[2.75rem] leading-none">
              {card.emoji}
            </span>
          ) : (
            <span
              className="select-none font-mono text-2xl font-bold tracking-tight"
              style={{ color: card.color }}
            >
              {card.label}
            </span>
          )}
        </div>
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-[#7C3AED] shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        />
      </motion.div>
    </motion.div>
  );
}

type ScrollMorphHeroProps = {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
};

export function ScrollMorphHero({
  title,
  titleClassName,
  children,
}: ScrollMorphHeroProps) {
  const reduceMotion = useReducedMotion();
  const [introPhase, setIntroPhase] = useState<AnimationPhase>(
    reduceMotion ? "circle" : "scatter",
  );
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const applySize = (width: number, height: number) => {
      setContainerSize({ width, height });
    };

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        applySize(entry.contentRect.width, entry.contentRect.height);
      }
    });
    observer.observe(node);
    applySize(node.offsetWidth, node.offsetHeight);

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const morphProgress = useTransform(
    scrollYProgress,
    [0, 0.38],
    reduceMotion ? [1, 1] : [0, 1],
  );
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  const scrollRotate = useTransform(
    scrollYProgress,
    [0.38, 1],
    reduceMotion ? [0, 0] : [0, 360],
  );
  const smoothScrollRotate = useSpring(scrollRotate, {
    stiffness: 40,
    damping: 20,
  });

  const liveMouseX = useSpring(0, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || reduceMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      liveMouseX.set(normalizedX * 100);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [liveMouseX, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      setIntroPhase("circle");
      setMorphValue(1);
      return;
    }
    const isNarrow = window.matchMedia("(max-width: 767px)").matches;
    if (isNarrow) {
      const timer = window.setTimeout(() => setIntroPhase("circle"), 400);
      return () => window.clearTimeout(timer);
    }
    const timer1 = window.setTimeout(() => setIntroPhase("line"), 500);
    const timer2 = window.setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
    };
  }, [reduceMotion]);

  const scatterPositions = useMemo<CardTarget[]>(
    () =>
      HERO_CARDS.map((_, index) => ({
        x: (unitNoise(index, 1) - 0.5) * 1500,
        y: (unitNoise(index, 2) - 0.5) * 1000,
        rotation: (unitNoise(index, 3) - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    [],
  );

  const [morphValue, setMorphValue] = useState(reduceMotion ? 1 : 0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useMotionValueEvent(smoothMorph, "change", setMorphValue);
  useMotionValueEvent(smoothScrollRotate, "change", setRotateValue);
  useMotionValueEvent(liveMouseX, "change", setParallaxValue);

  const overlayTop = useTransform(smoothMorph, [0, 1], ["50%", "46%"]);

  return (
    <section
      ref={trackRef}
      className="relative w-full"
      style={{
        height: reduceMotion
          ? "calc(100dvh - 7rem)"
          : `calc(100dvh - 7rem + ${SCROLL_RANGE_PX}px)`,
      }}
      aria-label="Introduction"
    >
      <div
        ref={containerRef}
        className="sticky top-28 h-[calc(100dvh-7rem)] w-full overflow-hidden bg-white sm:top-32 sm:h-[calc(100dvh-8rem)]"
      >
        <div className="flex h-full w-full flex-col items-center justify-center [perspective:1000px]">
          <div className="hero-cloud" aria-hidden />
          <motion.div
            style={{ top: overlayTop }}
            className="pointer-events-none absolute z-20 flex w-full max-w-3xl -translate-y-1/2 flex-col items-center px-6 text-center"
          >
            <h1
              className={
                titleClassName ??
                "text-balance text-3xl font-light tracking-tight text-gray-900 sm:text-4xl"
              }
            >
              {title}
            </h1>
            <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 pointer-events-auto sm:mt-10 sm:flex-row sm:gap-4">
              {children}
            </div>
          </motion.div>

          <div className="pointer-events-none relative flex h-full w-full items-center justify-center">
            {HERO_CARDS.map((card, index) => {
              let target: CardTarget = {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 1,
              };

              if (introPhase === "scatter") {
                target = scatterPositions[index];
              } else if (introPhase === "line") {
                const lineTotalWidth = TOTAL_IMAGES * LINE_SPACING;
                const lineX = index * LINE_SPACING - lineTotalWidth / 2;
                target = {
                  x: lineX,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 1,
                };
              } else {
                const isMobile = containerSize.width < 768;
                const radiusX = Math.min(
                  containerSize.width * (isMobile ? 0.78 : 0.4),
                  isMobile ? 310 : 620,
                );
                const radiusY = Math.min(
                  containerSize.height * (isMobile ? 0.46 : 0.46),
                  isMobile ? 340 : 420,
                );
                const circleAngle = (index / TOTAL_IMAGES) * 360;
                const circleRad = (circleAngle * Math.PI) / 180;
                const circlePos = {
                  x: Math.cos(circleRad) * radiusX,
                  y: Math.sin(circleRad) * radiusY,
                  rotation: circleAngle + 90,
                };

                const baseRadius = Math.min(
                  containerSize.width,
                  containerSize.height * 1.5,
                );
                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                const arcCenterY = arcApexY + arcRadius;
                const spreadAngle = isMobile ? 100 : 130;
                const startAngle = -90 - spreadAngle / 2;
                const step = spreadAngle / (TOTAL_IMAGES - 1);
                const scrollProgress = Math.min(
                  Math.max(rotateValue / 360, 0),
                  1,
                );
                const maxRotation = spreadAngle * 0.8;
                const boundedRotation = -scrollProgress * maxRotation;
                const currentArcAngle =
                  startAngle + index * step + boundedRotation;
                const arcRad = (currentArcAngle * Math.PI) / 180;
                const arcPos = {
                  x: Math.cos(arcRad) * arcRadius + parallaxValue,
                  y: Math.sin(arcRad) * arcRadius + arcCenterY,
                  rotation: currentArcAngle + 90,
                  scale: isMobile ? 1.4 : 1.8,
                };

                target = {
                  x: lerp(circlePos.x, arcPos.x, morphValue),
                  y: lerp(circlePos.y, arcPos.y, morphValue),
                  rotation: lerp(
                    circlePos.rotation,
                    arcPos.rotation,
                    morphValue,
                  ),
                  scale: lerp(isMobile ? 0.68 : 1, arcPos.scale, morphValue),
                  opacity: 1,
                };
              }

              return (
                <FlipCard
                  key={`${card.kind}-${index}`}
                  card={card}
                  target={target}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
