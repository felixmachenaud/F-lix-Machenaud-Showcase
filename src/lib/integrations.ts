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
