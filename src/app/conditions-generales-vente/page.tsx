import { LegalAccordion } from "@/components/LegalAccordion";
import { LegalPageShell } from "@/components/LegalPageShell";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Conditions générales de vente — WebSite Studio",
  description:
    "Conditions générales de vente et de prestation de services WebSite Studio — création de sites web.",
};

export default function ConditionsGeneralesVentePage() {
  return (
    <LegalPageShell
      title="Conditions générales de vente et de prestation de services"
      lead={
        <>
          <p>
            Les présentes conditions générales de vente et de prestation de
            services (ci-après les « CGV ») régissent les relations contractuelles
            entre <strong>WebSite Studio</strong> et ses clients, pour toute
            prestation de création de site internet ou service connexe proposé
            par WebSite Studio.
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
            id: "article-1",
            title: "Article 1 — Définitions",
            children: (
              <>
                <p>Au sens des présentes CGV, les termes suivants ont la signification indiquée ci-dessous :</p>
                <ul className="mt-3 space-y-3">
                  <li>
                    <strong>WebSite Studio</strong> désigne le prestataire, entrepreneur individuel (auto-entrepreneur) exerçant sous ce nom commercial ; le siège social sera précisé ultérieurement sur les documents contractuels et factures.
                  </li>
                  <li>
                    <strong>Client</strong> désigne toute personne physique (particulier) ou personne morale (professionnel) ayant conclu un accord avec WebSite Studio en vue de la réalisation d&apos;un site internet ou de prestations associées.
                  </li>
                  <li>
                    <strong>Devis</strong> désigne le document contractuel gratuit établi par WebSite Studio, décrivant les prestations, le prix et les conditions d&apos;exécution du projet.
                  </li>
                  <li>
                    <strong>Cahier des charges</strong> désigne le document co-rédigé par les parties définissant les besoins, objectifs et spécifications du projet.
                  </li>
                  <li>
                    <strong>Livrable</strong> désigne tout élément remis au Client dans le cadre de l&apos;exécution du contrat (maquettes, site finalisé, accès à un système de gestion de contenu, documentation, etc.).
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: "article-2",
            title: "Article 2 — Objet et description des services",
            children: (
              <>
                <p>
                  WebSite Studio propose la création de <strong>sites vitrines sur mesure</strong>, selon deux formules : la <strong>Formule Basique</strong> et la <strong>Formule Pro</strong>.
                </p>
                <p className="mt-3">
                  La <strong>Formule Pro</strong> inclut notamment l&apos;hébergement et la connexion à un CMS (système de gestion de contenu), dans les conditions définies au devis. La <strong>Formule Basique</strong> n&apos;inclut pas ces deux éléments, sauf stipulation contraire au devis.
                </p>
                <p className="mt-3">
                  WebSite Studio agit en qualité de <strong>prestataire ponctuel</strong> : une fois le projet livré et les conditions du cahier des charges satisfaites, WebSite Studio n&apos;est plus engagé contractuellement envers le Client, sous réserve des obligations légales ou des garanties expressément prévues. Toute demande de modification ou d&apos;évolution postérieure à la livraison fera l&apos;objet d&apos;une <strong>prestation distincte</strong>, soumise à devis additionnel et acceptation du Client.
                </p>
              </>
            ),
          },
          {
            id: "article-3",
            title: "Article 3 — Formation du contrat",
            children: (
              <>
                <p>
                  Le contrat prend effet à la <strong>date de signature du devis</strong> par le Client, que cette signature soit matérialisée sur support papier ou par tout moyen électronique équivalent (validation par courriel, case à cocher, signature électronique, etc.).
                </p>
                <p className="mt-3">
                  Le devis est établi gratuitement par WebSite Studio sur la base du cahier des charges co-rédigé avec le Client. Le devis et le contrat qu&apos;il matérialise demeurent valides jusqu&apos;à la livraison complète du projet et le paiement intégral des honoraires, sous réserve des dispositions relatives à la résiliation.
                </p>
                <p className="mt-3">
                  L&apos;acceptation du devis vaut <strong>acceptation pleine et entière</strong> des présentes CGV. Toute clause contraire figurant dans les documents du Client est réputée non écrite, sauf accord écrit exprès de WebSite Studio.
                </p>
              </>
            ),
          },
          {
            id: "article-4",
            title: "Article 4 — Cahier des charges et brief",
            children: (
              <>
                <p>
                  Le cahier des charges est <strong>co-rédigé</strong> par WebSite Studio et le Client avant le démarrage effectif du projet. Le Client est invité à exprimer ses attentes de manière aussi précise et exhaustive que possible.
                </p>
                <p className="mt-3">
                  Le brief peut être modifié en cours de projet sous <strong>deux conditions cumulatives</strong> : la volonté explicite du Client et la faisabilité technique et créative de la modification, appréciée par WebSite Studio. Toute modification substantielle du brief initial pourra donner lieu à un <strong>avenant au devis</strong>, soumis à validation du Client avant exécution.
                </p>
                <p className="mt-3">
                  WebSite Studio ne pourra être tenu responsable d&apos;un résultat jugé insatisfaisant lorsque celui-ci résulte d&apos;un <strong>brief incomplet, imprécis ou contradictoire</strong> fourni par le Client.
                </p>
              </>
            ),
          },
          {
            id: "article-5",
            title: "Article 5 — Livrables et validation",
            children: (
              <>
                <p>
                  Dans le cadre de l&apos;exécution du projet, WebSite Studio pourra présenter des <strong>livrables intermédiaires</strong>, notamment des maquettes, dans un délai <strong>indicatif</strong> d&apos;environ une semaine après le démarrage effectif du projet ou d&apos;une phase de travail. Ce délai est purement indicatif et ne constitue pas un engagement contractuel de délai ferme.
                </p>
                <p className="mt-3">
                  Le Client dispose d&apos;un <strong>délai raisonnable</strong> pour valider chaque livrable. En l&apos;absence de retour motivé dans ce délai, le livrable sera réputé <strong>validé tacitement</strong>.
                </p>
                <p className="mt-3">
                  Toute modification demandée <strong>après validation</strong> d&apos;un livrable constitue une prestation supplémentaire et fera l&apos;objet d&apos;un devis additionnel accepté par le Client.
                </p>
              </>
            ),
          },
          {
            id: "article-6",
            title: "Article 6 — Délais d&apos;exécution",
            children: (
              <>
                <p>
                  WebSite Studio <strong>ne s&apos;engage pas</strong> sur un délai de livraison ferme et définitif, sauf mention expresse et écrite contraire au devis.
                </p>
                <p className="mt-3">
                  À titre purement indicatif, et sous réserve de la complexité du projet et de la réactivité du Client, la durée habituelle de réalisation d&apos;un site vitrine est de l&apos;ordre de <strong>quelques semaines</strong>.
                </p>
                <p className="mt-3">
                  Les délais peuvent être allongés en cas de retard du Client dans la fourniture des éléments nécessaires (textes, visuels, validations). Dans ce cas, WebSite Studio sera en droit de <strong>décaler le planning</strong> d&apos;une durée équivalente au retard constaté. WebSite Studio met en œuvre les moyens raisonnables pour exécuter le projet dans les meilleurs délais.
                </p>
              </>
            ),
          },
          {
            id: "article-7",
            title: "Article 7 — Conditions financières et paiement",
            children: (
              <>
                <p>
                  Les prix sont ceux mentionnés dans le devis, exprimés en <strong>euros</strong>. WebSite Studio bénéficie de la <strong>franchise en base de TVA</strong> conformément à l&apos;article 293 B du Code général des impôts ; la mention « TVA non applicable, art. 293 B du CGI » figurera sur les factures.
                </p>
                <p className="mt-3">
                  <strong>Acompte :</strong> un acompte de <strong>15 %</strong> du montant total TTC est exigible à la signature du devis. Le démarrage effectif du projet est conditionné au règlement de cet acompte.
                </p>
                <p className="mt-3">
                  <strong>Solde :</strong> le solde de <strong>85 %</strong> est exigible le jour même où l&apos;ensemble des conditions du cahier des charges initial ont été réalisées et le site livré. WebSite Studio notifiera le Client de cette livraison par écrit (notamment par courriel).
                </p>
                <p className="mt-3">
                  En cas de non-paiement du solde à la date d&apos;exigibilité, des <strong>pénalités de retard</strong> seront dues au taux légal en vigueur majoré de cinq (5) points, calculées par jour de retard, ainsi qu&apos;une <strong>indemnité forfaitaire pour frais de recouvrement de quarante (40) euros</strong>, conformément à l&apos;article L. 441-10 du Code de commerce.
                </p>
                <p className="mt-3">
                  En cas de non-paiement persistant au-delà de quinze (15) jours après la livraison, WebSite Studio se réserve le droit de <strong>suspendre l&apos;accès</strong> au site livré jusqu&apos;à régularisation complète du paiement, sans préjudice des autres voies de recours.
                </p>
                <p className="mt-3">Aucun escompte ne sera consenti pour paiement anticipé.</p>
              </>
            ),
          },
          {
            id: "article-8",
            title: "Article 8 — Propriété intellectuelle et transfert de droits",
            children: (
              <>
                <p>
                  WebSite Studio conserve l&apos;intégralité des droits de propriété intellectuelle sur les créations réalisées <strong>jusqu&apos;au paiement complet</strong> des honoraires.
                </p>
                <p className="mt-3">
                  À compter du paiement intégral du solde, WebSite Studio cède au Client l&apos;ensemble des <strong>droits patrimoniaux</strong> sur les créations originales réalisées spécifiquement pour lui, pour le monde entier et pour toute la durée légale de protection, aux fins d&apos;exploitation commerciale (reproduction, représentation, adaptation, exploitation économique). Les droits moraux de l&apos;auteur demeurent inaliénables conformément au droit français.
                </p>
                <p className="mt-3">
                  Les éléments tiers intégrés au site (thèmes, plugins, bibliothèques open source, images sous licence, polices, etc.) restent soumis à leurs licences propres et ne font pas l&apos;objet d&apos;une cession par WebSite Studio au-delà de ce que permettent ces licences.
                </p>
                <p className="mt-3">
                  Le Client garantit détenir tous les droits nécessaires sur les éléments qu&apos;il fournit (textes, images, logos, marques). WebSite Studio ne pourra être tenu responsable d&apos;un litige relatif à ces éléments. WebSite Studio se réserve le droit de mentionner le projet réalisé pour le Client à titre de <strong>référence commerciale</strong> sur son site et ses supports de communication, sauf clause de confidentialité expresse convenue par écrit.
                </p>
              </>
            ),
          },
          {
            id: "article-9",
            title: "Article 9 — Garanties et responsabilités",
            children: (
              <>
                <p>
                  WebSite Studio garantit la <strong>conformité du site livré</strong> aux spécifications du cahier des charges validé par le Client.
                </p>
                <p className="mt-3">
                  Le site est garanti fonctionnel sur les <strong>dernières versions des navigateurs</strong> courants suivants au moment de la livraison : Chrome, Firefox, Safari et Edge. Une identité visuelle strictement identique sur l&apos;ensemble des navigateurs et terminaux n&apos;est pas garantie.
                </p>
                <p className="mt-3">
                  Tout dysfonctionnement imputable à WebSite Studio et signalé par le Client dans le <strong>mois suivant la livraison</strong> sera corrigé gratuitement, sous réserve que le Client n&apos;ait pas procédé à des modifications du site de son propre chef ou par un tiers non autorisé par WebSite Studio. Au-delà, des corrections ponctuelles pourront être facturées sur devis.
                </p>
                <p className="mt-3">
                  WebSite Studio ne garantit pas un <strong>référencement naturel (SEO)</strong> particulier, ni un niveau de performance ou de trafic spécifique. WebSite Studio ne pourra être tenu responsable des interruptions de service, pertes de données ou dysfonctionnements imputables à un <strong>hébergeur tiers</strong>, y compris dans le cadre de la Formule Pro.
                </p>
                <p className="mt-3">
                  La responsabilité de WebSite Studio, toutes causes confondues, ne pourra en aucun cas <strong>excéder le montant total des honoraires</strong> perçus au titre du contrat concerné, sauf faute lourde ou dol avéré.
                </p>
              </>
            ),
          },
          {
            id: "article-10",
            title: "Article 10 — Obligations du Client",
            children: (
              <>
                <p>
                  Le Client s&apos;engage à <strong>collaborer activement</strong> avec WebSite Studio en fournissant en temps utile tous les éléments nécessaires : textes, visuels, accès, validations.
                </p>
                <p className="mt-3">
                  Le Client est seul responsable du <strong>contenu éditorial</strong> de son site et garantit la légalité de celui-ci au regard du droit français et de la réglementation européenne applicable. Le Client garantit WebSite Studio contre tout recours de tiers résultant de contenus illicites ou portant atteinte aux droits de tiers.
                </p>
                <p className="mt-3">
                  En qualité d&apos;<strong>éditeur</strong> de son site, le Client est responsable de la mise en conformité avec les obligations légales applicables (mentions légales, politique de confidentialité, cookies, RGPD, accessibilité lorsque applicable, etc.). WebSite Studio pourra assister le Client à sa demande dans le cadre d&apos;une <strong>prestation distincte</strong> et facturée en sus.
                </p>
              </>
            ),
          },
          {
            id: "article-11",
            title: "Article 11 — Données personnelles",
            children: (
              <>
                <p>
                  Les données échangées entre les parties dans le cadre du contrat sont traitées de manière <strong>confidentielle</strong>.
                </p>
                <p className="mt-3">
                  WebSite Studio traite les données personnelles du Client conformément au <strong>Règlement général sur la protection des données (RGPD)</strong> et à la loi « Informatique et Libertés ». Dans le cadre de la réalisation du site, lorsque WebSite Studio agit sur instruction du Client concernant des données hébergées ou traitées pour le compte du Client, les parties pourront formaliser les obligations du RGPD (notamment sous-traitance) par un acte séparé si nécessaire.
                </p>
                <p className="mt-3">
                  Le Client peut demander l&apos;exercice de ses droits (accès, rectification, suppression, etc.) en contactant WebSite Studio à l&apos;adresse{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  . Les demandes de suppression de données personnelles seront traitées dans un délai d&apos;un mois, sous réserve des obligations légales de conservation.
                </p>
              </>
            ),
          },
          {
            id: "article-12",
            title: "Article 12 — Résiliation",
            children: (
              <>
                <p>
                  <strong>Résiliation à l&apos;initiative du Client sans faute de WebSite Studio :</strong> l&apos;acompte de 15 % reste acquis définitivement à WebSite Studio. Une <strong>indemnité complémentaire</strong> proportionnelle au travail effectivement réalisé sera due, avec un <strong>minimum de 40 %</strong> du montant total du devis, sauf disposition plus favorable au Client prévue par le droit impératif applicable aux consommateurs.
                </p>
                <p className="mt-3">
                  <strong>Résiliation pour défaut de coopération du Client</strong> (absence de fourniture d&apos;éléments ou de validations malgré relances) : après <strong>mise en demeure</strong> demeurée infructueuse pendant quinze (15) jours, WebSite Studio pourra résilier le contrat de plein droit ; le montant total du devis reste dû, sous réserve de l&apos;appréciation des juges en cas de contestation.
                </p>
                <p className="mt-3">
                  <strong>Résiliation pour manquement grave de WebSite Studio</strong> à ses obligations : après mise en demeure de faire demeurée infructueuse dans un délai raisonnable, le Client pourra résilier ; il ne devra que la part <strong>proportionnelle au travail effectivement réalisé et validé</strong>, le solde étant restitué ou non exigible selon les circonstances, conformément au droit applicable.
                </p>
              </>
            ),
          },
          {
            id: "article-13",
            title: "Article 13 — Droit applicable et juridiction compétente",
            children: (
              <>
                <p>
                  Les présentes CGV sont régies par le <strong>droit français</strong>.
                </p>
                <p className="mt-3">
                  En cas de litige, les parties s&apos;engagent à rechercher une <strong>solution amiable</strong> dans un délai de trente (30) jours à compter de la notification du différend par l&apos;une ou l&apos;autre des parties.
                </p>
                <p className="mt-3">
                  À défaut de résolution amiable, le litige sera soumis aux tribunaux compétents. Si le Client est un <strong>consommateur</strong>, les règles de compétence du Code de la consommation s&apos;appliquent, notamment en ce qui concerne le tribunal du domicile du consommateur lorsque la loi le prévoit.
                </p>
                <p className="mt-3">
                  Si le Client est un <strong>professionnel</strong>, les parties attribuent compétence exclusive au <strong>tribunal de commerce du ressort du siège de WebSite Studio</strong>, sous réserve des règles d&apos;ordre public.
                </p>
                <p className="mt-3">
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
