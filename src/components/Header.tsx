"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const navLink =
  "shrink-0 whitespace-nowrap text-xs font-medium text-gray-600 transition hover:text-gray-900 sm:text-sm";

const navLinkMobile =
  "block rounded-xl px-4 py-3.5 text-base font-semibold text-gray-900 transition hover:bg-gray-100 active:bg-gray-100";

const contactBtn =
  "shrink-0 rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-gray-800 sm:px-4 sm:py-2.5 sm:text-sm";

const navItems = [
  { href: "/a-propos", label: "À propos" },
  { href: "/productions", label: "Mes réalisations" },
  { href: "/pricing", label: "Tarifs" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden>
      <span
        className={`absolute left-0 top-0 block h-0.5 w-full rounded-full bg-gray-900 transition-transform ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-gray-900 transition-opacity ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-3 block h-0.5 w-full rounded-full bg-gray-900 transition-transform ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const isGradientPage = pathname === "/productions" || pathname === "/pricing";
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** Verre léger : le fond réel est {@link PageBackground}, pas le header */
  const navShellClass = isGradientPage
    ? "border-white/50 bg-white/38 shadow-[0_8px_32px_-12px_rgba(124,58,237,0.16)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/32"
    : "border-gray-200/75 bg-white/78 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/72";

  const navRow = (
    <>
      <Link
        href="/"
        className="shrink-0 text-base font-bold tracking-tight text-gray-900 sm:text-lg"
        onClick={() => setMenuOpen(false)}
      >
        WebSite Studio
      </Link>

      <nav
        className="hidden min-w-0 flex-1 items-center justify-center gap-3 overflow-x-auto py-0.5 sm:gap-6 md:flex md:gap-8"
        aria-label="Navigation principale"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={navLink}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className={`${contactBtn} hidden md:inline-flex`}>
        Contact
      </Link>

      <button
        type="button"
        className="md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white/80 text-gray-900 shadow-sm transition hover:bg-gray-50"
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-controls={panelId}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <MenuIcon open={menuOpen} />
      </button>
    </>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center bg-transparent px-4 pt-4 sm:px-6 sm:pt-5">
        {isGradientPage ? (
          <div
            className={`flex w-full max-w-5xl items-center gap-2 rounded-2xl border px-3 py-3 sm:gap-4 sm:px-5 sm:py-3.5 ${navShellClass}`}
          >
            {navRow}
          </div>
        ) : (
          <div className="w-full max-w-5xl rounded-2xl bg-white/90 p-1 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08)] ring-1 ring-gray-200/75">
            <div className="header-violet-inner rounded-xl p-px">
              <div
                className={`flex w-full items-center gap-2 rounded-xl border border-white/55 px-3 py-3 sm:gap-4 sm:px-5 sm:py-3.5 ${navShellClass}`}
              >
                {navRow}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Panneau mobile : plein écran sous le header, sans chevauchement avec la barre horizontale du desktop */}
      <div
        id={panelId}
        className={`fixed inset-0 z-40 md:hidden transition ${
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/25 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Fermer le menu"
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`absolute inset-x-0 top-0 flex max-h-[min(100dvh,100vh)] flex-col bg-white/98 px-6 pb-8 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.2)] backdrop-blur-xl transition-transform duration-200 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          aria-label="Navigation principale (mobile)"
          style={{
            paddingTop: "max(6.5rem, calc(env(safe-area-inset-top, 0px) + 5rem))",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className="mx-auto flex w-full max-w-md flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkMobile}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
