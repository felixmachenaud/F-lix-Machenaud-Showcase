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
  category: "vitrine" | "application";
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
    id: "komplices",
    name: "Komplices",
    href: "https://mockup-komplice.vercel.app/",
    category: "vitrine",
    headlineLead: "Un site ",
    headlineItalic: "orienté réservation",
    headlineTail:
      " pour le restaurant Komplices : parcours simplifié pour les clients et gestion allégée pour l’équipe.",
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
    id: "welkeys",
    name: "Welkeys",
    href: "https://www.welkeys.com",
    category: "vitrine",
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
  {
    id: "lechappee",
    name: "L’Échappée",
    href: "https://lechappee-mockup.vercel.app/#manifesto",
    category: "vitrine",
    headlineLead: "Un site ",
    headlineItalic: "innovant et immersif",
    headlineTail:
      " qui permet de découvrir les assiettes en 3D directement depuis son smartphone.",
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
];

export const applicationShowcases: ProductionShowcase[] = [
  {
    id: "conciergerie-carcassonne",
    name: "Conciergerie Carcassonne",
    href: "https://mockup-la-bastite-carcassonne.vercel.app/",
    category: "application",
    headlineLead: "Une refonte ",
    headlineItalic: "orientée conversion et trafic",
    headlineTail:
      " pour Conciergerie Carcassonne : visibilité directe renforcée et moindre dépendance aux plateformes tierces.",
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
    id: "walt-community",
    name: "Walt Community",
    href: "https://walt-community-poc.vercel.app",
    category: "application",
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
    imageSrc: "/walt_picture.jpeg",
    accentColor: "#1a2350",
  },
];

export const productionShowcases: ProductionShowcase[] = [
  ...vitrineShowcases,
  ...applicationShowcases,
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
