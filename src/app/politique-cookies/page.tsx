import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { cookies } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politique relative aux cookies",
  description: "Pourquoi aucun bandeau cookies n'est affiché sur ce site : pas d'analytics ni de publicité.",
};

export default function Page() {
  return <LegalPage title="Politique relative [[aux cookies]]" intro={cookies.intro} updated={cookies.updated} sections={cookies.sections} mode="flow" />;
}
