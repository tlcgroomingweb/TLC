import Image from "next/image";
import Link from "next/link";
import { AppointmentPolicyDialog } from "@/components/appointment-policy-dialog";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import {
  bookingUrl,
  services,
  showcaseHomepageOnly,
  site,
} from "@/lib/site";
import { testimonials } from "@/lib/testimonials";
import yuLargeDog from "./references/yu/20260726190534_721_639.jpg";
import yuMaltese from "./references/yu/IMG_4872.jpeg";
import yuPomeranian from "./references/yu/IMG_2909.jpeg";
import yuPoodle from "./references/yu/IMG_2104.jpeg";
import yuSmallDog from "./references/yu/20260726190619_725_639.jpg";
import yuWhiteDoodle from "./references/yu/20260726190615_724_639.jpg";
import zandyBrownDog from "./references/zandy/6515.jpeg";
import zandyCreamDog from "./references/zandy/6517.jpeg";
import zandyDarkDog from "./references/zandy/6516.jpeg";
import zandyFluffyWhiteDog from "./references/zandy/IMG_9183.jpeg";
import zandyPomeranian from "./references/zandy/IMG_6903.jpeg";
import zandyWhiteDog from "./references/zandy/6518.jpeg";
import styles from "./page.module.css";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description:
    "Professional dog grooming and walk-in nail care in Gloucester, Ottawa.",
  url: site.url,
  telephone: "+1-613-745-5808",
  email: site.email,
  image: `${site.url}/brand/tlc-logo.png`,
  logo: `${site.url}/brand/tlc-logo.png`,
  sameAs: [
    "https://www.facebook.com/Tlcgroomingottawa/",
    "https://www.instagram.com/tlcgroomingottawa/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "5303 Canotek Rd, Unit 20A",
    addressLocality: "Gloucester",
    addressRegion: "ON",
    postalCode: "K1J 9M1",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

const promotions = [
  {
    value: "$10",
    eyebrow: "New client offer",
    title: "New Client Welcome",
    description: "$10 off a first Full Groom.",
    featured: true,
  },
  {
    value: "$5",
    eyebrow: "Referral reward",
    title: "Refer & Save",
    description: "Refer a friend and save $5.",
    featured: false,
  },
  {
    value: "10%",
    eyebrow: "Monthly offer",
    title: "Seniors' Day",
    description: (
      <>
        10% off on the <strong>last Wednesday</strong> of each month.
      </>
    ),
    featured: false,
  },
  {
    value: "Free",
    eyebrow: "Loyalty reward",
    title: "Nail Trim Rewards",
    description: (
      <>
        Every <strong>10th nail trim</strong> is free.
      </>
    ),
    featured: false,
  },
] as const;

const galleryImages = [
  {
    src: yuPoodle,
    alt: "A grey poodle with a rounded topknot and neatly shaped legs after grooming by Yu Yu",
    format: "standard",
    groomer: "Yu Yu",
  },
  {
    src: zandyPomeranian,
    alt: "A smiling white dog with a softly rounded coat after grooming by Zandy",
    format: "wide",
    groomer: "Zandy",
  },
  {
    src: yuMaltese,
    alt: "A small white dog with a silky, symmetrical finish and blue bow after grooming by Yu Yu",
    format: "tall",
    groomer: "Yu Yu",
  },
  {
    src: zandyBrownDog,
    alt: "A brown dog with a rounded face and even coat after grooming by Zandy",
    format: "standard",
    groomer: "Zandy",
  },
  {
    src: yuWhiteDoodle,
    alt: "A cream-coloured dog with an even trim and softly shaped face after grooming by Yu Yu",
    format: "wide",
    groomer: "Yu Yu",
  },
  {
    src: zandyDarkDog,
    alt: "A small dark dog with a neat face and white chin after grooming by Zandy",
    format: "tall",
    groomer: "Zandy",
  },
  {
    src: yuLargeDog,
    alt: "A large tan hound with a long, carefully brushed coat after grooming by Yu Yu",
    format: "standard",
    groomer: "Yu Yu",
  },
  {
    src: zandyCreamDog,
    alt: "A cream-coloured dog with a rounded head and tidy body trim after grooming by Zandy",
    format: "wide",
    groomer: "Zandy",
  },
  {
    src: yuSmallDog,
    alt: "A small white dog with a neatly rounded face and clean short trim after grooming by Yu Yu",
    format: "tall",
    groomer: "Yu Yu",
  },
  {
    src: zandyWhiteDog,
    alt: "A fluffy white dog with a rounded finish after grooming by Zandy",
    format: "standard",
    groomer: "Zandy",
  },
  {
    src: yuPomeranian,
    alt: "A smiling brown dog with a rounded, sculpted coat after grooming by Yu Yu",
    format: "wide",
    groomer: "Yu Yu",
  },
  {
    src: zandyFluffyWhiteDog,
    alt: "A large fluffy white dog with a smooth, carefully finished coat after grooming by Zandy",
    format: "standard",
    groomer: "Zandy",
  },
] as const;

const showHomepageGallery = false;

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="home" className={styles.page}>
        <div className={styles.ambientDecor} aria-hidden="true">
          <div
            className={`${styles.bubbleCluster} ${styles.bubbleClusterOne}`}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div
            className={`${styles.bubbleCluster} ${styles.bubbleClusterTwo}`}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div
            className={`${styles.bubbleCluster} ${styles.bubbleClusterThree}`}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className={`${styles.wagTrail} ${styles.wagTrailOne}`} />
          <span className={`${styles.wagTrail} ${styles.wagTrailTwo}`} />
          <span className={`${styles.wagTrail} ${styles.wagTrailThree}`} />
          <span className={`${styles.bowAccent} ${styles.bowAccentOne}`}>
            <i />
          </span>
          <span className={`${styles.bowAccent} ${styles.bowAccentTwo}`}>
            <i />
          </span>
          <span className={`${styles.bowAccent} ${styles.bowAccentThree}`}>
            <i />
          </span>
          <span
            className={`${styles.sparkleAccent} ${styles.sparkleAccentOne}`}
          >
            ✦
          </span>
          <span
            className={`${styles.sparkleAccent} ${styles.sparkleAccentTwo}`}
          >
            ✦
          </span>
          <span
            className={`${styles.sparkleAccent} ${styles.sparkleAccentThree}`}
          >
            ✦
          </span>
          <span
            className={`${styles.sparkleAccent} ${styles.sparkleAccentFour}`}
          >
            ✦
          </span>
        </div>

        <section className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden="true">
            <Image
              src="/brand/background.png"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.eyebrow}>
                  <span /> Caring for Ottawa dogs since 1986
                </div>
                <h1>
                  Calm care.
                  <em>Beautiful grooms.</em>
                </h1>
                <p className={styles.lead}>
                  Patient dog grooming and walk-in nail care for Ottawa dogs who
                  feel like family.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#book">
                    Book an appointment
                    <span aria-hidden="true">→</span>
                  </a>
                  <a className={styles.secondaryButton} href={site.phoneHref}>
                    Call {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.trustStrip} aria-label="TLC highlights">
              <div>
                <strong>Trusted locally</strong>
                <span>Since 1986</span>
              </div>
              <div>
                <strong>Complete grooming</strong>
                <span>Bath, tidy &amp; full grooms</span>
              </div>
              <div>
                <strong>Walk-ins</strong>
                <span>Nails &amp; quick care</span>
              </div>
              <div>
                <strong>Easy booking</strong>
                <span>Online or by phone</span>
              </div>
            </div>
          </div>
        </section>

        {showHomepageGallery ? (
          <section
            className={styles.gallerySection}
            id="gallery"
            aria-labelledby="gallery-title"
          >
            <div className={styles.shell}>
              <div className={styles.galleryHeading}>
                <div>
                  <span className={styles.kicker}>
                    Fresh from the grooming table
                  </span>
                  <h2 id="gallery-title">Fresh coats. Happy dogs.</h2>
                </div>
                <div className={styles.galleryIntro}>
                  <span className={styles.galleryNote}>
                    Selected TLC grooms · Finished by Yu Yu and Zandy
                  </span>
                  <a
                    className={styles.galleryLink}
                    href="https://www.instagram.com/tlcgroomingottawa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Follow TLC on Instagram <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={styles.galleryViewport}
              aria-label="Scrolling gallery of grooming work by Yu Yu and Zandy. Hover or focus to pause."
              tabIndex={0}
            >
              <div className={styles.galleryTrack}>
                {[false, true].map((isDuplicate) => (
                  <div
                    className={styles.gallerySet}
                    aria-hidden={isDuplicate || undefined}
                    key={isDuplicate ? "gallery-duplicate" : "gallery-primary"}
                  >
                    {galleryImages.map((image) => {
                      const formatClass =
                        image.format === "wide"
                          ? styles.galleryCardWide
                          : image.format === "tall"
                            ? styles.galleryCardTall
                            : "";

                      return (
                        <figure
                          className={`${styles.galleryCard} ${formatClass}`}
                          key={`${isDuplicate ? "duplicate" : "primary"}-${image.src.src}`}
                        >
                          <Image
                            src={image.src}
                            alt={isDuplicate ? "" : image.alt}
                            fill
                            placeholder="blur"
                            sizes="(max-width: 640px) 76vw, 340px"
                          />
                          <span aria-hidden="true">{image.groomer}</span>
                        </figure>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className={styles.section} id="services">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.kicker}>Dog grooming</span>
                <h2>Find the right care for your dog.</h2>
              </div>
              <p>
                Starting prices are shown below. We&apos;ll confirm the right
                service for your dog.
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service) => (
                <article className={styles.serviceCard} key={service.title}>
                  <span className={styles.serviceIcon} aria-hidden="true">
                    {service.icon}
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <strong>{service.price}</strong>
                </article>
              ))}
            </div>
            {showcaseHomepageOnly ? null : (
              <Link className={styles.sectionLink} href="/our-services">
                View all services &amp; pricing{" "}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.shell}>
            <div className={styles.aboutGrid}>
              <div
                className={styles.aboutPhotos}
                aria-label="Selected grooming work by the TLC team"
                role="group"
              >
                <figure
                  className={`${styles.aboutPhoto} ${styles.aboutPhotoPrimary}`}
                >
                  <Image
                    src={zandyCreamDog}
                    alt="A cream-coloured dog with a softly rounded face and tidy finish after grooming by Zandy"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 640px) 64vw, (max-width: 900px) 52vw, 330px"
                  />
                </figure>
                <figure
                  className={`${styles.aboutPhoto} ${styles.aboutPhotoTop}`}
                >
                  <Image
                    src={yuPoodle}
                    alt="A grey poodle with a softly rounded topknot after grooming by Yu Yu"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 640px) 40vw, (max-width: 900px) 34vw, 230px"
                  />
                </figure>
                <figure
                  className={`${styles.aboutPhoto} ${styles.aboutPhotoBottom}`}
                >
                  <Image
                    src={zandyPomeranian}
                    alt="A smiling white dog with a plush rounded finish after grooming by Zandy"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 640px) 40vw, (max-width: 900px) 34vw, 230px"
                  />
                </figure>
                <span className={styles.aboutPhotoNote}>Real TLC grooms</span>
              </div>

              <div className={styles.aboutCopy}>
                <span className={styles.kicker}>Why TLC</span>
                <h2>Skilled grooming, centred on your dog.</h2>
                <p>
                  Experienced groomers, patient handling and care shaped around
                  each dog.
                </p>
                {showcaseHomepageOnly ? null : (
                  <Link className={styles.aboutLink} href="/our-team">
                    Meet Yu Yu, Ling and Zandy{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
                <div
                  className={`${styles.promises} ${
                    showcaseHomepageOnly ? styles.promisesShowcase : ""
                  }`}
                >
                  <div>
                    <span aria-hidden="true">♡</span>
                    <p>
                      <strong>Optional crating</strong>
                      A setup that suits your dog.
                    </p>
                  </div>
                  <div>
                    <span aria-hidden="true">✦</span>
                    <p>
                      <strong>Careful touch-ups</strong>
                      Contact us within 24 hours.
                    </p>
                  </div>
                  <div>
                    <span aria-hidden="true">✓</span>
                    <p>
                      <strong>Clear pricing</strong>
                      Confirmed for coat, handling and time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.promoSection} id="rewards">
          <div className={styles.shell}>
            <div className={styles.promoHeading}>
              <div>
                <span className={styles.kicker}>Savings &amp; rewards</span>
                <h2>More value for new and returning clients.</h2>
              </div>
            </div>

            <div className={styles.promoGrid}>
              {promotions.map((promotion, index) => (
                <article
                  className={`${styles.promoCard} ${
                    promotion.featured ? styles.promoCardFeatured : ""
                  }`}
                  key={promotion.title}
                >
                  <div className={styles.promoCardTop}>
                    <span className={styles.promoNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.promoEyebrow}>
                      {promotion.eyebrow}
                    </span>
                  </div>
                  <strong className={styles.promoValue}>{promotion.value}</strong>
                  <h3>{promotion.title}</h3>
                  <p>{promotion.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.testimonialsSection} id="testimonials">
          <div className={styles.shell}>
            <div className={styles.testimonialsHeading}>
              <div>
                <span className={styles.kicker}>Kind words from local families</span>
                <h2>Trusted by dogs and the people who love them.</h2>
              </div>
              <div className={styles.reviewSummary}>
                <span aria-hidden="true">★★★★★</span>
              </div>
            </div>

            <TestimonialsCarousel reviews={testimonials} />
          </div>
        </section>

        <section className={styles.bookingSection} id="book">
          <div className={styles.shell}>
            <div className={styles.bookingPanel}>
              <div className={styles.bookingCopy}>
                <span className={styles.kicker}>Plan your visit</span>
                <h2>Request your dog’s next appointment.</h2>
                <p>
                  Choose a service and preferred time online.
                </p>
                <ul>
                  <li>We&apos;ll confirm final service and pricing with you</li>
                  <li>
                    Review <AppointmentPolicyDialog /> before booking
                  </li>
                </ul>
              </div>

              <div className={styles.bookingFrame}>
                <iframe
                  title="TLC online appointment booking"
                  src={bookingUrl}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

    </>
  );
}
