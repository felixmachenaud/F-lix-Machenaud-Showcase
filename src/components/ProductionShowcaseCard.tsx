import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import type { ProductionShowcase } from "@/lib/productions";
import { BRAND_VIOLET } from "@/lib/site";

const playfairItalic = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
});

type Props = {
  showcase: ProductionShowcase;
};

/**
 * Bloc photo + bandeau blanc texte + stats.
 */
export function ProductionShowcaseCard({ showcase }: Props) {
  const {
    name,
    href,
    headlineLead,
    headlineItalic,
    headlineTail,
    description,
    stats,
    imageSrc,
  } = showcase;

  return (
    <div className="relative h-full w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-[1.35rem] shadow-none max-md:-translate-x-1.5 max-md:translate-y-1.5 md:-translate-x-2.5 md:translate-y-2.5"
        style={{
          backgroundColor: BRAND_VIOLET,
        }}
      />
      <article className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-[1.35rem] border border-gray-200/90 bg-white shadow-[0_8px_32px_-14px_rgba(15,23,42,0.1),0_2px_10px_-4px_rgba(15,23,42,0.06)]">
        <div className="relative w-full overflow-hidden rounded-t-[1.35rem] bg-gray-100">
          <div className="relative aspect-video w-full">
            <Image
              src={imageSrc}
              alt={`Aperçu du site ${name}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col border-t border-gray-100 bg-white px-5 py-7 sm:px-8 sm:py-8">
          <h2 className="text-lg font-semibold leading-snug tracking-tight text-gray-900 sm:text-xl sm:leading-snug">
            {headlineLead}
            <span
              className={`${playfairItalic.className} text-[1.06em] font-medium text-gray-800`}
            >
              {headlineItalic}
            </span>
            {headlineTail}
          </h2>

          <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-gray-600 sm:text-[15px]">
            {description}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-10">
            {stats.map((s) => (
              <div key={`${showcase.id}-${s.label}`} className="min-w-[4.5rem]">
                <dt className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-400">
                  {s.label}
                </dt>
                <dd className="mt-1 text-lg font-bold tabular-nums tracking-tight text-gray-900 sm:text-xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-900 bg-white px-5 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-gray-900 hover:text-white sm:px-6 sm:text-[15px]"
            >
              Visiter
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
