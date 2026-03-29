import { ContactForm } from "@/components/ContactForm";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/site";

export const metadata = {
  title: "Contact — WebSite Studio",
  description:
    "Contactez WebSite Studio pour discuter de votre site web sur mesure.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-7rem)] bg-white sm:min-h-[calc(100vh-8rem)]">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Colonne gauche : texte + coordonnées */}
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contactez-nous
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-gray-600 sm:text-base">
              Une question sur votre futur site, un devis ou simplement envie
              d&apos;échanger&nbsp;? Écrivez-nous ou appelez-nous, on vous
              répond rapidement.
            </p>

            <dl className="mt-12 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-5 sm:py-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="block text-[15px] font-semibold text-gray-950 underline-offset-2 transition hover:text-gray-700 hover:underline sm:text-base"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-5 sm:py-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Téléphone
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${CONTACT_PHONE_TEL}`}
                    className="block text-[15px] font-semibold text-gray-950 underline-offset-2 transition hover:text-gray-700 hover:underline sm:text-base"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-5 sm:py-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Adresse
                </dt>
                <dd className="mt-2 text-[15px] font-semibold leading-snug text-gray-950 sm:text-base">
                  {CONTACT_ADDRESS}
                </dd>
              </div>
            </dl>
          </div>

          {/* Colonne droite : carte formulaire */}
          <div className="min-w-0 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
