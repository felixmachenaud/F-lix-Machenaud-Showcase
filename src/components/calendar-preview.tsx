"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/data";

const DOW = ["L", "M", "M", "J", "V", "S", "D"];
const noop = () => () => {};

/** Stylised month preview; every weekday from today links to Calendly, where the real slots live. */
export function CalendarPreview() {
  // Today's date only exists in the browser; the server renders the neutral placeholder month.
  const todayKey = useSyncExternalStore(noop, () => new Date().toDateString(), () => null);
  const today = todayKey ? new Date(todayKey) : null;

  const ref = today ?? new Date(2026, 0, 1);
  const year = ref.getFullYear();
  const month = ref.getMonth();
  const first = new Date(year, month, 1);
  const lead = (first.getDay() + 6) % 7;
  const days = new Date(year, month + 1, 0).getDate();
  const label = first.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  return (
    <div className="cal">
      <div className="cal-head">
        <span>{label}</span>
        <span className="eyebrow">30 min</span>
      </div>
      <div className="cal-grid">
        {DOW.map((d, i) => (
          <span key={i} className="dow">
            {d}
          </span>
        ))}
        {Array.from({ length: lead }, (_, i) => (
          <span key={`e${i}`} />
        ))}
        {Array.from({ length: days }, (_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);
          const weekday = date.getDay() !== 0 && date.getDay() !== 6;
          const upcoming = today ? day > today.getDate() : false;
          return weekday && upcoming ? (
            <a key={day} href={site.calendly} target="_blank" rel="noreferrer" aria-label={`Réserver le ${day} ${label}`}>
              {day}
            </a>
          ) : (
            <span key={day} className="day">
              {day}
            </span>
          );
        })}
      </div>
      <p className="cal-note">Aperçu stylisé — ouvrez Calendly pour choisir une date réelle.</p>
    </div>
  );
}
