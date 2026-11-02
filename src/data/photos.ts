import type { PhotoItem } from "@/components/Photo";

// All Sam's own photos, from her Facebook page, price list and wedding leaflet. Captions state what is in the frame.
export const walks: PhotoItem[] = [
  { src: "/images/dog-river-stick.jpg", alt: "A yellow Labrador wading out of a river with a stick", caption: "Stick retrieved, river walk", w: 414, h: 414 },
  { src: "/images/two-dogs-river.jpg", alt: "Two golden dogs cooling off in a river", caption: "Cooling off halfway round", w: 414, h: 414 },
  { src: "/images/dog-stubble.jpg", alt: "A brown and white dog sniffing through a stubble field", caption: "Following a scent across the stubble", w: 414, h: 414 },
  { src: "/images/pup-harness-sitting.jpg", alt: "A white puppy in a green harness sitting on dry grass", caption: "A puppy on one of his first walks", w: 414, h: 414 },
  { src: "/images/three-dogs.jpg", alt: "A cockapoo, a German shepherd and a small black dog together on a lawn", caption: "Group walk, waiting for the off", w: 750, h: 1000 },
  { src: "/images/dog-on-sofa.jpg", alt: "A tired dog asleep on a grey sofa after a walk", caption: "Back home and flat out", w: 414, h: 414 },
];

export const sam: Record<string, PhotoItem> = {
  lamb: { src: "/images/sam-lamb.jpg", alt: "Sam holding a lamb in a barn", caption: "Lambing time", w: 419, h: 559 },
  donkey: { src: "/images/sam-donkey.jpg", alt: "Sam cheek to cheek with a grey donkey", caption: "With a donkey friend", w: 750, h: 1000 },
  sheep: { src: "/images/sam-sheep.jpg", alt: "Sam crouching to feed a sheep in a field", caption: "Feeding the flock", w: 750, h: 1000 },
  guineaPig: { src: "/images/sam-guinea-pig.jpg", alt: "Sam holding a guinea pig in a garden", caption: "Guinea pig cuddles", w: 750, h: 1000 },
  hen: { src: "/images/sam-hen.jpg", alt: "Sam in a navy coat holding a brown hen in a farmyard", caption: "Sam, with one of the hens", w: 750, h: 1000 },
};

export const rollCall: { animal: string; note: string; photo?: PhotoItem }[] = [
  { animal: "Dogs", note: "Group walks, one-to-ones, puppies and the occasional menace", photo: { src: "/images/pup-harness-standing.jpg", alt: "White puppy in a green harness", w: 414, h: 414 } },
  { animal: "Cats", note: "Feeding, litter, company and overnight sits", photo: { src: "/images/cat-asleep.jpg", alt: "A tabby cat asleep with a toy", w: 750, h: 1000 } },
  { animal: "Guinea pigs and rabbits", note: "Cleaning out, feeding, a fuss", photo: sam.guineaPig },
  { animal: "Hens and ducks", note: "Let out, shut in, eggs collected", photo: { src: "/images/ducklings.jpg", alt: "Yellow ducklings in straw beside a feed bowl", w: 732, h: 593 } },
  { animal: "Sheep", note: "Daily checks, feeding, help at lambing", photo: sam.sheep },
  { animal: "Goats and pigs", note: "Feeding, water, checks in all weathers", photo: { src: "/images/goat.jpg", alt: "A shaggy brown and white goat", w: 735, h: 1000 } },
  { animal: "Horses and donkeys", note: "Turnout, haynets, rugs, a rider's eye", photo: sam.donkey },
  { animal: "Cows", note: "Yes, cows too", photo: { src: "/images/jersey-cows.jpg", alt: "A small herd of Jersey cows looking at the camera", w: 414, h: 414 } },
];

export const saddle: PhotoItem[] = [
  { src: "/images/ride-woodland-track.jpg", alt: "View between a skewbald horse's ears down a woodland track", caption: "Between the ears, June 2026", w: 480, h: 640 },
  { src: "/images/ride-two-horses.jpg", alt: "Two horses side by side on a farm track, seen from the saddle", caption: "Riding out in company, September 2026", w: 640, h: 480 },
];

export const pig: PhotoItem = { src: "/images/pig.jpg", alt: "A ginger pig rooting in a muddy field", caption: "Happiest in the mud", w: 856, h: 1000 };

// From Sam's wedding leaflet: one client's cockapoo on the day.
export const wedding: PhotoItem[] = [
  { src: "/images/wedding-car.jpg", alt: "A bride and groom in a vintage wedding car with their cockapoo beside them", caption: "In the car with the bride and groom", w: 279, h: 372 },
  { src: "/images/wedding-photos.jpg", alt: "A bride and groom on a lawn with a photographer and their dog", caption: "Brought out for the photographs", w: 750, h: 1000 },
  { src: "/images/wedding-couple.jpg", alt: "A bride and groom outside a stone cottage with their dog at their feet", caption: "Part of the family photos", w: 279, h: 372 },
  { src: "/images/wedding-bowtie.jpg", alt: "A cockapoo in a blue wedding harness sitting on grass", caption: "Dressed for the day", w: 279, h: 372 },
  { src: "/images/wedding-groomed.jpg", alt: "A freshly groomed cockapoo on a kitchen floor beside brushes and shampoo", caption: "Washed and brushed that morning", w: 279, h: 372 },
  { src: "/images/wedding-sam.jpg", alt: "Sam sitting on a bench in a venue hallway with the cockapoo beside her", caption: "Behind the scenes with Sam", w: 279, h: 372 },
  { src: "/images/wedding-rolls.jpg", alt: "A man in a suit with the dog beside a vintage Rolls-Royce wedding car", caption: "Waiting with the car", w: 279, h: 372 },
];
