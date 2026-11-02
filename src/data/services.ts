import type { PhotoItem } from "@/components/Photo";
import { rollCall, sam, saddle, walks } from "./photos";
import type { ServiceClass } from "./site";

// One page per thing people search for. Each targets one phrase in its title and H1.
export type ServicePage = {
  slug: string;
  service: string; // schema.org Service name
  title: string;
  description: string;
  h1: string;
  intro: string;
  classIds: ServiceClass["id"][];
  sections: { h: string; p: string[] }[];
  faqIds: string[];
  photos: PhotoItem[];
};

const photo = (animal: string) => rollCall.find((r) => r.animal === animal)!.photo!;

export const servicePages: ServicePage[] = [
  {
    slug: "dog-walking-brackley",
    service: "Dog walking",
    title: "Dog walker in Brackley, walks from £11",
    description:
      "Dog walking in Brackley and nearby villages with Sam Rockell. Group walks from £11, one-to-one walks from £13, pick-up and drop-off included. Message on WhatsApp.",
    h1: "Dog walking in Brackley",
    intro:
      "I pick your dog up from home, walk them, and bring them back tired and happy. Choose a group walk with my regular pack or a one-to-one walk for just your dog.",
    classIds: ["group", "solo"],
    sections: [
      {
        h: "Group walks",
        p: [
          "Your dog joins a small group of other dogs for an outdoor adventure. It is the cheaper option and suits sociable dogs who love company. I have walked one client's very energetic springer spaniel for years.",
        ],
      },
      {
        h: "One-to-one walks",
        p: [
          "Just your dog and me, around a place you choose or one of my favourite routes. Best for puppies, older dogs, nervous or reactive dogs, and anyone who needs a slower pace or extra training time.",
        ],
      },
      {
        h: "Puppies and lunchtime walks",
        p: [
          "If you work long days, a lunchtime walk breaks up a puppy's day and gives them company. A 30-minute walk is often enough for young puppies; 1 hour suits most adult dogs.",
        ],
      },
    ],
    faqIds: ["dog-walk-cost", "group-or-solo", "more-than-one", "weekends", "areas", "how-to-book"],
    photos: [walks[0], walks[1], walks[3], walks[4]],
  },
  {
    slug: "pet-sitting-brackley",
    service: "Overnight pet and house sitting",
    title: "Pet sitter in Brackley, overnight from £35",
    description:
      "Overnight pet and house sitting in Brackley. Sam stays in your home with your animals: cat care £35 a night, dog care from £50 including an hour of walking.",
    h1: "Overnight pet and house sitting in Brackley",
    intro:
      "When you go away, I move in. Your animals keep their own home, their own beds and their routine, and your house has someone in it every night.",
    classIds: ["sit", "visit"],
    sections: [
      {
        h: "What an overnight sit includes",
        p: [
          "I stay overnight in your home and look after your animals as you would: feeding, water, play, comfort and, for dogs, an hour of walking. Clients often mention the house was left tidy.",
          "One client booked me at really short notice for two dogs, one of whom she called a bit of a menace, and wrote that I was calm and confident with him.",
        ],
      },
      {
        h: "Prices",
        p: [
          "Overnight cat care is £35 a night. Overnight dog care starts at £50 a night, plus £5 for each additional pet. A longer walking routine, weekends and bank holidays cost a little more, and I confirm the exact price before you book.",
        ],
      },
      {
        h: "Daytime visits instead",
        p: [
          "If your pets are happy on their own overnight, pet visits start at £11. I can come once, twice or three times a day.",
        ],
      },
    ],
    faqIds: ["pet-sit-cost", "more-than-one", "packages", "weekends", "how-to-book"],
    photos: [walks[5], photo("Cats"), photo("Dogs")],
  },
  {
    slug: "cat-sitting-brackley",
    service: "Cat sitting and pet visits",
    title: "Cat sitter in Brackley, visits from £11",
    description:
      "Cat sitting and pet visits in Brackley. Sam pops in to feed, water, clean out and give your cat, rabbit, guinea pig or hens some company. From £11 a visit.",
    h1: "Cat sitting and pet visits in Brackley",
    intro:
      "I pop over to see your pet in the comfort of their own home. I feed and water them, clean out litter trays and hutches, play, give them a fuss, and let them into the garden if they need it.",
    classIds: ["visit", "sit"],
    sections: [
      {
        h: "Cats",
        p: [
          "Most cats are happiest at home. A visit keeps them fed, their litter clean and gives them company. Book one, two or three visits a day, or overnight cat care at £35 a night.",
        ],
      },
      {
        h: "Rabbits, guinea pigs, hens and ducks",
        p: [
          "Small pets and poultry get the same care: fresh food and water, cleaning out, health checks, and hens let out in the morning and shut in at night.",
        ],
      },
    ],
    faqIds: ["cat-sitting", "small-pets", "weekends", "areas", "how-to-book"],
    photos: [photo("Cats"), sam.guineaPig, photo("Hens and ducks")],
  },
  {
    slug: "smallholding-livestock-horse-care",
    service: "Smallholding, livestock and horse care",
    title: "Smallholding and horse sitter near Brackley",
    description:
      "Help with sheep, lambing, goats, pigs, chickens and horses around Brackley, Northamptonshire. Daily checks, feeding and holiday cover from Sam Rockell.",
    h1: "Smallholding, livestock and horse care near Brackley",
    intro:
      "Few pet sitters will check your sheep or muck out your goats. I will. I have helped with sheep (lambing included), horses, pigs, goats, chickens and ducks, as well as dogs and cats.",
    classIds: ["farm"],
    sections: [
      {
        h: "What I can do",
        p: [
          "Morning and evening checks, feeding and water, hay, moving animals between fields, letting out and shutting in poultry, collecting eggs, and keeping an eye out for anything that needs a vet.",
          "At lambing time I can help with the checks and give you a night off.",
        ],
      },
      {
        h: "Horses",
        p: [
          "I ride myself, so I am at home round a yard: turnout and bringing in, haynets, rugs and feeds.",
        ],
      },
      {
        h: "Price",
        p: ["Every holding is different, so I price these once I know the animals and the jobs. Message me with what you keep and what needs doing."],
      },
    ],
    faqIds: ["livestock", "packages", "areas", "how-to-book"],
    photos: [sam.lamb, sam.sheep, photo("Goats and pigs"), saddle[0]],
  },
];

export const servicePageBySlug = (slug: string) => servicePages.find((s) => s.slug === slug);
