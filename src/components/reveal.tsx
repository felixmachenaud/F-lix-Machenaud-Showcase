"use client";

import { Fragment, useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Splits "text with [[accent]] words" into tokens; accent words render in serif italic. */
function tokenize(text: string) {
  const out: { word: string; accent: boolean }[] = [];
  text.split(/(\[\[.*?\]\])/).forEach((part) => {
    const accent = part.startsWith("[[");
    const clean = accent ? part.slice(2, -2) : part;
    clean
      .split(" ")
      .filter(Boolean)
      .forEach((word) => out.push({ word, accent }));
  });
  return out;
}

export function RevealTitle({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  immediate = false,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const tokens = tokenize(text);
  // Observe the heading itself: each word starts clipped by its mask, so it can never "enter" the viewport alone.
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "-60px" });
  const shown = immediate || seen;

  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/\[\[|\]\]/g, "")}>
      {tokens.map((t, i) => (
        <Fragment key={i}>
          <span className="reveal-word" aria-hidden="true">
            <motion.span
              style={{ display: "inline-block" }}
              className={t.accent ? "serif" : undefined}
              initial={{ y: "110%" }}
              animate={shown ? { y: "0%" } : undefined}
              transition={{ duration: 0.9, ease, delay: delay + i * 0.045 }}
            >
              {t.word}
            </motion.span>
          </span>
          {i < tokens.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "p" | "section" | "article" | "li";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </M>
  );
}

/** Renders a string where [[...]] parts are emphasised with the given element. */
export function Accent({ text, mode = "serif" }: { text: string; mode?: "serif" | "strong" }) {
  return (
    <>
      {text.split(/(\[\[.*?\]\])/).map((part, i) =>
        part.startsWith("[[") ? (
          mode === "serif" ? (
            <span key={i} className="serif accent">
              {part.slice(2, -2)}
            </span>
          ) : (
            <strong key={i}>{part.slice(2, -2)}</strong>
          )
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
