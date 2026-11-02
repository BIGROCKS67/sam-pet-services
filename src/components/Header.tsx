import Link from "next/link";
import { site } from "@/data/site";
import { Arch } from "./Arch";

const nav = [
  { href: "/dog-walking-brackley/", label: "Dog walking" },
  { href: "/pet-sitting-brackley/", label: "Pet sitting" },
  { href: "/prices/", label: "Prices" },
  { href: "/faq/", label: "Questions" },
];

const more = [
  { href: "/cat-sitting-brackley/", label: "Cat sitting and visits" },
  { href: "/smallholding-livestock-horse-care/", label: "Horses and livestock" },
  { href: "/wedding-dog-sitting/", label: "Wedding dog-sitting" },
  { href: "/areas/", label: "Areas" },
  { href: "/#about", label: "About Sam" },
  { href: "/book/", label: "Write a message" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 no-underline" aria-label={`${site.name}, home`}>
          <Arch className="h-6 w-12 shrink-0" />
          <span className="font-[family-name:var(--font-display)] text-[1.2rem] leading-none whitespace-nowrap">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="font-semibold no-underline hover:underline">
              {n.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="fig text-[1.05rem] font-bold no-underline hover:underline">
            {site.phoneDisplay}
          </a>
        </nav>

        <details className="relative lg:hidden">
          <summary className="btn btn-line min-h-11 cursor-pointer list-none px-4 py-2 text-[0.95rem] [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.5rem)] w-64 border-[1.5px] border-[var(--ink)] bg-[var(--lemon)] p-2">
            {[...nav, ...more].map((n) => (
              <Link key={n.href} href={n.href} className="block px-3 py-2.5 font-semibold no-underline">
                {n.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="fig block border-t border-[var(--rule)] px-3 py-3 font-bold no-underline">
              Call {site.phoneDisplay}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
