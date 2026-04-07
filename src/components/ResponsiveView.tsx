import type { ReactNode } from "react";

type Variant = "block" | "flex";

const desktopOnly: Record<Variant, string> = {
  block: "hidden md:block",
  flex: "hidden md:flex",
};

const mobileOnly: Record<Variant, string> = {
  block: "md:hidden",
  flex: "flex md:hidden",
};

type Props = {
  children: ReactNode;
  className?: string;
  /** Par défaut : flux bloc. Utilisez `flex` pour les barres d’outils. */
  variant?: Variant;
};

/**
 * Affiche le contenu uniquement sous le breakpoint `md` (téléphones / petites tablettes en portrait).
 * Le desktop ne charge pas de styles différents : c’est le même arbre, masqué par CSS (pas de double hydratation).
 */
export function MobileOnly({ children, className = "", variant = "block" }: Props) {
  return <div className={`${mobileOnly[variant]} ${className}`.trim()}>{children}</div>;
}

/**
 * Affiche le contenu à partir de `md` — inchangé sur ordinateur et tablettes larges.
 */
export function DesktopOnly({ children, className = "", variant = "block" }: Props) {
  return <div className={`${desktopOnly[variant]} ${className}`.trim()}>{children}</div>;
}
