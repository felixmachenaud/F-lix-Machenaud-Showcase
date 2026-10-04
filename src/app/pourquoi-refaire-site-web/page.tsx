import type { Metadata } from "next";
import Link from "next/link";
import { ChatFaq, type Exchange } from "@/components/chat-faq";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Aurora } from "@/components/effects";

const tones = [
  { c: "var(--violet)", t: "var(--violet-50)" },
  { c: "var(--indigo)", t: "var(--indigo-50)" },
  { c: "var(--orchid)", t: "var(--orchid-50)" },
  { c: "var(--rose)", t: "var(--rose-50)" },
];

export const metadata: Metadata = {
  title: "Pourquoi refaire votre site web ?",
  description:
    "Un site lent ou daté vous fait perdre des opportunités. Vitesse, référencement, mobile, conversion, sécurité : les raisons de passer à une refonte.",
};

const discussions: Exchange[] = [
  {
    q: "Mon site met trop longtemps à s'afficher : est-ce vraiment un problème ?",
    a: "Oui. Les visiteurs sont pressés : plus une page met de temps à apparaître, plus ils partent. Un site refait dans les règles de l’art peut s’ouvrir en une poignée de secondes — ce qui aide aussi à mieux ressortir sur Google, qui tient compte de la rapidité.",
  },
  {
    q: "Pourquoi mon site peine-t-il à bien se positionner sur Google ?",
    a: "Souvent parce que la structure ou l’ancienneté du site ne donnent pas assez de signaux clairs aux moteurs. Titres cohérents, pages claires, site sécurisé (cadenas dans le navigateur) et contenu utile pour vos clients : ce sont les bases pour être mieux compris — et mieux proposé — quand quelqu’un vous cherche.",
  },
  {
    q: "Mon design actuel suffit-il encore face à la concurrence ?",
    a: "Un design fluide, des animations légères et une expérience 100 % responsive comptent : une grande partie du trafic se fait sur mobile ; un site pensé d’abord pour le téléphone rassure et convertit mieux.",
  },
  {
    q: "Pourquoi si peu de visiteurs me contactent alors que j’ai du trafic ?",
    a: "Souvent parce que le parcours n’est pas assez clair. Navigation intuitive, appels à l’action visibles et formulaires simples aident à transformer les visites en demandes concrètes.",
  },
  {
    q: "La sécurité et les mises à jour : je dois tout confier à un développeur ?",
    a: "Pas forcément pour le quotidien. Un site à jour, avec une connexion sécurisée et une base technique saine (moderne ou bien entretenue type WordPress), limite les risques tout en vous laissant la main sur vos textes et images lorsque c’est possible.",
  },
  {
    q: "Refaire un site : n’est-ce pas un coût sans retour sur le long terme ?",
    a: "Une refonte bien menée peut réduire les factures récurrentes (hébergement mieux adapté, moins de dépannages d’urgence) et libérer du temps pour la croissance plutôt que pour les pannes.",
  },
  {
    q: "Un site un peu daté : est-ce que ça nuit vraiment à ma crédibilité ?",
    a: "Les internautes associent souvent la qualité perçue du site à celle de l’entreprise. Moderniser l’image en ligne aide à rester crédible face à des concurrents plus récents.",
  },
];

