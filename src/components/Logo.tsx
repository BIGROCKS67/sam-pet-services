import Image from "next/image";

// Sam's own logo, cut out from her artwork so it sits on the page colour.
// "full" carries the name and strapline; "mark" is the rainbow and animals only.
export function Logo({ variant = "full", className = "", priority = false }: { variant?: "full" | "mark"; className?: string; priority?: boolean }) {
  const full = variant === "full";
  return (
    <Image
      src={full ? "/images/logo-full.png" : "/images/logo-mark.png"}
      alt={full ? "Sam's Pet Services, for all your pet needs: a rainbow over a sheep and lambs, with a dog, hen, cat, horse and rabbit" : ""}
      width={full ? 488 : 457}
      height={full ? 479 : 318}
      priority={priority}
      className={className}
    />
  );
}
