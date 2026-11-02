import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { BreadcrumbJsonLd } from "@/components/Seo";
import { FacebookGlyph } from "@/components/Social";
import { sam, walks } from "@/data/photos";
import { flyerQuotes, namedReview, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Reviews of Sam's Pet Services, Brackley",
  description: `What clients say about Sam Rockell's dog walking, pet visits and overnight stays in Brackley. ${site.reviewCount} reviews on Facebook, 100% recommend.`,
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <div className="wrap pb-12 pt-10 md:pt-14">
      <BreadcrumbJsonLd trail={[{ name: "Reviews", path: "/reviews/" }]} />
      <h1 className="text-[length:var(--step-4)]">What clients say</h1>
      <p className="measure mt-4 text-[length:var(--step-1)] leading-snug">
        {site.reviewCount} reviews on Facebook, and every one of them recommends Sam.
      </p>
      <a href={site.facebookReviews} rel="noopener" className="btn btn-ink mt-6">
        <FacebookGlyph />
        Read them all on Facebook
      </a>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div>
          <figure className="border-[1.5px] border-[var(--ink)] bg-[var(--band-yellow)] p-5 md:p-8">
            <blockquote className="font-[family-name:var(--font-display)] text-[length:var(--step-2)] leading-snug">
              &ldquo;{namedReview.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4">
              {namedReview.name}, on {namedReview.where}, {namedReview.date}
            </figcaption>
          </figure>

          <ul className="mt-8 border-t-[1.5px] border-[var(--ink)]">
            {flyerQuotes.map((q) => (
              <li key={q.text} className="reveal border-b border-[var(--rule)] py-4 text-[length:var(--step-1)] italic leading-snug">
                &ldquo;{q.text}&rdquo;
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-[length:var(--step-2)]">Has Sam looked after your animals?</h2>
          <p className="measure mt-3">A review helps other people around Brackley find her. It takes a minute on Facebook.</p>
          <a href={site.facebookReviews} rel="noopener" className="btn btn-line mt-5">
            <FacebookGlyph />
            Leave a review
          </a>
        </div>
        <div className="grid grid-cols-2 content-start gap-4">
          <Photo p={sam.hen} sizes="(min-width: 1024px) 220px, 45vw" className="[&_img]:aspect-[3/4] [&_img]:object-cover" />
          <Photo p={walks[4]} sizes="(min-width: 1024px) 220px, 45vw" className="mt-10 [&_img]:aspect-[3/4] [&_img]:object-cover" />
        </div>
      </div>
    </div>
  );
}
