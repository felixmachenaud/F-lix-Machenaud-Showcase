"use client";

import { useMemo } from "react";
import type { Project } from "@/lib/data";
import { LiquidGlassCarousel } from "./ui/liquid-glass-carousel";
import { Accent } from "./reveal";

/** The key pages captured for each project (public/images/pages/{slug}-{n}.webp). */
const PAGES: Record<string, string[]> = {
  komplices: ["Accueil", "Le lieu", "La carte", "En images"],
  hautefeuille: ["Accueil", "Le collège", "Le lycée", "L'histoire"],
  welkeys: ["Accueil", "Expériences", "Événementiel", "Destinations"],
  eigenflow: ["Accueil", "Implémentation IA", "Tunnel de vente", "Réalisations"],
  lechappee: ["Accueil", "Le menu", "Les desserts", "Le lieu"],
  carcassonne: ["Accueil", "Les avantages", "Les avis", "Le quartier"],
  walt: ["Inscription", "Connexion"],
};

const STAGE_BG = "#0b0b14";

/** One full-width dark band per project: its pages lit up in a liquid-glass carousel, with its text below. */
export function ProjectPages({ items }: { items: Project[] }) {
  return (
    <div className="pp-list">
      {items.map((p) => (PAGES[p.slug] ? <ProjectPagesItem key={p.slug} project={p} labels={PAGES[p.slug]} /> : null))}
    </div>
  );
}

function ProjectPagesItem({ project, labels }: { project: Project; labels: string[] }) {
  // Stable reference: the carousel rebuilds its WebGL scene whenever `items` changes.
  const pages = useMemo(
    () =>
      labels.map((label, i) => ({
        title: label,
        src: `/images/pages/${project.slug}-${i + 1}.webp`,
        aspect: 1.6,
      })),
    [labels, project.slug],
  );

  return (
    <section className="pp-section" style={{ ["--c" as string]: project.accent }} aria-label={`Pages du site ${project.name}`}>
      <header className="pp-head">
        <p className="eyebrow">{project.kind}</p>
        <h2 className="pp-title">{project.name}</h2>
      </header>

      <LiquidGlassCarousel
        className="pp-carousel"
        items={pages}
        background={STAGE_BG}
        foreground="#f5f5f7"
        panelHeight={460}
        gap={18}
        entry={false}
        label={`Pages du site ${project.name}`}
      />

      <div className="pp-text">
        <h3>
          <Accent text={project.headline} />
        </h3>
        <p>{project.body}</p>
        <a className="btn btn-visit" href={project.href} target="_blank" rel="noreferrer">
          Visiter le site <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  );
}
