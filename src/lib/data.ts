export const site = {
  name: "WebSite Studio",
  owner: "Félix Machenaud",
  url: "https://felixtech.space",
  email: "felixmachenaud2@gmail.com",
  phone: "06 52 01 74 91",
  phoneHref: "tel:+33652017491",
  address: "France — sur rendez-vous",
  calendly: "https://calendly.com/felixmachenaud2/30min",
  linkedin: "https://www.linkedin.com/in/f%C3%A9lix-machenaud-8610bb231/",
  description:
    "Sites vitrines et applications sur mesure pour les restaurants, les indépendants et les PME. Design soigné, développement natif, SEO et performances.",
};

export const nav = [
  { href: "/a-propos", label: "À propos" },
  { href: "/productions/vitrines-web", label: "Mes réalisations", match: "/productions" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/#avis", label: "Avis" },
];

export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  image: string;
  href: string;
  /** Accent colour used for the glow and highlights when the project is active. */
  accent: string;
  /** Sentence shown as the card headline; the part between [[ ]] is set in serif italic. */
  headline: string;
  body: string;
  metrics: Metric[];
};

export const categories = {
  "vitrines-web": { label: "Vitrines web" },
  application: { label: "Application" },
} as const;

export type Category = keyof typeof categories;

export const projects: Record<Category, Project[]> = {
  "vitrines-web": [
    {
      slug: "komplices",
      accent: "#6D45F0",
      name: "Les Komplices",
      kind: "Restaurant",
      image: "/images/projets/komplices.webp",
      href: "https://mockup-komplice.vercel.app/",
      headline:
        "Un site [[orienté réservation]] pour le restaurant Komplices : parcours simplifié pour les clients et gestion allégée pour l’équipe.",
      body: "+70 % de réservations en ligne. Formulaire de réservation épuré, créneaux synchronisés en temps réel et confirmations automatiques par e-mail — moins de charge pour la salle, plus de tables remplies.",
      metrics: [
        { label: "Réservations en ligne", value: "+70 %" },
        { label: "Créneaux", value: "Temps réel" },
        { label: "Confirmations e-mail", value: "Auto" },
      ],
    },
    {
      slug: "hautefeuille",
      accent: "#5465FF",
      name: "Hautefeuille",
      kind: "Établissement scolaire",
      image: "/images/projets/hautefeuille.webp",
      href: "https://web-site-htf.vercel.app/",
      headline:
        "Un site [[institutionnel et lisible]] pour informer les familles, structurer l’information collège / lycée et valoriser la vie de l’établissement.",
      body: "Arborescence claire, actualités et contenus pédagogiques accessibles : une base solide pour l’image de l’établissement et le lien avec les parents.",
      metrics: [
        { label: "Ans d’histoire", value: "40+" },
        { label: "Sites collège & lycée", value: "2" },
        { label: "Accessibilité visée", value: "100 %" },
      ],
    },
    {
      slug: "welkeys",
      accent: "#B65CF2",
      name: "Welkeys",
      kind: "Conciergerie",
      image: "/images/projets/villas.webp",
      href: "https://www.welkeys.com/",
      headline:
        "Un site de conciergerie [[pensé conversion]] pour mieux mettre en avant les biens, renforcer le SEO et clarifier l’architecture globale du parcours.",
      body: "Présentation des logements, hiérarchie des contenus et points de contact travaillés pour soutenir la visibilité organique et transformer plus efficacement les visiteurs en demandes qualifiées.",
      metrics: [
        { label: "Visibilité", value: "SEO" },
        { label: "Mise en avant", value: "Biens" },
        { label: "Conversion", value: "CTA" },
      ],
    },
    {
      slug: "eigenflow",
      accent: "#EC6FB0",
      name: "Eigenflow",
      kind: "Conseil en IA",
      image: "/images/projets/consultant.webp",
      href: "https://www.eigenflow.fr/fr#testimonials",
      headline:
        "Un site clair et [[orienté preuve]] pour présenter l’offre, structurer le discours et mettre en avant les témoignages clients.",
      body: "Mise en avant des retours clients, hiérarchie des contenus et parcours lisible : une vitrine pensée pour renforcer la confiance et soutenir la conversion.",
      metrics: [
        { label: "Preuve sociale", value: "Témoignages" },
        { label: "Clarté", value: "Offre" },
        { label: "Conversion", value: "CTA" },
      ],
    },
    {
      slug: "lechappee",
      accent: "#8B6BF5",
      name: "L’Échappée",
      kind: "Restaurant",
      image: "/images/projets/restaurant-3d.webp",
      href: "https://lechappee-mockup.vercel.app/#manifesto",
      headline:
        "Un site [[innovant et immersif]] qui permet de découvrir les assiettes en 3D directement depuis son smartphone.",
      body: "Une vitrine centrée sur l’image et le décor, où la scénographie des plats et l’ambiance du lieu prennent toute la place pour faire vivre l’expérience avant même la visite.",
      metrics: [
        { label: "Assiettes interactives", value: "3D" },
        { label: "Découverte smartphone", value: "Mobile" },
        { label: "Mise en scène", value: "Décor" },
      ],
    },
  ],
  application: [
    {
      slug: "carcassonne",
      accent: "#5465FF",
      name: "Conciergerie Carcassonne",
      kind: "Application",
      image: "/images/projets/carcassonne.webp",
      href: "https://mockup-la-bastite-carcassonne.vercel.app/",
      headline:
        "Une refonte [[orientée conversion et trafic]] pour Conciergerie Carcassonne : visibilité directe renforcée et moindre dépendance aux plateformes tierces.",
      body: "+25 % de trafic organique, baisse des réservations via Booking et Airbnb au profit du canal direct. Intégration native du gestionnaire Beds24, panel admin dédié et pilotage des performances en temps réel.",
      metrics: [
        { label: "Trafic", value: "+25 %" },
        { label: "Réservations natives", value: "Beds24" },
        { label: "Pilotage perf.", value: "Admin" },
      ],
    },
    {
      slug: "walt",
      accent: "#B65CF2",
      name: "Walt",
      kind: "Application de mentorat",
      image: "/images/projets/walt.webp",
      href: "https://walt-community-poc.vercel.app/",
      headline:
        "Une application de [[suivi mentorat]] pour l’association Walt : inscription des alternants et mentors, espaces dédiés et tableau de bord admin pour piloter l’accompagnement.",
      body: "Plateforme Next.js connectée à Supabase, conçue pour gérer jusqu’à 30 000 profils en base. Parcours séparés mentoré / mentor / équipe Walt, relations mentor ↔ mentoré, suivi des RDV et pastilles d’état — le tout synchronisé en temps réel côté serveur.",
      metrics: [
        { label: "Profils en base", value: "30k" },
        { label: "Base temps réel", value: "Supabase" },
        { label: "Espaces utilisateurs", value: "3" },
      ],
    },
  ],
};

