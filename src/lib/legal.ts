export type LegalSection = { title: string; paragraphs: string[] };

export const privacy: { intro: string; updated: string; sections: LegalSection[] } = {
  intro:
    "La présente politique décrit comment WebSite Studio (Félix Machenaud) traite les données personnelles lorsque vous utilisez ce site et le formulaire de contact. Elle est rédigée conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés ».",
  updated: "avril 2026",
  sections: [
    {
      title: "A. Identité du responsable de traitement",
      paragraphs: [
        "Le responsable du traitement des données personnelles collectées via ce site est : Félix Machenaud, exerçant sous le nom commercial WebSite Studio (activité d'auto-entrepreneur). L'adresse du siège ou du domiciliation professionnelle sera indiquée sur les devis et factures ; pour toute correspondance relative aux données personnelles : felixmachenaud2@gmail.com.",
      ],
    },
    {
      title: "B. Finalités (pourquoi ces données ?)",
      paragraphs: [
        "L'adresse électronique et les informations que vous saisissez dans le formulaire sont utilisées uniquement pour répondre à votre demande de contact et, le cas échéant, pour un échange professionnel lié à cette demande.",
        "Elles ne servent pas à vous adresser des sollicitations commerciales non sollicitées (« spam »), ne sont pas vendues ni cédées à des tiers à des fins de prospection, et ne font pas l'objet de profilage automatisé dans ce cadre.",
        "Les journaux techniques sont utilisés pour assurer la sécurité, la maintenance et la continuité de service du site.",
      ],
    },
    {
      title: "C. Bases légales du traitement",
      paragraphs: [
        "Réponse à votre message : le traitement des données que vous transmettez volontairement repose notamment sur l'exécution de mesures précontractuelles à votre demande et/ou sur l'intérêt légitime de WebSite Studio à répondre aux sollicitations professionnelles (article 6, paragraphes 1, points b) et f) du RGPD).",
        "Case à cocher au formulaire : lorsque vous cochez la case d'acceptation de la présente politique avant envoi, vous confirmez avoir pris connaissance des informations sur le traitement et, le cas échéant, consentir expressément à l'acheminement du message via le prestataire technique Resend dans les conditions décrites ci-dessous (article 6, paragraphe 1, point a) du RGPD, lorsque le consentement constitue la base applicable à cette étape).",
        "Journaux d'hébergement : intérêt légitime en matière de sécurité et de fonctionnement du service, et le cas échéant obligation légale selon la nature des données concernées.",
      ],
    },
    {
      title: "D. Sous-traitants — hébergement (Vercel) et envoi d'e-mails (Resend)",
      paragraphs: [
        "Certaines opérations sont confiées à des prestataires qui traitent des données pour le compte de WebSite Studio, dans le respect du RGPD.",
        "Hébergement : le site est hébergé par Vercel Inc. (États-Unis). Les données peuvent être traitées sur une infrastructure située hors de l'Union européenne. Ces transferts sont encadrés par les instruments prévus par la réglementation (notamment les clauses contractuelles types de la Commission européenne ou mécanismes équivalents), comme décrit dans la documentation et la politique de confidentialité de Vercel : vercel.com/legal/privacy-policy.",
        "Envoi des messages issus du formulaire : la livraison de l'e-mail est assurée par Resend Inc. (États-Unis), en qualité de prestataire technique. Les données nécessaires à l'envoi (notamment expéditeur, destinataire, contenu du message) sont transmises à Resend pour cet unique besoin d'acheminement. Politique de confidentialité : resend.com/legal/privacy-policy.",
        "WebSite Studio ne revend pas vos données à des annonceurs et ne les cède pas à des tiers pour leur propre usage commercial indépendant du service décrit ci-dessus.",
      ],
    },
    {
      title: "E. Durée de conservation",
      paragraphs: [
        "Les données issues du formulaire de contact sont conservées le temps nécessaire au traitement de votre demande et à un éventuel suivi directement lié à celle-ci.",
        "En l'absence d'échange ultérieur avec vous, elles sont supprimées ou archivées au plus tard deux ans après le dernier contact, sauf obligation légale de conservation plus longue (par exemple conservation comptable ou contentieux).",
        "Les journaux techniques sont conservés pour des durées limitées fixées par Vercel dans le cadre de son service ; se reporter à sa politique pour le détail.",
      ],
    },
    {
      title: "F. Droits des personnes concernées",
      paragraphs: [
        "Conformément au RGPD, vous disposez notamment des droits suivants, dans les limites prévues par la loi :",
        "Droit d'accès aux données vous concernant ; droit de rectification des données inexactes ; droit à l'effacement (« droit à l'oubli ») lorsque les conditions légales sont réunies ; droit à la limitation du traitement et droit d'opposition dans les cas prévus ; droit d'introduire une réclamation auprès de l'autorité de contrôle (en France : CNIL).",
        "Exercice des droits : adressez votre demande à felixmachenaud2@gmail.com, en précisant l'objet de votre demande et, si nécessaire, une pièce justificative d'identité. Une réponse vous sera apportée dans un délai d'un mois, sauf complexité particulière prévue par la réglementation.",
      ],
    },
    {
      title: "Données collectées",
      paragraphs: [
        "Sont notamment traitées les données suivantes :",
        "Formulaire de contact : nom ou dénomination, adresse électronique, contenu du message.",
        "Données techniques : lors de la consultation du site, l'hébergeur (Vercel) peut enregistrer des journaux techniques (par ex. adresse IP, type de navigateur, horodatage des requêtes) pour la sécurité et le fonctionnement du service.",
        "Aucun compte utilisateur n'est requis sur ce site vitrine. Nous ne sollicitons pas volontairement de données sensibles (santé, opinions, etc.) : abstenez-vous de les inclure dans vos messages sauf nécessité avérée.",
      ],
    },
    {
      title: "Sécurité",
      paragraphs: [
        "WebSite Studio met en œuvre des mesures techniques et organisationnelles appropriées (choix de prestataires reconnus, communications sécurisées lorsque applicable, limitation des accès). En cas d'incident de sécurité affectant vos données, les notifications prévues par la loi seront effectuées lorsque requis.",
      ],
    },
    {
      title: "Modification de la politique",
      paragraphs: [
        "La présente politique peut être mise à jour pour refléter l'évolution du site ou du cadre légal. La date de dernière mise à jour figure en tête de page. Nous vous invitons à la consulter régulièrement.",
      ],
    },
  ],
};

