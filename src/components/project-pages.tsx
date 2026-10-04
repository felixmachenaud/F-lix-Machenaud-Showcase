"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import { CardStack } from "./card-stack";
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

/** One block per project: its key pages in the same card fan as the main carousel, with arrows and a short text. */
export function ProjectPages({ items }: { items: Project[] }) {
  return (
    <div className="pp-list">
      {items.map((p) => (PAGES[p.slug] ? <ProjectPagesItem key={p.slug} project={p} labels={PAGES[p.slug]} /> : null))}
    </div>
  );
}

function ProjectPagesItem({ project, labels }: { project: Project; labels: string[] }) {
  const [active, setActive] = useState(0);
  const count = labels.length;
  const go = (k: number) => setActive(((k % count) + count) % count);
  const cards = labels.map((label, i) => ({
    id: `${project.slug}-${i}`,
    title: `${project.name} — ${label}`,
    imageSrc: `/images/pages/${project.slug}-${i + 1}.webp`,
    href: project.href,
  }));

  return (
    <section className="pp-section" style={{ ["--c" as string]: project.accent }} aria-label={`Pages du site ${project.name}`}>
      <header className="pp-head">
        <p className="eyebrow">{project.kind}</p>
        <h2 className="pp-title">{project.name}</h2>
      </header>

      <CardStack items={cards} active={active} onChange={setActive} />

      {count > 1 && (
        <div className="cs-nav">
          <button className="round-btn" onClick={() => go(active - 1)} aria-label="Page précédente">
            ←
          </button>
          <div className="dots">
            {labels.map((label, i) => (
              <button
                key={label}
                className={i === active ? "on" : undefined}
                onClick={() => go(i)}
                aria-label={`Voir la page ${label}`}
                aria-pressed={i === active}
              />
            ))}
          </div>
          <button className="round-btn" onClick={() => go(active + 1)} aria-label="Page suivante">
            →
          </button>
        </div>
      )}
      <p className="pp-current">{labels[active]}</p>

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
