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
      "Oui. Les visiteurs sont pressés : plus une page met de temps à apparaître, plus ils partent. Un site refait dans les règles de l’art peut s’ouvrir en une poignée de secondes — ce qui aide aussi à mieux ressortir sur Google, qui tient compte de la rapidité.",
  },
  {
    question: "Pourquoi mon site peine-t-il à bien se positionner sur Google ?",
    answer:
      "Souvent parce que la structure ou l’ancienneté du site ne donnent pas assez de signaux clairs aux moteurs. Titres cohérents, pages claires, site sécurisé (cadenas dans le navigateur) et contenu utile pour vos clients : ce sont les bases pour être mieux compris — et mieux proposé — quand quelqu’un vous cherche.",
  },
  {
    question: "Mon design actuel suffit-il encore face à la concurrence ?",
    answer:
      "Un design fluide, des animations légères et une expérience 100 % responsive comptent : une grande partie du trafic se fait sur mobile ; un site pensé d’abord pour le téléphone rassure et convertit mieux.",
  },
  {
    question: "Pourquoi si peu de visiteurs me contactent alors que j’ai du trafic ?",
    answer:
      "Souvent parce que le parcours n’est pas assez clair. Navigation intuitive, appels à l’action visibles et formulaires simples aident à transformer les visites en demandes concrètes.",
  },
  {
    question: "La sécurité et les mises à jour : je dois tout confier à un développeur ?",
    answer:
      "Pas forcément pour le quotidien. Un site à jour, avec une connexion sécurisée et une base technique saine (moderne ou bien entretenue type WordPress), limite les risques tout en vous laissant la main sur vos textes et images lorsque c’est possible.",
  },
  {
    question: "Refaire un site : n’est-ce pas un coût sans retour sur le long terme ?",
    answer:
      "Une refonte bien menée peut réduire les factures récurrentes (hébergement mieux adapté, moins de dépannages d’urgence) et libérer du temps pour la croissance plutôt que pour les pannes.",
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
        text: "Un site refait proprement peut afficher l’essentiel en quelques secondes — moins d’attente au premier regard, moins de visiteurs qui ferment l’onglet tout de suite.",
      },
      {
        icon: "zap",
        text: "Nombre d’études marketing vont dans le même sens : accélérer la page d’accueil va souvent de pair avec moins de départs immédiats et de meilleurs résultats (selon votre secteur et votre proposition).",
      },
    ],
    statNote:
      "Google indique que la rapidité et la qualité d’usage d’une page comptent pour l’expérience recherchée ; des guides officiels expliquent comment mesurer et améliorer ces points.",
    statSourceLabel: "Google — pages rapides et utiles",
    statSourceUrl: "https://developers.google.com/search/docs/appearance/core-web-vitals",
  },
  {
    id: "seo",
    title: "Meilleur référencement naturel",
    bullets: [
      {
        icon: "search",
        text: "On aligne le site sur ce que les moteurs attendent aujourd’hui : pages rapides à charger, titres lisibles, plan du site transmis aux moteurs, adresse en HTTPS et contenus structurés pour vos lecteurs.",
      },
      {
        icon: "search",
        text: "Une base « propre » facilite l’exploration de votre site par Google : c’est une condition pour viser les recherches qui comptent vraiment pour vous.",
      },
    ],
    statNote:
      "Google publie un guide de démarrage pour découvrir les bonnes pratiques de référencement utiles aux petites structures comme aux grandes.",
    statSourceLabel: "Google — Guide du débutant en SEO",
    statSourceUrl: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
  },
  {
    id: "design",
    title: "Design moderne et mobile-first",
    bullets: [
      {
        icon: "smartphone",
        text: "Design fluide, animations légères, site qui s’adapte à l’écran : une grande partie des visites vient du mobile ; votre site doit être aussi à l’aise sur téléphone que sur ordinateur.",
      },
      {
        icon: "smartphone",
        text: "Une expérience soignée sur mobile renforce la confiance et la conversion, là où vos clients vous découvrent le plus souvent.",
      },
    ],
    statNote:
      "Les statistiques publiques sur l’usage d’Internet montrent l’importance du mobile dans le trafic mondial.",
    statSourceLabel: "StatCounter — parts de marché (monde)",
    statSourceUrl: "https://gs.statcounter.com/",
  },
  {
    id: "conversions",
    title: "Parcours orienté conversion",
    bullets: [
      {
        icon: "trending",
        text: "Menus clairs, boutons visibles, formulaires courts : l’objectif est qu’un visiteur comprenne tout de suite quoi faire pour vous écrire ou vous appeler — beaucoup de refontes y gagnent en demandes concrètes.",
      },
      {
        icon: "trending",
        text: "Sous le formulaire, de courtes mentions sur les données personnelles et la politique du site rassurent sans alourdir l’action.",
      },
    ],
    statNote:
      "Améliorer le parcours sur la page et la fluidité perçue va souvent dans le même sens qu’une meilleure expérience globale pour vos visiteurs.",
    statSourceLabel: "web.dev — expérience utilisateur",
    statSourceUrl: "https://web.dev/articles/vitals",
  },
  {
    id: "securite",
    title: "Sécurité et maintenance",
    bullets: [
      {
        icon: "shield",
        text: "Connexion sécurisée (cadenas), logiciels à jour et technique maîtrisée : cela réduit les risques de piratage et les mauvaises surprises, que le site soit récent ou une solution type WordPress bien suivie.",
      },
      {
        icon: "shield",
        text: "Moins de briques inutiles = moins de failles possibles et moins de correctifs « dans l’urgence ».",
      },
    ],
    statNote:
      "Le chiffrement HTTPS rassure les navigateurs et les internautes ; c’est aujourd’hui le socle d’un site professionnel crédible.",
    statSourceLabel: "Mozilla — HTTPS et sécurité web",
    statSourceUrl: "https://developer.mozilla.org/fr/docs/Glossary/HTTPS",
  },
  {
    id: "economies",
    title: "Économies sur la durée",
    bullets: [
      {
        icon: "piggy",
        text: "Plutôt qu’empiler des rustines sur un site vieillissant, une refonte structurante vise une base solide : hébergement adapté au trafic réel, pages qui ne surconsomment pas pour rien — selon votre situation, la facture peut baisser sur la durée.",
      },
      {
        icon: "piggy",
        text: "Maintenance simplifiée : vous investissez dans le développement plutôt que dans les pannes répétées.",
      },
    ],
    statNote:
      "Le coût total dépend de votre audience et de la complexité du projet ; l’idée est d’aligner hébergement et fonctionnalités sur ce dont vous avez vraiment besoin.",
    statSourceLabel: "Next.js — mise en ligne (documentation)",
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
      "La confiance en ligne repose sur un message cohérent, des mentions légales claires et une navigation agréable.",
    statSourceLabel: "CNIL — principes de protection des données",
    statSourceUrl: "https://www.cnil.fr/fr/les-principes-cles",
  },
] as const;
