export const bookingUrl =
  "https://plugin.myonlineappointment.com/External/BookingPlugin/?guid=ddb516d4-921b-47ce-b014-7cc31adf1f0a";

export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2798.8376790569823!2d-75.588548!3d45.452926999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce102f37a4cc37%3A0x50f3ec09776f8cff!2sTLC+Grooming+%26+Sharpening+Services!5e0!3m2!1sen!2sca!4v1416080799640";

export const site = {
  name: "TLC Grooming and Sharpening Services",
  shortName: "TLC Grooming",
  phoneDisplay: "613-745-5808",
  phoneHref: "tel:+16137455808",
  email: "tlc4petsgrooming@hotmail.com",
  address: "5303 Canotek Rd, Unit 20A, Gloucester, ON",
  hours: "Tuesday to Sunday · 9am–5pm",
  imageUrls: [
    "https://www.tlc4dogs.com/uploads/2/8/2/4/28247963/img-3642.jpg",
    "https://www.tlc4dogs.com/uploads/2/8/2/4/28247963/img-3507.png",
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
      "Bath, blow dry, brush out, nail trim and ear cleaning for regular coat care.",
    price: "From $40",
  },
  {
    number: "02",
    title: "Bath & Tidy",
    description:
      "Everything in Bath & Brush, plus sanitary, face, paw and body tidy work.",
    price: "From $60",
  },
  {
    number: "03",
    title: "Full Groom",
    description:
      "A consultation, custom haircut, bath, nails, ears, brush out and finishing touches.",
    price: "From $75",
  },
  {
    number: "04",
    title: "Walk-in Care",
    description:
      "Nail trims, ear cleaning, sanitary trims and PawDicures when groomers are available.",
    price: "Nails from $16",
  },
] as const;

export const packages = [
  {
    eyebrow: "Maintenance",
    title: "Bath & Brush",
    price: "$40–$120",
    featured: false,
    items: [
      "Bath and blow dry",
      "Brush out",
      "Nail trim",
      "Ear cleaning",
      "Regular coat care",
    ],
  },
  {
    eyebrow: "Most flexible",
    title: "Bath & Tidy",
    price: "$60–$135",
    featured: true,
    items: [
      "Everything in Bath & Brush",
      "Sanitary trim",
      "Face and paw trim",
      "Full body tidy",
      "Ideal between full grooms",
    ],
  },
  {
    eyebrow: "Full service",
    title: "Full Groom",
    price: "$75–$170",
    featured: false,
    items: [
      "Groomer consultation",
      "Custom haircut and styling",
      "Bath, blow dry and brush out",
      "Nail grind included",
      "Finishing accessory by request",
    ],
  },
] as const;
