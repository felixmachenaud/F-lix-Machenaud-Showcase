/**
 * Catalogue des réalisations : une source unique pour les onglets, les routes et les cartes.
 */

export type ProductionCategoryId = "vitrine" | "logiciel" | "conciergerie";

export type ProductionCategory = {
  id: ProductionCategoryId;
  href: string;
  label: string;
  /** Libellé court pour les onglets sur petit écran */
  shortLabel: string;
  title: string;
  description: string;
};

export const PRODUCTION_CATEGORIES: readonly ProductionCategory[] = [
  {
    id: "vitrine",
    href: "/productions/vitrines-web",
    label: "Vitrines web",
    shortLabel: "Vitrines",
    title: "Vitrines web — Nos productions — WebSite Studio",
    description:
      "Sites vitrine réalisés : Alexandra Gillet, Les Komplices, L’Échappée, Lycée Hautefeuille, Eigenflow.",
  },
  {
    id: "conciergerie",
    href: "/productions/conciergeries-lcd",
    label: "Conciergeries & L.C.D",
    shortLabel: "Conciergeries",
    title: "Conciergeries & L.C.D — Nos productions — WebSite Studio",
    description:
      "Sites de conciergerie et locations de courte durée : Pastor & Co, T3 Bastide Saint-Louis, Welkeys.",
  },
  {
    id: "logiciel",
    href: "/productions/logiciels",
    label: "Logiciels",
    shortLabel: "Logiciels",
    title: "Logiciels — Nos productions — WebSite Studio",
    description:
      "Logiciels et applications sur mesure : Transports Imbert, Walt Community.",
  },
] as const;

export const DEFAULT_PRODUCTION_HREF = PRODUCTION_CATEGORIES[0].href;

