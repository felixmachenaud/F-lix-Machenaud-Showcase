"use client";

import { Fragment, type ElementType, type ReactNode } from "react";

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
  void delay;
  void immediate;
  return (
    <Tag className={className}>
      <Accent text={text} />
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
  void delay;
  void y;
  const M = as;
  return <M className={className}>{children}</M>;
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
