// Facts come from Sam's Facebook page and her own printed price list (Sept 2026).
// Anything marked CONFIRM in SAM-PET-SERVICES.md still needs Sam's yes.

export const site = {
  name: "Sam's Pet Services",
  owner: "Sam Rockell",
  tagline: "For all your pet needs!",
  url: "https://samspetservices.com",
  phoneDisplay: "07708 431901",
  phoneHref: "tel:+447708431901",
  whatsappNumber: "447708431901",
  email: "samrockell@googlemail.com",
  town: "Brackley",
  county: "Northamptonshire",
  postcodeArea: "NN13",
  facebook: "https://www.facebook.com/samspetservices/",
  facebookReviews: "https://www.facebook.com/samspetservices/reviews",
  // Most clients book through Facebook Messenger.
  messenger: "https://m.me/samspetservices",
  instagram: "https://www.instagram.com/samrockell/",
  reviewCount: 18,
  description:
    "Dog walking, pet visits and overnight pet and house stays in Brackley and nearby villages, from Sam Rockell. Sheep, goats, hens and horses looked after too. Hour-long dog walks from £14.",
};

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const defaultMessage =
  "Hi Sam, I found you on your website. I'd like to ask about looking after my pet.";

export type Band = "pink" | "yellow" | "green" | "blue" | "grey" | "navy";

export type Rate = { label: string; weekday: number | null; weekend: number | null; from?: boolean };

export type ServiceClass = {
  id: "group" | "solo" | "visit" | "sit" | "farm" | "wedding";
  number: number;
  band: Band;
  name: string;
  short: string;
  body: string;
  rates: Rate[];
  rateHeads?: string[];
  note?: string;
};

// Sam's own wording from her price list, kept in first person.
export const classes: ServiceClass[] = [
  {
    id: "group",
    number: 1,
    band: "pink",
    name: "Group walk",
    short: "Your dog joins my group for an outdoor adventure",
    body: "I will pick your dog up and they can join a group of other dogs for an outdoor adventure.",
    rates: [
      { label: "1 hour", weekday: 14, weekend: 20 },
      { label: "30 minutes", weekday: 11, weekend: 15 },
    ],
  },
  {
    id: "solo",
    number: 2,
    band: "yellow",
    name: "One-to-one walk",
    short: "Just your dog, on a route you choose or one of mine",
    body: "I will pick up your dog and take them for an individual walk, around a location of your choosing or one of my favourite routes.",
    rates: [
      { label: "1 hour", weekday: 19, weekend: 27 },
      { label: "30 minutes", weekday: 13, weekend: 19 },
    ],
  },
  {
    id: "visit",
    number: 3,
    band: "green",
    name: "Pet visit",
    short: "I pop in to feed, play, comfort and let them out",
    body: "I will pop over to see your pet in the comfort of their own home. I can feed and water, play, comfort, and let them out into the garden if they or you need it.",
    rates: [{ label: "30 minutes", weekday: 11, weekend: 15 }],
  },
  {
    id: "sit",
    number: 4,
    band: "blue",
    name: "Overnight pet and house stay",
    short: "I stay overnight in your home with your animals",
    body: "I stay in your home overnight to keep your animals company. For dogs this includes an hour of walking.",
    rateHeads: ["Overnight", "Price"],
    rates: [
      { label: "Cats", weekday: 35, weekend: null },
      { label: "Dogs", weekday: 50, weekend: null, from: true },
    ],
    note: "Plus £5 for each additional pet. There are extra charges for a longer walking routine, and for weekends and bank holidays.",
  },
  {
    id: "farm",
    number: 5,
    band: "navy",
    name: "Horses, sheep and smallholdings",
    short: "Checks, feeding and lambing help for bigger animals",
    body: "I have looked after sheep (lambing included), horses, pigs, goats, chickens and ducks. Tell me what you keep and what needs doing, and I will price it for you.",
    rates: [],
  },
  {
    id: "wedding",
    number: 6,
    band: "grey",
    name: "Wedding Day Pet Chaperone",
    short: "Your dog at your wedding, looked after behind the scenes",
    body: "A personal pet chaperone service so your best friend is part of your wedding day. I look after your dog behind the scenes, so you can enjoy every moment. Can be paired with an overnight stay at your home.",
    rates: [],
  },
];

export const terms = [
  "Prices include the first three miles of travel. Further than that, there is a mileage charge.",
  "Weekend prices also apply on bank holidays.",
  "Packages for holidays and regular weeks can be put together. Message me with what you need.",
];

// Villages within easy reach of Brackley. CONFIRM the list with Sam.
export const areas = [
  "Brackley",
  "Evenley",
  "Turweston",
  "Whitfield",
  "Westbury",
  "Hinton-in-the-Hedges",
  "Mixbury",
  "Croughton",
  "Syresham",
  "Farthinghoe",
];

// From Sam's printed price list. The clients are not named on the flyer.
export const flyerQuotes = [
  {
    text: "I can't recommend Sam enough for dog walking. Sam has walked my very energetic springer spaniel for many years and he's always super excited to see her.",
  },
  {
    text: "Sam has helped me with sheep (including lambing), horses, pigs, dogs and chickens. I would recommend her to anyone needing her services.",
  },
  {
    text: "I couldn't think of anyone better to care for your animals when you can't. You can relax knowing they are in safe hands.",
  },
  {
    text: "I would like to say how fantastic Sam is with our puppy and how much he loves going to see her. She's a natural with any animal.",
  },
];

export const namedReview = {
  name: "Victoria Hedges",
  date: "31 August 2026",
  where: "Facebook",
  text: "Sam was an absolute star, looking after our dogs (one of whom is a bit of a menace!!!) at really short notice. They were well looked after and she was so calm and confident with the crazy one! The house was lovely and tidy too! I wouldn't hesitate to recommend her.",
};
