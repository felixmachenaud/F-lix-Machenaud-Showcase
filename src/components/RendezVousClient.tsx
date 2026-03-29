"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BRAND_VIOLET, CALENDLY_BLUE, CALENDLY_URL } from "@/lib/site";

/** Semaine commençant lundi — L M M J V S D */
const WEEK_LABELS = ["L", "M", "M", "J", "V", "S", "D"] as const;

/** Janvier 2025 : le 1er est un mercredi → 2 cellules vides (lun, mar) */
const START_OFFSET = 2;
const DAYS = 31;
const SELECTED_DAY = 7;

function buildMonthCells(): (number | null)[] {
  const cells: (number | null)[] = [];
  for (let i = 0; i < START_OFFSET; i++) cells.push(null);
  for (let d = 1; d <= DAYS; d++) cells.push(d);
  return cells;
}

export function RendezVousClient() {
  const cells = buildMonthCells();

  return (
    <main className="bg-white pb-24 pt-6 sm:pb-32 sm:pt-8">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-[1.65rem] font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl"
        >
          Prenez de l&apos;avance en réservant un rendez-vous
        </motion.h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-lg">
          La réalisation du site web est environ{" "}
          <span className="font-semibold text-gray-900">trois fois plus rapide</span> après une
          prise de rendez-vous : brief cadré, moins d&apos;allers-retours, lancement plus fluide.
        </p>

        <div className="mt-8">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:brightness-110 active:scale-[0.98] sm:py-4 sm:text-lg"
            style={{ backgroundColor: BRAND_VIOLET }}
          >
            Ouvrir Calendly
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ y: 72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-14 max-w-[340px] px-4 sm:mt-16 sm:max-w-[360px]"
      >
        <div
          className="relative overflow-hidden rounded-[2.35rem] border-[6px] bg-white px-4 pb-6 pt-7 shadow-[0_20px_50px_-12px_rgba(124,58,237,0.35),0_8px_24px_-8px_rgba(0,0,0,0.12)] sm:px-5 sm:pb-7 sm:pt-8"
          style={{ borderColor: BRAND_VIOLET }}
        >
          {/* Encoche type iPhone — même famille violet que le cadre */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2"
            aria-hidden
          >
            <div className="flex flex-col items-center">
              <div
                className="h-[6px] w-[92px] rounded-b-[9px] shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_8px_rgba(124,58,237,0.45)] sm:h-[7px] sm:w-[104px] sm:rounded-b-[11px]"
                style={{
                  background: `linear-gradient(180deg, ${BRAND_VIOLET} 0%, #6d28d9 55%, #5b21b6 100%)`,
                }}
              />
              <div
                className="h-[2px] w-[72px] rounded-full blur-[0.5px] sm:w-[84px]"
                style={{ backgroundColor: `${BRAND_VIOLET}66` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center">
            {WEEK_LABELS.map((label, wi) => (
              <div
                key={`hdr-${wi}`}
                className="pb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs"
              >
                {label}
              </div>
            ))}
            {cells.map((day, idx) => {
              if (day === null) {
                return <div key={`e-${idx}`} className="aspect-square min-h-[2.25rem]" />;
              }
              const col = idx % 7;
              const isWeekend = col >= 5;
              const isSelected = day === SELECTED_DAY;

              return (
                <div
                  key={day}
                  className="flex aspect-square min-h-[2.35rem] items-center justify-center sm:min-h-[2.5rem]"
                >
                  {isWeekend ? (
                    <span className="text-sm font-medium text-gray-400 sm:text-base">{day}</span>
                  ) : isSelected ? (
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white sm:h-10 sm:w-10 sm:text-base"
                      style={{ backgroundColor: CALENDLY_BLUE }}
                    >
                      {day}
                    </span>
                  ) : (
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold sm:h-10 sm:w-10 sm:text-base"
                      style={{
                        color: CALENDLY_BLUE,
                        backgroundColor: "rgba(0, 105, 255, 0.08)",
                      }}
                    >
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-5 text-center text-xs leading-relaxed text-gray-500">
            Aperçu stylisé — ouvrez Calendly pour choisir une date réelle.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-xl py-3 text-center text-sm font-bold text-white transition hover:brightness-110"
            style={{ backgroundColor: BRAND_VIOLET }}
          >
            Réserver maintenant
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
