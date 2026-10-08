import type { Metadata } from "next";
import { site } from "@/lib/data";
import { CalendarPreview } from "@/components/calendar-preview";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Aurora } from "@/components/effects";
import { breadcrumbs } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Réservez un appel de 30 minutes : brief cadré, moins d'allers-retours et un lancement de projet plus fluide.",
};

const points = ["Appel de 30 minutes", "Visio ou téléphone", "Sans engagement"];

export default function RendezVousPage() {
  return (
    <section className="page-top rdv">
      <JsonLd data={breadcrumbs([{ name: "Prendre rendez-vous", path: "/rendez-vous" }])} />
      <Aurora />
      <div className="wrap">
        <RevealTitle
          as="h1"
          className="h-display"
          text="Prenez de l'avance en [[réservant un rendez-vous]]"
          immediate
        />
        <FadeIn as="p" className="lead" delay={0.3}>
          La réalisation du site web est environ trois fois plus rapide après une prise de rendez-vous : brief cadré,
          moins d&apos;allers-retours, lancement plus fluide.
        </FadeIn>

        <FadeIn delay={0.4} className="card rdv-card">
          <div className="rdv-side">
            <div className="who">
              <span className="avatar">F</span>
              <div>
                <b>{site.owner}</b>
                <div className="eyebrow">WebSite Studio</div>
              </div>
            </div>
            <h2>On se prend un café ?</h2>
            <ul>
              {points.map((p) => (
                <li key={p}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
            <a href={site.calendly} target="_blank" rel="noreferrer" className="btn btn-primary">
              Réserver maintenant <span className="arrow">↗</span>
            </a>
          </div>
          <CalendarPreview />
        </FadeIn>
      </div>
    </section>
  );
}
