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
 * Bloc type « écran » (vidéo / démo) + bandeau blanc texte + stats.
 * Format compact pour affichage 2 colonnes.
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
    videoSrc,
    videoPoster,
  } = showcase;

  return (
    <div className="relative h-full w-full">
      {/* Cadre violet même format, derrière le bloc site — décalé pour laisser voir bordure gauche */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 rounded-[1.35rem] shadow-none max-md:-translate-x-1.5 max-md:translate-y-1.5 md:-translate-x-2.5 md:translate-y-2.5"
        style={{
          backgroundColor: BRAND_VIOLET,
        }}
      />
      <article className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-[1.35rem] border border-gray-200/90 bg-white shadow-[0_8px_32px_-14px_rgba(15,23,42,0.1),0_2px_10px_-4px_rgba(15,23,42,0.06)]">
      {/* Zone « écran » */}
      <div className="relative w-full overflow-hidden rounded-t-[1.35rem] bg-gray-950">
        <div className="aspect-video w-full">
          {videoSrc ? (
            <video
              className="pointer-events-none h-full w-full object-cover object-top"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              disablePictureInPicture
              poster={videoPoster ?? undefined}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="flex h-full min-h-[160px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 px-4 text-center">
              <p className="text-xs font-semibold tracking-tight text-white/95">
                {name}
              </p>
              <p className="max-w-md text-[11px] leading-relaxed text-white/55">
                Ajoutez un MP4 dans{" "}
                <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[10px] text-white/80">
                  public/videos/{showcase.id}.mp4
                </code>
              </p>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center gap-1.5 rounded-full border-2 border-white/80 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white transition hover:bg-white hover:text-gray-900"
              >
                Visiter
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5"
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
          )}
        </div>
      </div>

      {/* Zone informations */}
      <div className="flex flex-1 flex-col border-t border-gray-100 bg-white px-4 py-6 sm:px-5 sm:py-7">
        <h2 className="text-base font-semibold leading-snug tracking-tight text-gray-900 sm:text-lg sm:leading-snug">
          {headlineLead}
          <span
            className={`${playfairItalic.className} text-[1.06em] font-medium text-gray-800`}
          >
            {headlineItalic}
          </span>
          {headlineTail}
        </h2>

        <p className="mt-3 flex-1 text-[13px] leading-relaxed text-gray-600 sm:text-sm">
          {description}
        </p>

        <dl className="mt-6 flex flex-wrap gap-x-5 gap-y-5 sm:gap-x-6">
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

        <div className="mt-6">
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
