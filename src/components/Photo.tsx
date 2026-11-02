import Image from "next/image";

export type PhotoItem = { src: string; alt: string; caption?: string; w: number; h: number };

export function Photo({ p, className = "", sizes, priority }: { p: PhotoItem; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <figure className={`photo ${className}`}>
      <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes={sizes} priority={priority} />
      {p.caption ? <figcaption>{p.caption}</figcaption> : null}
    </figure>
  );
}
