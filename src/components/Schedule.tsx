import { classes, terms, type ServiceClass } from "@/data/site";

const money = (n: number) => `£${n}`;

const servicePath: Record<ServiceClass["id"], string> = {
  group: "/dog-walking-brackley/",
  solo: "/dog-walking-brackley/",
  visit: "/cat-sitting-brackley/",
  sit: "/pet-sitting-brackley/",
  farm: "/smallholding-livestock-horse-care/",
  wedding: "/wedding-dog-sitting/",
};

function FeeTable({ c }: { c: ServiceClass }) {
  if (!c.rates.length) {
    return <p className="mt-4 text-[length:var(--step-1)] font-semibold">Price available on request</p>;
  }
  const heads = c.rateHeads ?? ["Length", "Weekday", "Weekend"];
  return (
    <table className="fees mt-4">
      <caption className="sr-only">{c.name} prices</caption>
      <thead>
        <tr>
          {heads.map((h, i) => (
            <th key={h} scope="col" className={i ? "num" : ""}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {c.rates.map((r) => (
          <tr key={r.label}>
            <th scope="row" className="font-normal">
              {r.label}
            </th>
            <td className="fig">
              {r.from ? <span className="mr-1 font-[family-name:var(--font-body)] text-[length:var(--step--1)]">from</span> : null}
              {r.weekday !== null ? money(r.weekday) : ""}
            </td>
            {heads.length > 2 ? <td className="fig">{r.weekend !== null ? money(r.weekend) : ""}</td> : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// The signature: each class sits on its own band of Sam's rainbow.
export function Schedule({ only, linkOut = true }: { only?: ServiceClass["id"][]; linkOut?: boolean } = {}) {
  const shown = only ? classes.filter((c) => only.includes(c.id)) : classes;
  return (
    <div className="border-[1.5px] border-[var(--ink)] bg-[var(--lemon)]">
      {shown.map((c) => (
        <section key={c.id} id={c.id} aria-labelledby={`${c.id}-h`} className="border-b-[1.5px] border-[var(--ink)] last:border-b-0">
          <div className={`band-${c.band} reveal flex items-baseline gap-4 px-4 py-3 md:px-6`}>
            <span className="fig shrink-0 whitespace-nowrap text-[length:var(--step-1)] font-bold">Class {c.number}</span>
            <h2 id={`${c.id}-h`} className="text-[length:var(--step-2)]">
              {c.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-10 px-4 pb-6 pt-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:px-6">
            <div>
              <p className="measure">{c.body}</p>
              {c.note ? <p className="measure mt-3 text-[var(--ink-2)]">{c.note}</p> : null}
              {linkOut ? (
                <a href={servicePath[c.id]} className="mt-3 inline-block font-semibold">
                  More about {c.name.toLowerCase()}
                </a>
              ) : null}
            </div>
            <FeeTable c={c} />
          </div>
        </section>
      ))}
      <div className="px-4 py-5 md:px-6">
        <h2 className="text-[length:var(--step-1)]">Small print</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {terms.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Short index of every class and each of its weekday fees, for the home page.
export function FeeIndex() {
  const small = "font-[family-name:var(--font-body)] text-[length:var(--step--1)]";
  return (
    <table className="fees bg-[var(--lemon)]">
      <caption className="sr-only">Sam&rsquo;s services and weekday prices</caption>
      <thead>
        <tr>
          <th scope="col">Class</th>
          <th scope="col" className="num">
            Weekday
          </th>
        </tr>
      </thead>
      <tbody>
        {classes.map((c) => (
          <tr key={c.id}>
            <th scope="row" className="font-normal align-top">
              <a href={servicePath[c.id]} className="flex items-start gap-3 no-underline hover:underline">
                <span className={`band-${c.band} mt-1 inline-block h-4 w-4 shrink-0 border border-[var(--ink)]`} aria-hidden="true" />
                {c.name}
              </a>
            </th>
            <td className="fig align-top">
              {c.rates.length ? (
                c.rates.map((r) => (
                  <span key={r.label} className="block whitespace-nowrap">
                    <span className={`mr-2 ${small}`}>{r.label}</span>
                    {r.from ? <span className={`mr-1 ${small}`}>from</span> : null}
                    {r.weekday !== null ? money(r.weekday) : ""}
                  </span>
                ))
              ) : (
                <span className={small}>Price on request</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
