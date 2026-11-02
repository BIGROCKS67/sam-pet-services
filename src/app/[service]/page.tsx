import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Photo } from "@/components/Photo";
import { Schedule } from "@/components/Schedule";
import { BreadcrumbJsonLd, FaqJsonLd, FaqList, ServiceJsonLd } from "@/components/Seo";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { faqById } from "@/data/faqs";
import { servicePageBySlug, servicePages } from "@/data/services";
import { classes, defaultMessage, site, whatsappLink } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ service: s.slug }));
}

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = servicePageBySlug((await params).service);
  if (!s) return {};
  return {
    title: { absolute: `${s.title} | Sam's Pet Services` },
    description: s.description,
    alternates: { canonical: `/${s.slug}/` },
    openGraph: { title: s.title, description: s.description, url: `${site.url}/${s.slug}/` },
  };
}

export default async function ServicePageView({ params }: Props) {
  const s = servicePageBySlug((await params).service);
  if (!s) notFound();
  const faqs = faqById(s.faqIds);
  const offers = classes
    .filter((c) => s.classIds.includes(c.id))
    .flatMap((c) => c.rates.map((r) => ({ name: `${c.name}, ${r.label}`, price: r.weekday ?? 0 })))
    .filter((o) => o.price > 0);
  const others = servicePages.filter((o) => o.slug !== s.slug);

  return (
    <>
      <ServiceJsonLd name={s.service} description={s.description} path={`/${s.slug}/`} offers={offers} />
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd trail={[{ name: s.h1, path: `/${s.slug}/` }]} />

      <div className="wrap pt-6">
        <nav aria-label="Breadcrumb" className="text-[length:var(--step--1)] text-[var(--ink-2)]">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">{s.h1}</span>
        </nav>
      </div>

      <section className="wrap grid gap-10 pb-12 pt-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <Logo variant="mark" className="w-28 md:w-36" />
          <h1 className="mt-4 text-[length:var(--step-4)]">{s.h1}</h1>
          <p className="hero-in measure mt-5 text-[length:var(--step-1)] leading-snug">{s.intro}</p>
          <div className="hero-in mt-7 flex flex-wrap items-center gap-3">
            <a href={whatsappLink(defaultMessage)} className="btn btn-ink">
              <WhatsAppGlyph />
              Message Sam on WhatsApp
            </a>
            <Link href="/book/" className="btn btn-line">
              Work out my price
            </Link>
          </div>
          <p className="mt-5 text-[length:var(--step--1)]">
            By Sam Rockell, {site.town}.{" "}
            <a href={site.facebookReviews} rel="noopener">
              {site.reviewCount} Facebook reviews, 100% recommend
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {s.photos.slice(0, 4).map((p, i) => (
            <Photo key={p.src} p={p} sizes="(min-width: 1024px) 220px, 45vw" priority={i < 2} className={`[&_img]:aspect-square [&_img]:object-cover ${i > 1 ? "hidden sm:block" : ""}`} />
          ))}
        </div>
      </section>

      <section aria-label="Prices" className="wrap pb-12">
        <Schedule only={s.classIds} linkOut={false} />
      </section>

      <section className="wrap grid gap-10 pb-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <h2 className="text-[length:var(--step-3)]">How it works</h2>
        <div className="space-y-8">
          {s.sections.map((sec) => (
            <div key={sec.h} className="reveal">
              <h3 className="text-[length:var(--step-2)]">{sec.h}</h3>
              <div className="measure mt-2 space-y-3">
                {sec.p.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="q-h" className="border-y-[1.5px] border-[var(--ink)] bg-[var(--band-yellow)] py-12">
        <div className="wrap grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 id="q-h" className="text-[length:var(--step-3)]">
              Questions
            </h2>
            <Link href="/faq/" className="mt-3 inline-block font-semibold">
              All questions
            </Link>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="wrap pt-12">
        <h2 className="text-[length:var(--step-2)]">Also from Sam</h2>
        <ul className="mt-3 border-t-[1.5px] border-[var(--ink)]">
          {others.map((o) => (
            <li key={o.slug} className="border-b border-[var(--rule)]">
              <Link href={`/${o.slug}/`} className="block py-3 font-[family-name:var(--font-display)] text-[length:var(--step-1)] no-underline hover:underline">
                {o.h1}
              </Link>
            </li>
          ))}
          <li className="border-b border-[var(--rule)]">
            <Link href="/areas/" className="block py-3 font-[family-name:var(--font-display)] text-[length:var(--step-1)] no-underline hover:underline">
              Villages Sam covers around Brackley
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
