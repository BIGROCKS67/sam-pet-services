import Image from "next/image";
import Link from "next/link";
import { Arch } from "@/components/Arch";
import { MessageBuilder } from "@/components/MessageBuilder";
import { Photo } from "@/components/Photo";
import { FeeIndex } from "@/components/Schedule";
import { FaqJsonLd, FaqList } from "@/components/Seo";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { faqById } from "@/data/faqs";
import { rollCall, saddle, sam, walks } from "@/data/photos";
import { areas, defaultMessage, flyerQuotes, namedReview, site, whatsappLink } from "@/data/site";

const homeFaqs = faqById(["dog-walk-cost", "pet-sit-cost", "livestock", "areas"]);

export default function Home() {
  return (
    <>
      {/* Hero: type, the logo's rainbow, and the fees straight away. */}
      <section className="wrap grid gap-10 pb-14 pt-8 md:pt-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <Arch draw className="w-40 md:w-56" />
          <h1 className="mt-5 text-[length:var(--step-4)]">
            Dog walks, pet visits and overnight sits in Brackley.
            <span className="mt-2 block text-[length:var(--step-2)] text-[var(--ink-2)]">
              Sheep, hens and horses <em>too</em>.
            </span>
          </h1>
          <p className="hero-in measure mt-5 text-[length:var(--step-1)] leading-snug">
            I&rsquo;m Sam Rockell. I walk dogs, pop in to feed cats, stay over when you&rsquo;re away, and help out on smallholdings round Brackley.
          </p>
          <div className="hero-in mt-7 flex flex-wrap items-center gap-3">
            <a href={whatsappLink(defaultMessage)} className="btn btn-ink">
              <WhatsAppGlyph />
              Message Sam on WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn-line">
              Call <span className="fig">{site.phoneDisplay}</span>
            </a>
          </div>
          <p className="mt-5 text-[length:var(--step--1)]">
            <a href={site.facebookReviews} rel="noopener">
              {site.reviewCount} reviews on Facebook, 100% recommend
            </a>
          </p>
        </div>

        <div>
          <div className="flex items-baseline justify-between gap-4 border-b-[1.5px] border-[var(--ink)] pb-2">
            <h2 className="text-[length:var(--step-1)]">Fees at a glance</h2>
            <Link href="/prices/" className="text-[length:var(--step--1)] font-semibold">
              Full price list
            </Link>
          </div>
          <FeeIndex />
          <p className="mt-3 text-[length:var(--step--1)] text-[var(--ink-2)]">Weekday prices. First three miles of travel included.</p>
        </div>
      </section>

      {/* Walks, in Sam's own photos. */}
      <section aria-labelledby="walks-h" className="border-y-[1.5px] border-[var(--ink)] bg-[var(--band-pink)] py-10">
        <div className="wrap">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="walks-h" className="text-[length:var(--step-3)]">
              Out on walks
            </h2>
            <a href={site.instagram} rel="noopener" className="font-semibold">
              More on Instagram
            </a>
          </div>
          <div className="snap-row mt-6">
            {walks.map((p) => (
              <Photo key={p.src} p={p} sizes="(min-width: 768px) 240px, 72vw" className="reveal [&_img]:aspect-square [&_img]:object-cover [&_figcaption]:text-[var(--ink)]" />
            ))}
          </div>
        </div>
      </section>

      {/* The roll call: proof of "for all your pet needs". */}
      <section aria-labelledby="roll-h" className="wrap py-16">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="self-start md:sticky md:top-[calc(var(--header-h)+1.5rem)]">
            <h2 id="roll-h" className="text-[length:var(--step-3)]">
              Who I look after
            </h2>
            <p className="mt-3 text-[var(--ink-2)]">
              My logo says &ldquo;for all your pet needs&rdquo;. This is what that has meant so far.
            </p>
          </div>
          <ol className="border-t-[1.5px] border-[var(--ink)]">
            {rollCall.map((r) => (
              <li key={r.animal} className="reveal grid grid-cols-[4rem_minmax(0,1fr)] items-center gap-4 border-b border-[var(--rule)] py-3 md:grid-cols-[5rem_minmax(0,1fr)]">
                {r.photo ? (
                  <Image src={r.photo.src} alt={r.photo.alt} width={r.photo.w} height={r.photo.h} sizes="80px" className="aspect-square w-full object-cover" />
                ) : (
                  <span />
                )}
                <p>
                  <span className="block font-[family-name:var(--font-display)] text-[length:var(--step-2)] leading-tight">{r.animal}</span>
                  <span className="text-[var(--ink-2)]">{r.note}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What clients say: one named review, then the quotes from Sam's price list. */}
      <section aria-labelledby="reviews-h" className="border-y-[1.5px] border-[var(--ink)] bg-[var(--band-yellow)] py-14">
        <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <figure>
            <h2 id="reviews-h" className="text-[length:var(--step-1)]">
              What clients say
            </h2>
            <blockquote className="mt-4 font-[family-name:var(--font-display)] text-[length:var(--step-2)] leading-snug">
              &ldquo;{namedReview.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4">
              {namedReview.name}, on {namedReview.where}, {namedReview.date}.{" "}
              <a href={site.facebookReviews} rel="noopener" className="font-semibold">
                Read all {site.reviewCount} reviews
              </a>
            </figcaption>
          </figure>
          <div>
            <p className="text-[length:var(--step--1)] font-semibold">Printed on Sam&rsquo;s price list</p>
            <ul className="mt-2 border-t-[1.5px] border-[var(--ink)]">
              {flyerQuotes.map((q) => (
                <li key={q.text} className="reveal border-b border-[color-mix(in_oklab,var(--ink)_25%,transparent)] py-3 italic">
                  &ldquo;{q.text}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Sam */}
      <section id="about" aria-labelledby="about-h" className="wrap py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <h2 id="about-h" className="text-[length:var(--step-3)]">
              About Sam
            </h2>
            <div className="measure mt-4 space-y-4">
              <p>
                Most of my week is dogs: the group walk, one-to-ones, and puppies who need someone at lunchtime. Around them I feed cats, clean out guinea pigs, shut hens in, and stay over when families go away.
              </p>
              <p>
                I also work with bigger animals. I have helped with lambing, checked on goats in the worst of the weather, and fed pigs, sheep and horses. I ride myself, so I&rsquo;m at home round a stable yard.
              </p>
              <p>
                If you&rsquo;re not sure whether I can help with your animal, ask. The answer is usually yes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo p={sam.hen} sizes="(min-width: 1024px) 260px, 45vw" className="reveal [&_img]:aspect-[3/4] [&_img]:object-cover" />
            <Photo p={sam.lamb} sizes="(min-width: 1024px) 260px, 45vw" className="reveal mt-10 [&_img]:aspect-[3/4] [&_img]:object-cover" />
            <Photo p={saddle[1]} sizes="(min-width: 1024px) 540px, 92vw" className="reveal col-span-2 [&_img]:aspect-[4/3] [&_img]:object-cover" />
          </div>
        </div>
      </section>

      {/* Where Sam goes */}
      <section aria-labelledby="area-h" className="border-y-[1.5px] border-[var(--ink)] bg-[var(--band-green)] py-12">
        <div className="wrap grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 id="area-h" className="text-[length:var(--step-3)]">
              Where I go
            </h2>
            <p className="mt-3">The first three miles of travel are in the price. Further out, I add a mileage charge and tell you before I book.</p>
            <Link href="/areas/" className="mt-3 inline-block font-semibold">
              All villages
            </Link>
          </div>
          <ul className="columns-2 gap-6 sm:columns-3">
            {areas.map((a) => (
              <li key={a} className="reveal break-inside-avoid border-b border-[color-mix(in_oklab,var(--ink)_25%,transparent)] py-2 font-[family-name:var(--font-display)] text-[length:var(--step-1)]">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick answers, also marked up as FAQ data for search and AI assistants. */}
      <section aria-labelledby="answers-h" className="wrap pt-16">
        <FaqJsonLd items={homeFaqs} />
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 id="answers-h" className="text-[length:var(--step-3)]">
              Quick answers
            </h2>
            <Link href="/faq/" className="mt-3 inline-block font-semibold">
              More questions
            </Link>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </section>

      {/* The useful toy: price it and write the WhatsApp message in one go. */}
      <section aria-labelledby="book-h" className="wrap pt-16">
        <h2 id="book-h" className="text-[length:var(--step-3)]">
          Write your message to Sam
        </h2>
        <p className="measure mt-3">
          Pick what you need and this writes the WhatsApp message for you, with the price from my list. You check it and press send.
        </p>
        <div className="mt-6">
          <MessageBuilder />
        </div>
      </section>
    </>
  );
}
