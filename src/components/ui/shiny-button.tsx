import type React from "react";

type Variant = "primary" | "dark" | "ghost";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
}

/**
 * Shiny call-to-action button in the site palette. The effect itself lives in
 * `src/app/buttons.css` (shared by every `.btn`), so links styled with
 * `className="btn btn-primary"` look identical to this component.
 */
export function ShinyButton({ children, variant = "primary", className = "", ...props }: ShinyButtonProps) {
  const variantClass = variant === "dark" ? "" : `btn-${variant}`;
  return (
    <button className={`btn ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
