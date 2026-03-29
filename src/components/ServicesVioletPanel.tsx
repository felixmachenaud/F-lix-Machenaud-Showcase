"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { productionSites } from "@/lib/productions";
import { BRAND_VIOLET } from "@/lib/site";

const SLIDE_EASE = [0.16, 1, 0.3, 1] as const;
const SLIDE_DURATION_S = 0.85;

function ArrowCircleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[15px] w-[15px] text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Demi-page droite : dégradé violet, ombre sur les contours, liens « Nos sites ».
 */
export function ServicesVioletPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-[calc(100vh-7rem)] w-full flex-col overflow-hidden pl-6 pr-0 pb-12 pt-10 sm:pl-10 sm:pb-16 sm:pt-12 lg:min-h-[calc(100vh-8rem)]">
      <motion.div
        className="relative flex h-full min-h-[min(85vh,720px)] w-full flex-1 flex-col rounded-l-[1.5rem] border-0 border-l border-white/[0.07] px-1 pt-1 sm:rounded-l-[1.75rem]"
        style={{
          background: `linear-gradient(180deg, ${BRAND_VIOLET} 0%, ${BRAND_VIOLET} 10%, rgba(124,58,237,0.72) 32%, rgba(124,58,237,0.35) 58%, rgba(124,58,237,0.08) 85%, transparent 100%)`,
          boxShadow: `
            -20px 0 40px -12px rgba(0,0,0,0.08),
            -8px 0 24px -8px rgba(124,58,237,0.2),
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 0 0 1px rgba(255,255,255,0.06)
          `,
          WebkitBackdropFilter: "blur(8px)",
        }}
        initial={reduceMotion ? false : { y: "42%", opacity: 0.92 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : SLIDE_DURATION_S,
          ease: SLIDE_EASE,
        }}
      >
        <div className="flex flex-1 flex-col px-6 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Nos sites
          </h2>

          <ul className="mt-12 flex flex-col gap-0 sm:mt-14">
            {productionSites.map((site) => (
              <li
                key={site.id}
                className="border-b border-white/[0.12] last:border-b-0"
              >
                <Link
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-4 py-6 transition hover:bg-white/[0.04] sm:py-7"
                >
                  <span className="min-w-0 flex-1 text-[15px] font-bold leading-snug text-white sm:text-base">
                    {site.name}
                  </span>
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/[0.08] text-white shadow-[0_2px_12px_-2px_rgba(0,0,0,0.15)] transition group-hover:border-white/55 group-hover:bg-white/[0.14]"
                    aria-hidden
                  >
                    <ArrowCircleIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
