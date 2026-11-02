// Questions people type into Google and ask ChatGPT, answered first-line-first so
// answer engines can lift the opening sentence. Prices from Sam's Sept 2026 list only.

export type Faq = { id: string; q: string; a: string[] };

export const faqs: Faq[] = [
  {
    id: "dog-walk-cost",
    q: "How much does a dog walker cost in Brackley?",
    a: [
      "With Sam's Pet Services a group walk costs £11 for 30 minutes or £14 for an hour on weekdays, and a one-to-one walk costs £13 for 30 minutes or £19 for an hour.",
      "Weekend and bank holiday walks are £15 and £20 for a group walk, and £19 and £27 for a one-to-one. Pick-up and drop-off are included, as is the first three miles of travel.",
    ],
  },
  {
    id: "group-or-solo",
    q: "What is the difference between a group walk and a one-to-one walk?",
    a: [
      "On a group walk I pick your dog up and they join a small group of other dogs for an outdoor adventure. It suits sociable dogs and is the cheaper option.",
      "On a one-to-one walk your dog is the only one with me, on a route you choose or one of my favourite routes. It suits puppies, older dogs, reactive dogs and dogs still learning their manners.",
    ],
  },
  {
    id: "pet-sit-cost",
    q: "How much is an overnight pet sitter or house sitter near Brackley?",
    a: [
      "Overnight cat care is £35 a night. Overnight dog care starts at £50 a night and includes an hour of walking, plus £5 for each additional pet.",
      "I stay in your home overnight so your animals keep their routine and the house is lived in while you are away. A longer walking routine, weekends and bank holidays cost a little more, and I will tell you the exact price before you book.",
    ],
  },
  {
    id: "cat-sitting",
    q: "Can you feed my cat while I am on holiday?",
    a: [
      "Yes. A pet visit starts at £11 on weekdays and £15 at weekends and bank holidays. I come to your home, feed and water your cat, clean the litter tray, and give them some company.",
      "If your cat prefers someone in the house overnight, overnight cat care is £35 a night. You can book more than one visit a day.",
    ],
  },
  {
    id: "small-pets",
    q: "Do you look after rabbits, guinea pigs and other small pets?",
    a: [
      "Yes. Rabbits, guinea pigs, hens and ducks are all covered by a pet visit, from £11 on weekdays. I feed, water, clean out and check them, and let hens out and shut them in if you need it.",
    ],
  },
  {
    id: "livestock",
    q: "Do you look after sheep, goats, pigs, horses and chickens?",
    a: [
      "Yes. I have helped with sheep (lambing included), horses, pigs, goats, chickens and ducks, as well as dogs and cats. Tell me what you keep and what needs doing and I will price it for you.",
      "I ride myself, so I am comfortable round a stable yard: turnout, haynets, rugs and feeds.",
    ],
  },
  {
    id: "areas",
    q: "Which areas do you cover?",
    a: [
      "Brackley (NN13) and the villages around it, including Evenley, Turweston, Whitfield, Westbury, Hinton-in-the-Hedges, Mixbury, Croughton, Syresham and Farthinghoe.",
      "The first three miles of travel are included in every price. Further out there is a mileage charge, which I tell you before you book.",
    ],
  },
  {
    id: "weekends",
    q: "Do you work weekends and bank holidays?",
    a: [
      "Yes, seven days a week, including bank holidays. Weekend and bank holiday prices are a little higher and are all on the price list.",
    ],
  },
  {
    id: "more-than-one",
    q: "What if I have more than one dog or pet?",
    a: [
      "For overnight dog care each additional pet is £5 a night. For walks and visits, message me with how many you have and I will confirm the price.",
    ],
  },
  {
    id: "how-to-book",
    q: "How do I book Sam's Pet Services?",
    a: [
      "Message Sam on WhatsApp or ring 07708 431901. The message page on this website works out the price from the list and writes the WhatsApp message for you, with the days, your pets and your village, so you only need to press send.",
    ],
  },
  {
    id: "packages",
    q: "Can I book a regular weekly walk or a package for a holiday?",
    a: [
      "Yes. Packages can be put together for regular weeks and for holidays, for example daily walks plus an evening visit, or overnight sits with extra visits for other animals. Message me with what you need.",
    ],
  },
  {
    id: "reviews",
    q: "Is Sam's Pet Services any good?",
    a: [
      "Sam has 18 reviews on Facebook and 100% of them recommend her. Clients mention her calm way with lively dogs, short-notice help and leaving the house tidy.",
    ],
  },
];

export const faqById = (ids: string[]) => ids.map((id) => faqs.find((f) => f.id === id)!).filter(Boolean);
