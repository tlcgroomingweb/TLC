import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { AppointmentPolicyDialog } from "@/components/appointment-policy-dialog";
import { BookingEmbed } from "@/components/booking-embed";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import {
  bookingUrl,
  googleRating,
  googleReviewsUrl,
  services,
  showcaseHomepageOnly,
  site,
} from "@/lib/site";
import { testimonials } from "@/lib/testimonials";
import yuPoodle from "./references/yu/1.jpeg";
import yuPomeranian from "./references/yu/2.jpeg";
import yuWhiteDoodle from "./references/yu/3.jpg";
import yuMaltese from "./references/yu/4.jpeg";
import yuLargeDog from "./references/yu/5.jpg";
import yuSmallDog from "./references/yu/6.jpg";
import zandyBrownDog from "./references/zandy/1.jpeg";
import zandyPomeranian from "./references/zandy/2.jpeg";
import zandyDarkDog from "./references/zandy/3.jpeg";
import zandyWhiteDog from "./references/zandy/4.jpeg";
import zandyCreamDog from "./references/zandy/5.jpeg";
import zandyFluffyWhiteDog from "./references/zandy/6.jpeg";
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
    description: "New clients save $10 on their first Full Groom.",
    featured: true,
  },
  {
    value: "$5",
    eyebrow: "Referral reward",
    title: "Refer & Save",
    description: "Refer a friend or family member and save $5.",
    featured: false,
  },
  {
    value: "10%",
    eyebrow: "Monthly offer",
    title: "Seniors' Day",
    description: (
      <>
        On the <strong>last Wednesday of every month</strong>, seniors save 10%
        on grooming, nail trims and products.
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
        Every <strong>10th</strong> nail trim is free.
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

const googleTestimonials = testimonials.filter(
  (testimonial) => testimonial.source === "Google",
);

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
                  Gentle grooming for dogs who feel like <em>family.</em>
                </h1>
                <p className={styles.lead}>
                  Full-service dog grooming and walk-in nail care, delivered
                  with skill and patience by our experienced Gloucester team.
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
                <ul className={styles.heroNotes} aria-label="Service highlights">
                  <li>Optional crating</li>
                  <li>Full-service grooming</li>
                  <li>Walk-in care</li>
                </ul>
              </div>
            </div>

            <div className={styles.trustStrip} aria-label="TLC highlights">
              <div>
                <strong>Trusted locally</strong>
                <span>Grooming for Ottawa dogs</span>
              </div>
              <div>
                <strong>Complete grooming</strong>
                <span>Bath &amp; Brush, Bath &amp; Tidy and Full Groom</span>
              </div>
              <div>
                <strong>Walk-ins</strong>
                <span>
                  Nail, face &amp; paw trims, teeth brushing, ear cleaning and
                  anal-gland expression
                </span>
              </div>
              <div>
                <strong>Easy booking</strong>
                <span>Book online or call the salon</span>
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
                Choose the service that seems closest. Your groomer will confirm
                the recommendation and price based on size, coat condition and
                handling needs.
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
                  TLC combines decades of grooming experience with patient
                  handling and clear communication. Yu Yu, Ling and Zandy take
                  time to understand each dog&apos;s coat, preferred finish and
                  individual handling needs.
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
                      Tell us what setup helps your dog feel most comfortable.
                    </p>
                  </div>
                  <div>
                    <span aria-hidden="true">✦</span>
                    <p>
                      <strong>Careful touch-ups</strong>
                      If a detail needs adjusting, contact us within 24 hours so
                      we can make it right.
                    </p>
                  </div>
                  <div>
                    <span aria-hidden="true">✓</span>
                    <p>
                      <strong>Clear, straightforward pricing</strong>
                      We publish starting prices and confirm adjustments based
                      on coat condition, handling needs and time required.
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
              <p>
                Offers for first visits, referrals, seniors and regular
                nail-trim clients make it easier to keep up with routine care.
              </p>
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

            <p className={styles.promoFinePrint}>
              Ask our team to confirm current offer details and eligibility.
            </p>
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
                <div className={styles.reviewScore}>
                  <span
                    aria-label={`${googleRating} out of 5 stars`}
                    className={styles.googleStars}
                    role="img"
                    style={
                      {
                        "--google-rating-width": `${(googleRating / 5) * 100}%`,
                      } as CSSProperties
                    }
                  >
                    <span aria-hidden="true">★★★★★</span>
                  </span>
                  <strong>{googleRating.toFixed(1)} / 5</strong>
                </div>
                <span className={styles.reviewCount}>
                  Google rating · {googleTestimonials.length} featured reviews
                </span>
                <a
                  className={styles.googleReviewsLink}
                  href={googleReviewsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  View all Google Reviews <span aria-hidden="true">↗</span>
                </a>
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
                  Use our online booking system to request your preferred date,
                  time, service and groomer.
                </p>
                <ul>
                  <li>
                    Choose the closest service; we can confirm the details with
                    you
                  </li>
                  <li>
                    Final pricing reflects coat condition, handling needs and
                    time required
                  </li>
                  <li>
                    Call us if you are unsure which package to select
                  </li>
                  <li>
                    Review <AppointmentPolicyDialog /> before booking
                  </li>
                </ul>
              </div>

              <div className={styles.bookingFrame}>
                <BookingEmbed bookingUrl={bookingUrl} />
              </div>
            </div>
          </div>
        </section>

      </main>

    </>
  );
}
