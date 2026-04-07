import { LegalAccordion } from "@/components/LegalAccordion";
import { LegalPageShell } from "@/components/LegalPageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Politique de confidentialité — WebSite Studio",
  description:
    "Traitement des données personnelles, Vercel, Resend, droits RGPD — WebSite Studio.",
};

export default function ConfidentialitePage() {
  return (
    <LegalPageShell
      title="Politique de confidentialité"
      lead={
        <>
          <p>
            La présente politique décrit comment <strong>WebSite Studio</strong>{" "}
            (Félix Machenaud) traite les données personnelles lorsque vous utilisez
            ce site et le formulaire de contact. Elle est rédigée conformément au
            Règlement général sur la protection des données (RGPD) et à la loi
            « Informatique et Libertés ».
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
            id: "identite",
            title: "A. Identité du responsable de traitement",
            children: (
              <p>
                Le <strong>responsable du traitement</strong> des données personnelles
                collectées via ce site est : <strong>Félix Machenaud</strong>,
                exerçant sous le nom commercial <strong>WebSite Studio</strong>{" "}
                (activité d&apos;auto-entrepreneur). L&apos;adresse du siège ou du
                domiciliation professionnelle sera indiquée sur les devis et factures ;
                pour toute correspondance relative aux données personnelles :{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            ),
          },
          {
            id: "finalites",
            title: "B. Finalités (pourquoi ces données ?)",
            children: (
              <>
                <p>
                  L&apos;<strong>adresse électronique</strong> et les informations que
                  vous saisissez dans le formulaire sont utilisées{" "}
                  <strong>
                    uniquement pour répondre à votre demande de contact
                  </strong>{" "}
                  et, le cas échéant, pour un échange professionnel lié à cette
                  demande.
                </p>
                <p className="mt-3">
                  Elles ne servent pas à vous adresser des sollicitations
                  commerciales non sollicitées (« spam »), ne sont pas vendues ni
                  cédées à des tiers à des fins de prospection, et ne font pas l&apos;objet
                  de profilage automatisé dans ce cadre.
                </p>
                <p className="mt-3">
                  Les journaux techniques sont utilisés pour assurer la{" "}
                  <strong>sécurité</strong>, la <strong>maintenance</strong> et la{" "}
                  <strong>continuité de service</strong> du site.
                </p>
              </>
            ),
          },
          {
            id: "bases-legales",
            title: "C. Bases légales du traitement",
            children: (
              <>
                <p>
                  <strong>Réponse à votre message</strong> : le traitement des données
                  que vous transmettez volontairement repose notamment sur{" "}
                  <strong>
                    l&apos;exécution de mesures précontractuelles à votre demande
                  </strong>{" "}
                  et/ou sur{" "}
                  <strong>
                    l&apos;intérêt légitime
                  </strong>{" "}
                  de WebSite Studio à répondre aux sollicitations professionnelles
                  (article 6, paragraphes 1, points b) et f) du RGPD).
                </p>
                <p className="mt-3">
                  <strong>Case à cocher au formulaire</strong> : lorsque vous cochez la
                  case d&apos;acceptation de la présente politique avant envoi, vous
                  confirmez avoir pris connaissance des informations sur le traitement
                  et, le cas échéant,{" "}
                  <strong>consentir</strong> expressément à l&apos;acheminement du
                  message via le prestataire technique Resend dans les conditions
                  décrites ci-dessous (article 6, paragraphe 1, point a) du RGPD,
                  lorsque le consentement constitue la base applicable à cette étape).
                </p>
                <p className="mt-3">
                  <strong>Journaux d&apos;hébergement</strong> : intérêt légitime en
                  matière de sécurité et de fonctionnement du service, et le cas échéant
                  obligation légale selon la nature des données concernées.
                </p>
              </>
            ),
          },
          {
            id: "sous-traitants",
            title: "D. Sous-traitants — hébergement (Vercel) et envoi d&apos;e-mails (Resend)",
            children: (
              <>
                <p>
                  Certaines opérations sont confiées à des prestataires qui traitent
                  des données pour le compte de WebSite Studio, dans le respect du RGPD.
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Hébergement</strong> : le site est hébergé par{" "}
                    <strong>Vercel Inc.</strong> (États-Unis). Les données peuvent être
                    traitées sur une infrastructure située hors de l&apos;Union
                    européenne. Ces transferts sont encadrés par les instruments
                    prévus par la réglementation (notamment les clauses contractuelles
                    types de la Commission européenne ou mécanismes équivalents), comme
                    décrit dans la documentation et la politique de confidentialité de
                    Vercel :{" "}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 underline underline-offset-2 hover:text-gray-700"
                    >
                      vercel.com/legal/privacy-policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Envoi des messages issus du formulaire</strong> : la
                    livraison de l&apos;e-mail est assurée par{" "}
                    <strong>Resend Inc.</strong> (États-Unis), en qualité de prestataire
                    technique. Les données nécessaires à l&apos;envoi (notamment
                    expéditeur, destinataire, contenu du message) sont transmises à
                    Resend pour cet unique besoin d&apos;acheminement. Politique de
                    confidentialité :{" "}
                    <a
                      href="https://resend.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 underline underline-offset-2 hover:text-gray-700"
                    >
                      resend.com/legal/privacy-policy
                    </a>
                    .
                  </li>
                </ul>
                <p className="mt-4">
                  WebSite Studio ne revend pas vos données à des annonceurs et ne les
                  cède pas à des tiers pour leur propre usage commercial indépendant
                  du service décrit ci-dessus.
                </p>
              </>
            ),
          },
          {
            id: "conservation",
            title: "E. Durée de conservation",
            children: (
              <>
                <p>
                  Les données issues du <strong>formulaire de contact</strong> sont
                  conservées le <strong>temps nécessaire au traitement de votre demande</strong> et à un éventuel suivi directement lié à celle-ci.
                </p>
                <p className="mt-3">
                  En l&apos;absence d&apos;échange ultérieur avec vous, elles sont{" "}
                  <strong>supprimées ou archivées au plus tard deux ans après le dernier contact</strong>, sauf obligation légale de conservation plus longue (par
                  exemple conservation comptable ou contentieux).
                </p>
                <p className="mt-3">
                  Les <strong>journaux techniques</strong> sont conservés pour des
                  durées limitées fixées par Vercel dans le cadre de son service ; se
                  reporter à sa politique pour le détail.
                </p>
              </>
            ),
          },
          {
            id: "droits",
            title: "F. Droits des personnes concernées",
            children: (
              <>
                <p>
                  Conformément au RGPD, vous disposez notamment des droits suivants,
                  dans les limites prévues par la loi :
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong>Droit d&apos;accès</strong> aux données vous concernant ;
                  </li>
                  <li>
                    <strong>Droit de rectification</strong> des données inexactes ;
                  </li>
                  <li>
                    <strong>Droit à l&apos;effacement</strong> (« droit à l&apos;oubli »)
                    lorsque les conditions légales sont réunies ;
                  </li>
                  <li>
                    <strong>Droit à la limitation</strong> du traitement et{" "}
                    <strong>droit d&apos;opposition</strong> dans les cas prévus ;
                  </li>
                  <li>
                    <strong>Droit d&apos;introduire une réclamation</strong> auprès de
                    l&apos;autorité de contrôle (en France :{" "}
                    <a
                      href="https://www.cnil.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 underline underline-offset-2 hover:text-gray-700"
                    >
                      CNIL
                    </a>
                    ).
                  </li>
                </ul>
                <p className="mt-4">
                  <strong>Exercice des droits :</strong> adressez votre demande à{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, en précisant
                  l&apos;objet de votre demande et, si nécessaire, une pièce
                  justificative d&apos;identité. Une réponse vous sera apportée dans un
                  délai d&apos;un mois, sauf complexité particulière prévue par la
                  réglementation.
                </p>
              </>
            ),
          },
          {
            id: "donnees",
            title: "Données collectées",
            children: (
              <>
                <p>Sont notamment traitées les données suivantes :</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong>Formulaire de contact</strong> : nom ou dénomination,
                    adresse électronique, contenu du message.
                  </li>
                  <li>
                    <strong>Données techniques</strong> : lors de la consultation du
                    site, l&apos;hébergeur (Vercel) peut enregistrer des journaux
                    techniques (par ex. adresse IP, type de navigateur, horodatage des
                    requêtes) pour la sécurité et le fonctionnement du service.
                  </li>
                </ul>
                <p className="mt-3">
                  Aucun compte utilisateur n&apos;est requis sur ce site vitrine. Nous
                  ne sollicitons pas volontairement de données sensibles (santé,
                  opinions, etc.) : abstenez-vous de les inclure dans vos messages sauf
                  nécessité avérée.
                </p>
              </>
            ),
          },
          {
            id: "securite",
            title: "Sécurité",
            children: (
              <p>
                WebSite Studio met en œuvre des mesures techniques et organisationnelles
                appropriées (choix de prestataires reconnus, communications sécurisées
                lorsque applicable, limitation des accès). En cas d&apos;incident de
                sécurité affectant vos données, les notifications prévues par la loi
                seront effectuées lorsque requis.
              </p>
            ),
          },
          {
            id: "evolution",
            title: "Modification de la politique",
            children: (
              <p>
                La présente politique peut être mise à jour pour refléter l&apos;évolution
                du site ou du cadre légal. La date de dernière mise à jour figure en
                tête de page. Nous vous invitons à la consulter régulièrement.
              </p>
            ),
          },
        ]}
      />
    </LegalPageShell>
  );
}
