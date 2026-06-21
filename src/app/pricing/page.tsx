import { PricingPlans } from "@/components/PricingPlans";

export const metadata = {
  title: "Tarifs — WebSite Studio",
  description:
    "Site vitrine sur mesure à partir de 1190€ et création d’outils techniques (CRM, chatbot, automatisations) sur devis.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingPlans />
    </main>
  );
}
