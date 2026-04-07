import { LegalAccordion } from "@/components/LegalAccordion";
import { LegalPageShell } from "@/components/LegalPageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Politique de confidentialité — WebSite Studio",
  description:
    "Données personnelles, finalités, durées de conservation et droits (RGPD) — WebSite Studio.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageShell
      title="Politique de confidentialité"
      lead={
        <>
          <p>
            WebSite Studio (Félix Machenaud) attache une grande importance à la
            protection de vos données personnelles. La présente politique décrit
            quelles informations sont collectées lorsque vous utilisez le site
            vitrine et le formulaire de contact, dans quels buts, combien de
            temps elles sont conservées, avec quels sous-traitants elles peuvent
            être partagées, et quels sont vos droits au titre du Règlement
            général sur la protection des données (RGPD).
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
            id: "responsable",
            title: "Responsable du traitement",
            children: (
              <p>
                Le responsable du traitement des données est Félix Machenaud,
                agissant sous l’enseigne WebSite Studio, joignable à l’adresse{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            ),
          },
          {
            id: "donnees-collectees",
            title: "Quelles données collectons-nous ?",
            children: (
              <>
                <p>Nous traitons notamment les catégories de données suivantes :</p>
                <ul>
                  <li>
                    <strong>Données que vous nous transmettez via le formulaire
                    de contact</strong> : nom ou dénomination, adresse email, et
                    contenu du message (texte libre).
                  </li>
                  <li>
                    <strong>Données techniques automatiques</strong> : lorsque
                    vous consultez le site, notre hébergeur (Vercel) peut
                    collecter des journaux techniques tels que l’adresse IP
                    approximative, le type de navigateur, la date et l’heure de
                    la requête, et des informations relatives à la livraison
                    des pages (fins de sécurité et de fonctionnement du service).
                  </li>
                </ul>
                <p>
                  Nous ne vous demandons pas de créer de compte sur ce site
                  vitrine et ne collectons pas volontairement de catégories
                  particulières de données (santé, opinions, etc.) au-delà de ce
                  que vous indiquez dans votre message.
                </p>
              </>
            ),
          },
          {
            id: "finalites",
            title: "Pourquoi utilisons-nous ces données ?",
            children: (
              <>
                <p>Les finalités sont les suivantes :</p>
                <ul>
                  <li>
                    <strong>Répondre à vos demandes de contact</strong> et
                    échanger sur un éventuel projet (base légale : mesures
                    précontractuelles à votre demande ou intérêt légitime à
                    répondre aux sollicitations professionnelles).
                  </li>
                  <li>
                    <strong>Assurer le fonctionnement, la sécurité et la
                    maintenance</strong> du site (hébergement, prévention des
                    abus, journaux techniques — intérêt légitime et/ou obligation
                    légale selon le cas).
                  </li>
                </ul>
                <p>
                  Nous n’utilisons pas vos données pour du profilage automatisé
                  ni pour de la publicité ciblée sur ce site.
                </p>
              </>
            ),
          },
          {
            id: "conservation",
            title: "Combien de temps conservons-nous les données ?",
            children: (
              <>
                <p>
                  <strong>Messages de contact</strong> : conservés le temps
                  nécessaire au traitement de votre demande et à un éventuel
                  suivi commercial raisonnable, puis archivés ou supprimés
                  lorsque la relation ne nécessite plus leur conservation (en
                  pratique, courriers récents : jusqu’à trois ans à compter du
                  dernier contact en l’absence de contrat contraire, sauf
                  obligation légale de conservation plus longue).
                </p>
                <p>
                  <strong>Journaux d’hébergement</strong> : durées définies par
                  Vercel dans le cadre de son service (souvent limitées à ce qui
                  est nécessaire pour la sécurité et l’exploitation). Vous pouvez
                  consulter leur politique de confidentialité pour le détail
                  des catégories de données et des durées :{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vercel.com/legal/privacy-policy
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            id: "partage",
            title: "Avec qui partageons-nous les données ?",
            children: (
              <>
                <p>
                  Vos données sont traitées par le Prestataire et par des
                  sous-traitants strictement nécessaires au service :
                </p>
                <ul>
                  <li>
                    <strong>Vercel Inc.</strong> (hébergement et diffusion du
                    site sur le réseau mondial de Vercel — États-Unis et autres
                    régions selon leur infrastructure). Les transferts hors UE
                    sont encadrés par les clauses contractuelles types de la
                    Commission européenne ou mécanismes équivalents décrits par
                    Vercel.
                  </li>
                  <li>
                    <strong>Resend</strong> (envoi des emails transactionnels
                    lorsque vous soumettez le formulaire de contact : notre
                    serveur transmet votre message au service d’envoi pour
                    délivrer l’email vers la boîte du Prestataire). Politique de
                    confidentialité :{" "}
                    <a
                      href="https://resend.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      resend.com/legal/privacy-policy
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  Nous ne vendons pas vos données personnelles et ne les
                  cédons pas à des annonceurs.
                </p>
              </>
            ),
          },
          {
            id: "droits",
            title: "Vos droits (accès, rectification, suppression, etc.)",
            children: (
              <>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants, dans
                  les limites prévues par la loi :
                </p>
                <ul>
                  <li>
                    <strong>Droit d’accès</strong> et{" "}
                    <strong>rectification</strong> des données vous concernant ;
                  </li>
                  <li>
                    <strong>Droit à l’effacement</strong> (« droit à l’oubli »)
                    lorsque les conditions légales sont réunies ;
                  </li>
                  <li>
                    <strong>Droit à la limitation</strong> du traitement et{" "}
                    <strong>droit d’opposition</strong> dans les cas prévus ;
                  </li>
                  <li>
                    <strong>Droit à la portabilité</strong> lorsque le traitement
                    est automatisé et fondé sur le consentement ou le contrat ;
                  </li>
                  <li>
                    <strong>Droit d’introduire une réclamation</strong> auprès de
                    l’autorité de contrôle compétente (en France, la CNIL :{" "}
                    <a
                      href="https://www.cnil.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cnil.fr
                    </a>
                    ).
                  </li>
                </ul>
                <p>
                  Pour exercer vos droits, écrivez-nous à{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> en
                  précisant votre demande et, le cas échéant, une pièce
                  justificative d’identité.
                </p>
              </>
            ),
          },
          {
            id: "securite",
            title: "Sécurité",
            children: (
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles
                raisonnables (connexions sécurisées lorsque applicable, choix de
                prestataires reconnus, limitation des accès). Aucun traitement
                n’est totalement exempt de risque ; en cas d’incident affectant
                vos données, nous agirons dans le respect des obligations légales
                de notification.
              </p>
            ),
          },
          {
            id: "evolution",
            title: "Évolution de la politique",
            children: (
              <p>
                La présente politique peut être mise à jour pour refléter les
                évolutions du site ou du cadre légal. La date de mise à jour
                figure en tête de page. Nous vous invitons à la consulter
                régulièrement.
              </p>
            ),
          },
        ]}
      />
    </LegalPageShell>
  );
}
