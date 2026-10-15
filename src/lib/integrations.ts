/**
 * Logos d’outils — fichiers dans /public/images/integrations/
 */

export type IntegrationLogo = {
  id: string;
  src: string;
  alt: string;
};

/** Catalogue complet : hero landing + bandeau conciergerie. */
export const INTEGRATION_LOGOS: IntegrationLogo[] = [
  { id: "amenitiz", src: "/images/integrations/aminitiz.png", alt: "Amenitiz" },
  { id: "beds24", src: "/images/integrations/beds24.png", alt: "Beds24" },
  { id: "lodgify", src: "/images/integrations/lodgyfy.png", alt: "Lodgify" },
  { id: "smoobu", src: "/images/integrations/smoobu.png", alt: "Smoobu" },
  { id: "calendly", src: "/images/integrations/logo_calendly.png", alt: "Calendly" },
  { id: "claude", src: "/images/integrations/Claude_AI_symbol.svg.png", alt: "Claude" },
  { id: "gmail", src: "/images/integrations/Gmail_icon_(2020).svg.png", alt: "Gmail" },
  { id: "meet", src: "/images/integrations/Google_Meet-Logo.wine.png", alt: "Google Meet" },
  { id: "teams", src: "/images/integrations/Microsoft_Teams-Logo.wine.png", alt: "Microsoft Teams" },
  {
    id: "calendar",
    src: "/images/integrations/google_calendar_logo_icon_159345.webp",
    alt: "Google Agenda",
  },
];

/**
 * Bloc « Intégrez vos outils de travail » — logos dans /public/images/integrations/
 * Les noms de fichiers correspondent aux assets présents dans le dossier.
 */
export type IntegrationFanItem = {
  id: string;
  /** Nom du fichier sans extension (on essaie .png, .webp, .svg) */
  file: string;
  label: string;
  rotateDeg: number;
  liftPx: number;
  featured?: boolean;
  featuredTitle?: string;
  featuredSubtitle?: string;
};

export const INTEGRATION_FAN: IntegrationFanItem[] = [
  {
    id: "claude",
    file: "Claude_AI_symbol.svg",
    label: "Claude",
    rotateDeg: -18,
    liftPx: 36,
  },
  {
    id: "meet",
    file: "Google_Meet-Logo.wine",
    label: "Google Meet",
    rotateDeg: -9,
    liftPx: 14,
  },
  {
    id: "calendar",
    file: "google_calendar_logo_icon_159345",
    label: "Google Agenda",
    rotateDeg: 0,
    liftPx: 0,
    featured: true,
    featuredTitle: "Google Agenda",
    featuredSubtitle: "Calendrier et organisation",
  },
  {
    id: "teams",
    file: "Microsoft_Teams-Logo.wine",
    label: "Microsoft Teams",
    rotateDeg: 9,
    liftPx: 14,
  },
  {
    id: "gmail",
    file: "Gmail_icon_(2020).svg",
    label: "Gmail",
    rotateDeg: 18,
    liftPx: 36,
  },
];

export const INTEGRATION_LOGO_EXTENSIONS = ["png", "webp", "svg"] as const;
