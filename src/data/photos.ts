import type { PhotoItem } from "@/components/Photo";

// All Sam's own photos, from her Facebook page and price list. Captions state what is in the frame.
// The flyer crops are small; swap in originals from Sam's phone when she sends them.
export const walks: PhotoItem[] = [
  { src: "/images/dog-river-stick.jpg", alt: "A yellow Labrador wading out of a river with a stick", caption: "Stick retrieved, river walk", w: 414, h: 414 },
  { src: "/images/two-dogs-river.jpg", alt: "Two golden dogs cooling off in a river", caption: "Cooling off halfway round", w: 414, h: 414 },
  { src: "/images/dog-stubble.jpg", alt: "A brown and white dog sniffing through a stubble field", caption: "Following a scent across the stubble", w: 414, h: 414 },
  { src: "/images/pup-harness-sitting.jpg", alt: "A white puppy in a green harness sitting on dry grass", caption: "A puppy on one of his first walks", w: 414, h: 414 },
  { src: "/images/three-dogs.jpg", alt: "A cockapoo, a German shepherd and a small black dog together on a lawn", caption: "Group walk, waiting for the off", w: 162, h: 200 },
  { src: "/images/dog-on-sofa.jpg", alt: "A tired dog asleep on a grey sofa after a walk", caption: "Back home and flat out", w: 414, h: 414 },
];

export const sam: Record<string, PhotoItem> = {
  lamb: { src: "/images/sam-lamb.jpg", alt: "Sam holding a lamb in a barn", caption: "Lambing time", w: 158, h: 210 },
  donkey: { src: "/images/sam-donkey.jpg", alt: "Sam cheek to cheek with a grey donkey", caption: "With a donkey friend", w: 158, h: 210 },
  sheep: { src: "/images/sam-sheep.jpg", alt: "Sam crouching to feed a sheep in a field", caption: "Feeding the flock", w: 156, h: 183 },
  guineaPig: { src: "/images/sam-guinea-pig.jpg", alt: "Sam holding a guinea pig in a garden", caption: "Guinea pig cuddles", w: 162, h: 214 },
};

export const rollCall: { animal: string; note: string; photo?: PhotoItem }[] = [
  { animal: "Dogs", note: "Group walks, one-to-ones, puppies and the occasional menace", photo: { src: "/images/pup-harness-standing.jpg", alt: "White puppy in a green harness", w: 414, h: 414 } },
  { animal: "Cats", note: "Feeding, litter, company and overnight sits", photo: { src: "/images/cat-asleep.jpg", alt: "A tabby cat asleep with a toy", w: 158, h: 210 } },
  { animal: "Guinea pigs and rabbits", note: "Cleaning out, feeding, a fuss", photo: sam.guineaPig },
  { animal: "Hens and ducks", note: "Let out, shut in, eggs collected", photo: { src: "/images/ducklings.jpg", alt: "Yellow ducklings in straw beside a feed bowl", w: 162, h: 156 } },
  { animal: "Sheep", note: "Daily checks, feeding, help at lambing", photo: sam.sheep },
  { animal: "Goats and pigs", note: "Feeding, water, checks in all weathers", photo: { src: "/images/goat.jpg", alt: "A shaggy brown and white goat", w: 156, h: 200 } },
  { animal: "Horses and donkeys", note: "Turnout, haynets, rugs, a rider's eye", photo: sam.donkey },
  { animal: "Cows", note: "Yes, cows too", photo: { src: "/images/jersey-cows.jpg", alt: "A small herd of Jersey cows looking at the camera", w: 414, h: 414 } },
];

export const saddle: PhotoItem[] = [
  { src: "/images/ride-woodland-track.jpg", alt: "View between a skewbald horse's ears down a woodland track", caption: "Between the ears, June 2026", w: 480, h: 640 },
  { src: "/images/ride-two-horses.jpg", alt: "Two horses side by side on a farm track, seen from the saddle", caption: "Riding out in company, September 2026", w: 640, h: 480 },
];
