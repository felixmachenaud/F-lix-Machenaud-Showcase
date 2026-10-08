import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Aurora } from "@/components/effects";
import { PricingCards } from "@/components/pricing-cards";
import "./pricing.css";
import { breadcrumbs } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Essentiel à partir de 690 €, site vitrine à partir de 1190 €, outils et applications sur devis. Choisissez l'offre qui vous ressemble.",
};

export default function PricingPage() {
  return (
    <section className="page-top pricing">
      <JsonLd data={breadcrumbs([{ name: "Tarifs", path: "/pricing" }])} />
      <Aurora />
      <div className="wrap">
        <RevealTitle as="h1" className="h-display" text="Choisissez l'offre [[qui vous ressemble]]" immediate />
        <FadeIn as="p" className="lead" delay={0.3}>
          Un site pour exister en ligne, un site vitrine complet pour convaincre, et des outils techniques pour
          automatiser et faire grandir votre activité.
        </FadeIn>

        <PricingCards />

        <FadeIn as="p" className="pricing-note">
          Les prix varient selon le niveau de technicité souhaité. N&apos;hésitez pas à m&apos;envoyer des exemples de
          sites ou d&apos;outils dont vous aimeriez vous inspirer, ou à{" "}
          <Link href="/productions/vitrines-web">découvrir mes réalisations</Link>.
        </FadeIn>
      </div>
    </section>
  );
}
