import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Aurora, ParallaxReveal, ScrollHighlight, TiltCard } from "@/components/effects";
import { breadcrumbs } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "À propos",
  description: "Félix Machenaud, développeur web indépendant : je conçois et code des sites vitrines sur mesure, rapides et bien référencés, en direct avec vous.",
};

const pillars = [
  {
    title: "Une méthode structurée",
    text: "Cadrage des besoins, proposition claire des livrables, échanges réguliers et exécution soignée.",
    icon: "M4 6h16M4 12h10M4 18h6",
    c: "var(--indigo)",
    t: "var(--indigo-50)",
  },
  {
    title: "La transparence",
    text: "Le périmètre du délai est donné dès le départ, les étapes sont visibles, et vous gardez la main sur les arbitrages importants.",
    icon: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z",
    c: "var(--violet)",
    t: "var(--violet-50)",
  },
  {
    title: "Une vraie collaboration",
    text: "Écoute, réactivité et exigence sur le détail, pour un site dont vous pouvez être fier.",
    icon: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z",
    c: "var(--rose)",
    t: "var(--rose-50)",
  },
];

export default function AboutPage() {
  return (
    <section className="page-top about">
      <JsonLd data={breadcrumbs([{ name: "À propos", path: "/a-propos" }])} />
      <Aurora />
      <div className="wrap">
        <div className="about-hero">
          <div>
            <RevealTitle as="h1" className="h-display" text="Moi, c'est [[Félix.]]" immediate />
            <FadeIn as="p" className="lead" delay={0.35}>
              Je crée des sites web sur mesure, seul, de A à Z. Vous parlez directement à la personne qui conçoit et code votre site.
            </FadeIn>
            <FadeIn delay={0.5} className="about-hero-ctas">
              <Link href="/contact" className="btn btn-primary">
                Me contacter <span className="arrow">→</span>
              </Link>
              <a className="btn btn-ghost" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="portrait-wrap">
            <TiltCard max={5}>
              <ParallaxReveal className="portrait">
                <Image
                  src="/images/portrait.webp"
                  alt="Portrait de Félix Machenaud"
                  fill
                  priority
                  sizes="(max-width: 900px) 90vw, 480px"
                />
              </ParallaxReveal>
              <div className="portrait-tag">
                <i>FM</i>
                {site.owner} · Fondateur
              </div>
            </TiltCard>
          </FadeIn>
        </div>

        <ScrollHighlight
          className="big-quote"
          text="Un bon site, c'est souvent le premier contact avec vos clients. Je fais en sorte qu'il vous ressemble."
        />

        <div className="about-body">
          <FadeIn as="p" className="about-quote">
            Simple, clair, et fait avec soin.
          </FadeIn>
          <div className="about-text">
            <FadeIn as="p">
              Je travaille avec des indépendants et des petites entreprises qui veulent un site propre, rapide et
              facile à trouver sur Google.
            </FadeIn>
            <FadeIn as="p">
              On commence par un échange pour comprendre votre activité. Ensuite je vous montre chaque étape, vous
              donnez votre avis, et on avance ensemble jusqu&apos;à la mise en ligne. Pas de jargon, pas de mauvaise
              surprise.
            </FadeIn>
          </div>
        </div>

        <h2 className="sr-only">Ma façon de travailler</h2>
        <div className="pillars">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="card pillar spot" style={{ ["--c" as string]: p.c, ["--t" as string]: p.t }}>
                <span className="ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={p.icon} />
                  </svg>
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="about-cta">
          <h2>
            Je serai ravi d&apos;échanger <span className="serif">avec vous sur votre projet.</span>
          </h2>
          <div className="ctas">
            <Link href="/contact" className="btn btn-primary">
              Me contacter <span className="arrow">→</span>
            </Link>
            <Link href="/rendez-vous" className="btn btn-ghost">
              Et si on se prenait un café ?
            </Link>
          </div>
          <a className="link" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn — Félix Machenaud ↗
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
