import { LegalAccordion } from "@/components/LegalAccordion";
import { LegalPageShell } from "@/components/LegalPageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Politique relative aux cookies — WebSite Studio",
  description:
    "Informations sur les traceurs utilisés sur le site WebSite Studio (Vercel, pas de publicité ni d’analytics tiers).",
};

export default function PolitiqueCookiesPage() {
  return (
    <LegalPageShell
      title="Politique relative aux cookies"
      lead={
        <>
          <p>
            Ce site privilégie une approche minimaliste : nous n’utilisons pas
            Google Analytics ni d’autres outils de mesure d’audience publicitaire.
            La présente page explique quels traceurs ou technologies similaires
            peuvent intervenir dans le cadre de l’hébergement (Vercel) et pourquoi
            le service d’envoi d’emails (Resend) n’introduit pas de cookies sur
            votre navigateur lors d’une simple visite des pages.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Dernière mise à jour : avril 2026.
          </p>
        </>
      }
    >
      <LegalAccordion
        items={[
          {
            id: "quest-ce",
            title: "Qu’est-ce qu’un cookie ?",
            children: (
              <p>
                Un cookie est un petit fichier déposé sur votre terminal
                (ordinateur, tablette, smartphone) lors de la visite d’un site
                ou de l’ouverture d’un email. D’autres technologies (stockage
                local, identifiants de session côté serveur) peuvent avoir des
                effets comparables pour le fonctionnement technique du service.
              </p>
            ),
          },
          {
            id: "quels-cookies",
            title: "Quels cookies ou traceurs utilisons-nous sur ce site ?",
            children: (
              <>
                <p>
                  <strong>Pas de cookies marketing ou de réseaux sociaux</strong>{" "}
                  imposés par WebSite Studio sur les pages que nous éditons : pas
                  de bannière publicitaire, pas de pixel Meta, pas de Google
                  Analytics.
                </p>
                <p>
                  <strong>Hébergement Vercel</strong> : la diffusion du site
                  passe par l’infrastructure Vercel. Des cookies ou identifiants
                  techniques peuvent être utilisés pour assurer la sécurité, la
                  répartition de charge, ou la continuité du service (cookies
                  « strictement nécessaires » au sens des recommandations de la
                  CNIL pour les traceurs exemptés de consentement lorsqu’ils sont
                  indispensables à la fourniture du service explicitement demandé).
                  Le détail des pratiques de Vercel est disponible dans leur
                  documentation et politique de confidentialité :{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vercel.com/legal/privacy-policy
                  </a>
                  .
                </p>
                <p>
                  <strong>Resend</strong> : l’envoi des messages issus du
                  formulaire de contact est traité côté serveur (notre API
                  appelle Resend pour transmettre l’email). Vous ne chargez pas
                  un script Resend sur les pages pour la simple navigation :{" "}
                  aucun cookie Resend n’est requis pour afficher le site. Des
                  cookies pourraient uniquement intervenir si vous consultez des
                  pages externes (par exemple la documentation Resend) en
                  suivant un lien depuis notre site.
                </p>
              </>
            ),
          },
          {
            id: "consentement",
            title: "Consentement et bandeau cookies",
            children: (
              <p>
                Les traceurs strictement nécessaires au fonctionnement du site
                ou à la sécurité peuvent être exemptés de consentement préalable
                selon la réglementation applicable. Les traceurs non nécessaires
                (analytics, publicité) feraient l’objet d’un recueil de
                consentement ; ce n’est pas le cas sur notre vitrine dans sa
                configuration actuelle. Si nous introduisions ultérieurement des
                outils d’analyse nécessitant un accord, un bandeau de
                consentement serait mis en place avant tout dépôt non essentiel.
              </p>
            ),
          },
          {
            id: "parametrage",
            title: "Comment paramétrer votre navigateur ?",
            children: (
              <>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser ou
                  supprimer les cookies. Attention : le blocage de tous les
                  cookies peut dans certains cas dégrader l’accès à certaines
                  fonctionnalités des sites en général. Consultez l’aide de votre
                  logiciel (Chrome, Firefox, Safari, Edge, etc.) pour les
                  paramètres « Confidentialité » ou « Cookies ».
                </p>
              </>
            ),
          },
          {
            id: "contact-cookies",
            title: "Contact",
            children: (
              <p>
                Pour toute question sur cette politique :{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            ),
          },
        ]}
      />
    </LegalPageShell>
  );
}
