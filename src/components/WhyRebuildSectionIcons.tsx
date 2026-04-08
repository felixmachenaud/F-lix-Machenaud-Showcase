import type { WhyRebuildBulletIcon } from "@/lib/whyRebuildContent";
import type { ReactNode } from "react";

const iconClass = "h-5 w-5 shrink-0 text-violet-600";

function IconZap() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconSmartphone() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconTrending() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 16l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8h4v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPiggy() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 10c-2 0-3.5 1.5-3.5 3.5S6 17 8 17h9a3 3 0 003-3v-1a4 4 0 00-4-4H8z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M8 10V8a4 4 0 014-4h1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="6" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 14l-1 7 5-3 5 3-1-7" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

const MAP: Record<WhyRebuildBulletIcon, ReactNode> = {
  zap: <IconZap />,
  search: <IconSearch />,
  smartphone: <IconSmartphone />,
  trending: <IconTrending />,
  shield: <IconShield />,
  piggy: <IconPiggy />,
  award: <IconAward />,
};

export function SectionBulletIcon({ icon }: { icon: WhyRebuildBulletIcon }) {
  return MAP[icon];
}
