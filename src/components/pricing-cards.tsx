import Image from "next/image";
import Link from "next/link";
import { plans, type Plan } from "@/lib/data";
import { FadeIn } from "./reveal";
import { TiltCard } from "./effects";

function Price({ plan }: { plan: Plan }) {
  const numeric = /^\d+$/.test(plan.price);
  return (
    <div className="p-price">
      <small>{plan.priceLabel}</small>
      {numeric ? (
        <b>
          {plan.price}
          <sup>€</sup>
        </b>
      ) : (
        <span className="serif">{plan.price}</span>
      )}
    </div>
  );
}

function Features({ plan }: { plan: Plan }) {
  return (
    <ul className="p-feat">
      {plan.features.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}

/** One-page site wireframe that "builds itself" on hover. */
function OnePageArt() {
  return (
    <div className="art-onepage" aria-hidden="true">
      <div className="op-bar">
        <i />
        <i />
        <i />
        <span />
      </div>
      <div className="op-body">
        <div className="op-hero">
          <span className="op-title" />
          <span className="op-line" />
          <span className="op-btn" />
        </div>
        <div className="op-cols">
          <span />
          <span />
          <span />
        </div>
        <span className="op-line wide" />
        <span className="op-line" />
      </div>
    </div>
  );
}

/** Fan of real project screenshots that opens on hover. */
function ShowcaseArt() {
  const shots = ["/images/projets/hautefeuille.jpeg", "/images/projets/komplices.jpeg", "/images/projets/restaurant-3d.jpeg"];
  return (
    <div className="art-fan" aria-hidden="true">
      <span className="fan-orb" />
      {shots.map((src, i) => (
        <div key={src} className={`fan-shot s${i}`}>
          <Image src={src} alt="" fill sizes="220px" style={{ objectFit: "cover", objectPosition: "top" }} />
        </div>
      ))}
    </div>
  );
}

/** Hub with connected tools; data pulses along the links. */
function AutomationArt() {
  const nodes = [
    { x: 40, y: 38, label: "@" },
    { x: 160, y: 22, label: "CRM" },
    { x: 280, y: 38, label: "API" },
    { x: 60, y: 130, label: "Bot" },
    { x: 260, y: 130, label: "⟳" },
  ];
  return (
    <svg className="art-nodes" viewBox="0 0 320 160" aria-hidden="true">
      {nodes.map((n, i) => (
        <g key={i}>
          <line x1="160" y1="88" x2={n.x} y2={n.y} className="link" />
          <line x1="160" y1="88" x2={n.x} y2={n.y} className="pulse" style={{ animationDelay: `${i * 0.35}s` }} />
        </g>
      ))}
      <circle cx="160" cy="88" r="26" className="hub" />
      <text x="160" y="94" textAnchor="middle" className="hub-t">
        ∞
      </text>
      {nodes.map((n, i) => (
        <g key={`n${i}`} className="node" style={{ animationDelay: `${i * 0.2}s` }}>
          <circle cx={n.x} cy={n.y} r="17" />
          <text x={n.x} y={n.y + 4} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function PricingCards() {
  const [essentiel, vitrine, outils] = plans;

  return (
    <div className="p-grid">
      <FadeIn delay={0.15} className="p-cell">
        <TiltCard className="p-tilt" max={5}>
          <article className="p-card p-light spot" style={{ ["--c" as string]: "var(--indigo)" }}>
            <OnePageArt />
            <p className="p-kicker">Pour démarrer</p>
            <h2>{essentiel.name}</h2>
            <p className="p-desc">{essentiel.description}</p>
            <Price plan={essentiel} />
            <Features plan={essentiel} />
            <Link href={essentiel.cta.href} className="btn p-btn">
              {essentiel.cta.label}
            </Link>
          </article>
        </TiltCard>
      </FadeIn>

      <FadeIn delay={0.25} className="p-cell p-cell-featured">
        <TiltCard className="p-tilt" max={5}>
          <article className="p-card p-dark spot" style={{ ["--c" as string]: "var(--violet-3)" }}>
            <span className="p-ribbon">Recommandé</span>
            <ShowcaseArt />
            <p className="p-kicker">Le plus complet</p>
            <h2>{vitrine.name}</h2>
            <p className="p-desc">{vitrine.description}</p>
            <Price plan={vitrine} />
            <Features plan={vitrine} />
            <Link href={vitrine.cta.href} className="btn btn-primary p-btn">
              {vitrine.cta.label} <span className="arrow">→</span>
            </Link>
          </article>
        </TiltCard>
      </FadeIn>

      <FadeIn delay={0.35} className="p-cell">
        <TiltCard className="p-tilt" max={5}>
          <article className="p-card p-vivid spot" style={{ ["--c" as string]: "#fff" }}>
            <AutomationArt />
            <p className="p-kicker">Sur mesure</p>
            <h2>{outils.name}</h2>
            <p className="p-desc">{outils.description}</p>
            <Price plan={outils} />
            <Features plan={outils} />
            <Link href={outils.cta.href} className="btn p-btn">
              {outils.cta.label} <span className="arrow">→</span>
            </Link>
          </article>
        </TiltCard>
      </FadeIn>
    </div>
  );
}
