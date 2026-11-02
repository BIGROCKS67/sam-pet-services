import type { Metadata } from "next";
import { MessageBuilder } from "@/components/MessageBuilder";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book Sam: write your WhatsApp message",
  description: "Choose a walk, visit or overnight stay, see the price from Sam's list, and send her the details on WhatsApp in one tap.",
  alternates: { canonical: "/book/" },
};

export default function Book() {
  return (
    <div className="wrap pb-6 pt-10 md:pt-14">
      <h1 className="text-[length:var(--step-4)]">Write your message to Sam</h1>
      <p className="measure mt-4 text-[length:var(--step-1)] leading-snug">
        Pick what you need. This works out the price from my list and writes the WhatsApp message, so I have everything I need to reply.
      </p>
      <div className="mt-8">
        <MessageBuilder />
      </div>
      <p className="measure mt-6 text-[var(--ink-2)]">
        Nothing you type here is stored or sent anywhere until you press send in WhatsApp, text or email. Rather talk? Ring me on{" "}
        <a href={site.phoneHref} className="fig font-bold text-[var(--ink)]">
          {site.phoneDisplay}
        </a>
        .
      </p>
    </div>
  );
}
