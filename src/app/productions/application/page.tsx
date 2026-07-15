import { ProductionShowcaseAnimatedGrid } from "@/components/ProductionShowcaseAnimatedGrid";
import { applicationShowcases } from "@/lib/productions";

export const metadata = {
  title: "Application — Nos productions — WebSite Studio",
  description:
    "Applications web sur mesure : Walt Community, plateforme de suivi mentorat.",
};

export default function ApplicationPage() {
  return <ProductionShowcaseAnimatedGrid showcases={applicationShowcases} />;
}
