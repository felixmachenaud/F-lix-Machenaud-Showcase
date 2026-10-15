import { ProductionShowcaseAnimatedGrid } from "@/components/ProductionShowcaseAnimatedGrid";
import { getProductionCategory, logicielShowcases } from "@/lib/productions";

const category = getProductionCategory("logiciel");

export const metadata = {
  title: category.title,
  description: category.description,
};

export default function LogicielsPage() {
  return <ProductionShowcaseAnimatedGrid showcases={logicielShowcases} />;
}
