import type { Metadata } from "next";
import Link from "next/link";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Dog Grooming Services & Prices in Ottawa",
  description:
    "Compare TLC Grooming packages, size-based starting prices, add-ons and walk-in services in Gloucester, Ottawa.",
  alternates: {
    canonical: "/our-services",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/our-services",
    siteName: "TLC Grooming and Sharpening Services",
    title: "Dog Grooming Services & Prices in Ottawa | TLC Grooming",
    description:
      "Compare grooming packages, size-based starting prices, add-ons and walk-in services in Gloucester, Ottawa.",
    images: [
      {
        url: "/brand/tlc-logo.png",
        width: 1160,
        height: 490,
        alt: "TLC Grooming logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Grooming Services & Prices in Ottawa | TLC Grooming",
    description:
      "Compare dog grooming packages, starting prices, add-ons and walk-in services in Gloucester, Ottawa.",
    images: ["/brand/tlc-logo.png"],
  },
};

const groomingPackages = [
  {
    eyebrow: "Regular coat care",
    title: "Bath & Brush",
    description:
      "Routine coat care with a thorough bath, blow dry and brush out—without a haircut.",
    featured: false,
    included: [
      "Bath and blow dry",
      "Brush out",
      "Nail trim",
      "Ear cleaning",
      "Gentle, attentive handling",
    ],
    prices: [
      ["X-small", "Up to 12 lb", "$40"],
      ["Small", "13–20 lb", "$50"],
      ["Medium", "21–40 lb", "$65"],
      ["Large", "41–90 lb", "$95"],
      ["X-large", "91 lb and over", "$120"],
    ],
  },
  {
    eyebrow: "Between full grooms",
    title: "Bath & Tidy",
    description:
      "A practical in-between service for dogs who need a bath plus light trimming, but not a full haircut.",
    featured: true,
    included: [
      "Bath and blow dry",
      "Nail trim or grind",
      "Ear cleaning",
      "Sanitary, face and paw trim",
      "Full-body tidy",
    ],
    prices: [
      ["X-small", "Up to 12 lb", "$60"],
      ["Small", "13–20 lb", "$70"],
      ["Medium", "21–40 lb", "$85"],
      ["Large", "41–90 lb", "$110"],
      ["X-large", "91 lb and over", "$135"],
    ],
  },
  {
    eyebrow: "Complete styling",
    title: "Full Groom",
    description:
      "A complete, consultation-led groom with a custom haircut shaped around your preferences and your dog’s coat.",
    featured: false,
    included: [
      "Groomer consultation",
      "Custom haircut and styling",
      "Bath, blow dry and brush out",
      "Eye-area, ear and nail care",
      "Finishing accessory by request",
    ],
    prices: [
      ["X-small", "Up to 12 lb", "$75"],
      ["Small", "13–20 lb", "$85"],
      ["Medium", "21–40 lb", "$100"],
      ["Large", "41–90 lb", "$135"],
      ["X-large", "91 lb and over", "$170"],
    ],
  },
] as const;

const addOns = [
  ["Soothing shampoo", "$7"],
  ["Teeth brushing", "$7"],
  ["Paw moisturizer", "$7"],
  ["Blueberry facial", "$7"],
  ["Anal gland expression", "$10"],
] as const;

const walkIns = [
  ["Teeth brushing", "$10"],
  ["Nail trim", "$16"],
  ["Nail trim and grind", "$21"],
  ["Ear cleaning or plucking", "$15"],
  ["Anal gland expression", "$15"],
  ["Sanitary trim", "$25"],
  ["PawDicure", "$30"],
] as const;

const sizeGuide = [
  {
    size: "X-small",
    weight: "Up to 12 lb",
    examples: "Pug, Chihuahua, Papillon, Chinese Crested, Westie",
  },
  {
    size: "Small",
    weight: "13–20 lb",
    examples: "Shih Tzu, Maltese, Pekingese, Toy Poodle, Bichon Frise",
  },
  {
    size: "Medium",
    weight: "21–40 lb",
    examples: "Cocker Spaniel, Sheltie, Standard Schnauzer, Mini Doodle",
  },
  {
    size: "Large",
    weight: "41–90 lb",
    examples: "Husky, Labrador, Border Collie, Standard Poodle",
  },
  {
    size: "X-large",
    weight: "91 lb and over",
    examples: "Golden Retriever, Newfoundland, Sheepdog, Large Doodle",
  },
] as const;

export default function OurServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageIntro}>
        <div className={styles.shell}>
          <div className={styles.pageIntroGrid}>
            <div>
              <span className={styles.eyebrow}>Dog grooming at TLC</span>
              <h1>
                Grooming services <em>&amp; pricing.</em>
              </h1>
            </div>

            <div className={styles.pageIntroAside}>
              <p className={styles.lead}>
                From routine coat maintenance to complete styling, compare our
                services and starting prices before your groomer confirms the
                best fit for your dog.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Choose the right level of grooming.</h2>
            </div>
            <p>
              Start with the package that seems closest. Your groomer will
              confirm the right service after reviewing your dog&apos;s coat,
              handling needs and desired finish.
            </p>
          </div>

          <div className={styles.packageGrid}>
            {groomingPackages.map((item) => (
              <article
                className={`${styles.packageCard} ${
                  item.featured ? styles.packageFeatured : ""
                }`}
                key={item.title}
              >
                <span className={styles.packageEyebrow}>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p className={styles.packageDescription}>{item.description}</p>
                <ul className={styles.included}>
                  {item.included.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className={styles.priceGrid} aria-label={`${item.title} pricing`}>
                  {item.prices.map(([size, weight, price]) => (
                    <div className={styles.priceRow} key={size}>
                      <span>
                        <b>{size}</b>
                        {weight}
                      </span>
                      <strong>From {price}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className={styles.pricingNote}>
            All prices are starting points. Final pricing reflects coat type
            and condition, matting, handling needs, and the time required to
            complete the groom safely.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>Flexible extras</span>
              <h2>Add-ons and walk-in care.</h2>
            </div>
            <p>
              Walk-in services do not require an appointment. We recommend
              calling ahead so we can confirm that a groomer is available.
            </p>
          </div>

          <div className={styles.quickGrid}>
            <article className={styles.listPanel}>
              <div className={styles.listPanelHeader}>
                <h3>Package add-ons</h3>
                <p>Optional services available with a grooming appointment.</p>
              </div>
              <dl className={styles.priceList}>
                {addOns.map(([name, price]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{price}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <article className={styles.listPanel}>
              <div className={styles.listPanelHeader}>
                <h3>Walk-in services</h3>
                <p>Focused care available without a full grooming appointment.</p>
              </div>
              <dl className={styles.priceList}>
                {walkIns.map(([name, price]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{price}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>Size and weight guide</span>
              <h2>Find your dog&apos;s starting size.</h2>
            </div>
            <p>
              Breed examples are a general guide only. Weight, coat type,
              condition and chosen style all influence the final service and
              price.
            </p>
          </div>

          <div className={styles.sizeGrid}>
            {sizeGuide.map((item) => (
              <article className={styles.sizeCard} key={item.size}>
                <strong>{item.size}</strong>
                <span>{item.weight}</span>
                <p>{item.examples}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.shell}>
          <div className={styles.cta}>
            <div>
              <h2>Not sure which package to choose?</h2>
              <p>
                Select the closest service online or call TLC. We’ll confirm the
                best fit based on your dog&apos;s coat and grooming goals.
              </p>
            </div>
            <Link className={styles.primaryButton} href="/#book">
              Book an appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
