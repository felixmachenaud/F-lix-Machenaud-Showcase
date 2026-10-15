import { ProductionShowcaseAnimatedGrid } from "@/components/ProductionShowcaseAnimatedGrid";
import {
  conciergerieShowcases,
  getProductionCategory,
} from "@/lib/productions";

const category = getProductionCategory("conciergerie");

export const metadata = {
  title: category.title,
  description: category.description,
};

export default function ConciergeriesLcdPage() {
  return <ProductionShowcaseAnimatedGrid showcases={conciergerieShowcases} />;
}
