"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

export type Exchange = { q: string; a: string };

/** Plays the questions as a chat: question, typing dots, answer, then the next one. */
export function ChatFaq({ items }: { items: Exchange[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused) return;
    const delays = [700, 1100, 5200];
    const t = setTimeout(() => {
      if (step < 2) setStep((s) => (s + 1) as 1 | 2);
      else {
        setIndex((i) => (i + 1) % items.length);
        setStep(0);
      }
    }, delays[step]);
    return () => clearTimeout(t);
  }, [inView, paused, step, items.length]);

  const item = items[index];
  const select = (i: number) => {
    setIndex(i);
    setStep(2);
    setPaused(true);
  };

  return (
    <div ref={ref} className="card chat" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="chat-head">
        <span>
          Discussion {index + 1} sur {items.length}
        </span>
        <div className="dots">
          {items.map((it, i) => (
            <button
              key={it.q}
              className={i === index ? "on" : undefined}
              onClick={() => select(i)}
              aria-label={`Question ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="bubbles" aria-live="polite">
        <AnimatePresence mode="popLayout">
          <motion.p
            key={`q${index}`}
            className="bubble q"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {item.q}
          </motion.p>
          {step === 1 && (
            <motion.div key={`t${index}`} className="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <i />
              <i />
              <i />
            </motion.div>
          )}
          {step === 2 && (
            <motion.p
              key={`a${index}`}
              className="bubble a"
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {item.a}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
