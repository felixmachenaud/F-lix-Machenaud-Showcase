import { LegalPageShell } from "@/components/LegalPageShell";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Politique relative aux cookies — WebSite Studio",
  description:
    "Absence de bandeau cookies : pas d’analytics ni de traceurs publicitaires (Google Analytics, Meta, etc.) sur le site WebSite Studio.",
};

const sectionClass =
  "space-y-4 text-[15px] leading-relaxed text-gray-600 sm:text-base";

export default function PolitiqueCookiesPage() {
  return (
    <LegalPageShell
      title="Politique relative aux cookies et traceurs"
      lead={
        <>
          <p>
            Cette page précise pourquoi <strong>aucun bandeau de consentement aux
            cookies</strong> n&apos;est affiché sur ce site, dans le cadre actuel de
            son exploitation et des outils que nous utilisons — ou n&apos;utilisons
            pas.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Dernière mise à jour : avril 2026.
          </p>
        </>
      }
    >
      <article className="space-y-10 text-[15px] leading-relaxed text-gray-600 sm:text-base">
        <section className={sectionClass}>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Contexte réglementaire (synthèse)
          </h2>
          <p>
            En France et dans l&apos;Union européenne, le dépôt ou la lecture de{" "}
            <strong>traceurs</strong> (cookies, identifiants similaires) sur le
            terminal d&apos;un utilisateur est encadré : lorsqu&apos;ils ne sont pas
            <strong> strictement nécessaires</strong> au fonctionnement du service
            demandé (par exemple pour de la mesure d&apos;audience non essentielle, de
            la publicité ciblée ou du partage avec des réseaux sociaux), la
            réglementation exige en principe d&apos;en <strong>informer</strong> la
            personne et, le cas échéant, d&apos;obtenir son{" "}
            <strong>consentement</strong> préalable — d&apos;où l&apos;usage courant
            des bandeaux « Accepter / Refuser » sur de nombreux sites.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Notre choix : pas d&apos;outils tiers d&apos;analytics ni de publicité
          </h2>
          <p>
            <strong>WebSite Studio</strong> ne déploie pas sur ce site vitrine de
            solutions du type <strong>Google Analytics</strong>,{" "}
            <strong>Meta Pixel</strong> (Facebook / Instagram),{" "}
            <strong>outils publicitaires</strong>, widgets de réseaux sociaux
            embarqués suivant la navigation, ou autres traceurs équivalents destinés
            à mesurer l&apos;audience à des fins non strictement techniques ou à la
            publicité personnalisée.
          </p>
          <p>
            Sans ces services, nous ne sollicitons pas volontairement votre terminal
            pour des finalités qui imposeraient, en pratique, un bandeau de choix
            avant tout dépôt non indispensable — ce qui correspond à notre objectif :
            un site clair, léger, sans pistage publicitaire de votre parcours à des
            fins marketing.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Pourquoi il n&apos;y a pas de bandeau cookies ici
          </h2>
          <p>
            Dans la configuration actuelle, nous ne mettons pas en œuvre de
            mécanismes qui exigeraient, pour être conformes, un recueil systématique
            du consentement via une bannière (analytics marketing, remarketing,
            partage de données avec des régie(s) publicitaire(s), etc.).
          </p>
          <p>
            Les éventuels traceurs ou mécanismes <strong>strictement nécessaires</strong>{" "}
            au fonctionnement ou à la sécurité du service (par exemple dans le cadre
            de l&apos;hébergement par notre prestataire technique) relèvent d&apos;un
            autre régime : ils ne justifient pas l&apos;affichage d&apos;un bandeau
            identique à celui requis pour les cookies « de confort » ou publicitaires.
            Pour le détail des données personnelles et des sous-traitants (hébergement
            Vercel, acheminement des messages Resend), voir notre{" "}
            <Link
              href="/confidentialite"
              className="font-medium text-gray-900 underline underline-offset-2 hover:text-gray-700"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Hébergement et formulaire de contact
          </h2>
          <p>
            Le site est <strong>hébergé</strong> par Vercel Inc. Des cookies ou
            identifiants techniques peuvent être utilisés par l&apos;infrastructure
            pour assurer la diffusion des pages et la sécurité ; le détail figure dans
            la documentation et la politique de Vercel :{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-900 underline underline-offset-2 hover:text-gray-700"
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
          <p>
            L&apos;<strong>envoi des messages</strong> depuis le formulaire de contact
            est traité côté serveur via <strong>Resend</strong> : vous ne chargez pas
            un script Resend pour consulter les pages du site. Aucun cookie Resend
            n&apos;est requis pour afficher la vitrine ; des traceurs pourraient
            uniquement intervenir si vous ouvrez des pages externes (par exemple la
            documentation Resend) depuis un lien.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Si nous modifions le site plus tard
          </h2>
          <p>
            Si nous introduisions un jour des outils d&apos;analyse, de publicité ou
            tout traceur non indispensable au service tel que vous le demandez, nous
            mettrions à jour cette page et, le cas échéant, un mécanisme de
            consentement adapté <strong>avant</strong> le dépôt de tels traceurs.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Paramétrage de votre navigateur
          </h2>
          <p>
            Vous pouvez à tout moment configurer votre navigateur pour refuser ou
            supprimer des cookies. Un blocage total peut dans certains cas limiter
            l&apos;accès à des fonctionnalités sur le web en général ; consultez
            l&apos;aide de votre logiciel (Chrome, Firefox, Safari, Edge, etc.).
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Contact
          </h2>
          <p>
            Pour toute question sur cette politique :{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-gray-900 underline underline-offset-2 hover:text-gray-700"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </article>
    </LegalPageShell>
  );
}
