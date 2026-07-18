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
    id: "review-1",
    quote:
      "Replace this sample with the full customer review you would like to feature most prominently.",
    customerName: "Customer name",
    petName: "Pet name",
    service: "Full Groom",
    rating: 5,
    source: "Google Review",
  },
  {
    id: "review-2",
    quote:
      "Add a second selected review here. The card will grow naturally when the review is longer.",
    customerName: "Customer name",
    petName: "Pet name",
    service: "Bath & Tidy",
    rating: 5,
    source: "Google Review",
  },
  {
    id: "review-3",
    quote:
      "Add another customer review here. Pet name, service and the source link are all optional.",
    customerName: "Customer name",
    rating: 5,
    source: "Customer Review",
  },
];
