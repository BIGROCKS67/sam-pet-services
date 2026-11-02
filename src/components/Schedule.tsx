import { classes, terms, type ServiceClass } from "@/data/site";

const money = (n: number) => `£${n}`;

function FeeTable({ c }: { c: ServiceClass }) {
  if (!c.rates.length) {
    return <p className="fig mt-4 text-[length:var(--step-1)]">Priced for you</p>;
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
export function Schedule() {
  return (
    <div className="border-[1.5px] border-[var(--ink)] bg-[var(--lemon)]">
      {classes.map((c) => (
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

// Short index of classes with the lowest weekday fee, for the home page.
export function FeeIndex() {
  return (
    <table className="fees bg-[var(--lemon)]">
      <caption className="sr-only">Sam&rsquo;s services and starting prices</caption>
      <thead>
        <tr>
          <th scope="col">Class</th>
          <th scope="col" className="num">
            From
          </th>
        </tr>
      </thead>
      <tbody>
        {classes.map((c) => {
          const low = c.rates.length ? Math.min(...c.rates.map((r) => r.weekday ?? Infinity)) : null;
          return (
            <tr key={c.id}>
              <th scope="row" className="font-normal">
                <a href={`/prices/#${c.id}`} className="flex items-center gap-3 no-underline hover:underline">
                  <span className={`band-${c.band} inline-block h-4 w-4 shrink-0 border border-[var(--ink)]`} aria-hidden="true" />
                  {c.name}
                </a>
              </th>
              <td className="fig">{low !== null ? money(low) : "Ask"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
