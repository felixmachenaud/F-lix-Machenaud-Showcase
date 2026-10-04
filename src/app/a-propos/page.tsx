import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Aurora, ParallaxReveal, ScrollHighlight, TiltCard } from "@/components/effects";

export const metadata: Metadata = {
  title: "À propos",
  description: "Une approche humaine, technique et orientée résultats pour des sites web à la hauteur de votre activité.",
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
          text="Aujourd'hui, la présence en ligne n'est plus une option, c'est une nécessité. Mon rôle est de vous livrer un site dont vous pouvez être fier."
        />

        <div className="about-body">
          <FadeIn as="p" className="about-quote">
            Transformer votre message en une expérience en ligne crédible et efficace.
          </FadeIn>
          <div className="about-text">
            <FadeIn as="p">
              J&apos;accompagne les entreprises et les indépendants qui veulent un site web à la hauteur de leur
              activité : clair, professionnel, pensé pour convertir et pour être trouvé par vos clients.
              L&apos;objectif est simple : transformer votre message en une expérience en ligne crédible et efficace.
            </FadeIn>
            <FadeIn as="p">
              Mon travail repose sur une approche technique solide et une méthode de projet structurée : cadrage des
              besoins, proposition claire des livrables, échanges réguliers et exécution soignée. Les outils actuels,
              avec l&apos;aide de l&apos;intelligence artificielle, me permettent de gagner en efficacité et en clarté,
              sans rogner sur la qualité ni sur le contrôle humain ainsi que sur le contenu et votre image.
            </FadeIn>
            <FadeIn as="p">
              Vous savez à quoi vous attendre : le périmètre du délai est donné dès le départ, les étapes sont
              visibles, et vous gardez la main sur les arbitrages importants. Cette transparence fait partie du
              service — elle évite les mauvaises surprises et sécurise votre investissement.
            </FadeIn>
            <FadeIn as="p">
              Chaque mission est traitée comme une collaboration : écoute, réactivité et exigence sur le détail. Mon
              rôle est de vous livrer un site dont vous pouvez être fier, aligné sur vos objectifs business et prêt à
              évoluer avec vous.
            </FadeIn>
          </div>
        </div>

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
