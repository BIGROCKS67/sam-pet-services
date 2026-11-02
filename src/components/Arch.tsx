// The rainbow from Sam's logo: four arcs, each outlined in navy as on her flyer.
// With `draw`, the arcs draw in from the outside on load (see .arch-draw in globals.css).
const arcs = [
  { r: 92, color: "var(--band-pink)" },
  { r: 74, color: "var(--band-yellow)" },
  { r: 56, color: "var(--band-green)" },
  { r: 38, color: "var(--band-blue)" },
];

export function Arch({ className = "", draw = false }: { className?: string; draw?: boolean }) {
  return (
    <svg viewBox="0 0 200 104" className={`${draw ? "arch-draw " : ""}${className}`} aria-hidden="true" focusable="false">
      {arcs.map(({ r }, i) => (
        <path
          key={r}
          className="arc"
          style={{ "--i": i } as React.CSSProperties}
          pathLength={1}
          d={`M ${100 - r} 102 A ${r} ${r} 0 0 1 ${100 + r} 102`}
          fill="none"
          stroke="var(--ink)"
          strokeWidth={17}
        />
      ))}
      {arcs.map(({ r, color }, i) => (
        <path
          key={`c${r}`}
          className="arc"
          style={{ "--i": i } as React.CSSProperties}
          pathLength={1}
          d={`M ${100 - r} 102 A ${r} ${r} 0 0 1 ${100 + r} 102`}
          fill="none"
          stroke={color}
          strokeWidth={14}
        />
      ))}
    </svg>
  );
}
