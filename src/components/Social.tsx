import { site } from "@/data/site";

// Facebook, Instagram and Messenger marks, drawn in ink like the rest of the site.
export function FacebookGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export function InstagramGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MessengerGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2C6.4 2 2 6.1 2 11.6c0 2.9 1.2 5.4 3.1 7.1v3.3l3-1.7c.9.3 1.9.4 2.9.4 5.6 0 10-4.1 10-9.6S17.6 2 12 2Zm1 12.9-2.5-2.7-5 2.7 5.5-5.8 2.6 2.7 4.9-2.7-5.5 5.8Z" />
    </svg>
  );
}

// "Find me on Facebook and Instagram", as on Sam's flyers.
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold ${className}`}>
      <li>
        <a href={site.facebook} rel="noopener" className="inline-flex items-center gap-2 no-underline hover:underline">
          <FacebookGlyph />
          Facebook
        </a>
      </li>
      <li>
        <a href={site.instagram} rel="noopener" className="inline-flex items-center gap-2 no-underline hover:underline">
          <InstagramGlyph />
          Instagram
        </a>
      </li>
    </ul>
  );
}
