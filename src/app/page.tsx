import { HeroRing } from "@/components/hero-ring";
import { Testimonials } from "@/components/testimonials";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Counter, VelocityMarquee } from "@/components/effects";

const stats = [
  { value: "+70 %", label: "de réservations en ligne", source: "Les Komplices", c: "var(--violet)", t: "var(--violet-50)" },
  { value: "+25 %", label: "de trafic organique", source: "Conciergerie Carcassonne", c: "var(--indigo)", t: "var(--indigo-50)" },
  { value: "30 000", label: "profils gérés en temps réel", source: "Walt", c: "var(--orchid)", t: "var(--orchid-50)" },
  { value: "7", label: "projets livrés, du restaurant à l'application", source: "Vitrines et applications", c: "var(--rose)", t: "var(--rose-50)" },
];

export default function Home() {
  return (
    <>
      <HeroRing />

      <VelocityMarquee
        items={["Design sur mesure", "Développement natif", "SEO & performances", "100 % responsive", "Applications web"]}
      />

      <section className="stats">
        <div className="wrap">
          <div className="stats-head">
            <RevealTitle className="h-section" text="Des résultats [[qui se mesurent]]" />
            <FadeIn as="p">Chaque projet est pensé pour un objectif concret : plus de réservations, plus de visibilité, moins de dépendance.</FadeIn>
          </div>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <FadeIn key={s.source} delay={i * 0.08}>
                <div style={{ ["--c" as string]: s.c, ["--t" as string]: s.t }} className="stat spot">
                  <b>
                    <Counter value={s.value} />
                  </b>
                  <span>{s.label}</span>
                  <small>{s.source}</small>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="avis" className="home-avis">
        <div className="wrap">
          <RevealTitle className="h-section center" text="Ce qu'ils ont pensé [[de mon travail]]" />
          <Testimonials />
        </div>
      </section>
    </>
  );
}
