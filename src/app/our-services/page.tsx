import type { Metadata } from "next";
import Link from "next/link";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Dog Grooming Services & Prices in Ottawa",
  description:
    "Explore TLC Grooming packages, size-based starting prices, add-ons and walk-in dog grooming services in Gloucester, Ottawa.",
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
      "Explore grooming packages, size-based starting prices, add-ons and walk-in dog grooming services in Gloucester, Ottawa.",
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
      "Explore grooming packages, prices, add-ons and walk-in dog grooming services in Gloucester, Ottawa.",
    images: ["/brand/tlc-logo.png"],
  },
};

const groomingPackages = [
  {
    eyebrow: "Regular coat care",
    title: "Bath & Brush",
    description:
      "A complete refresh for dogs who need regular bathing, drying and coat maintenance without haircutting.",
    featured: false,
    included: [
      "Bath and blow dry",
      "Brush out",
      "Nail trim",
      "Ear cleaning",
      "Plenty of patient care",
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
      "Maintenance for the face, paws and body when your dog needs more than a bath but not a full haircut.",
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
      "A consultation-led appointment with a customized haircut and finishing details based on your preferences.",
    featured: false,
    included: [
      "Groomer consultation",
      "Custom haircut and styling",
      "Bath, dry and brush out",
      "Eyes, ears and nails",
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
                From routine bath days to complete styling, our service menu
                helps you choose the closest fit before your groomer confirms
                the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Compare the full service menu.</h2>
            </div>
            <p>
              Pick the package that feels closest. Your groomer can confirm the
              right service after reviewing your dog&apos;s coat and desired finish.
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
            These are starting prices. Additional charges may apply based on
            coat type, coat condition, matting, behaviour or the time needed to
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
              Walk-in services do not require an appointment, but calling ahead
              is recommended so TLC can confirm a groomer is available.
            </p>
          </div>

          <div className={styles.quickGrid}>
            <article className={styles.listPanel}>
              <div className={styles.listPanelHeader}>
                <h3>Package add-ons</h3>
                <p>Small upgrades that can be added to a grooming appointment.</p>
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
                <p>Quick care when a groomer is available in the salon.</p>
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
              <span className={styles.kicker}>Breed size guide</span>
              <h2>Find the closest weight range.</h2>
            </div>
            <p>
              Breed examples are only a guide. Weight, coat type and the chosen
              style all affect the final appointment recommendation.
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
                Select the closest service in DaySmart or call TLC. The team can
                confirm the right package before the appointment.
              </p>
            </div>
            <Link className={styles.primaryButton} href="/#book">
              Go to booking
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
