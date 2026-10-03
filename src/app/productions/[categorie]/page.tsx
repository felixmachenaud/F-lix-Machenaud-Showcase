import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories, projects, tools, type Category } from "@/lib/data";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Aurora } from "@/components/effects";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(categories).map((categorie) => ({ categorie }));
}

export async function generateMetadata({ params }: PageProps<"/productions/[categorie]">): Promise<Metadata> {
  const { categorie } = await params;
  const label = categories[categorie as Category]?.label ?? "Réalisations";
  return {
    title: `${label} — Mes réalisations`,
    description: "Chaque projet avec son contexte et ses résultats : sites vitrines et applications sur mesure.",
  };
}

function CalendarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="3" fill="#fff" stroke="#4285F4" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="#4285F4" strokeWidth="1.6" />
      <path d="M8 2v4M16 2v4" stroke="#EA4335" strokeWidth="1.6" strokeLinecap="round" />
      <text x="12" y="18.2" textAnchor="middle" fontSize="7.5" fontFamily="Arial" fontWeight="700" fill="#34A853">
        31
      </text>
    </svg>
  );
}

export default async function ProductionsPage({ params }: PageProps<"/productions/[categorie]">) {
  const { categorie } = await params;
  if (!(categorie in categories)) notFound();
  const category = categorie as Category;

  return (
    <>
      <section className="page-top productions-top">
        <Aurora />
        <div className="wrap">
          <RevealTitle as="h1" className="h-display" text="Mes [[réalisations]]" immediate />
          <FadeIn as="p" className="lead" delay={0.3}>
            Chaque projet avec son contexte et ses résultats.
          </FadeIn>
        </div>
        <ProjectsShowcase key={category} category={category} items={projects[category]} />
      </section>

      <section className="tools">
        <div className="wrap center">
          <RevealTitle className="h-section" text="Intégrez vos [[outils de travail]]" />
          <FadeIn as="p" className="lead">
            Connectez vos outils habituels en quelques secondes.
          </FadeIn>
          <ul className="tool-list">
            {tools.map((t, i) => (
              <FadeIn as="li" key={t.name} delay={i * 0.06}>
                <span title={t.name} className="spot">
                  {t.src ? <Image src={t.src} alt={t.name} width={40} height={40} /> : <CalendarIcon />}
                </span>
                <small>{t.name}</small>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
