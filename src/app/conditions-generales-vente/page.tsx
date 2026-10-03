import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { cgv } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente et de prestation de services de WebSite Studio.",
};

export default function Page() {
  return <LegalPage title="Conditions générales [[de vente]]" intro={cgv.intro} updated={cgv.updated} sections={cgv.sections} mode="accordion" />;
}
