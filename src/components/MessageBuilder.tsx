"use client";

import { useId, useMemo, useState } from "react";
import { areas, site, whatsappLink } from "@/data/site";
import { WhatsAppGlyph } from "./WhatsAppGlyph";

type Kind = "group" | "solo" | "visit" | "sit-cat" | "sit-dog" | "farm" | "wedding";

const kinds: { id: Kind; label: string }[] = [
  { id: "group", label: "Group walk" },
  { id: "solo", label: "One-to-one walk" },
  { id: "visit", label: "Pet visit" },
  { id: "sit-dog", label: "Overnight sit, dogs" },
  { id: "sit-cat", label: "Overnight sit, cats" },
  { id: "farm", label: "Horses, sheep or smallholding" },
  { id: "wedding", label: "Wedding dog-sitting" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const weekend = new Set(["Sat", "Sun"]);

// Sam's price list, Sept 2026. Weekday / weekend.
const walkRates = {
  group: { 60: [14, 20], 30: [11, 15] },
  solo: { 60: [19, 27], 30: [13, 19] },
} as const;

function estimate(
  k: Kind,
  length: 30 | 60,
  picked: string[],
  visitsPerDay: number,
  nights: number,
  pets: number,
) {
  if (k === "group" || k === "solo") {
    if (!picked.length) return null;
    const [wd, we] = walkRates[k][length];
    const total = picked.reduce((s, d) => s + (weekend.has(d) ? we : wd), 0);
    return { amount: total, per: "a week", from: false, extraPets: pets > 1 };
  }
  if (k === "visit") {
    if (!picked.length) return null;
    const total =
      picked.reduce((s, d) => s + (weekend.has(d) ? 15 : 11), 0) * visitsPerDay;
    return { amount: total, per: "a week", from: true, extraPets: pets > 1 };
  }
  if (k === "sit-dog") {
    return {
      amount: nights * (50 + (pets - 1) * 5),
      per: nights === 1 ? "for 1 night" : `for ${nights} nights`,
      from: true,
      extraPets: false,
    };
  }
  if (k === "sit-cat") {
    return {
      amount: nights * 35,
      per: nights === 1 ? "for 1 night" : `for ${nights} nights`,
      from: true,
      extraPets: pets > 1,
    };
  }
  return null;
}

export function MessageBuilder() {
  const uid = useId();
  const [kind, setKind] = useState<Kind>("solo");
  const [length, setLength] = useState<30 | 60>(60);
  const [picked, setPicked] = useState<string[]>([]);
  const [visitsPerDay, setVisitsPerDay] = useState(1);
  const [nights, setNights] = useState(3);
  const [pets, setPets] = useState(1);
  const [about, setAbout] = useState("");
  const [town, setTown] = useState("Brackley");
  const [start, setStart] = useState("");
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  const isWalk = kind === "group" || kind === "solo";
  const isSit = kind === "sit-cat" || kind === "sit-dog";
  const est = estimate(kind, length, picked, visitsPerDay, nights, pets);

  const message = useMemo(() => {
    const k = kinds.find((x) => x.id === kind)!.label;
    const lines = ["Hi Sam, I found you on your website."];
    lines.push(
      `Service: ${k}${isWalk ? `, ${length === 60 ? "1 hour" : "30 minutes"}` : ""}`,
    );
    if ((isWalk || kind === "visit") && picked.length)
      lines.push(`Days: ${days.filter((d) => picked.includes(d)).join(", ")}`);
    if (kind === "visit" && visitsPerDay > 1)
      lines.push(`Visits a day: ${visitsPerDay}`);
    if (isSit) lines.push(`Nights: ${nights}`);
    if (start) {
      const d = new Date(start + "T12:00:00");
      lines.push(
        `${kind === "wedding" ? "Wedding date" : "Starting"}: ${d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}`,
      );
    }
    lines.push(
      `${kind === "farm" ? "Animals" : "Pets"}: ${kind === "farm" ? about || "(to tell you)" : `${pets}${about ? ` (${about})` : ""}`}`,
    );
    lines.push(`Where: ${town}`);
    if (est)
      lines.push(
        `Guide price from your list: ${est.from ? "from " : ""}£${est.amount} ${est.per}`,
      );
    if (name) lines.push(`My name: ${name}`);
    return lines.join("\n");
  }, [
    kind,
    isWalk,
    isSit,
    length,
    picked,
    visitsPerDay,
    nights,
    start,
    pets,
    about,
    town,
    est,
    name,
  ]);

  const toggleDay = (d: string) =>
    setPicked((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid border-[1.5px] border-[var(--ink)] bg-[var(--lemon)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <form
        className="grid gap-6 p-4 md:p-6"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Write a message to Sam"
      >
        <fieldset className="field">
          <legend>What do you need?</legend>
          <div className="flex flex-wrap gap-2">
            {kinds.map((k) => (
              <label key={k.id} className="chip">
                <input
                  type="radio"
                  name={`${uid}-kind`}
                  value={k.id}
                  checked={kind === k.id}
                  onChange={() => setKind(k.id)}
                />
                <span>{k.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {isWalk ? (
          <fieldset className="field">
            <legend>How long?</legend>
            <div className="flex gap-2">
              {([60, 30] as const).map((l) => (
                <label key={l} className="chip">
                  <input
                    type="radio"
                    name={`${uid}-len`}
                    checked={length === l}
                    onChange={() => setLength(l)}
                  />
                  <span>{l === 60 ? "1 hour" : "30 minutes"}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {isWalk || kind === "visit" ? (
          <fieldset className="field">
            <legend>Which days each week?</legend>
            <span className="hint">
              Saturday and Sunday are weekend prices.
            </span>
            <div className="flex flex-wrap gap-2">
              {days.map((d) => (
                <label key={d} className="chip">
                  <input
                    type="checkbox"
                    checked={picked.includes(d)}
                    onChange={() => toggleDay(d)}
                  />
                  <span>{d}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {kind === "visit" ? (
          <fieldset className="field">
            <legend>Visits a day</legend>
            <div className="flex gap-2">
              {[1, 2, 3].map((n) => (
                <label key={n} className="chip">
                  <input
                    type="radio"
                    name={`${uid}-vpd`}
                    checked={visitsPerDay === n}
                    onChange={() => setVisitsPerDay(n)}
                  />
                  <span className="fig">{n}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2">
          {isSit ? (
            <div className="field">
              <label htmlFor={`${uid}-nights`}>Nights</label>
              <input
                id={`${uid}-nights`}
                className="input fig"
                type="number"
                inputMode="numeric"
                min={1}
                max={60}
                value={nights}
                onChange={(e) =>
                  setNights(
                    Math.max(1, Math.min(60, Number(e.target.value) || 1)),
                  )
                }
              />
            </div>
          ) : null}
          {kind !== "farm" ? (
            <div className="field">
              <label htmlFor={`${uid}-pets`}>
                {kind === "sit-cat"
                  ? "How many cats?"
                  : kind === "visit"
                    ? "How many pets?"
                    : "How many dogs?"}
              </label>
              <input
                id={`${uid}-pets`}
                className="input fig"
                type="number"
                inputMode="numeric"
                min={1}
                max={8}
                value={pets}
                onChange={(e) =>
                  setPets(Math.max(1, Math.min(8, Number(e.target.value) || 1)))
                }
              />
            </div>
          ) : null}
          <div className="field">
            <label htmlFor={`${uid}-start`}>{kind === "wedding" ? "Wedding date" : "Starting from"}</label>
            <input
              id={`${uid}-start`}
              className="input"
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor={`${uid}-town`}>Where are you?</label>
            <select
              id={`${uid}-town`}
              className="input"
              value={town}
              onChange={(e) => setTown(e.target.value)}
            >
              {areas.map((a) => (
                <option key={a}>{a}</option>
              ))}
              <option>Somewhere else nearby</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor={`${uid}-about`}>
            {kind === "farm"
              ? "What animals, and what needs doing?"
              : "Names and breeds"}
          </label>
          <input
            id={`${uid}-about`}
            className="input"
            type="text"
            autoComplete="off"
            enterKeyHint="next"
            placeholder={
              kind === "farm"
                ? "e.g. 12 ewes, morning and evening check"
                : kind === "wedding"
                  ? "e.g. Bella, cockapoo; venue near Brackley"
                  : "e.g. Bella, springer spaniel"
            }
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor={`${uid}-name`}>Your name</label>
          <input
            id={`${uid}-name`}
            className="input"
            type="text"
            autoComplete="name"
            enterKeyHint="done"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>

      <div className="border-t-[1.5px] border-[var(--ink)] bg-[var(--paper)] lg:border-l-[1.5px] lg:border-t-0">
        <div className="flex flex-col gap-4 p-4 md:p-6 lg:sticky lg:top-[calc(var(--header-h)+1rem)]">
          <div aria-live="polite">
            <p className="text-[length:var(--step--1)] font-semibold text-[var(--ink-2)]">
              Guide price from Sam&rsquo;s list
            </p>
            {est ? (
              <p className="mt-1">
                <span key={`${est.amount}-${est.per}`} className="tick fig inline-block text-[length:var(--step-3)] font-bold">
                  {est.from ? (
                    <span className="mr-1 font-[family-name:var(--font-body)] text-[length:var(--step-0)] font-normal">
                      from
                    </span>
                  ) : null}
                  £{est.amount}
                </span>{" "}
                <span>{est.per}</span>
              </p>
            ) : (
              <p className="mt-1 text-[length:var(--step-1)]">
                {kind === "farm"
                  ? "Sam prices these once she knows the animals."
                  : kind === "wedding"
                    ? "Sam puts together a package for each wedding."
                  : "Pick the days to see a price."}
              </p>
            )}
            {est?.extraPets ? (
              <p className="mt-1 text-[length:var(--step--1)]">
                Sam will confirm the price for more than one{" "}
                {kind === "sit-cat" ? "cat" : kind === "visit" ? "pet" : "dog"}.
              </p>
            ) : null}
            <p className="mt-1 text-[length:var(--step--1)] text-[var(--ink-2)]">
              Includes the first three miles of travel. Bank holidays are
              weekend prices.
            </p>
          </div>

          <div>
            <p className="text-[length:var(--step--1)] font-semibold text-[var(--ink-2)]">
              Your message
            </p>
            <pre className="mt-1 whitespace-pre-wrap border border-[var(--rule)] bg-[#fbfde9] p-3 font-[family-name:var(--font-body)] text-[0.95rem] leading-relaxed">
              {message}
            </pre>
          </div>

          <a href={whatsappLink(message)} className="btn btn-ink w-full">
            <WhatsAppGlyph />
            Send this to Sam on WhatsApp
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[length:var(--step--1)]">
            <a
              href={`sms:+${site.whatsappNumber}?body=${encodeURIComponent(message)}`}
            >
              Send as a text instead
            </a>
            <button
              type="button"
              onClick={copy}
              className="cursor-pointer underline underline-offset-[0.18em]"
            >
              {copied ? "Copied" : "Copy message"}
            </button>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Pet care enquiry")}&body=${encodeURIComponent(message)}`}
            >
              Email it
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
