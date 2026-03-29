import { PricingPlans } from "@/components/PricingPlans";

export const metadata = {
  title: "Tarifs — WebSite Studio",
  description:
    "Choisissez l’offre Basique, Pro ou Sur mesure. Tarifs fixes clairement indiqués.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingPlans />
    </main>
  );
}
