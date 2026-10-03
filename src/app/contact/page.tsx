import type { Metadata } from "next";
import { site } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { FadeIn, RevealTitle } from "@/components/reveal";
import { Aurora } from "@/components/effects";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question sur votre futur site, un devis ou simplement envie d'échanger ? Écrivez ou appelez, réponse rapide.",
};

export default function ContactPage() {
  return (
    <section className="page-top contact">
      <Aurora />
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <RevealTitle as="h1" className="h-display" text="Contactez-[[nous]]" immediate />
          <FadeIn as="p" className="lead" delay={0.3}>
            Une question sur votre futur site, un devis ou simplement envie d&apos;échanger ? Écrivez-nous ou
            appelez-nous, on vous répond rapidement.
          </FadeIn>
          <FadeIn delay={0.4}>
            <dl className="coords">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Téléphone</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Adresse</dt>
                <dd>{site.address}</dd>
              </div>
            </dl>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
