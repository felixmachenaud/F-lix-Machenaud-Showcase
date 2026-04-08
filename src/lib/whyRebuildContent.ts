/**
 * Contenu éditorial — page « Pourquoi refaire votre site web »
 * (titres, FAQ animée, sections détaillées, JSON-LD).
 */

export type WhyRebuildQAPair = {
  question: string;
  answer: string;
};

/** Séquence affichée dans le carrousel type « roue » (6 s entre chaque couple). */
export const WHY_REBUILD_QA_PAIRS: readonly WhyRebuildQAPair[] = [
  {
    question: "Mon site met trop longtemps à s'afficher : est-ce vraiment un problème ?",
    answer:
      "Oui. Un site refait avec Next.js peut viser un chargement en moins de 2 secondes, ce qui va dans le sens d’une meilleure rétention des visiteurs et d’un meilleur positionnement, car la vitesse fait partie des signaux pris en compte par Google (Core Web Vitals).",
  },
  {
    question: "Pourquoi mon site peine-t-il à bien se positionner sur Google ?",
    answer:
      "Un site moderne peut être structuré pour le SEO 2026 : Core Web Vitals solides, titres H1–H3 cohérents, plan de site XML, HTTPS et balisage sémantique — les bases pour être compris par les moteurs.",
  },
  {
    question: "Mon design actuel suffit-il encore face à la concurrence ?",
    answer:
      "Un design fluide, des animations légères et une expérience 100 % responsive comptent : une grande partie du trafic se fait sur mobile ; un site pensé mobile-first rassure et convertit mieux.",
  },
  {
    question: "Pourquoi si peu de visiteurs me contactent alors que j’ai du trafic ?",
    answer:
      "Souvent parce que le parcours n’est pas assez clair. Navigation intuitive, appels à l’action visibles et formulaires simples aident à transformer les visites en demandes concrètes.",
  },
  {
    question: "La sécurité et les mises à jour : je dois tout confier à un développeur ?",
    answer:
      "Pas forcément. SSL, logiciels à jour et une stack claire (par ex. Next.js bien déployé ou WordPress bien tenu) permettent d’être protégé tout en gardant la main sur le contenu au quotidien.",
  },
  {
    question: "Refaire un site : n’est-ce pas un coût sans retour sur le long terme ?",
    answer:
      "Une refonte bien menée peut réduire les coûts récurrents (hébergement mieux dimensionné, moins de correctifs d’urgence) et libérer du temps pour la croissance plutôt que pour les pannes.",
  },
  {
    question: "Un site un peu daté : est-ce que ça nuit vraiment à ma crédibilité ?",
    answer:
      "Les internautes associent souvent la qualité perçue du site à celle de l’entreprise. Moderniser l’image en ligne aide à rester crédible face à des concurrents plus récents.",
  },
] as const;

export type WhyRebuildBulletIcon =
  | "zap"
  | "search"
  | "smartphone"
  | "trending"
  | "shield"
  | "piggy"
  | "award";

export type WhyRebuildSection = {
  id: string;
  title: string;
  bullets: readonly { icon: WhyRebuildBulletIcon; text: string }[];
  /** Phrase courte avec renvoi vers une source officielle ou reconnue */
  statNote: string;
  statSourceLabel: string;
  statSourceUrl: string;
};

