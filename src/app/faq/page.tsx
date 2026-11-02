import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd, FaqList } from "@/components/Seo";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { faqs } from "@/data/faqs";
import { defaultMessage, site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Dog walking and pet sitting questions, Brackley",
  description:
    "Straight answers on dog walker prices in Brackley, overnight pet sitting, cat visits, livestock and horse care, the villages Sam covers and how to book.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <div className="wrap pb-6 pt-10 md:pt-14">
      <FaqJsonLd />
      <BreadcrumbJsonLd trail={[{ name: "Questions", path: "/faq/" }]} />
      <h1 className="text-[length:var(--step-4)]">Questions people ask Sam</h1>
      <p className="measure mt-4 text-[length:var(--step-1)] leading-snug">
        Straight answers, with the prices from my list. Anything else, ask me on WhatsApp or ring{" "}
        <a href={site.phoneHref} className="fig font-bold">
          {site.phoneDisplay}
        </a>
        .
      </p>
      <div className="mt-8">
        <FaqList items={faqs} headingLevel={2} />
      </div>
      <a href={whatsappLink(defaultMessage)} className="btn btn-ink mt-8">
        <WhatsAppGlyph />
        Ask Sam on WhatsApp
      </a>
    </div>
  );
}