export const allProjects = [...projects["vitrines-web"], ...projects.application];

export const testimonials = [
  {
    name: "Sophie",
    role: "Concierge",
    quote:
      "J'avais un peu d'appréhension au départ en confiant la refonte de notre site à quelqu'un de plus jeune, et franchement, c'est moi qui avais tort. Dès le premier échange, j'ai été surprise par [[le sérieux et la clarté avec laquelle tout a été cadré]]. Il a pris le temps de vraiment comprendre ce qu'on voulait véhiculer, a posé les bonnes questions, et a proposé des directions visuelles auxquelles on n'aurait pas pensé nous-mêmes. Ce qui m'a aussi marquée, c'est la rigueur tout au long du projet : les délais ont été respectés, les retours intégrés rapidement, et on sentait qu'il était investi dans le résultat autant que nous. Quelqu'un d'attentionné, disponible, et qui fait clairement ce métier avec passion. Je recommande sans hésiter.",
  },
  {
    name: "Thomas",
    role: "Entrepreneur",
    quote:
      "Je ne connaissais rien au design et j'avais peur de ne pas savoir expliquer ce que je voulais. Il a su décrypter mes idées floues et en faire quelque chose de cohérent et professionnel. [[Le rendu est au-delà de ce que j'espérais]], et tout ça dans des délais vraiment courts. Le contact est simple, direct, agréable, on se sent entre de bonnes mains même quand on n'est pas expert.",
  },
  {
    name: "Abyane",
    role: "Consultant IA",
    quote:
      "Super expérience du début à la fin. Ce qui m'a vraiment plu c'est son côté méthodique, on sait toujours où on en est, rien n'est laissé au hasard. Et malgré ça, il y a quelque chose de chaleureux dans les échanges qui rend le projet vraiment agréable à mener. [[Le résultat est propre, moderne, et mes clients l'ont immédiatement remarqué.]] Encore merci !",
  },
  {
    name: "Aurélien",
    role: "Particulier",
    quote:
      "Rapide, efficace, et vraiment à l'écoute. [[Le site est exactement ce que j'avais en tête.]] Je referai appel à lui sans me poser de question.",
  },
];

export type Plan = {
  name: string;
  description: string;
  priceLabel: string;
  price: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Essentiel",
    description: "Un site d'une page, soigné et rapide, pour lancer votre présence en ligne.",
    priceLabel: "à partir de",
    price: "690",
    features: [
      "Site une page sur mesure",
      "Design soigné, aux couleurs de votre marque",
      "100% responsive (mobile, tablette, desktop)",
      "Référencement SEO de base",
      "Formulaire de contact et mise en ligne",
    ],
    cta: { label: "On se prend un café ?", href: "/rendez-vous" },
  },
  {
    name: "Site vitrine",
    description:
      "Idéal pour présenter votre activité avec un site rapide, élégant et entièrement pensé sur mesure.",
    priceLabel: "à partir de",
    price: "1190",
    features: [
      "Design sur mesure & identité soignée",
      "Développement natif, sans template",
      "100% responsive (mobile, tablette, desktop)",
      "Optimisation SEO & performances",
      "Mise en ligne & accompagnement",
    ],
    cta: { label: "On se prend un café ?", href: "/rendez-vous" },
    featured: true,
  },
  {
    name: "Outils & Applications",
    description:
      "Au-delà de la vitrine : des solutions techniques (CRM, chatbot, automatisations…) conçues pour faire grandir votre activité.",
    priceLabel: "sur mesure",
    price: "Sur devis",
    features: [
      "Chatbot client intelligent",
      "Automatisation de mailing & relances",
      "CRM d'entreprise sur mesure",
      "Intégrations & connexions API",
      "Applications & extensions web",
    ],
    cta: { label: "Devis gratuit", href: "/contact" },
  },
];

export const tools = [
  { name: "Google Agenda", src: null },
  { name: "Gmail", src: "/images/outils/gmail.webp" },
  { name: "Google Meet", src: "/images/outils/meet.webp" },
  { name: "Microsoft Teams", src: "/images/outils/teams.webp" },
  { name: "Claude", src: "/images/outils/claude.webp" },
];
