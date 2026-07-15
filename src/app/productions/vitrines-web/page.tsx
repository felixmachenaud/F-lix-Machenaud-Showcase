import { ProductionShowcaseAnimatedGrid } from "@/components/ProductionShowcaseAnimatedGrid";
import { vitrineShowcases } from "@/lib/productions";

export const metadata = {
  title: "Vitrines web — Nos productions — WebSite Studio",
  description:
    "Sites vitrine réalisés : Komplices, Lycée Hautefeuille, Welkeys, Eigenflow, L’Échappée.",
};

export default function VitrinesWebPage() {
  return <ProductionShowcaseAnimatedGrid showcases={vitrineShowcases} />;
}
