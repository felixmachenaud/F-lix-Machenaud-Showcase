/**
 * Sites présentés (landing, services, page Nos productions)
 */

export type ProductionSite = {
  id: string;
  name: string;
  href: string;
};

/** Carte « écran + infos » sur /productions */
export type ProductionShowcase = ProductionSite & {
  /** Phrase d’accroche : partie avant l’italique */
  headlineLead: string;
  /** Mise en avant (serif italique) */
  headlineItalic: string;
  /** Suite de la phrase après l’italique */
  headlineTail: string;
  /** Paragraphe descriptif sous le titre */
  description: string;
  stats: { value: string; label: string }[];
  /** Chemin public vers une vidéo MP4 (ex. /videos/conciergerie.mp4), optionnel */
  videoSrc?: string | null;
  /** Image d’attente avant lecture (optionnel) */
  videoPoster?: string | null;
};

export const productionShowcases: ProductionShowcase[] = [
  {
    id: "conciergerie",
    name: "Conciergerie pratique",
    href: "https://web-demo-eight-delta.vercel.app",
    headlineLead: "Une vitrine web ",
    headlineItalic: "moderne et rassurante",
    headlineTail:
      " pour présenter votre conciergerie et accompagner les voyageurs du premier clic à la réservation.",
    description:
      "Parcours fluide, informations essentielles mises en avant et appels à l’action visibles : le site met en valeur votre activité et facilite la prise de contact.",
    stats: [
      { value: "2024", label: "Mise en ligne" },
      { value: "100%", label: "Mobile first" },
      { value: "24/7", label: "Présence web" },
    ],
    videoSrc: "/videos/conciergerie.mp4",
    videoPoster: null,
  },
  {
    id: "hautefeuille",
    name: "Lycée Hautefeuille",
    href: "https://web-site-htf.vercel.app",
    headlineLead: "Un site ",
    headlineItalic: "institutionnel et lisible",
    headlineTail:
      " pour informer les familles, structurer l’information collège / lycée et valoriser la vie de l’établissement.",
    description:
      "Arborescence claire, actualités et contenus pédagogiques accessibles : une base solide pour l’image de l’établissement et le lien avec les parents.",
    stats: [
      { value: "40+", label: "Ans d’histoire" },
      { value: "2", label: "Sites collège & lycée" },
      { value: "100%", label: "Accessibilité visée" },
    ],
    videoSrc: "/videos/hautefeuille.mp4",
    videoPoster: null,
  },
];

export const productionSites: ProductionSite[] = productionShowcases.map(
  ({ id, name, href }) => ({ id, name, href })
);

/**
 * Fichiers essayés dans l’ordre (même nom, extensions courantes).
 * @deprecated conservé pour d’anciens composants éventuels
 */
export const PRODUCTIONS_HERO_SOURCES = [
  "/images/productions-hero.png",
  "/images/productions-hero.jpg",
  "/images/productions-hero.jpeg",
  "/images/productions-hero.webp",
] as const;
