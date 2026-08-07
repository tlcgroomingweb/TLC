import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { showcaseHomepageOnly } from "@/lib/site";
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
    title: "Bath & Brush",
    description:
      "Routine coat care with a thorough bath, blow dry and brush out—without a haircut.",
    included: [
      "Bath and blow dry",
      "Brush out",
      "Nail trim",
      "Ear cleaning",
      "Gentle, attentive handling",
    ],
    prices: [
      ["X small", "Up to 12 lb", "$40"],
      ["Small", "13–20 lb", "$50"],
      ["Medium", "21–40 lb", "$65"],
      ["Large", "41–90 lb", "$95"],
      ["X-large", "91 lb and over", "$120"],
    ],
  },
  {
    title: "Bath & Tidy",
    description:
      "A practical in-between service for dogs who need a bath plus light trimming, but not a full haircut.",
    included: [
      "Bath and blow dry",
      "Nail trim or grind",
      "Ear cleaning",
      "Sanitary, face and paw trim",
      "Full-body tidy",
    ],
    prices: [
      ["X small", "Up to 12 lb", "$60"],
      ["Small", "13–20 lb", "$70"],
      ["Medium", "21–40 lb", "$85"],
      ["Large", "41–90 lb", "$110"],
      ["X-large", "91 lb and over", "$135"],
    ],
  },
  {
    title: "Full Groom",
    description:
      "A complete, consultation-led groom with a custom haircut shaped around your preferences and your dog’s coat.",
    included: [
      "Groomer consultation",
      "Custom haircut and styling",
      "Bath, blow dry and brush out",
      "Eye-area, ear and nail care",
      "Finishing accessory by request",
    ],
    prices: [
      ["X small", "Up to 12 lb", "$75"],
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
  ["Anal-gland expression", "$10"],
] as const;

const walkIns = [
  ["Teeth brushing", "$10"],
  ["Nail trim", "$16"],
  ["Nail trim and grind", "$21"],
  ["Ear cleaning or plucking", "$15"],
  ["Anal-gland expression", "$15"],
  ["Sanitary trim", "$25"],
  ["PawDicure", "$30"],
] as const;

const sizeGuide = [
  {
    size: "X small",
    weight: "Up to 12 lb",
    examples: "Pug, Chihuahua, Mini Pinscher, Jack Russell",
  },
  {
    size: "Small",
    weight: "13–20 lb",
    examples: "Shih Tzu, Maltese, Pekingese, Toy Poodle, Chinese Crested",
  },
  {
    size: "Medium",
    weight: "21–40 lb",
    examples: "Cocker Spaniel, Sheltie, Bulldog, Mini Doodle",
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
  if (showcaseHomepageOnly) {
    redirect("/");
  }

  return (
    <main className={`${styles.page} ${styles.servicesPage}`}>
      <section className={styles.pageIntro}>
        <div className={styles.shell}>
          <div className={styles.pageIntroGrid}>
            <div>
              <span className={styles.eyebrow}>Dog grooming at TLC</span>
              <h1>
                <span className={styles.introHeadlineLead}>
                  Grooming services
                </span>
                <em>&amp; pricing.</em>
              </h1>
            </div>

            <div className={styles.pageIntroAside}>
              <p className={styles.lead}>
                Explore our grooming options and starting prices, then choose
                the package closest to your dog&apos;s needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>

          <div className={styles.packageGrid}>
            {groomingPackages.map((item) => (
              <article className={styles.packageCard} key={item.title}>
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
                      <strong>
                        <span className={styles.startingFrom}>From</span>
                        <span className={styles.priceAmount}>{price}</span>
                      </strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className={styles.sizeGuideHeader}>
            <h3>Size reference</h3>
            <p>
              <strong>Weight is only a guide.</strong> Coat type, condition,
              handling needs and chosen style determine the final service and
              price.
            </p>
          </div>

          <div
            className={`${styles.sizeGrid} ${styles.packageSizeGrid}`}
            aria-label="Dog size and weight guide"
          >
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

      {/* <section className={styles.ctaSection}>
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
      </section> */}
    </main>
  );
}
