import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy/" },
  robots: { index: false },
};

export default function Privacy() {
  return (
    <div className="wrap pb-6 pt-10 md:pt-14">
      <h1 className="text-[length:var(--step-4)]">Privacy</h1>
      <div className="measure mt-6 space-y-4">
        <p>
          This website is run by Sam Rockell, trading as {site.name}, {site.town}, {site.county}. Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call <span className="fig">{site.phoneDisplay}</span>.
        </p>
        <h2 className="pt-2 text-[length:var(--step-2)]">What this site collects</h2>
        <p>Nothing. It sets no cookies, runs no analytics and has no tracking. The message page works inside your browser and keeps nothing.</p>
        <h2 className="pt-2 text-[length:var(--step-2)]">When you message Sam</h2>
        <p>
          If you send a WhatsApp message, text or email, Sam receives what you wrote and your number or address. She uses it to reply, arrange care for your animals and keep a note of keys, access and your pets&rsquo; needs while she looks after them. She does not share it or use it for marketing. WhatsApp is run by Meta under its own privacy policy.
        </p>
        <p>You can ask Sam what she holds about you, or ask her to delete it, at any time.</p>
        <h2 className="pt-2 text-[length:var(--step-2)]">Links out</h2>
        <p>Links to Facebook and Instagram take you to those sites, which have their own cookies and policies.</p>
        <p className="text-[var(--ink-2)]">Last updated 2 November 2026.</p>
      </div>
    </div>
  );
}
