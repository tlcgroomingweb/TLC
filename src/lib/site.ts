export const bookingUrl =
  "https://plugin.myonlineappointment.com/External/BookingPlugin/?guid=ddb516d4-921b-47ce-b014-7cc31adf1f0a";

export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2798.8376790569823!2d-75.588548!3d45.452926999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce102f37a4cc37%3A0x50f3ec09776f8cff!2sTLC+Grooming+%26+Sharpening+Services!5e0!3m2!1sen!2sca!4v1416080799640";

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
  { label: "Contact", href: "/#contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Bath & Brush",
    description:
      "A bath, blow dry, brush out, nail trim and ear cleaning for routine coat maintenance.",
    price: "From $40",
  },
  {
    number: "02",
    title: "Bath & Tidy",
    description:
      "Everything in Bath & Brush, plus trimming around the face, paws, sanitary areas and body.",
    price: "From $60",
  },
  {
    number: "03",
    title: "Full Groom",
    description:
      "A consultation-led groom with a custom haircut, bath, brush out, nail care and finishing details.",
    price: "From $75",
  },
  {
    number: "04",
    title: "Walk-in Care",
    description:
      "Nail trims, ear care, sanitary trims and PawDicures, offered when a groomer is available.",
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
