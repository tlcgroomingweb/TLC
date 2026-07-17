import Image from "next/image";
import {
  bookingUrl,
  mapEmbedUrl,
  packages,
  services,
  site,
} from "@/lib/site";
import styles from "./page.module.css";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: site.name,
  description:
    "Dog grooming, walk-in nail trims, and pet care in Gloucester, Ontario.",
  telephone: "+1-613-745-5808",
  email: site.email,
  image: site.imageUrls,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5303 Canotek Rd, Unit 20A",
    addressLocality: "Gloucester",
    addressRegion: "ON",
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
                  <span /> Ottawa grooming salon · Since 1986
                </div>
                <h1>
                  Gentle grooming for pets who feel like <em>family.</em>
                </h1>
                <p className={styles.lead}>
                  Dog grooming, walk-in nail trims, and thoughtful care from an
                  experienced local team in Gloucester.
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
                    src={site.imageUrls[0]}
                    alt="Freshly groomed dog at TLC Grooming"
                    fill
                    priority
                    sizes="(max-width: 900px) 88vw, 520px"
                  />
                </div>
                <div className={styles.heroImageSmall}>
                  <Image
                    src={site.imageUrls[1]}
                    alt="Small dog after grooming at TLC Grooming"
                    fill
                    sizes="(max-width: 640px) 32vw, 170px"
                  />
                </div>
                <div className={styles.floatingNote}>
                  <span aria-hidden="true">♥</span>
                  <div>
                    <strong>Patient, practical care</strong>
                    <small>For pets of all shapes and sizes</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.trustStrip} aria-label="TLC highlights">
              <div>
                <strong>Since 1986</strong>
                <span>Serving Ottawa families</span>
              </div>
              <div>
                <strong>Full-service care</strong>
                <span>Baths, tidy-ups and full grooms</span>
              </div>
              <div>
                <strong>Walk-ins</strong>
                <span>Nails, ears and tidy-ups</span>
              </div>
              <div>
                <strong>Easy booking</strong>
                <span>Request a time or call us</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="services">
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.kicker}>Dog grooming</span>
                <h2>Choose the care your pet needs.</h2>
              </div>
              <p>
                Start with the service that feels closest. Final pricing depends
                on breed, size, coat condition and temperament.
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
              <span className={styles.kicker}>Simple package guide</span>
              <h2>Compare before you book.</h2>
              <p>
                Not sure which service fits? Call us and we’ll help you choose.
              </p>
            </div>

            <div className={styles.packageGrid}>
              {packages.map((item) => (
                <article
                  className={`${styles.packageCard} ${
                    item.featured ? styles.packageFeatured : ""
                  }`}
                  key={item.title}
                >
                  <span className={styles.packageEyebrow}>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p className={styles.packagePrice}>
                    <small>Starting at</small>
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
                    src={site.imageUrls[1]}
                    alt="Small dog after a TLC grooming appointment"
                    fill
                    sizes="(max-width: 900px) 70vw, 420px"
                  />
                </div>
                <div className={styles.sinceBadge}>
                  <strong>1986</strong>
                  <span>Ottawa roots</span>
                </div>
              </div>

              <div className={styles.aboutCopy}>
                <span className={styles.kicker}>Why TLC</span>
                <h2>Experienced hands. Calm, respectful care.</h2>
                <p>
                  TLC has grown through decades of local trust and a simple
                  promise: treat every pet with patience, cleanliness and
                  respect.
                </p>
                <div className={styles.promises}>
                  <div>
                    <span>01</span>
                    <p>
                      <strong>Optional crating</strong>
                      Ask us about the setup that works best for your pet.
                    </p>
                  </div>
                  <div>
                    <span>02</span>
                    <p>
                      <strong>Thoughtful touch-ups</strong>
                      Let us know within 24 hours if something needs adjusting.
                    </p>
                  </div>
                  <div>
                    <span>03</span>
                    <p>
                      <strong>Practical rewards</strong>
                      Ask about referral savings and nail-trim rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bookingSection} id="book">
          <div className={styles.shell}>
            <div className={styles.bookingPanel}>
              <div className={styles.bookingCopy}>
                <span className={styles.kicker}>Ready when you are</span>
                <h2>Book your pet’s next visit.</h2>
                <p>
                  Use our existing appointment system to request a date, time,
                  service and groomer preference.
                </p>
                <ul>
                  <li>Choose the closest service; we can confirm details later</li>
                  <li>Pricing may vary by coat condition and temperament</li>
                  <li>Call if you are unsure which package to select</li>
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
                  <span className={styles.policyKicker}>Before you book</span>
                  <h2>A clearer version of TLC&apos;s appointment policies</h2>
                  <p>
                    Each time slot is reserved for one pet, and TLC&apos;s groomers
                    work on commission. This keeps the policy visible without
                    turning it into a heavy legal page.
                  </p>
                </div>
                <div className={styles.policyActions}>
                  <a href="#book">Back to booking</a>
                  <a href={site.phoneHref}>Call if running late</a>
                </div>
              </div>

              <div className={styles.policyList}>
                <article className={styles.policyItem}>
                  <span className={styles.policyTag}>Running late</span>
                  <h3>Call before the appointment time</h3>
                  <p>
                    If you are late for drop-off or pick-up, call TLC. Late
                    drop-offs may need to be cancelled or rescheduled.
                  </p>
                </article>

                <article className={styles.policyItem}>
                  <span className={styles.policyTag}>Late pick-up</span>
                  <h3>30-minute pickup window</h3>
                  <p>
                    After the 30-minute window, a $15 fee applies for every 15
                    minutes late.
                  </p>
                </article>

                <article
                  className={`${styles.policyItem} ${styles.policyItemWide}`}
                >
                  <span className={styles.policyTag}>New clients</span>
                  <h3>No-show steps for first-time appointments</h3>
                  <p>
                    The first missed appointment requires a deposit before
                    rebooking. Continued no-shows become stricter.
                  </p>
                  <div className={styles.policySteps}>
                    <div>
                      <span>1st no-show</span>
                      <strong>50% deposit before the next appointment.</strong>
                    </div>
                    <div>
                      <span>2nd no-show</span>
                      <strong>50% paid upfront to book again.</strong>
                    </div>
                    <div>
                      <span>3rd no-show</span>
                      <strong>Future appointments are no longer available.</strong>
                    </div>
                  </div>
                </article>

                <article
                  className={`${styles.policyItem} ${styles.policyItemWide}`}
                >
                  <span className={styles.policyTag}>Regular clients</span>
                  <h3>No-show steps for returning clients</h3>
                  <p>
                    Regular clients get a lighter first reminder, then deposit
                    requirements if missed appointments continue.
                  </p>
                  <div className={styles.policySteps}>
                    <div>
                      <span>1st no-show</span>
                      <strong>$20 added to the next appointment.</strong>
                    </div>
                    <div>
                      <span>2nd no-show</span>
                      <strong>50% deposit required to book again.</strong>
                    </div>
                    <div>
                      <span>3rd no-show</span>
                      <strong>Future appointments are no longer permitted.</strong>
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
                <span className={styles.kicker}>Come say hello</span>
                <h2>Visit TLC in Gloucester.</h2>
                <p>
                  We’re located on Canotek Road and open six days a week.
                </p>
                <dl className={styles.contactList}>
                  <div>
                    <dt>Location</dt>
                    <dd>{site.address}</dd>
                  </div>
                  <div>
                    <dt>Hours</dt>
                    <dd>{site.hours}</dd>
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
