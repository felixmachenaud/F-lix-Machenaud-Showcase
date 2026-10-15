"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DEFAULT_PRODUCTION_HREF,
  PRODUCTION_CATEGORIES,
} from "@/lib/productions";

export function ProductionsCategoryTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Catégories de réalisations"
      className="mx-auto mt-8 flex w-full max-w-2xl justify-center gap-1.5 rounded-full border border-[#7C3AED]/20 bg-white/90 p-1.5 shadow-[0_4px_20px_-8px_rgba(124,58,237,0.18)] backdrop-blur-sm sm:mt-10 sm:gap-2"
    >
      {PRODUCTION_CATEGORIES.map(({ href, label, shortLabel }) => {
        const isActive =
          pathname === href ||
          (pathname === "/productions" && href === DEFAULT_PRODUCTION_HREF);

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            aria-label={label}
            className={`min-w-0 flex-1 rounded-full px-2 py-2.5 text-center text-xs font-bold tracking-tight transition sm:px-4 sm:text-sm ${
              isActive
                ? "bg-[#7C3AED] text-white shadow-[0_4px_14px_-4px_rgba(124,58,237,0.55)]"
                : "text-gray-600 hover:bg-[#7C3AED]/10 hover:text-[#7C3AED]"
            }`}
          >
            <span className="sm:hidden">{shortLabel}</span>
            <span className="hidden sm:inline">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
