import { plans, projects, site, type Category } from "./data";

/** Stable @id anchors so every page's JSON-LD points at the same entities. */
export const ids = {
  org: `${site.url}/#organization`,
  person: `${site.url}/#felix`,
  website: `${site.url}/#website`,
};

/** Site-wide graph: the studio (a service-area business, no public street address), its founder and the website. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ids.org,
        name: site.name,
        alternateName: "felixtech.space",
        url: site.url,
        logo: `${site.url}/icon.png`,
        image: `${site.url}/opengraph-image`,
        description: site.description,
        email: site.email,
        telephone: "+33652017491",
        priceRange: "690 € – sur devis",
        currenciesAccepted: "EUR",
        areaServed: { "@type": "Country", name: "France" },
        address: { "@type": "PostalAddress", addressCountry: "FR" },
        founder: { "@id": ids.person },
        knowsAbout: ["Création de sites web", "Site vitrine", "Développement web", "Next.js", "SEO", "Applications web"],
        sameAs: [site.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: site.email,
          telephone: "+33652017491",
          availableLanguage: ["French"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Offres",
          itemListElement: plans.map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: p.description,
            url: `${site.url}/pricing`,
            ...(Number.isFinite(Number(p.price))
              ? { priceSpecification: { "@type": "PriceSpecification", minPrice: Number(p.price), priceCurrency: "EUR" } }
              : {}),
            itemOffered: { "@type": "Service", name: p.name, provider: { "@id": ids.org } },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: site.owner,
        jobTitle: "Développeur web indépendant",
        worksFor: { "@id": ids.org },
        url: `${site.url}/a-propos`,
        image: `${site.url}/images/portrait.webp`,
        sameAs: [site.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: site.url,
        name: site.name,
        inLanguage: "fr-FR",
        publisher: { "@id": ids.org },
      },
    ],
  };
}

/** Breadcrumb trail for a page: Accueil › … › current page. */
export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${site.url}${t.path}`,
    })),
  };
}

/** Portfolio as an ItemList of CreativeWorks made by the studio. */
export function portfolio(category: Category) {
  const items = projects[category];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Réalisations WebSite Studio",
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.name,
        url: p.href,
        image: `${site.url}${p.image}`,
        description: p.body,
        creator: { "@id": ids.org },
      },
    })),
  };
}