export const cgv: { intro: string; updated: string; sections: LegalSection[] } = {
  intro:
    "Les présentes conditions générales de vente et de prestation de services (ci-après les « CGV ») régissent les relations contractuelles entre WebSite Studio et ses clients, pour toute prestation de création de site internet ou service connexe proposé par WebSite Studio.",
  updated: "avril 2026",
  sections: [
    {
      title: "Article 1 — Définitions",
      paragraphs: [
        "Au sens des présentes CGV, les termes suivants ont la signification indiquée ci-dessous :",
        "WebSite Studio désigne le prestataire, entrepreneur individuel (auto-entrepreneur) exerçant sous ce nom commercial ; le siège social sera précisé ultérieurement sur les documents contractuels et factures.",
        "Client désigne toute personne physique (particulier) ou personne morale (professionnel) ayant conclu un accord avec WebSite Studio en vue de la réalisation d'un site internet ou de prestations associées.",
        "Devis désigne le document contractuel gratuit établi par WebSite Studio, décrivant les prestations, le prix et les conditions d'exécution du projet.",
        "Cahier des charges désigne le document co-rédigé par les parties définissant les besoins, objectifs et spécifications du projet.",
        "Livrable désigne tout élément remis au Client dans le cadre de l'exécution du contrat (maquettes, site finalisé, accès à un système de gestion de contenu, documentation, etc.).",
      ],
    },
    {
      title: "Article 2 — Objet et description des services",
      paragraphs: [
        "WebSite Studio propose la création de sites vitrines sur mesure, selon deux formules : la Formule Basique et la Formule Pro.",
        "La Formule Pro inclut notamment l'hébergement et la connexion à un CMS (système de gestion de contenu), dans les conditions définies au devis. La Formule Basique n'inclut pas ces deux éléments, sauf stipulation contraire au devis.",
        "WebSite Studio agit en qualité de prestataire ponctuel : une fois le projet livré et les conditions du cahier des charges satisfaites, WebSite Studio n'est plus engagé contractuellement envers le Client, sous réserve des obligations légales ou des garanties expressément prévues. Toute demande de modification ou d'évolution postérieure à la livraison fera l'objet d'une prestation distincte, soumise à devis additionnel et acceptation du Client.",
      ],
    },
    {
      title: "Article 3 — Formation du contrat",
      paragraphs: [
        "Le contrat prend effet à la date de signature du devis par le Client, que cette signature soit matérialisée sur support papier ou par tout moyen électronique équivalent (validation par courriel, case à cocher, signature électronique, etc.).",
        "Le devis est établi gratuitement par WebSite Studio sur la base du cahier des charges co-rédigé avec le Client. Le devis et le contrat qu'il matérialise demeurent valides jusqu'à la livraison complète du projet et le paiement intégral des honoraires, sous réserve des dispositions relatives à la résiliation.",
        "L'acceptation du devis vaut acceptation pleine et entière des présentes CGV. Toute clause contraire figurant dans les documents du Client est réputée non écrite, sauf accord écrit exprès de WebSite Studio.",
      ],
    },
    {
      title: "Article 4 — Cahier des charges et brief",
      paragraphs: [
        "Le cahier des charges est co-rédigé par WebSite Studio et le Client avant le démarrage effectif du projet. Le Client est invité à exprimer ses attentes de manière aussi précise et exhaustive que possible.",
        "Le brief peut être modifié en cours de projet sous deux conditions cumulatives : la volonté explicite du Client et la faisabilité technique et créative de la modification, appréciée par WebSite Studio. Toute modification substantielle du brief initial pourra donner lieu à un avenant au devis, soumis à validation du Client avant exécution.",
        "WebSite Studio ne pourra être tenu responsable d'un résultat jugé insatisfaisant lorsque celui-ci résulte d'un brief incomplet, imprécis ou contradictoire fourni par le Client.",
      ],
    },
    {
      title: "Article 5 — Livrables et validation",
      paragraphs: [
        "Dans le cadre de l'exécution du projet, WebSite Studio pourra présenter des livrables intermédiaires, notamment des maquettes, dans un délai indicatif d'environ une semaine après le démarrage effectif du projet ou d'une phase de travail. Ce délai est purement indicatif et ne constitue pas un engagement contractuel de délai ferme.",
        "Le Client dispose d'un délai raisonnable pour valider chaque livrable. En l'absence de retour motivé dans ce délai, le livrable sera réputé validé tacitement.",
        "Toute modification demandée après validation d'un livrable constitue une prestation supplémentaire et fera l'objet d'un devis additionnel accepté par le Client.",
      ],
    },
    {
      title: "Article 6 — Délais d'exécution",
      paragraphs: [
        "WebSite Studio ne s'engage pas sur un délai de livraison ferme et définitif, sauf mention expresse et écrite contraire au devis.",
        "À titre purement indicatif, et sous réserve de la complexité du projet et de la réactivité du Client, la durée habituelle de réalisation d'un site vitrine est de l'ordre de quelques semaines.",
        "Les délais peuvent être allongés en cas de retard du Client dans la fourniture des éléments nécessaires (textes, visuels, validations). Dans ce cas, WebSite Studio sera en droit de décaler le planning d'une durée équivalente au retard constaté. WebSite Studio met en œuvre les moyens raisonnables pour exécuter le projet dans les meilleurs délais.",
      ],
    },
    {
      title: "Article 7 — Conditions financières et paiement",
      paragraphs: [
        "Les prix sont ceux mentionnés dans le devis, exprimés en euros. WebSite Studio bénéficie de la franchise en base de TVA conformément à l'article 293 B du Code général des impôts ; la mention « TVA non applicable, art. 293 B du CGI » figurera sur les factures.",
        "Acompte : un acompte de 15 % du montant total TTC est exigible à la signature du devis. Le démarrage effectif du projet est conditionné au règlement de cet acompte.",
        "Solde : le solde de 85 % est exigible le jour même où l'ensemble des conditions du cahier des charges initial ont été réalisées et le site livré. WebSite Studio notifiera le Client de cette livraison par écrit (notamment par courriel).",
        "En cas de non-paiement du solde à la date d'exigibilité, des pénalités de retard seront dues au taux légal en vigueur majoré de cinq (5) points, calculées par jour de retard, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de quarante (40) euros, conformément à l'article L. 441-10 du Code de commerce.",
        "En cas de non-paiement persistant au-delà de quinze (15) jours après la livraison, WebSite Studio se réserve le droit de suspendre l'accès au site livré jusqu'à régularisation complète du paiement, sans préjudice des autres voies de recours.",
        "Aucun escompte ne sera consenti pour paiement anticipé.",
      ],
    },
    {
      title: "Article 8 — Propriété intellectuelle et transfert de droits",
      paragraphs: [
        "WebSite Studio conserve l'intégralité des droits de propriété intellectuelle sur les créations réalisées jusqu'au paiement complet des honoraires.",
        "À compter du paiement intégral du solde, WebSite Studio cède au Client l'ensemble des droits patrimoniaux sur les créations originales réalisées spécifiquement pour lui, pour le monde entier et pour toute la durée légale de protection, aux fins d'exploitation commerciale (reproduction, représentation, adaptation, exploitation économique). Les droits moraux de l'auteur demeurent inaliénables conformément au droit français.",
        "Les éléments tiers intégrés au site (thèmes, plugins, bibliothèques open source, images sous licence, polices, etc.) restent soumis à leurs licences propres et ne font pas l'objet d'une cession par WebSite Studio au-delà de ce que permettent ces licences.",
        "Le Client garantit détenir tous les droits nécessaires sur les éléments qu'il fournit (textes, images, logos, marques). WebSite Studio ne pourra être tenu responsable d'un litige relatif à ces éléments. WebSite Studio se réserve le droit de mentionner le projet réalisé pour le Client à titre de référence commerciale sur son site et ses supports de communication, sauf clause de confidentialité expresse convenue par écrit.",
      ],
    },
    {
      title: "Article 9 — Garanties et responsabilités",
      paragraphs: [
        "WebSite Studio garantit la conformité du site livré aux spécifications du cahier des charges validé par le Client.",
        "Le site est garanti fonctionnel sur les dernières versions des navigateurs courants suivants au moment de la livraison : Chrome, Firefox, Safari et Edge. Une identité visuelle strictement identique sur l'ensemble des navigateurs et terminaux n'est pas garantie.",
        "Tout dysfonctionnement imputable à WebSite Studio et signalé par le Client dans le mois suivant la livraison sera corrigé gratuitement, sous réserve que le Client n'ait pas procédé à des modifications du site de son propre chef ou par un tiers non autorisé par WebSite Studio. Au-delà, des corrections ponctuelles pourront être facturées sur devis.",
        "WebSite Studio ne garantit pas un référencement naturel (SEO) particulier, ni un niveau de performance ou de trafic spécifique. WebSite Studio ne pourra être tenu responsable des interruptions de service, pertes de données ou dysfonctionnements imputables à un hébergeur tiers, y compris dans le cadre de la Formule Pro.",
        "La responsabilité de WebSite Studio, toutes causes confondues, ne pourra en aucun cas excéder le montant total des honoraires perçus au titre du contrat concerné, sauf faute lourde ou dol avéré.",
      ],
    },
    {
      title: "Article 10 — Obligations du Client",
      paragraphs: [
        "Le Client s'engage à collaborer activement avec WebSite Studio en fournissant en temps utile tous les éléments nécessaires : textes, visuels, accès, validations.",
        "Le Client est seul responsable du contenu éditorial de son site et garantit la légalité de celui-ci au regard du droit français et de la réglementation européenne applicable. Le Client garantit WebSite Studio contre tout recours de tiers résultant de contenus illicites ou portant atteinte aux droits de tiers.",
        "En qualité d'éditeur de son site, le Client est responsable de la mise en conformité avec les obligations légales applicables (mentions légales, politique de confidentialité, cookies, RGPD, accessibilité lorsque applicable, etc.). WebSite Studio pourra assister le Client à sa demande dans le cadre d'une prestation distincte et facturée en sus.",
      ],
    },
    {
      title: "Article 11 — Données personnelles",
      paragraphs: [
        "Les données échangées entre les parties dans le cadre du contrat sont traitées de manière confidentielle.",
        "WebSite Studio traite les données personnelles du Client conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés ». Dans le cadre de la réalisation du site, lorsque WebSite Studio agit sur instruction du Client concernant des données hébergées ou traitées pour le compte du Client, les parties pourront formaliser les obligations du RGPD (notamment sous-traitance) par un acte séparé si nécessaire.",
        "Le Client peut demander l'exercice de ses droits (accès, rectification, suppression, etc.) en contactant WebSite Studio à l'adresse felixmachenaud2@gmail.com. Les demandes de suppression de données personnelles seront traitées dans un délai d'un mois, sous réserve des obligations légales de conservation.",
      ],
    },
    {
      title: "Article 12 — Résiliation",
      paragraphs: [
        "Résiliation à l'initiative du Client sans faute de WebSite Studio : l'acompte de 15 % reste acquis définitivement à WebSite Studio. Une indemnité complémentaire proportionnelle au travail effectivement réalisé sera due, avec un minimum de 40 % du montant total du devis, sauf disposition plus favorable au Client prévue par le droit impératif applicable aux consommateurs.",
        "Résiliation pour défaut de coopération du Client (absence de fourniture d'éléments ou de validations malgré relances) : après mise en demeure demeurée infructueuse pendant quinze (15) jours, WebSite Studio pourra résilier le contrat de plein droit ; le montant total du devis reste dû, sous réserve de l'appréciation des juges en cas de contestation.",
        "Résiliation pour manquement grave de WebSite Studio à ses obligations : après mise en demeure de faire demeurée infructueuse dans un délai raisonnable, le Client pourra résilier ; il ne devra que la part proportionnelle au travail effectivement réalisé et validé, le solde étant restitué ou non exigible selon les circonstances, conformément au droit applicable.",
      ],
    },
    {
      title: "Article 13 — Droit applicable et juridiction compétente",
      paragraphs: [
        "Les présentes CGV sont régies par le droit français.",
        "En cas de litige, les parties s'engagent à rechercher une solution amiable dans un délai de trente (30) jours à compter de la notification du différend par l'une ou l'autre des parties.",
        "À défaut de résolution amiable, le litige sera soumis aux tribunaux compétents. Si le Client est un consommateur, les règles de compétence du Code de la consommation s'appliquent, notamment en ce qui concerne le tribunal du domicile du consommateur lorsque la loi le prévoit.",
        "Si le Client est un professionnel, les parties attribuent compétence exclusive au tribunal de commerce du ressort du siège de WebSite Studio, sous réserve des règles d'ordre public.",
        "Pour toute question relative aux présentes CGV : felixmachenaud2@gmail.com.",
      ],
    },
  ],
};

