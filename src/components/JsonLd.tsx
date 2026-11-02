import { areas, classes, site } from "@/data/site";

export function BusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    founder: { "@type": "Person", name: site.owner },
    url: site.url,
    telephone: "+447708431901",
    email: site.email,
    image: `${site.url}/images/logo.jpg`,
    priceRange: "£11 to £50",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.town,
      addressRegion: site.county,
      postalCode: site.postcodeArea,
      addressCountry: "GB",
    },
    areaServed: areas.map((a) => ({ "@type": "Place", name: `${a}, Northamptonshire` })),
    sameAs: [site.facebook, site.instagram],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pet care services",
      itemListElement: classes.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: c.name, description: c.body },
        ...(c.rates[0]?.weekday
          ? { priceSpecification: { "@type": "PriceSpecification", price: c.rates[c.rates.length - 1].weekday, priceCurrency: "GBP" } }
          : {}),
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
