export const bookingUrl =
  "https://plugin.myonlineappointment.com/External/BookingPlugin/?guid=ddb516d4-921b-47ce-b014-7cc31adf1f0a";

export const mapDirectionsUrl =
  "https://www.google.com/maps/search/?api=1&query=TLC+Grooming+%26+Sharpening+Services%2C+5303+Canotek+Rd%2C+Gloucester%2C+ON";

export const showcaseHomepageOnly = true;

export const site = {
  name: "TLC Grooming and Sharpening Services",
  shortName: "TLC Grooming",
  url: "https://www.tlc4dogs.com",
  phoneDisplay: "613-745-5808",
  phoneHref: "tel:+16137455808",
  email: "tlc4petsgrooming@hotmail.com",
  address: "5303 Canotek Rd, Unit 20A, Gloucester, ON K1J 9M1",
  hours: "Tuesday–Sunday · 9am–5pm · Closed Mondays",
} as const;

export const sampleImages = {
  homeHero:
    "https://images.pexels.com/photos/6816844/pexels-photo-6816844.jpeg?auto=compress&cs=tinysrgb&w=1600",
  whyTlc:
    "https://images.pexels.com/photos/6816863/pexels-photo-6816863.jpeg?auto=compress&cs=tinysrgb&w=1400",
  team: [
    "https://images.pexels.com/photos/19145898/pexels-photo-19145898.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "https://images.pexels.com/photos/19145897/pexels-photo-19145897.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "https://images.pexels.com/photos/19145879/pexels-photo-19145879.jpeg?auto=compress&cs=tinysrgb&w=1400",
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "Our Team", href: "/our-team" },
] as const;

export const services = [
  {
    icon: "◌",
    title: "Bath & Brush",
    description: "Bath, blow dry, brush out, nails and ears.",
    price: "From $40",
  },
  {
    icon: "✦",
    title: "Bath & Tidy",
    description: "Bath & Brush plus a tidy around the face, paws and body.",
    price: "From $60",
  },
  {
    icon: "✂",
    title: "Full Groom",
    description: "A custom haircut with bath, nail care and finishing.",
    price: "From $75",
  },
  {
    icon: "♡",
    title: "Walk-in Care",
    description: "Nails and quick care when a groomer is available.",
    price: "Nails from $16",
  },
] as const;

export const packages = [
  {
    eyebrow: "Maintenance",
    title: "Bath & Brush",
    price: "$40–$120",
    items: [
      "Bath and blow dry",
      "Brush out",
      "Nail trim",
      "Ear cleaning",
      "Routine coat maintenance",
    ],
  },
  {
    eyebrow: "Most flexible",
    title: "Bath & Tidy",
    price: "$60–$135",
    items: [
      "Everything in Bath & Brush",
      "Sanitary trim",
      "Face and paw trim",
      "Full-body tidy",
      "Ideal between full grooms",
    ],
  },
  {
    eyebrow: "Full service",
    title: "Full Groom",
    price: "$75–$170",
    items: [
      "Groomer consultation",
      "Custom haircut and styling",
      "Bath, blow dry and brush out",
      "Nail grind included",
      "Finishing accessory by request",
    ],
  },
] as const;
