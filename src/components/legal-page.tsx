"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { LegalSection } from "@/lib/legal";
import { FadeIn, RevealTitle } from "./reveal";
import { Aurora } from "./effects";

export function LegalPage({
  title,
  intro,
  updated,
  sections,
  mode = "accordion",
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  mode?: "accordion" | "flow";
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="page-top legal">
      <Aurora />
      <div className="wrap">
        <RevealTitle as="h1" className="h-display" text={title} immediate />
        <FadeIn as="p" className="lead" delay={0.3}>
          {intro}
        </FadeIn>
        <FadeIn delay={0.4} className="legal-body">
          <p className="updated">Dernière mise à jour : {updated}.</p>
          {mode === "flow" ? (
            <div className="prose">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2>{s.title}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            sections.map((s, i) => {
              const isOpen = open === i;
              return (
                <div className="acc" key={s.title}>
                  <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                    {s.title}
                    <span className="plus" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="acc-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="prose">
                          {s.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </FadeIn>
      </div>
    </section>
  );
}
