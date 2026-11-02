import { defaultMessage, site, whatsappLink } from "@/data/site";
import { WhatsAppGlyph } from "./WhatsAppGlyph";

// Thumb-zone bar on phones: the two ways people reach Sam.
export function ActionBar() {
  return (
    <div className="action-bar fixed inset-x-0 bottom-0 z-30 border-t-[1.5px] border-[var(--ink)] bg-[var(--paper)] md:hidden">
      <div className="grid grid-cols-[1.4fr_1fr] gap-2 p-2">
        <a href={whatsappLink(defaultMessage)} className="btn btn-ink min-h-12 px-3 text-[0.98rem]">
          <WhatsAppGlyph size={19} />
          WhatsApp Sam
        </a>
        <a href={site.phoneHref} className="btn btn-line min-h-12 px-3 text-[0.98rem]">
          Call Sam
        </a>
      </div>
    </div>
  );
}
