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

/**
 * Replace these sample entries with the customer reviews selected for the site.
 * The first review receives the featured card treatment on larger screens.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: "google-amjad-moheb",
    quote:
      "I had a great experience with Yuyu and the team at TLC. The service was very professional, and they took amazing care of my dog. You can really see their experience and attention to detail. I felt completely comfortable and confident leaving my dog with them, and the results were always excellent. I highly recommend Yuyu and TLC to anyone looking for quality grooming services. I always refer my clients to them, and I will definitely continue coming back",
    customerName: "Amjad Moheb",
    rating: 5,
    source: "Google",
  },
  {
    id: "google-kyle-r",
    quote:
      "We’ve been bringing our dogs to TLC Grooming for a while now, and they’ve been consistently great with them. We have a bit of a mixed crew personality-wise, and they always handle each dog with patience and care, which really stands out.",
    customerName: "Kyle R",
    rating: 5,
    source: "Google",
  },
  {
    id: "google-sharon-reynolds",
    quote:
      "Reliable, gentle, well done. We go out of our way from downtown to Gloucester because these wonderful groomers tick all the boxes and Purdy Paws isn’t worth the price.",
    customerName: "Sharon Reynolds",
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
];
