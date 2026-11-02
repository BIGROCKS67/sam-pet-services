import type { Metadata } from "next";
import Link from "next/link";
import { Schedule } from "@/components/Schedule";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { defaultMessage, site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Prices: dog walking, pet visits and house sits",
  description:
    "Sam's full price list. Group walks from £11, one-to-one walks from £13, pet visits from £11, overnight cat care £35, overnight dog care from £50. Brackley and nearby villages.",
  alternates: { canonical: "/prices/" },
};

export default function Prices() {
  return (
    <div className="wrap pb-6 pt-10 md:pt-14">
      <h1 className="text-[length:var(--step-4)]">Prices</h1>
      <p className="measure mt-4 text-[length:var(--step-1)] leading-snug">
        The same list I hand out on paper, updated September 2026. Every class sits on its own colour of my rainbow.
      </p>
      <div className="mt-8">
        <Schedule />
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Link href="/book/" className="btn btn-ink">
          <WhatsAppGlyph />
          Price it and message Sam
        </Link>
        <a href={whatsappLink(defaultMessage)} className="btn btn-line">
          Just say hello on WhatsApp
        </a>
        <a href={site.phoneHref} className="fig ml-1 font-bold">
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
