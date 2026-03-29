/** Lien Calendly (surcharge possible via NEXT_PUBLIC_CALENDLY_URL) */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/felixmachenaud2/30min";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/f%C3%A9lix-machenaud-8610bb231/";

/** Violet boutons / accents (landing, services) */
export const BRAND_VIOLET = "#7C3AED";

/** Bleu type Calendly (agenda / liens réservation) */
export const CALENDLY_BLUE = "#0069FF";

/** Ombres du titre blanc sur photo (à propos, productions) */
export const WHITE_TITLE_SHADOW =
  "0 0 1px rgba(55,55,55,0.9), 0 1px 2px rgba(0,0,0,0.45), 0 -1px 2px rgba(0,0,0,0.35), 1px 1px 3px rgba(0,0,0,0.4), -1px -1px 3px rgba(0,0,0,0.35), 0 2px 10px rgba(90,90,90,0.55)";

/** Texte blanc, contour et ombres violet marque (#7C3AED) */
export const WHITE_VIOLET_OUTLINE_SHADOW =
  "0 0 1px rgba(124,58,237,0.95), 0 1px 2px rgba(124,58,237,0.55), 1px 1px 3px rgba(124,58,237,0.5), -1px -1px 3px rgba(124,58,237,0.45), 0 2px 10px rgba(124,58,237,0.4), 0 4px 18px rgba(124,58,237,0.28)";

/** Page contact — coordonnées affichées */
export const CONTACT_EMAIL = "felixmachenaud2@gmail.com";
export const CONTACT_PHONE_TEL = "+33652017491";
export const CONTACT_PHONE_DISPLAY = "06 52 01 74 91";
/** À ajuster si besoin (prestation à distance / rendez-vous) */
export const CONTACT_ADDRESS = "France — sur rendez-vous";
