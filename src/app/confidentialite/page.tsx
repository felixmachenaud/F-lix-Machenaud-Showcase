import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment WebSite Studio traite les données personnelles collectées via ce site et le formulaire de contact.",
};

export default function Page() {
  return <LegalPage title="Politique de [[confidentialité]]" intro={privacy.intro} updated={privacy.updated} sections={privacy.sections} mode="accordion" />;
}
