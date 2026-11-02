import { faqs as allFaqs, type Faq } from "@/data/faqs";
import { site } from "@/data/site";

// Small helpers for page-level structured data. The business itself is in JsonLd.tsx.
const business = { "@id": `${site.url}/#business` };

function Ld({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const plain = (f: Faq) => f.a.join(" ");

export function FaqJsonLd({ items = allFaqs }: { items?: Faq[] }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: plain(f) },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.name,
          item: `${site.url}${t.path}`,
        })),
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  offers: { name: string; price: number }[];
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        serviceType: name,
        description,
        url: `${site.url}${path}`,
        provider: business,
        areaServed: { "@type": "City", name: "Brackley", containedInPlace: { "@type": "AdministrativeArea", name: "Northamptonshire" } },
        ...(offers.length
          ? {
              offers: offers.map((o) => ({
                "@type": "Offer",
                name: o.name,
                price: o.price,
                priceCurrency: "GBP",
                seller: business,
              })),
            }
          : {}),
      }}
    />
  );
}

// Answers rendered as plain headings and paragraphs, so people and answer engines read them the same way.
export function FaqList({ items, headingLevel = 3 }: { items: Faq[]; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="border-t-[1.5px] border-[var(--ink)]">
      {items.map((f) => (
        <section key={f.id} id={f.id} className="reveal border-b border-[var(--rule)] py-5">
          <H className="text-[length:var(--step-2)]">{f.q}</H>
          <div className="measure mt-2 space-y-2">
            {f.a.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
