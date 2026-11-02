import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/Seo";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { servicePages } from "@/data/services";
import { areas, defaultMessage, site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Dog walker and pet sitter for Brackley villages",
  description: `Dog walking, pet visits and overnight stays in ${areas.slice(0, 6).join(", ")} and more villages around Brackley, NN13. First three miles of travel included.`,
  alternates: { canonical: "/areas/" },
};

// Turweston and Westbury are over the Buckinghamshire line, Mixbury over the Oxfordshire one.
const counties: Record<string, string> = { Turweston: "Buckinghamshire", Westbury: "Buckinghamshire", Mixbury: "Oxfordshire" };

export default function Areas() {
  return (
    <div className="wrap pb-6 pt-10 md:pt-14">
      <BreadcrumbJsonLd trail={[{ name: "Areas", path: "/areas/" }]} />
      <h1 className="text-[length:var(--step-4)]">Where Sam works</h1>
      <p className="measure mt-4 text-[length:var(--step-1)] leading-snug">
        I am based in Brackley, Northamptonshire (NN13), and look after dogs, cats, small pets, horses and livestock in the town and the villages around it, on both sides of the Oxfordshire and Buckinghamshire borders.
      </p>
      <p className="measure mt-3">
        The first three miles of travel are included in every price. Further out there is a mileage charge, which I tell you before you book. If your village is not listed, ask: it probably just has not made the list yet.
      </p>

      <table className="fees mt-10 bg-[var(--lemon)]">
        <caption className="sr-only">Villages Sam covers</caption>
        <thead>
          <tr>
            <th scope="col">Town or village</th>
            <th scope="col">County</th>
            <th scope="col" className="num">
              Postcode
            </th>
          </tr>
        </thead>
        <tbody>
          {areas.map((a) => (
            <tr key={a} id={a.toLowerCase().replace(/[^a-z]+/g, "-")}>
              <th scope="row" className="font-[family-name:var(--font-display)] text-[length:var(--step-1)] font-normal">
                {a}
              </th>
              <td>{counties[a] ?? "Northamptonshire"}</td>
              <td className="fig">NN13</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="measure mt-4">
        In all of them I do dog walking (group and one-to-one), pet visits, overnight pet and house stays, and help with horses, sheep, goats and hens. <Link href="/book/">Work out a price for your village</Link>.
      </p>

      <h2 className="mt-12 text-[length:var(--step-2)]">Services</h2>
      <ul className="mt-3 border-t-[1.5px] border-[var(--ink)]">
        {servicePages.map((s) => (
          <li key={s.slug} className="border-b border-[var(--rule)]">
            <Link href={`/${s.slug}/`} className="block py-3 font-[family-name:var(--font-display)] text-[length:var(--step-1)] no-underline hover:underline">
              {s.h1}
            </Link>
          </li>
        ))}
      </ul>

      <a href={whatsappLink(defaultMessage)} className="btn btn-ink mt-8">
        <WhatsAppGlyph />
        Message Sam on WhatsApp
      </a>
      <p className="mt-3">
        Or ring <a href={site.phoneHref} className="fig font-bold">{site.phoneDisplay}</a>
      </p>
    </div>
  );
}
