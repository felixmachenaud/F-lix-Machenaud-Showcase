import { PricingPlans } from "@/components/PricingPlans";

export const metadata = {
  title: "Tarifs — WebSite Studio",
  description:
    "Site sur mesure à partir de 990€. Échangeons sur votre projet et vos références d’inspiration.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingPlans />
    </main>
  );
}
