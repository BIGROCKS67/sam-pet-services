import Image from "next/image";
import Link from "next/link";
import { servicePages } from "@/data/services";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t-[1.5px] border-[var(--ink)] pb-28 md:pb-10">
      <div className="wrap grid gap-8 pt-10 md:grid-cols-[auto_1fr_1fr_1fr]">
        <Image src="/images/logo.jpg" alt="Sam's Pet Services logo: a rainbow over a dog, hen, cat, horse, rabbit and sheep" width={112} height={112} className="h-28 w-28" />
        <div>
          <p className="font-[family-name:var(--font-display)] text-[length:var(--step-1)]">{site.name}</p>
          <p className="mt-1">Sam Rockell, {site.town}, {site.county}</p>
          <p className="mt-3">
            <a href={site.phoneHref} className="fig font-bold">{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <nav aria-label="Services" className="flex flex-col gap-2">
          {servicePages.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`}>
              {s.h1}
            </Link>
          ))}
          <Link href="/prices/">Prices</Link>
          <Link href="/reviews/">Reviews</Link>
          <Link href="/areas/">Villages covered</Link>
          <Link href="/faq/">Questions</Link>
        </nav>
        <div className="flex flex-col gap-2 md:items-end">
          <a href={site.facebook} rel="noopener">Facebook: Sam&rsquo;s Pet Services</a>
          <a href={site.instagram} rel="noopener">Instagram: @samrockell</a>
          <Link href="/privacy/">Privacy</Link>
          <p className="mt-2 text-[length:var(--step--1)] text-[var(--ink-2)]">This site sets no cookies and keeps no data.</p>
        </div>
      </div>
    </footer>
  );
}