export const WHY_REBUILD_SECTIONS: readonly WhyRebuildSection[] = [
  {
    id: "vitesse",
    title: "Vitesse et performance",
    bullets: [
      {
        icon: "zap",
        text: "Un site refait avec Next.js peut viser un chargement utile en quelques secondes — objectif : éviter la frustration du premier écran et les abandons précoces.",
      },
      {
        icon: "zap",
        text: "Dans de nombreux retours d’expérience marketing, accélérer fortement la page d’accueil est associé à une baisse sensible du taux de rebond et à de meilleures performances commerciales (effets variables selon le secteur).",
      },
    ],
    statNote:
      "Google utilise les Core Web Vitals (LCP, INP, CLS) comme signaux d’expérience ; les documentations officielles décrivent comment les mesurer et les optimiser.",
    statSourceLabel: "Google Search Central — Core Web Vitals",
    statSourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
  },
  {
    id: "seo",
    title: "Meilleur référencement naturel",
    bullets: [
      {
        icon: "search",
        text: "Optimisation alignée avec les attentes actuelles des moteurs : Core Web Vitals au vert, titres H1–H3 structurants, plan de site XML, HTTPS et HTML sémantique.",
      },
      { icon: "search", text: "Une base technique propre facilite l’exploration et l’indexation — prérequis pour viser la visibilité sur les requêtes qui comptent pour vous." },
    ],
    statNote:
      "Les bonnes pratiques SEO techniques et de contenu sont documentées par Google pour aider à l’exploration et à l’indexation.",
    statSourceLabel: "Google — Guide du débutant en SEO",
    statSourceUrl: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
  },
  {
    id: "design",
    title: "Design moderne et mobile-first",
    bullets: [
      {
        icon: "smartphone",
        text: "Design fluide, animations légères, responsive : sur l’ensemble du web, le mobile représente souvent la majorité des visites — votre site doit être impeccable sur petit écran.",
      },
      { icon: "smartphone", text: "Une expérience soignée sur mobile renforce la confiance et la conversion, là où vos clients vous découvrent le plus souvent." },
    ],
    statNote:
      "La répartition desktop / mobile / tablette est publiée en continu par les statistiques de parts de marché des navigateurs et OS.",
    statSourceLabel: "StatCounter — parts de marché (monde)",
    statSourceUrl: "https://gs.statcounter.com/",
  },
  {
    id: "conversions",
    title: "Parcours orienté conversion",
    bullets: [
      {
        icon: "trending",
        text: "Navigation intuitive, CTA visibles, formulaires courts : objectif, transformer davantage de visites en demandes concrètes — des gains substantiels sont couramment observés après refonte (selon le contexte).",
      },
      {
        icon: "trending",
        text: "Mentions d’information sous le formulaire (RGPD, sous-traitants décrits dans la politique de confidentialité) : transparence sans alourdir l’action.",
      },
    ],
    statNote:
      "L’optimisation du parcours utilisateur et de la performance est reliée à l’expérience globale mesurée par les Core Web Vitals.",
    statSourceLabel: "web.dev — Web Vitals",
    statSourceUrl: "https://web.dev/articles/vitals",
  },
  {
    id: "securite",
    title: "Sécurité et maintenance",
    bullets: [
      {
        icon: "shield",
        text: "SSL, composants à jour, pile maîtrisée : Next.js en production ou WordPress bien entretenu limitent les risques et les mauvaises surprises.",
      },
      { icon: "shield", text: "Moins de dépendances inutiles = moins de surface d’attaque et de correctifs d’urgence." },
    ],
    statNote:
      "Le chiffrement HTTPS est un signal de confiance pour les navigateurs et les utilisateurs ; il fait partie du socle d’un site professionnel.",
    statSourceLabel: "Mozilla — HTTPS et sécurité web",
    statSourceUrl: "https://developer.mozilla.org/fr/docs/Glossary/HTTPS",
  },
  {
    id: "economies",
    title: "Économies sur la durée",
    bullets: [
      {
        icon: "piggy",
        text: "Migration ou refonte structurante : plutôt qu’un empilement de rustines, on vise un socle durable — l’hébergement edge et les pages statiques peuvent réduire les coûts récurrents selon le cas.",
      },
      { icon: "piggy", text: "Maintenance simplifiée : vous investissez dans la croissance plutôt que dans les pannes répétées." },
    ],
    statNote:
      "Le coût total dépend de votre trafic et de votre stack ; l’objectif est d’aligner hébergement et complexité sur les besoins réels.",
    statSourceLabel: "Next.js — documentation (déploiement)",
    statSourceUrl: "https://nextjs.org/docs/app/building-your-application/deploying",
  },
  {
    id: "credibilite",
    title: "Crédibilité professionnelle",
    bullets: [
      {
        icon: "award",
        text: "Un site qui fait « ancien » peut nuire à la confiance perçue : une image à jour permet de rivaliser avec des concurrents plus récents.",
      },
      { icon: "award", text: "Identité, contenus et preuves (avis, références) alignés : votre vitrine en ligne reflète votre niveau réel." },
    ],
    statNote:
      "La confiance en ligne repose sur la cohérence du message, la transparence (mentions légales, politique de confidentialité) et l’expérience utilisateur.",
    statSourceLabel: "CNIL — principes de protection des données",
    statSourceUrl: "https://www.cnil.fr/fr/les-principes-cles",
  },
] as const;
