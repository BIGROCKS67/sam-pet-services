import { servicePages } from "@/data/services";
import { areas, classes, site } from "@/data/site";

// The business, Sam and the website, linked by @id so every page's Service and FAQ data points back here.
export function BusinessJsonLd() {
  const id = `${site.url}/#business`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": id,
        name: site.name,
        alternateName: ["Sam Rockell Pet Services", "Sam's Pet Services Brackley"],
        description: site.description,
        slogan: site.tagline,
        founder: { "@id": `${site.url}/#sam` },
        url: site.url,
        telephone: "+447708431901",
        email: site.email,
        logo: `${site.url}/images/logo.jpg`,
        image: [`${site.url}/images/og.jpg`, `${site.url}/images/sam-lamb.jpg`, `${site.url}/images/dog-river-stick.jpg`],
        priceRange: "£11 to £50",
        currenciesAccepted: "GBP",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.town,
          addressRegion: site.county,
          postalCode: site.postcodeArea,
          addressCountry: "GB",
        },
        // Brackley town centre, not Sam's home.
        geo: { "@type": "GeoCoordinates", latitude: 52.0326, longitude: -1.1469 },
        areaServed: [
          { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.0326, longitude: -1.1469 }, geoRadius: "8000" },
          ...areas.map((a) => ({ "@type": "Place", name: a })),
        ],
        knowsAbout: ["Dog walking", "Pet sitting", "House sitting", "Cat care", "Puppy care", "Rabbits and guinea pigs", "Poultry", "Sheep and lambing", "Goats", "Pigs", "Horse care"],
        sameAs: [site.facebook, site.instagram],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pet and animal care in Brackley",
          itemListElement: classes.map((c) => ({
            "@type": "OfferCatalog",
            name: c.name,
            description: c.body,
            itemListElement: c.rates.map((r) => ({
              "@type": "Offer",
              name: `${c.name}, ${r.label}`,
              price: r.weekday,
              priceCurrency: "GBP",
              itemOffered: { "@type": "Service", name: c.name },
            })),
          })),
        },
        makesOffer: servicePages.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.service, url: `${site.url}/${s.slug}/` } })),
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#sam`,
        name: site.owner,
        jobTitle: "Dog walker and pet sitter",
        worksFor: { "@id": id },
        homeLocation: { "@type": "Place", name: "Brackley, Northamptonshire" },
        sameAs: [site.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "en-GB",
        publisher: { "@id": id },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
