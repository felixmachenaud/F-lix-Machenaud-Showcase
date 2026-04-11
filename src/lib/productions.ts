/**
 * Sites présentés (landing, services, page Nos productions)
 */

export type ProductionSite = {
  id: string;
  name: string;
  href: string;
};

/** Carte « visuel + infos » sur /productions */
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
  /** Photo d’aperçu au-dessus du texte (fichier dans /public) */
  imageSrc: string;
};

export const productionShowcases: ProductionShowcase[] = [
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
    imageSrc: "/images/presentation1.jpeg",
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
