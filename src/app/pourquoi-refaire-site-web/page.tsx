import type { Metadata } from "next";
import Link from "next/link";
import { WhyRebuildRotatingQA } from "@/components/WhyRebuildRotatingQA";
import { WhyRebuildSections } from "@/components/WhyRebuildSections";
import { WHY_REBUILD_QA_PAIRS } from "@/lib/whyRebuildContent";
import { BRAND_VIOLET } from "@/lib/site";

const PAGE_PATH = "/pourquoi-refaire-site-web";

const title = "Pourquoi refaire votre site web ? — WebSite Studio";
const description =
  "Vitesse Next.js, SEO, design mobile-first, conversions, sécurité et coûts : pourquoi une refonte de site web est un levier pour votre entreprise, avec une approche performante et respectueuse du RGPD.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title,
    description,
    locale: "fr_FR",
    type: "article",
  },
};

function buildJsonLd() {
  const faqEntities = WHY_REBUILD_QA_PAIRS.map((pair) => ({
    "@type": "Question" as const,
    name: pair.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: pair.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_PATH}#webpage`,
        url: PAGE_PATH,
        name: title,
        description,
        inLanguage: "fr-FR",
        isPartOf: {
          "@type": "WebSite",
          name: "WebSite Studio",
          description: "Création de sites vitrines performants avec Next.js.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_PATH}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}

export default function PourquoiRefaireSitePage() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="flex flex-1 flex-col bg-white">
        <header className="relative mx-auto w-full max-w-3xl px-5 pb-12 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700/90">
            Conversion & SEO
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi refaire votre site web ?
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-gray-600 sm:text-lg">
            Aujourd&apos;hui, un site lent ou daté vous fait perdre des opportunités. Une refonte pensée pour la
            performance (Next.js, hébergement adapté), le référencement et l&apos;expérience mobile répond aux
            attentes des utilisateurs et des moteurs — sans cookies tiers ni surcharge inutile.
          </p>

          <div className="mt-10">
            <WhyRebuildRotatingQA />
          </div>
        </header>

        {/* Visuel abstrait « performance » — pas d’image lourde ; formats modernes privilégiés ailleurs (WebP/AVIF). */}
        <div className="border-t border-b border-violet-100/50 py-10 sm:py-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="max-w-md space-y-2">
              <p className="text-sm font-semibold text-violet-800">Performance mesurable</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Les Core Web Vitals (LCP, INP, CLS) traduisent la fluidité ressentie. Un site statique ou rendu avec
                Next.js vise un bon score Lighthouse sans scripts de tracking superflus.
              </p>
            </div>
            <div
              className="flex h-28 w-full max-w-[200px] shrink-0 items-center justify-center rounded-2xl border border-violet-200/40 sm:h-32 sm:max-w-[220px]"
              aria-hidden
            >
              <svg width="120" height="72" viewBox="0 0 120 72" className="text-violet-500">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="currentColor" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <path
                  d="M8 56 Q 32 20, 56 40 T 112 24"
                  fill="none"
                  stroke="url(#g1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="112" cy="24" r="5" fill="currentColor" />
                <text x="12" y="68" className="fill-gray-400 text-[9px] font-sans">
                  LCP · INP · CLS
                </text>
              </svg>
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-3xl px-5 pb-6 pt-12 sm:px-6 sm:pt-14 lg:px-8" aria-labelledby="methode-title">
          <h2 id="methode-title" className="text-lg font-bold text-gray-900 sm:text-xl">
            Une méthode alignée SEO, performance et RGPD minimaliste
          </h2>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-gray-700 sm:text-base">
            <li>
              <strong className="font-semibold text-gray-900">SEO technique :</strong> HTML5 sémantique, génération
              statique (SSG) lorsque c&apos;est pertinent, métadonnées et données structurées (JSON-LD) pour aider
              les moteurs à comprendre votre page.
            </li>
            <li>
              <strong className="font-semibold text-gray-900">RGPD :</strong> pas de cookies tiers sur ce type de
              vitrine — pas de bandeau cookies inutile. La transparence repose sur la{" "}
              <Link href="/confidentialite" className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-2 hover:text-violet-900">
                politique de confidentialité
              </Link>{" "}
              et les mentions sous le formulaire de contact (détail des sous-traitants dans la même politique).
            </li>
            <li>
              <strong className="font-semibold text-gray-900">Performance :</strong> pas de JavaScript de confort
              inutile ; polices en WOFF2, images au format moderne lorsqu&apos;elles sont présentes, objectif
              d&apos;expérience légère et rapide.
            </li>
          </ul>
        </section>

        <WhyRebuildSections />

        <aside className="mx-auto max-w-3xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-violet-200/70 bg-violet-50/40 px-5 py-6 sm:px-8 sm:py-7">
            <p className="text-sm font-semibold text-violet-900">Passez à l&apos;étape suivante</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Décrivez votre projet : nous pourrons définir si une refonte complète ou une évolution ciblée est la
              meilleure option pour votre activité.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-110 hover:shadow-lg active:scale-[0.98] sm:text-base"
                style={{ backgroundColor: BRAND_VIOLET }}
              >
                Nous contacter
              </Link>
              <Link
                href="/rendez-vous"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-bold text-gray-900 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] sm:text-base"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </aside>
      </article>
    </>
  );
}
