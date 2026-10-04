"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav } from "@/lib/data";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  // The menu remembers the page it was opened on, so navigating closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean | ((o: boolean) => boolean)) => {
    const next = typeof value === "function" ? value(open) : value;
    setOpenOn(next ? pathname : null);
  };

  // Hide the bar while reading downward, bring it back as soon as the visitor scrolls up.
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240);
    setScrolled(y > 20);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (item: (typeof nav)[number]) =>
    item.href.startsWith("/#") ? false : pathname.startsWith(item.match ?? item.href);

  return (
    <>
      <motion.header
        className={`site-header${scrolled ? " is-scrolled" : ""}`}
        animate={{ y: hidden && !open ? -110 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="site-nav" aria-label="Navigation principale">
          <Link href="/" className="brand">
            <Image src="/images/logo.webp" alt="" width={40} height={30} className="brand-logo" priority />
            WebSite Studio
          </Link>
          <ul className="nav-links">
            {nav.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`btn btn-nav ${active ? "btn-primary" : "btn-ghost"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/contact" className="btn btn-dark btn-sm">
            Contact
          </Link>
          <button
            className="menu-btn"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[...nav, { href: "/contact", label: "Contact" }].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={item.href} className="big" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              style={{ marginTop: 32 }}
            >
              <Link href="/rendez-vous" className="btn btn-primary">
                Prendre rendez-vous
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
