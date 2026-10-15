/**
 * Logos d’outils — fichiers dans /public/images/integrations/
 */

export type IntegrationLogo = {
  id: string;
  src: string;
  alt: string;
  /** Multiplicateur de taille dans le bandeau (1 = taille de base). */
  scale?: number;
};

/** Catalogue complet : hero landing + bandeau conciergerie. */
export const INTEGRATION_LOGOS: IntegrationLogo[] = [
  { id: "smoobu", src: "/images/integrations/smoobu.png", alt: "Smoobu" },
  { id: "claude", src: "/images/integrations/Claude_AI_symbol.svg.png", alt: "Claude" },
  { id: "lodgify", src: "/images/integrations/lodgyfy.png", alt: "Lodgify", scale: 1.5 },
  {
    id: "teams",
    src: "/images/integrations/Microsoft_Teams-Logo.wine.png",
    alt: "Microsoft Teams",
    scale: 1.5,
  },
  { id: "amenitiz", src: "/images/integrations/aminitiz.png", alt: "Amenitiz" },
  { id: "gmail", src: "/images/integrations/Gmail_icon_(2020).svg.png", alt: "Gmail" },
  { id: "calendly", src: "/images/integrations/logo_calendly.png", alt: "Calendly", scale: 1.6 },
  { id: "beds24", src: "/images/integrations/beds24.png", alt: "Beds24", scale: 1.5 },
  { id: "guesty", src: "/images/integrations/Guesty.png", alt: "Guesty", scale: 1.5 },
  {
    id: "calendar",
    src: "/images/integrations/google_calendar_logo_icon_159345.webp",
    alt: "Google Agenda",
    scale: 1.6,
  },
  { id: "superhote", src: "/images/integrations/superhote.png", alt: "Superhôte" },
  { id: "hostaway", src: "/images/integrations/hostaway.png", alt: "Hostaway", scale: 1.5 },
];