const reasons = [
  {
    title: "Vitesse et performance",
    body: [
      "Un site refait proprement peut afficher l’essentiel en quelques secondes — moins d’attente au premier regard, moins de visiteurs qui ferment l’onglet tout de suite.",
      "Nombre d’études marketing vont dans le même sens : accélérer la page d’accueil va souvent de pair avec moins de départs immédiats et de meilleurs résultats (selon votre secteur et votre proposition).",
    ],
    keep: "Google indique que la rapidité et la qualité d’usage d’une page comptent pour l’expérience recherchée ; des guides officiels expliquent comment mesurer et améliorer ces points.",
    link: { label: "Google — pages rapides et utiles", href: "https://developers.google.com/search/docs/appearance/core-web-vitals" },
  },
  {
    title: "Meilleur référencement naturel",
    body: [
      "On aligne le site sur ce que les moteurs attendent aujourd’hui : pages rapides à charger, titres lisibles, plan du site transmis aux moteurs, adresse en HTTPS et contenus structurés pour vos lecteurs.",
      "Une base « propre » facilite l’exploration de votre site par Google : c’est une condition pour viser les recherches qui comptent vraiment pour vous.",
    ],
    keep: "Google publie un guide de démarrage pour découvrir les bonnes pratiques de référencement utiles aux petites structures comme aux grandes.",
    link: { label: "Google — Guide du débutant en SEO", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  },
  {
    title: "Design moderne et mobile-first",
    body: [
      "Design fluide, animations légères, site qui s’adapte à l’écran : une grande partie des visites vient du mobile ; votre site doit être aussi à l’aise sur téléphone que sur ordinateur.",
      "Une expérience soignée sur mobile renforce la confiance et la conversion, là où vos clients vous découvrent le plus souvent.",
    ],
    keep: "Les statistiques publiques sur l’usage d’Internet montrent l’importance du mobile dans le trafic mondial.",
    link: { label: "StatCounter — parts de marché (monde)", href: "https://gs.statcounter.com/" },
  },
  {
    title: "Parcours orienté conversion",
    body: [
      "Menus clairs, boutons visibles, formulaires courts : l’objectif est qu’un visiteur comprenne tout de suite quoi faire pour vous écrire ou vous appeler — beaucoup de refontes y gagnent en demandes concrètes.",
      "Sous le formulaire, de courtes mentions sur les données personnelles et la politique du site rassurent sans alourdir l’action.",
    ],
    keep: "Améliorer le parcours sur la page et la fluidité perçue va souvent dans le même sens qu’une meilleure expérience globale pour vos visiteurs.",
    link: { label: "web.dev — expérience utilisateur", href: "https://web.dev/articles/vitals" },
  },
  {
    title: "Sécurité et maintenance",
    body: [
      "Connexion sécurisée (cadenas), logiciels à jour et technique maîtrisée : cela réduit les risques de piratage et les mauvaises surprises, que le site soit récent ou une solution type WordPress bien suivie.",
      "Moins de briques inutiles = moins de failles possibles et moins de correctifs « dans l’urgence ».",
    ],
    keep: "Le chiffrement HTTPS rassure les navigateurs et les internautes ; c’est aujourd’hui le socle d’un site professionnel crédible.",
    link: { label: "Mozilla — HTTPS et sécurité web", href: "https://developer.mozilla.org/fr/docs/Glossary/HTTPS" },
  },
  {
    title: "Économies sur la durée",
    body: [
      "Plutôt qu’empiler des rustines sur un site vieillissant, une refonte structurante vise une base solide : hébergement adapté au trafic réel, pages qui ne surconsomment pas pour rien — selon votre situation, la facture peut baisser sur la durée.",
      "Maintenance simplifiée : vous investissez dans le développement plutôt que dans les pannes répétées.",
    ],
    keep: "Le coût total dépend de votre audience et de la complexité du projet ; l’idée est d’aligner hébergement et fonctionnalités sur ce dont vous avez vraiment besoin.",
    link: { label: "Next.js — mise en ligne (documentation)", href: "https://nextjs.org/docs/app/building-your-application/deploying" },
  },
  {
    title: "Crédibilité professionnelle",
    body: [
      "Un site qui fait « ancien » peut nuire à la confiance perçue : une image à jour permet de rivaliser avec des concurrents plus récents.",
      "Identité, contenus et preuves (avis, références) alignés : votre vitrine en ligne reflète votre niveau réel.",
    ],
    keep: "La confiance en ligne repose sur un message cohérent, des mentions légales claires et une navigation agréable.",
    link: { label: "CNIL — principes de protection des données", href: "https://www.cnil.fr/fr/les-principes-cles" },
  },
];

const gauges = ["Vitesse", "Confort", "Stabilité"];

export default function PourquoiPage() {
  return (
    <>
      <section className="page-top article-top">
        <Aurora />
        <div className="wrap">
          <FadeIn as="p" className="eyebrow">
            Conversion &amp; SEO
          </FadeIn>
          <RevealTitle as="h1" className="h-display" text="Pourquoi refaire [[votre site web ?]]" immediate />
          <FadeIn as="p" className="lead" delay={0.3}>
            Aujourd&apos;hui, un site lent ou daté vous fait perdre des opportunités. Une refonte pensée pour charger
            vite, être bien vu sur Google et offrir une lecture confortable sur téléphone répond à ce que vos visiteurs
            attendent — sans pistage publicitaire ni gadgets inutiles à l&apos;écran.
          </FadeIn>
          <FadeIn delay={0.45}>
            <ChatFaq items={discussions} />
          </FadeIn>
        </div>
      </section>

      <div className="wrap">
        <section className="perf">
          <FadeIn>
            <h2>Performance mesurable</h2>
            <p>
              En clair : votre page s&apos;affiche-t-elle rapidement, réagit-elle au toucher sans à-coups, et
              reste-t-elle stable à l&apos;écran ? Nous visons un site léger et soigné, sans outils de suivi
              publicitaire qui ralentissent la navigation.
            </p>
            <p className="eyebrow">Vitesse · Confort · Stabilité</p>
          </FadeIn>
          <FadeIn delay={0.15} className="gauges">
            {gauges.map((g) => (
              <div className="gauge" key={g}>
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#F1ECFF" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#6D45F0"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="314"
                    strokeDashoffset="20"
                    transform="rotate(-90 60 60)"
                  />
                  <path d="M42 61l12 12 24-26" fill="none" stroke="#6D45F0" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <b>{g}</b>
              </div>
            ))}
          </FadeIn>
        </section>

        <section className="method">
          <FadeIn as="div">
            <h2>Une méthode lisible : visibilité sur Google, site agréable, données personnelles au carré</h2>
          </FadeIn>
          <ul className="method-list">
            <FadeIn as="li" className="card">
              <strong>Être trouvé sur Google</strong>
              Titres et contenus structurés, pages claires pour les visiteurs comme pour les moteurs, informations
              utiles affichées proprement — sans vous noyer dans le vocabulaire technique.
            </FadeIn>
            <FadeIn as="li" className="card" delay={0.1}>
              <strong>Données personnelles</strong>
              Sur une vitrine comme celle-ci, pas de traceurs publicitaires imposés — pas de bandeau cookies superflu.
              La transparence repose sur la <Link href="/confidentialite" className="accent">politique de confidentialité</Link> et
              les courts textes sous le formulaire de contact.
            </FadeIn>
            <FadeIn as="li" className="card" delay={0.2}>
              <strong>Confort à l&apos;usage</strong>
              On évite les surcharges inutiles ; images et textes sont préparés pour charger vite et rester nets sur
              écran et mobile.
            </FadeIn>
          </ul>
        </section>

        <section className="reasons">
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={(i % 2) * 0.1} className="reason-wrap">
              <div className="card reason spot" style={{ ["--c" as string]: tones[i % 4].c, ["--t" as string]: tones[i % 4].t }}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{r.title}</h3>
              {r.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="keep">
                <b>À retenir :</b> {r.keep}{" "}
                <a href={r.link.href} target="_blank" rel="noreferrer">
                  {r.link.label} ↗
                </a>
              </p>
              </div>
            </FadeIn>
          ))}
        </section>

        <FadeIn className="about-cta next-step">
          <h2>
            Passez à <span className="serif">l&apos;étape suivante</span>
          </h2>
          <p style={{ position: "relative", color: "#b5afc8", maxWidth: 560, margin: "18px auto 0", lineHeight: 1.6 }}>
            Décrivez-moi votre projet : on verra ensemble si une refonte complète ou une évolution ciblée est la
            meilleure option pour votre activité.
          </p>
          <div className="ctas">
            <Link href="/contact" className="btn btn-primary">
              Me contacter <span className="arrow">→</span>
            </Link>
            <Link href="/rendez-vous" className="btn btn-ghost">
              On en parle de vive voix ?
            </Link>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
