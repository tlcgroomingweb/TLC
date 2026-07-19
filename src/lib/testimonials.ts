export type Testimonial = {
  id: string;
  quote: string;
  customerName: string;
  petName?: string;
  service?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: string;
  sourceUrl?: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    id: "google-kyle-r",
    quote:
      "We’ve been bringing our dogs to TLC Grooming for a while now, and they’ve been consistently great with them. We have a bit of a mixed crew personality-wise, and they always handle each dog with patience and care, which really stands out.",
    customerName: "Kyle R",
    rating: 5,
    source: "Google",
  },
  {
    id: "google-cheryl-harris",
    quote:
      "I take both my dogs for nail trims. My younger dog is large and very nervous around new people. The groomer was amazing, remaining very calm and patient and going slowly to minimize the stress. Have never had a bad experience with either of my dogs. Highly recommend!",
    customerName: "Cheryl Harris",
    rating: 5,
    source: "Google",
  },
  {
    id: "google-les-webb",
    quote:
      "Always had great experiences. Wonderful prices. All my dog friends use their services. Cannot recommend them enough.",
    customerName: "Les Webb",
    rating: 5,
    source: "Google",
  },
  {
    id: "google-emily-quesnel",
    quote:
      "Very highly recommend TLC Grooming! Our dog is a breed that is typically difficult to groom, this is the only place we trust to bring him.",
    customerName: "Emily Quesnel",
    rating: 5,
    source: "Google",
  },
  {
    id: "google-julie-eldridge",
    quote:
      "Super friendly and accommodating. The groomer handles my nervous dog expertly while trimming her nails!",
    customerName: "Julie Eldridge",
    rating: 5,
    source: "Google",
  },
  {
    id: "google-diane",
    quote:
      "A very welcoming, caring, safe and trustworthy place to handle your pets. Very skilled at grooming and knowledgeable in regards to dog behaviors. Excellent service throughout!",
    customerName: "Diane Laflamme",
    rating: 5,
    source: "Google",
  },
];
