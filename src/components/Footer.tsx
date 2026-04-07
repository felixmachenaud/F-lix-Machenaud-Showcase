import Link from "next/link";
import { ArrowCircleIcon } from "@/components/ArrowCircleIcon";
import { BRAND_VIOLET } from "@/lib/site";

const footerLinkRow =
  "group flex w-full items-center justify-between gap-4 rounded-xl py-2.5 text-left transition hover:bg-white/50 sm:py-2.5 sm:justify-start sm:gap-4";

const footerLinkLabel =
  "min-w-0 flex-1 text-xs font-medium text-gray-700 transition group-hover:text-gray-900 sm:text-sm";

const footerItems = [
  { href: "/conditions-generales-vente", label: "Conditions générales de vente" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
  { href: "/politique-cookies", label: "Politique relative aux cookies" },
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
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <p className="text-sm font-semibold text-gray-900 sm:text-base">
              WebSite Studio
            </p>
            <p className="text-xs text-gray-500 sm:text-sm">© Tous droits réservés</p>
          </div>

          <nav
            className="flex flex-col border-t border-gray-200/70 pt-5 sm:pt-6"
            aria-label="Informations légales"
          >
            <ul className="flex flex-col gap-0.5">
              {footerItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkRow}>
                    <span className={footerLinkLabel}>{item.label}</span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white/80 shadow-[0_2px_12px_-2px_rgba(124,58,237,0.2)] transition group-hover:border-[#7C3AED]/50 group-hover:bg-white/95"
                      style={{
                        borderColor: `${BRAND_VIOLET}55`,
                        color: BRAND_VIOLET,
                      }}
                      aria-hidden
                    >
                      <ArrowCircleIcon className="h-[15px] w-[15px]" />
                    </span>
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
