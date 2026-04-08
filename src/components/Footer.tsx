import Link from "next/link";
import { ArrowCircleIcon } from "@/components/ArrowCircleIcon";
import { BRAND_VIOLET } from "@/lib/site";

/** Bouton footer « Prendre rendez-vous » : violet plein, survol blanc / texte violet */
const rendezVousFooterBtn =
  "inline-flex min-h-[3.2rem] w-full max-w-md items-center justify-center rounded-2xl border-2 border-[#7C3AED] bg-[#7C3AED] px-5 py-3 text-center text-sm font-bold text-white shadow-[0_4px_16px_-4px_rgba(124,58,237,0.45)] transition hover:bg-white hover:text-[#7C3AED] hover:shadow-[0_6px_20px_-6px_rgba(124,58,237,0.25)] active:scale-[0.98] sm:min-h-[3.45rem] sm:w-auto sm:min-w-[16.25rem] sm:px-6 sm:py-3.5 sm:text-base";

const legalLinkClass =
  "inline-flex min-w-0 max-w-full items-center justify-center gap-1 text-[10px] font-medium leading-tight text-gray-600 transition hover:text-gray-900 sm:gap-1.5 sm:text-[11px]";

const legalItems = [
  { href: "/confidentialite", label: "Confidentialité" },
  { href: "/conditions-generales-vente", label: "CGV" },
  { href: "/politique-cookies", label: "Cookies" },
] as const;

/**
 * Fond de page = {@link PageBackground} (plein viewport). Ici : marges transparentes + seul l’encadré est visible.
 */
export function Footer() {
  return (
    <footer className="flex justify-center bg-transparent px-3 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-14">
      <div
        className="w-full max-w-7xl rounded-3xl border-2 bg-white/50 px-5 py-6 shadow-[0_16px_48px_-12px_rgba(124,58,237,0.22),0_8px_28px_-8px_rgba(124,58,237,0.14),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl backdrop-saturate-150 sm:px-10 sm:py-8 supports-[backdrop-filter]:bg-white/42"
        style={{ borderColor: `${BRAND_VIOLET}99` }}
      >
        <div className="flex flex-col gap-6 sm:gap-7">
          <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1">
            <p className="text-sm font-semibold text-gray-900 sm:text-base">
              WebSite Studio
            </p>
          </div>

          {/* Ligne 1 : Prendre rendez-vous */}
          <div className="flex justify-center">
            <Link href="/rendez-vous" className={rendezVousFooterBtn}>
              Prendre rendez-vous
            </Link>
          </div>

          {/* Ligne 2 : liens légaux — texte discret + petite flèche violette */}
          <nav
            className="border-t border-gray-200/70 pt-5 sm:pt-6"
            aria-label="Informations légales"
          >
            <ul className="grid grid-cols-3 gap-x-2 gap-y-2 sm:gap-x-6">
              {legalItems.map((item) => (
                <li key={item.href} className="min-w-0 text-center">
                  <Link href={item.href} className={legalLinkClass}>
                    <span className="truncate">{item.label}</span>
                    <ArrowCircleIcon className="h-2.5 w-2.5 shrink-0 text-[#7C3AED] sm:h-3 sm:w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
