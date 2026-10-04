"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categories, type Category, type Project } from "@/lib/data";
import { CardStack } from "./card-stack";
import { Accent } from "./reveal";
import { ProjectPages } from "./project-pages";

export function ProjectsShowcase({ category, items }: { category: Category; items: Project[] }) {
  const [active, setActive] = useState(0);
  const project = items[active];
  const go = (k: number) => setActive(((k % items.length) + items.length) % items.length);

  return (
    <div className="showcase" style={{ ["--c" as string]: project.accent }}>
      <nav className="seg" aria-label="Catégories">
        {(Object.keys(categories) as Category[]).map((key) => (
          <Link key={key} href={`/productions/${key}`} aria-current={key === category ? "page" : undefined} scroll={false}>
            {key === category && (
              <motion.span layoutId="seg-pill" className="seg-pill" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
            )}
            <span>{categories[key].label}</span>
          </Link>
        ))}
      </nav>

      <CardStack
        items={items.map((p) => ({ id: p.slug, title: p.name, imageSrc: p.image, href: p.href }))}
        active={active}
        onChange={setActive}
      />

      <div className="cs-nav">
        <button className="round-btn" onClick={() => go(active - 1)} aria-label="Projet précédent">
          ←
        </button>
        <div className="dots">
          {items.map((p, i) => (
            <button
              key={p.slug}
              className={i === active ? "on" : undefined}
              onClick={() => go(i)}
              aria-label={`Voir ${p.name}`}
              aria-pressed={i === active}
            />
          ))}
        </div>
        <button className="round-btn" onClick={() => go(active + 1)} aria-label="Projet suivant">
          →
        </button>
      </div>

      <div className="wrap">
        <AnimatePresence mode="wait">
          <motion.article
            key={project.slug}
            className="card project-detail"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-live="polite"
          >
            <div>
              <p className="eyebrow">
                {project.name} · {project.kind}
              </p>
              <h2>
                <Accent text={project.headline} />
              </h2>
              <p>{project.body}</p>
              <a className="btn btn-visit" href={project.href} target="_blank" rel="noreferrer">
                Visiter le site <span className="arrow">↗</span>
              </a>
            </div>
            <dl className="metrics">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>
          </motion.article>
        </AnimatePresence>
      </div>

      <ProjectPages items={items} />
    </div>
  );
}
