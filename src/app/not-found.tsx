import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="wrap pb-6 pt-14">
      <Logo variant="mark" className="w-32" />
      <h1 className="mt-5 text-[length:var(--step-4)]">This page has wandered off.</h1>
      <p className="measure mt-4 text-[length:var(--step-1)]">Unlike the dogs, it hasn&rsquo;t come back when called.</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-ink">Go to the home page</Link>
        <Link href="/prices/" className="btn btn-line">See prices</Link>
      </div>
    </div>
  );
}
