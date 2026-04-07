import { LegalAccordion } from "@/components/LegalAccordion";
import { LegalPageShell } from "@/components/LegalPageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Conditions générales de vente — WebSite Studio",
  description:
    "Conditions générales de vente des prestations de création de sites web WebSite Studio.",
};

export default function ConditionsGeneralesVentePage() {
  return (
    <LegalPageShell
      title="Conditions générales de vente"
      lead={
        <>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les
            relations contractuelles entre WebSite Studio (ci-après le «
            Prestataire ») et toute personne physique ou morale (ci-après le «
            Client ») commandant des prestations de conception, développement,
            maintenance ou services associés à un site internet.
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
            id: "objet",
            title: "Objet et champ d’application",
            children: (
              <>
                <p>
                  Les CGV définissent les droits et obligations des parties dans
                  le cadre de la vente de prestations de services numériques
                  proposées par le Prestataire. Toute commande implique
                  l’adhésion sans réserve aux présentes CGV, sauf accord écrit
                  contraire.
                </p>
                <p>
                  Les conditions particulières figurant sur un devis ou un
                  contrat signé prévalent sur les CGV en cas de contradiction.
                </p>
              </>
            ),
          },
          {
            id: "commande",
            title: "Devis, commande et formation du contrat",
            children: (
              <>
                <p>
                  Les prestations font l’objet d’un devis gratuit et sans
                  engagement, détaillant la nature des travaux, les livrables,
                  les délais indicatifs et le prix. La commande est réputée
                  ferme après acceptation écrite du devis (signature ou
                  validation par email) et, le cas échéant, après versement de
                  l’acompte prévu.
                </p>
                <p>
                  Toute demande de modification du périmètre initial pourra
                  faire l’objet d’un avenant ou d’un devis complémentaire.
                </p>
              </>
            ),
          },
          {
            id: "prix",
            title: "Prix, modalités de paiement et facturation",
            children: (
              <>
                <p>
                  Les prix sont indiqués en euros, hors taxes si le Prestataire
                  est assujetti à la TVA, ou toutes taxes comprises selon le
                  devis. Les paiements peuvent être effectués par virement
                  bancaire ou tout moyen convenu par écrit.
                </p>
                <p>
                  Sauf mention contraire, un acompte est exigible au lancement
                  des travaux ; le solde est dû selon l’échéancier défini au
                  devis (par exemple à la livraison ou à la mise en ligne). Tout
                  retard de paiement pourra entraîner des pénalités de retard
                  au taux légal en vigueur, ainsi que l’indemnité forfaitaire
                  pour frais de recouvrement prévue par la réglementation.
                </p>
              </>
            ),
          },
          {
            id: "execution",
            title: "Exécution des prestations et délais",
            children: (
              <>
                <p>
                  Les délais communiqués sont indicatifs, sauf engagement
                  ferme exprès. Un retard raisonnable lié à la complexité du
                  projet, à des aléas techniques ou à l’absence d’éléments
                  nécessaires du Client ne constitue pas une défaillance du
                  Prestataire.
                </p>
                <p>
                  Le Client s’engage à fournir en temps utile les contenus
                  (textes, images, accès, identifiants) indispensables à la
                  réalisation. À défaut, les délais peuvent être reportés.
                </p>
              </>
            ),
          },
          {
            id: "propriete",
            title: "Propriété intellectuelle et cession des droits",
            children: (
              <>
                <p>
                  Sauf stipulation contraire, les créations réalisées
                  spécifiquement pour le Client (maquettes, code, design sur
                  mesure) sont cédées au Client après paiement intégral du prix
                  convenu, dans le périmètre défini au devis (usage, territoire
                  et durée).
                </p>
                <p>
                  Les éléments tiers (polices sous licence, bibliothèques open
                  source, CMS, plugins) restent soumis à leurs licences
                  respectives. Le Prestataire conserve le droit de mentionner
                  la réalisation dans son portfolio, sauf clause de
                  confidentialité signée.
                </p>
              </>
            ),
          },
          {
            id: "hebergement",
            title: "Hébergement, noms de domaine et services tiers",
            children: (
              <>
                <p>
                  L’hébergement, l’enregistrement de nom de domaine et les
                  abonnements aux services tiers (messagerie transactionnelle,
                  etc.) peuvent être souscrits par le Client ou par le
                  Prestataire selon les modalités du devis. Les conditions des
                  prestataires tiers (hébergeur, registraire, etc.) s’appliquent
                  en sus.
                </p>
              </>
            ),
          },
          {
            id: "responsabilite",
            title: "Responsabilité et garanties",
            children: (
              <>
                <p>
                  Le Prestataire est tenu d’une obligation de moyens. Sa
                  responsabilité ne saurait être engagée en cas de dommages
                  indirects (perte de chiffre d’affaires, perte de données du
                  fait du Client ou de tiers, etc.).
                </p>
                <p>
                  En toute hypothèse, la responsabilité du Prestataire, si elle
                  est établie, est limitée au montant total payé par le Client
                  pour la prestation concernée au cours des douze derniers
                  mois, sauf faute lourde ou dol.
                </p>
              </>
            ),
          },
          {
            id: "retractation",
            title: "Droit de rétractation et résiliation",
            children: (
              <>
                <p>
                  Pour les contrats conclus à distance avec un consommateur,
                  le droit de rétractation peut s’appliquer conformément aux
                  articles L.221-18 et suivants du Code de la consommation,
                  sous réserve des exceptions applicables aux prestations de
                  services pleinement exécutées ou personnalisées avec accord
                  exprès du consommateur.
                </p>
                <p>
                  Pour les professionnels, la résiliation obéit aux termes du
                  devis ou d’un préavis raisonnable en cas de contrat à durée
                  indéterminée. Les sommes dues pour les prestations déjà
                  réalisées restent exigibles.
                </p>
              </>
            ),
          },
          {
            id: "force-majeure",
            title: "Force majeure",
            children: (
              <p>
                Aucune des parties ne sera responsable d’un manquement dû à un
                cas de force majeure au sens de l’article 1218 du Code civil,
                notamment catastrophes naturelles, conflits sociaux,
                cyberattaques majeures affectant l’hébergeur, ou décisions des
                autorités.
              </p>
            ),
          },
          {
            id: "litiges",
            title: "Loi applicable et litiges",
            children: (
              <>
                <p>
                  Les présentes CGV sont régies par le droit français. En cas
                  de litige, une solution amiable sera recherchée avant toute
                  action. À défaut, les tribunaux français seront compétents,
                  selon les règles de compétence en vigueur.
                </p>
                <p>
                  Pour toute question relative aux présentes CGV :{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
              </>
            ),
          },
        ]}
      />
    </LegalPageShell>
  );
}
