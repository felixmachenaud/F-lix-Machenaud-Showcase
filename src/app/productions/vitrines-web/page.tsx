import { ProductionShowcaseAnimatedGrid } from "@/components/ProductionShowcaseAnimatedGrid";
import { getProductionCategory, vitrineShowcases } from "@/lib/productions";

const category = getProductionCategory("vitrine");

export const metadata = {
  title: category.title,
  description: category.description,
};

export default function VitrinesWebPage() {
  return <ProductionShowcaseAnimatedGrid showcases={vitrineShowcases} />;
}
