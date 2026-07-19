import Image from "next/image";
import Link from "next/link";
import { BusinessStatus } from "@/components/business-status";
import {
  bookingUrl,
  mapEmbedUrl,
  packages,
  sampleImages,
  services,
  site,
} from "@/lib/site";
import { testimonials } from "@/lib/testimonials";
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
    src: "https://images.pexels.com/photos/6816841/pexels-photo-6816841.jpeg",
    alt: "Dog having its coat brushed during a grooming appointment",
    format: "standard",
  },
  {
    src: "https://images.pexels.com/photos/19145875/pexels-photo-19145875.jpeg",
    alt: "Poodle standing calmly on a grooming table",
    format: "wide",
  },
  {
    src: "https://images.pexels.com/photos/19145895/pexels-photo-19145895.jpeg",
    alt: "Dog enjoying a gentle bath at a grooming salon",
    format: "tall",
  },
  {
    src: "https://images.pexels.com/photos/19145901/pexels-photo-19145901.jpeg",
    alt: "Freshly styled poodle at a pet grooming salon",
    format: "standard",
  },
  {
    src: "https://images.pexels.com/photos/19145860/pexels-photo-19145860.jpeg",
    alt: "Spaniel looking toward the camera after grooming",
    format: "wide",
  },
  {
    src: "https://images.pexels.com/photos/9092956/pexels-photo-9092956.jpeg",
    alt: "Small fluffy dog sitting for a portrait",
    format: "tall",
  },
  {
    src: "https://images.pexels.com/photos/6131544/pexels-photo-6131544.jpeg",
    alt: "Groomer carefully working with a dog on a table",
    format: "standard",
  },
  {
    src: "https://images.pexels.com/photos/6816866/pexels-photo-6816866.jpeg",
    alt: "Small dog receiving a careful grooming trim",
    format: "wide",
  },
] as const;

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
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.eyebrow}>
                  <span /> Ottawa grooming salon
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

              <div className={styles.heroVisual}>
                <div className={styles.heroImageMain}>
                  <Image
                    src={sampleImages.homeHero}
                    alt="Sample photo of a professional groomer trimming a small dog"
                    fill
                    priority
                    sizes="(max-width: 900px) 88vw, 520px"
                  />
                </div>
                <div className={styles.floatingNote}>
                  <span aria-hidden="true">♥</span>
                  <div>
                    <strong>Gentle, attentive handling</strong>
                    <small>Care shaped around each dog</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.trustStrip} aria-label="TLC highlights">
              <div>
                <strong>Trusted locally</strong>
                <span>Grooming for Ottawa dogs</span>
              </div>
              <div>
                <strong>Complete grooming</strong>
                <span>Baths, tidy-ups and full grooms</span>
              </div>
              <div>
                <strong>Walk-ins</strong>
                <span>Nails, ears and quick tidy-ups</span>
              </div>
              <div>
                <strong>Easy booking</strong>
                <span>Book online or call the salon</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className={styles.gallerySection}
          id="gallery"
          aria-labelledby="gallery-title"
        >
          <div className={styles.shell}>
            <div className={styles.galleryHeading}>
              <div>
                <span className={styles.kicker}>Fresh from the grooming table</span>
                <h2 id="gallery-title">Fresh coats. Happy dogs.</h2>
              </div>
              <div className={styles.galleryIntro}>
                <span className={styles.galleryNote}>
                  Sample gallery · TLC client photos coming soon
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
            aria-label="Scrolling sample grooming gallery. Hover or focus to pause."
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
                        key={`${isDuplicate ? "duplicate" : "primary"}-${image.src}`}
                      >
                        <Image
                          src={image.src}
                          alt={isDuplicate ? "" : image.alt}
                          fill
                          sizes="(max-width: 640px) 76vw, 340px"
                        />
                        <span aria-hidden="true">Sample photo</span>
                      </figure>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <strong>{service.price}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.packageSection}`} id="packages">
          <div className={styles.shell}>
            <div className={styles.centerHeading}>
              <span className={styles.kicker}>Grooming package guide</span>
              <h2>Compare your options before booking.</h2>
              <p>
                Not sure where to start? Call us and we’ll help you choose the
                closest fit.
              </p>
            </div>

            <div className={styles.packageGrid}>
              {packages.map((item) => (
                <article className={styles.packageCard} key={item.title}>
                  <span className={styles.packageEyebrow}>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p className={styles.packagePrice}>
                    <small>Starting prices</small>
                    {item.price}
                  </p>
                  <ul>
                    {item.items.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <a href="#book">Choose this package →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.shell}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutPhotos}>
                <div className={styles.aboutPhotoLarge}>
                  <Image
                    src={sampleImages.whyTlc}
                    alt="Sample photo of a groomer carefully trimming a small dog"
                    fill
                    sizes="(max-width: 900px) 70vw, 420px"
                  />
                </div>
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
                <Link className={styles.aboutLink} href="/our-team">
                  Meet Yu Yu, Ling and Zandy <span aria-hidden="true">→</span>
                </Link>
                <div className={styles.promises}>
                  <div>
                    <span>01</span>
                    <p>
                      <strong>Optional crating</strong>
                      Tell us what setup helps your dog feel most comfortable.
                    </p>
                  </div>
                  <div>
                    <span>02</span>
                    <p>
                      <strong>Careful touch-ups</strong>
                      If a detail needs adjusting, contact us within 24 hours so
                      we can make it right.
                    </p>
                  </div>
                  <div>
                    <span>03</span>
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
                <span aria-hidden="true">★★★★★</span>
                <p>
                  Real experiences shared on Google by local dog owners who
                  trust TLC to groom their dogs.
                </p>
              </div>
            </div>

            <div className={styles.testimonialGrid}>
              {testimonials.map((review) => {
                const reviewDetails = [
                  review.petName ? `${review.petName}’s family` : undefined,
                  review.service,
                ]
                  .filter(Boolean)
                  .join(" · ");

                return (
                  <blockquote className={styles.reviewCard} key={review.id}>
                    <div className={styles.reviewCardTop}>
                      <span
                        className={styles.reviewRating}
                        aria-label={`${review.rating} out of 5 stars`}
                      >
                        <span aria-hidden="true">
                          {"★★★★★".slice(0, review.rating)}
                        </span>
                      </span>
                      {review.sourceUrl ? (
                        <a
                          className={styles.reviewSource}
                          href={review.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {review.source}
                        </a>
                      ) : (
                        <span className={styles.reviewSource}>
                          {review.source}
                        </span>
                      )}
                    </div>

                    <p>“{review.quote}”</p>

                    <footer className={styles.reviewAuthor}>
                      <span aria-hidden="true">♥</span>
                      <div>
                        <strong>{review.customerName}</strong>
                        {reviewDetails ? <small>{reviewDetails}</small> : null}
                      </div>
                    </footer>
                  </blockquote>
                );
              })}
            </div>
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
                  <li>Choose the closest service; we can confirm the details with you</li>
                  <li>Final pricing reflects coat condition, handling needs and time required</li>
                  <li>Call us if you are unsure which package to select</li>
                  <li>
                    Review <a href="#policies">appointment policies</a> before
                    booking
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

        <section className={styles.policySection} id="policies">
          <div className={styles.shell}>
            <div className={styles.policyPanel}>
              <div className={styles.policyIntro}>
                <div>
                  <span className={styles.policyKicker}>Appointment policies</span>
                  <h2>Help us keep every appointment on time.</h2>
                  <p>
                    Each appointment reserves dedicated time for one dog.
                    Please review these policies before booking so drop-off,
                    pickup and missed appointments are clear for everyone.
                  </p>
                </div>
                <div className={styles.policyActions}>
                  <a href="#book">Return to booking</a>
                  <a href={site.phoneHref}>Call the salon</a>
                </div>
              </div>

              <div className={styles.policyList}>
                <article className={styles.policyItem}>
                  <span className={styles.policyTag}>Running late</span>
                  <h3>Call before the appointment time</h3>
                  <p>
                    If you are running late for drop-off or pickup, call TLC as
                    soon as possible. Late drop-offs may need to be cancelled or
                    rescheduled so later appointments stay on time.
                  </p>
                </article>

                <article className={styles.policyItem}>
                  <span className={styles.policyTag}>Late pick-up</span>
                  <h3>30-minute pickup window</h3>
                  <p>
                    A $15 fee is charged for each additional 15 minutes after
                    the 30-minute pickup window.
                  </p>
                </article>

                <article
                  className={`${styles.policyItem} ${styles.policyItemWide}`}
                >
                  <span className={styles.policyTag}>New clients</span>
                  <h3>Missed appointments for new clients</h3>
                  <p>
                    Deposit requirements and booking limits apply after missed
                    appointments.
                  </p>
                  <div className={styles.policySteps}>
                    <div>
                      <span>1st no-show</span>
                      <strong>A 50% deposit is required before rebooking.</strong>
                    </div>
                    <div>
                      <span>2nd no-show</span>
                      <strong>50% must be paid upfront to book again.</strong>
                    </div>
                    <div>
                      <span>3rd no-show</span>
                      <strong>TLC will be unable to accept future bookings.</strong>
                    </div>
                  </div>
                </article>

                <article
                  className={`${styles.policyItem} ${styles.policyItemWide}`}
                >
                  <span className={styles.policyTag}>Regular clients</span>
                  <h3>Missed appointments for returning clients</h3>
                  <p>
                    A first missed appointment carries a fee. Repeat no-shows
                    require a deposit and may affect future booking.
                  </p>
                  <div className={styles.policySteps}>
                    <div>
                      <span>1st no-show</span>
                      <strong>A $20 fee is added to the next appointment.</strong>
                    </div>
                    <div>
                      <span>2nd no-show</span>
                      <strong>50% deposit required to book again.</strong>
                    </div>
                    <div>
                      <span>3rd no-show</span>
                      <strong>TLC will be unable to accept future bookings.</strong>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.shell}>
            <div className={styles.contactPanel}>
              <div className={styles.contactCopy}>
                <span className={styles.kicker}>Visit the salon</span>
                <h2>Find us in Gloucester.</h2>
                <p>
                  We’re located on Canotek Road and welcome clients Tuesday
                  through Sunday.
                </p>
                <dl className={styles.contactList}>
                  <div>
                    <dt>Location</dt>
                    <dd>{site.address}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>
                      <BusinessStatus variant="detail" />
                    </dd>
                  </div>
                  <div>
                    <dt>Hours</dt>
                    <dd>{site.hours}</dd>
                  </div>
                  <div>
                    <dt>Holidays</dt>
                    <dd>Closed on applicable federal and Ontario statutory holidays.</dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>
                      <a href={site.phoneHref}>{site.phoneDisplay}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className={styles.map}>
                <iframe
                  title="Map to TLC Grooming"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapEmbedUrl}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
