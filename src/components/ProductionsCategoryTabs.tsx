"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/productions/vitrines-web", label: "Vitrines web" },
  { href: "/productions/application", label: "Application" },
] as const;

export function ProductionsCategoryTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Catégories de productions"
      className="mx-auto mt-8 flex max-w-md justify-center gap-2 rounded-full border border-[#7C3AED]/20 bg-white/90 p-1.5 shadow-[0_4px_20px_-8px_rgba(124,58,237,0.18)] backdrop-blur-sm sm:mt-10"
    >
      {tabs.map(({ href, label }) => {
        const isActive =
          pathname === href ||
          (pathname === "/productions" && href === "/productions/vitrines-web");

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`flex-1 rounded-full px-4 py-2.5 text-center text-sm font-bold tracking-tight transition sm:px-6 sm:text-[15px] ${
              isActive
                ? "bg-[#7C3AED] text-white shadow-[0_4px_14px_-4px_rgba(124,58,237,0.55)]"
                : "text-gray-600 hover:bg-[#7C3AED]/10 hover:text-[#7C3AED]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