export function getProductionCategory(id: ProductionCategoryId) {
  const category = PRODUCTION_CATEGORIES.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Catégorie de production inconnue : ${id}`);
  }
  return category;
}

export type ProductionSite = {
  id: string;
  name: string;
  href: string;
};

/** Carte « visuel + infos » sur /productions */
export type ProductionShowcase = {
  id: string;
  name: string;
  /** Lien public du projet. Absent = pas encore en ligne. */
  href?: string;
  category: ProductionCategoryId;
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
  /** Couleur de profondeur du cadre */
  accentColor?: string;
};

export const vitrineShowcases: ProductionShowcase[] = [
  {
    id: "alexandra-gillet",
    name: "Alexandra Gillet",
    href: "https://alexandra-gillet-showcase.vercel.app/",
    category: "vitrine",
    headlineLead: "Un site ",
    headlineItalic: "galerie d’œuvres d’art",
    headlineTail:
      " pour Alexandra Gillet : présenter le studio, les expositions et faciliter la prise de rendez-vous.",
    description:
      "Parcours galerie / œuvres / expositions, avec une prise de contact claire pour réserver un rendez-vous ou découvrir le travail de l’artiste.",
    stats: [
      { value: "Galerie", label: "Œuvres" },
      { value: "RDV", label: "Prise de contact" },
      { value: "Studio", label: "Identité" },
    ],
    imageSrc: "/images/agi_artiste.png",
    accentColor: "#111827",
  },
  {
    id: "komplices",
    name: "Les Komplices",
    href: "https://mockup-komplice.vercel.app/",
    category: "vitrine",
    headlineLead: "Un site ",
    headlineItalic: "orienté réservation",
    headlineTail:
      " pour le restaurant Les Komplices : parcours simplifié pour les clients et gestion allégée pour l’équipe.",
    description:
      "+70 % de réservations en ligne. Formulaire de réservation épuré, créneaux synchronisés en temps réel et confirmations automatiques par e-mail — moins de charge pour la salle, plus de tables remplies.",
    stats: [
      { value: "+70 %", label: "Réservations en ligne" },
      { value: "Temps réel", label: "Créneaux" },
      { value: "Auto", label: "Confirmations e-mail" },
    ],
    imageSrc: "/images/komplices.jpeg",
    accentColor: "#FF1493",
  },
  {
    id: "lechappee",
    name: "L’Échappée",
    href: "https://lechappee-mockup.vercel.app/#manifesto",
    category: "vitrine",
    headlineLead: "Un site ",
    headlineItalic: "innovant et immersif",
    headlineTail:
      " pour le restaurant — découvrir les assiettes, comme le pigeon des Costières, en 3D depuis son smartphone.",
    description:
      "Une vitrine centrée sur l’image et le décor, où la scénographie des plats et l’ambiance du lieu prennent toute la place pour faire vivre l’expérience avant même la visite.",
    stats: [
      { value: "3D", label: "Assiettes interactives" },
      { value: "Mobile", label: "Découverte smartphone" },
      { value: "Décor", label: "Mise en scène" },
    ],
    imageSrc: "/images/presentation4.jpeg",
    accentColor: "#facc15",
  },
  {
    id: "hautefeuille",
    name: "Lycée Hautefeuille",
    href: "https://web-site-htf.vercel.app",
    category: "vitrine",
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
  {
    id: "eigenflow",
    name: "Eigenflow",
    href: "https://www.eigenflow.fr/fr#testimonials",
    category: "vitrine",
    headlineLead: "Un site ",
    headlineItalic: "clair et orienté preuve",
    headlineTail:
      " pour présenter l’offre, structurer le discours et mettre en avant les témoignages clients.",
    description:
      "Mise en avant des retours clients, hiérarchie des contenus et parcours lisible : une vitrine pensée pour renforcer la confiance et soutenir la conversion.",
    stats: [
      { value: "Témoignages", label: "Preuve sociale" },
      { value: "Offre", label: "Clarté" },
      { value: "CTA", label: "Conversion" },
    ],
    imageSrc: "/images/presentation3.jpeg",
    accentColor: "#7dd3fc",
  },
];

export const logicielShowcases: ProductionShowcase[] = [
  {
    id: "imbert-transport",
    name: "Imbert Transport",
    href: "https://imbert-planning-68my-9bmgbme2z-felixmachenaud2-9491s-projects.vercel.app/",
    category: "logiciel",
    headlineLead: "Un logiciel ",
    headlineItalic: "de planning transport",
    headlineTail:
      " pour Transports Imbert : créer une journée, attribuer les camions et envoyer le planning aux chauffeurs.",
    description:
      "Espace métier pour préparer le planning du lendemain ou à l’avance, réutiliser un planning existant et suivre la flotte, les équipes et les messages au même endroit.",
    stats: [
      { value: "Planning", label: "Journée" },
      { value: "Flotte", label: "Camions" },
      { value: "Équipe", label: "Chauffeurs" },
    ],
    imageSrc: "/images/imbert_planning.png",
    accentColor: "#0f4c5c",
  },
  {
    id: "walt-community",
    name: "Walt Community",
    href: "https://walt-community-poc.vercel.app",
    category: "logiciel",
    headlineLead: "Une application ",
    headlineItalic: "de suivi mentorat",
    headlineTail:
      " pour l’association Walt : inscription des alternants et mentors, espaces dédiés et tableau de bord admin pour piloter l’accompagnement.",
    description:
      "Plateforme Next.js connectée à Supabase, conçue pour gérer jusqu’à 30 000 profils en base. Parcours séparés mentoré / mentor / équipe Walt, relations mentor ↔ mentoré, suivi des RDV et pastilles d’état — le tout synchronisé en temps réel côté serveur.",
    stats: [
      { value: "30k", label: "Profils en base" },
      { value: "Supabase", label: "Base temps réel" },
      { value: "3", label: "Espaces utilisateurs" },
    ],
    imageSrc: "/images/walt_picture.jpeg",
    accentColor: "#1a2350",
  },
];

export const conciergerieShowcases: ProductionShowcase[] = [
  {
    id: "pastor-co",
    name: "Pastor & Co",
    href: "https://stephan-pastor-website.vercel.app/",
    category: "conciergerie",
    headlineLead: "Un site de ",
    headlineItalic: "conciergerie à Nice",
    headlineTail:
      " pour Pastor & Co : présenter l’immobilier, les services et le parcours d’achat ou de location.",
    description:
      "Vitrine claire pour découvrir les biens, les services de conciergerie et les points de contact — un parcours pensé pour rassurer et convertir les demandes.",
    stats: [
      { value: "Nice", label: "Territoire" },
      { value: "Biens", label: "Immobilier" },
      { value: "Services", label: "Conciergerie" },
    ],
    imageSrc: "/images/pastor-co.png",
    accentColor: "#2563eb",
  },
  {
    id: "t3-bastide-st-louis",
    name: "T3 Bastide Saint-Louis",
    href: "https://mockup-la-bastite-carcassonne.vercel.app/",
    category: "conciergerie",
    headlineLead: "Une vitrine ",
    headlineItalic: "location de courte durée",
    headlineTail:
      " pour le T3 Bastide Saint-Louis à Carcassonne : réserver en direct, sans passer par les plateformes.",
    description:
      "+25 % de trafic organique, baisse des réservations via Booking et Airbnb au profit du canal direct. Intégration native du gestionnaire Beds24, panel admin dédié et pilotage des performances en temps réel.",
    stats: [
      { value: "+25 %", label: "Trafic" },
      { value: "Beds24", label: "Réservations natives" },
      { value: "Admin", label: "Pilotage perf." },
    ],
    imageSrc: "/images/carcassonne.jpeg",
    accentColor: "#C2410C",
  },
  {
    id: "welkeys",
    name: "Welkeys",
    href: "https://www.welkeys.com",
    category: "conciergerie",
    headlineLead: "Un site de ",
    headlineItalic: "conciergerie pensé conversion",
    headlineTail:
      " pour mieux mettre en avant les biens, renforcer le SEO et clarifier l’architecture globale du parcours.",
    description:
      "Présentation des logements, hiérarchie des contenus et points de contact travaillés pour soutenir la visibilité organique et transformer plus efficacement les visiteurs en demandes qualifiées.",
    stats: [
      { value: "SEO", label: "Visibilité" },
      { value: "Biens", label: "Mise en avant" },
      { value: "CTA", label: "Conversion" },
    ],
    imageSrc: "/images/presentation2.jpeg",
    accentColor: "#f97316",
  },
];

export const productionShowcases: ProductionShowcase[] = [
  ...vitrineShowcases,
  ...logicielShowcases,
  ...conciergerieShowcases,
];

/** Liens externes uniquement : les projets sans URL publique n’apparaissent pas ici. */
export const productionSites: ProductionSite[] = productionShowcases.flatMap(
  ({ id, name, href }) => (href ? [{ id, name, href }] : [])
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
