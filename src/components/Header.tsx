import Link from "next/link";

const navLink =
  "shrink-0 whitespace-nowrap text-xs font-medium text-gray-600 transition hover:text-gray-900 sm:text-sm";

const contactBtn =
  "shrink-0 rounded-full bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-gray-800 sm:px-4 sm:py-2.5 sm:text-sm";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="flex w-full max-w-5xl items-center gap-2 rounded-2xl border border-white/60 bg-white/55 px-3 py-3 shadow-[0_8px_32px_-10px_rgba(15,23,42,0.14),0_4px_14px_-4px_rgba(15,23,42,0.1)] backdrop-blur-xl backdrop-saturate-150 sm:gap-4 sm:px-5 sm:py-3.5 supports-[backdrop-filter]:bg-white/50">
        <Link
          href="/"
          className="shrink-0 text-base font-bold tracking-tight text-gray-900 sm:text-lg"
        >
          WebSite Studio
        </Link>

        <nav className="flex min-w-0 flex-1 items-center justify-center gap-3 overflow-x-auto py-0.5 sm:gap-6 md:gap-8">
          <Link href="/rendez-vous" className={navLink}>
            Prendre rendez-vous
          </Link>
          <Link href="/a-propos" className={navLink}>
            À propos
          </Link>
          <Link href="/productions" className={navLink}>
            Nos productions
          </Link>
          <Link href="/pricing" className={navLink}>
            Pricing
          </Link>
        </nav>

        <Link href="/contact" className={contactBtn}>
          Contact
        </Link>
      </div>
    </header>
  );
}