export const cookies: { intro: string; updated: string; sections: LegalSection[] } = {
  intro:
    "Cette page précise pourquoi aucun bandeau de consentement aux cookies n'est affiché sur ce site, dans le cadre actuel de son exploitation et des outils que nous utilisons — ou n'utilisons pas.",
  updated: "avril 2026",
  sections: [
    {
      title: "Contexte réglementaire (synthèse)",
      paragraphs: [
        "En France et dans l'Union européenne, le dépôt ou la lecture de traceurs (cookies, identifiants similaires) sur le terminal d'un utilisateur est encadré : lorsqu'ils ne sont pas strictement nécessaires au fonctionnement du service demandé (par exemple pour de la mesure d'audience non essentielle, de la publicité ciblée ou du partage avec des réseaux sociaux), la réglementation exige en principe d'en informer la personne et, le cas échéant, d'obtenir son consentement préalable — d'où l'usage courant des bandeaux « Accepter / Refuser » sur de nombreux sites.",
      ],
    },
    {
      title: "Notre choix : pas d'outils tiers d'analytics ni de publicité",
      paragraphs: [
        "WebSite Studio ne déploie pas sur ce site vitrine de solutions du type Google Analytics, Meta Pixel (Facebook / Instagram), outils publicitaires, widgets de réseaux sociaux embarqués suivant la navigation, ou autres traceurs équivalents destinés à mesurer l'audience à des fins non strictement techniques ou à la publicité personnalisée.",
        "Sans ces services, nous ne sollicitons pas volontairement votre terminal pour des finalités qui imposeraient, en pratique, un bandeau de choix avant tout dépôt non indispensable — ce qui correspond à notre objectif : un site clair, léger, sans pistage publicitaire de votre parcours à des fins marketing.",
      ],
    },
    {
      title: "Pourquoi il n'y a pas de bandeau cookies ici",
      paragraphs: [
        "Dans la configuration actuelle, nous ne mettons pas en œuvre de mécanismes qui exigeraient, pour être conformes, un recueil systématique du consentement via une bannière (analytics marketing, remarketing, partage de données avec des régie(s) publicitaire(s), etc.).",
        "Les éventuels traceurs ou mécanismes strictement nécessaires au fonctionnement ou à la sécurité du service (par exemple dans le cadre de l'hébergement par notre prestataire technique) relèvent d'un autre régime : ils ne justifient pas l'affichage d'un bandeau identique à celui requis pour les cookies « de confort » ou publicitaires. Pour le détail des données personnelles et des sous-traitants (hébergement Vercel, acheminement des messages Resend), voir notre politique de confidentialité.",
      ],
    },
    {
      title: "Hébergement et formulaire de contact",
      paragraphs: [
        "Le site est hébergé par Vercel Inc. Des cookies ou identifiants techniques peuvent être utilisés par l'infrastructure pour assurer la diffusion des pages et la sécurité ; le détail figure dans la documentation et la politique de Vercel : vercel.com/legal/privacy-policy.",
        "L'envoi des messages depuis le formulaire de contact est traité côté serveur via Resend : vous ne chargez pas un script Resend pour consulter les pages du site. Aucun cookie Resend n'est requis pour afficher la vitrine ; des traceurs pourraient uniquement intervenir si vous ouvrez des pages externes (par exemple la documentation Resend) depuis un lien.",
      ],
    },
    {
      title: "Si nous modifions le site plus tard",
      paragraphs: [
        "Si nous introduisions un jour des outils d'analyse, de publicité ou tout traceur non indispensable au service tel que vous le demandez, nous mettrions à jour cette page et, le cas échéant, un mécanisme de consentement adapté avant le dépôt de tels traceurs.",
      ],
    },
    {
      title: "Paramétrage de votre navigateur",
      paragraphs: [
        "Vous pouvez à tout moment configurer votre navigateur pour refuser ou supprimer des cookies. Un blocage total peut dans certains cas limiter l'accès à des fonctionnalités sur le web en général ; consultez l'aide de votre logiciel (Chrome, Firefox, Safari, Edge, etc.).",
      ],
    },
    {
      title: "Contact",
      paragraphs: ["Pour toute question sur cette politique : felixmachenaud2@gmail.com."],
    },
  ],
};
