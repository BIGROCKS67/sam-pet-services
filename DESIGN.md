# Sam's Pet Services: design direction

Written 2 Nov 2026 before any code, following `~/.claude/UI_RULES.md` section 2. This file wins over that rulebook where they differ.

## 1. The truth

- **Who it is for:** dog and pet owners in Brackley (NN13) and the villages round it who work long days, go on holiday, or have a dog that needs more than they can give it. Also smallholders who need someone to check sheep, goats, hens or horses.
- **The one job:** get a WhatsApp message to Sam with enough detail that she can say yes and quote.
- **Only Sam has:** her rainbow logo with the line-drawn animals under it, her lime-green home-made price list, and a client list that runs from springer spaniels to lambing ewes, pigs, goats, ducklings and a donkey. Her own phrase: "For all your pet needs!" Prices include the first three miles of travel.

## 2. The default (banned)

Rounded friendly sans (Nunito, Quicksand, Poppins), cream page with a teal or orange accent, paw-print icons scattered about, a full-bleed hero of a stock golden retriever with "Loving care for your furry friends", three service cards each with an icon in a soft circle, a testimonial carousel, a "Why choose us" tick list, a CTA band. Every item on that list is banned here, along with section 3 of the rulebook. No paw prints anywhere.

## 3. Sources

- **Client's world:** Sam's own A4 price list (lime paper, a typewriter-style price table, italic client quotes round the edge), the rainbow logo (pink, yellow, green, blue arcs outlined in navy), and the Dog & Horse In-Hand Show schedule at Manor Farm, Whitfield (NN13 5TQ), where classes are listed with entry prices and rosettes go to the placings.
- **Outside web design:** an agricultural show schedule booklet (class number, class name, fee, in plain ruled columns), and a village-hall noticeboard where everything is a printed slip with a phone number.

## 4. Zwicky box

| Axis | Options |
| --- | --- |
| Layout | show schedule (ruled classes) · noticeboard · map-first · visit-diary log · animal index |
| Type | old-style display serif + grotesk · typewriter + grotesk · slab + humanist · one grotesk at two widths |
| Colour | the four rainbow bands as colour blocks · lime paper + navy only · duotone photos in navy · committed clash pink/blue |
| Material | her lime paper as the page · ruled print columns · scanned flyer · none |
| Interaction | quote builder that writes the WhatsApp message · drag-the-dog walk length · animal roll call filter · none |

## 5. Eight directions (rough typicality)

1. Pastel friendly pet site with paw prints and cards (60%, the default).
2. Noticeboard of pinned slips and polaroids (15%).
3. Her flyer reborn: lime paper, typewriter tables, italic quotes (10%).
4. Rainbow bands as the whole structure: each service class sits on its own band, so the price page is the rainbow read top to bottom (8%).
5. Map-first: Brackley bridleways and her walking routes (8%).
6. Show schedule: services as numbered classes with fees, reviews as placings (5%).
7. Visit diary: every service told as a log entry, "07:30 fed, water topped up, 20 min in garden" (7%).
8. Animal roll call: a big typeset index of every species she has cared for (5%).

## 6. Denial and SCAMPER

Cut 1 (default) and 2 (polaroid scrapbook is the "less AI" cliché). Cut 5: no route data to build it honestly. SCAMPER verb drawn: **combine**. Combine 3, 4, 6 and 8: her own lime paper and price table, set out like a show schedule, where each class sits on its band of her rainbow, with the roll call as the proof of "all your pet needs".

## 7. Choice

Direction 4 + 6 + 8 combined. Least typical that still sells: prices are open and first, which no Brackley competitor's page does well.

## 8. Concept sentence

**The site where Sam's home-made price list becomes a show schedule: every service is a class on its own band of her rainbow, with the fee printed beside it.**

## 9. System

### Colour (strategy: colour blocking from the logo rainbow, on her lime paper)

| Token | Value | Origin and job |
| --- | --- | --- |
| `--paper` | `#ecf6d2` | Outer margin of Sam's printed price list (sampled `#e2f7b6`, lifted for long reading). Page. |
| `--lemon` | `#f5f9c4` | The lemon panel her price table sits on (sampled `#f1faa1`, softened). Schedule surfaces. |
| `--ink` | `#16204a` | Navy outline of the rainbow and the line-drawn animals. All text, primary button. |
| `--ink-2` | `#3c4668` | Ink lifted for secondary text. AA on paper and lemon. |
| `--rule` | `#c6d4a6` | Paper darkened. 1px rules. |
| `--band-pink` | `#dd7f7f` | Outer arc. Group walks. |
| `--band-yellow` | `#f3dc84` | Second arc. One-to-one walks. |
| `--band-green` | `#a5c48b` | Third arc. Pet visits. |
| `--band-grey` | `#9597a0` | Fourth arc. Only in the drawn rainbow; no class uses it. |
| `--band-blue` | `#96d3f2` | Inner arc. Overnight pet and house sits. |
| `--band-navy` | `--ink` | The outline. Farm animals and horses (white text). |

Bands are fields only; text on them is always `--ink` (checked AA: pink 6.0:1, yellow 12:1, green 8.6:1, blue 9.9:1). The single action colour is solid ink. No WhatsApp green: the button says WhatsApp in words, with the glyph.

### Type

- **Young Serif** (OFL) for display: warm, heavy old-style, the weight of a show-programme headline. Sentence case, tracking -0.01em.
- **Hanken Grotesk** variable (OFL) for text and labels, 17px, weight 400/600.
- **Courier Prime** (OFL) for fees, phone number, times and distances only, because Sam's own price table is set in a typewriter face. Tabular.
- All self-hosted from `src/fonts`. Scale ~1.2 mobile, ~1.3 desktop with `clamp()`.

### Shape

Radius 3px on controls, 0 on bands and photos. Ruled rows and tables, never cards. No shadows except the focus ring.

### Signature component

**The schedule:** a ruled table per class, each headed by a full-width band in its rainbow colour carrying the class number and name, fees in Courier Prime in weekday / weekend columns. On the home page her own logo (cut out from her artwork, `logo-full.png`) sits above the headline; the header and service pages use the rainbow-and-animals part (`logo-mark.png`).

### The one interaction

**"Write my message to Sam":** pick a class, how long, which days, how many pets, and the town. It shows the price from her own list and writes the WhatsApp message, which opens in WhatsApp ready to send. Without JavaScript the page still has the plain "Message Sam on WhatsApp", call and email links.

### Motion

None on load or scroll. Hover and press change colour or underline at 150ms ease-out.

### Voice

Sam's, first person, plain and warm, as on her flyer ("I will pop over...", "I will pick your dog up"). No "fur babies" from us (a client said it; it stays in their quote). Every claim has a price, place or date. No em dashes.

## 10. Critique

Swap test: a Brackley competitor's logo on this page would sit under Sam's rainbow, next to her lambing and donkey photos and her exact fees. It fails the swap test, which is the aim. Removed in review: an "about" timeline (no dates to fill it), a FAQ accordion.

## 11. Previous builds

Carter's: Archivo, navy + yellow, paper. KiiKii: Bricolage / Public Sans / Plex Mono, black and white. This build shares neither font nor palette. Carter's also uses navy; here navy is only ink and the base colour is lime, and the hero is her own logo and type, not a photo.
