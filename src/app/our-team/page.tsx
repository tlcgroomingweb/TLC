import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { showcaseHomepageOnly } from "@/lib/site";
import lingApricotPoodle from "../references/ling/1.jpg";
import lingDarkDog from "../references/ling/2.jpg";
import lingWhitePoodle from "../references/ling/3.jpg";
import lingCavalier from "../references/ling/4.jpg";
import lingBernese from "../references/ling/5.jpg";
import lingYorkie from "../references/ling/6.jpg";
import yuPoodle from "../references/yu/1.jpeg";
import yuPomeranian from "../references/yu/2.jpeg";
import yuWhiteDoodle from "../references/yu/3.jpg";
import yuMaltese from "../references/yu/4.jpeg";
import yuLargeDog from "../references/yu/5.jpg";
import yuSmallDog from "../references/yu/6.jpg";
import zandyBrownDog from "../references/zandy/1.jpeg";
import zandyPomeranian from "../references/zandy/2.jpeg";
import zandyDarkDog from "../references/zandy/3.jpeg";
import zandyWhiteDog from "../references/zandy/4.jpeg";
import zandyCreamDog from "../references/zandy/5.jpeg";
import zandyFluffyWhiteDog from "../references/zandy/6.jpeg";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Meet Our Dog Groomers in Ottawa",
  description:
    "Meet Yu Yu, Ling and Zandy at TLC Grooming in Gloucester, Ottawa, and explore selected work from our experienced grooming team.",
  alternates: {
    canonical: "/our-team",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/our-team",
    siteName: "TLC Grooming and Sharpening Services",
    title: "Meet Our Dog Groomers in Ottawa | TLC Grooming",
    description:
      "Meet Yu Yu, Ling and Zandy at TLC Grooming in Gloucester, Ottawa, and explore selected work from our experienced grooming team.",
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
    title: "Meet Our Dog Groomers in Ottawa | TLC Grooming",
    description:
      "Meet Yu Yu, Ling and Zandy, and explore selected work from TLC’s experienced grooming team.",
    images: ["/brand/tlc-logo.png"],
  },
};

const teamMembers = [
  {
    name: "Yu Yu",
    role: "Head Groomer",
    featured: true,
    bio: "Yu Yu brings more than 13 years of grooming experience and has led TLC’s grooming team for nine years. Known for calm, gentle handling, she helps puppies, seniors and nervous dogs feel safe while delivering thoughtful, precise finishes.",
    specialties: ["Custom styling", "Precision finishing"],
  },
  {
    name: "Ling",
    role: "Groomer",
    featured: false,
    bio: "Ling has spent 3 years developing her craft at TLC under Yu Yu’s mentorship. She works confidently with all breeds and coat types, combining a patient approach with a careful eye for precision styling and consistent results.",
    specialties: ["Precision styling", "All coat types"],
  },
  {
    name: "Zandy",
    role: "Groomer",
    featured: false,
    bio: "Zandy brings more than 4 years of professional grooming experience and a genuine love for dogs of every size and personality. She works at each dog’s pace, keeping comfort, safety and careful finishing at the centre of every visit.",
    specialties: ["Gentle handling", "Low-stress care"],
  },
] as const;

const portfolios = [
  {
    name: "Yu Yu",
    role: "Head Groomer",
    credentials: [
      "13+ years’ experience",
      "9 years leading TLC"
    ],
    philosophy: "Trust, kindness and treating every dog like family.",
    images: [
      {
        src: yuPoodle,
        alt: "A grey poodle with a rounded topknot and neatly shaped legs after grooming by Yu Yu",
      },
      {
        src: yuPomeranian,
        alt: "A smiling brown dog with a rounded, sculpted coat after grooming by Yu Yu",
      },
      {
        src: yuWhiteDoodle,
        alt: "A cream-coloured dog with an even trim and softly shaped face after grooming by Yu Yu",
      },
      {
        src: yuMaltese,
        alt: "A small white dog with a silky, symmetrical finish and blue bow after grooming by Yu Yu",
      },
      {
        src: yuLargeDog,
        alt: "A large tan hound with a long, carefully brushed coat after grooming by Yu Yu",
      },
      {
        src: yuSmallDog,
        alt: "A small white dog with a neatly rounded face and clean short trim after grooming by Yu Yu",
      },
    ],
  },
  {
    name: "Ling",
    role: "Groomer",
    credentials: ["3 years with TLC", "All breeds and coat types"],
    philosophy: "Calm, patient care with a thoughtful eye for every finish.",
    images: [
      {
        src: lingApricotPoodle,
        alt: "An apricot poodle with a softly rounded face and neat body trim after grooming by Ling",
      },
      {
        src: lingDarkDog,
        alt: "A small dark dog with a softly rounded face and neat short coat after grooming by Ling",
      },
      {
        src: lingWhitePoodle,
        alt: "A white poodle with a rounded head and evenly finished coat after grooming by Ling",
      },
      {
        src: lingCavalier,
        alt: "A brown and white Cavalier with neatly finished ears, paws and coat after grooming by Ling",
      },
      {
        src: lingBernese,
        alt: "A large black, white and brown Bernese mountain dog with a clean, brushed coat after grooming by Ling",
      },
      {
        src: lingYorkie,
        alt: "A small Yorkshire terrier with a tidy short coat after grooming by Ling",
      },
    ],
  },
  {
    name: "Zandy",
    role: "Groomer",
    credentials: [
      "4+ years’ experience",
      "All breeds, sizes and personalities",
    ],
    philosophy: "Patient, gentle care at every dog’s own pace.",
    images: [
      {
        src: zandyBrownDog,
        alt: "A brown dog with a rounded face and even coat after grooming by Zandy",
      },
      {
        src: zandyPomeranian,
        alt: "A smiling white dog with a softly rounded coat after grooming by Zandy",
      },
      {
        src: zandyDarkDog,
        alt: "A small dark dog with a neat face and white chin after grooming by Zandy",
      },
      {
        src: zandyWhiteDog,
        alt: "A fluffy white dog with a rounded finish after grooming by Zandy",
      },
      {
        src: zandyCreamDog,
        alt: "A cream-coloured dog with a rounded head and tidy body trim after grooming by Zandy",
      },
      {
        src: zandyFluffyWhiteDog,
        alt: "A large fluffy white dog with a smooth, carefully finished coat after grooming by Zandy",
      },
    ],
  },
] as const;

const careValues = [
  {
    icon: "♡",
    title: "Listen first",
    description:
      "Tell us what your dog needs and how they prefer to be handled.",
  },
  {
    icon: "≈",
    title: "Go at their pace",
    description:
      "Patient handling and flexible crating help dogs feel at ease.",
  },
  {
    icon: "✦",
    title: "Finish with care",
    description:
      "We check every detail before pickup; touch-ups are welcome within 24 hours.",
  },
] as const;

export default function OurTeamPage() {
  if (showcaseHomepageOnly) {
    redirect("/");
  }

  return (
    <main className={`${styles.page} ${styles.teamPage}`}>
      <section className={styles.pageIntro}>
        <div className={styles.shell}>
          <div className={styles.pageIntroGrid}>
            <div>
              <span className={styles.eyebrow}>Our grooming team</span>
              <h1>
                <span className={styles.introHeadlineLead}>
                  The hands behind
                </span>
                <em>thoughtful care.</em>
              </h1>
            </div>

            <div className={styles.pageIntroAside}>
              <p className={styles.lead}>
                Meet the groomers who pair skilled hands with patient care,
                creating a considered experience for every dog they welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.shell}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <article
                className={`${styles.memberCard} ${
                  member.featured ? styles.memberCardFeatured : ""
                }`}
                key={member.name}
              >
                <div className={styles.memberBody}>
                  <div className={styles.memberMeta}>
                    <span className={styles.memberRole}>{member.role}</span>
                  </div>
                  <h2>{member.name}</h2>
                  <div className={styles.memberBio}>
                    <p>{member.bio}</p>
                  </div>
                  <div className={styles.memberFooter}>
                    <ul
                      className={styles.specialties}
                      aria-label={`${member.name} focus areas`}
                    >
                      {member.specialties.map((specialty) => (
                        <li key={specialty}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className={styles.shell}>
          <header className={styles.portfolioIntro}>
            <span className={styles.kicker}>Selected work</span>
            <h2>Groomed with care.</h2>
          </header>

          <div className={styles.portfolioList}>
            {portfolios.map((portfolio) => (
              <article className={styles.portfolioBlock} key={portfolio.name}>
                <header className={styles.portfolioHeader}>
                  <div>
                    <h3>{portfolio.name}</h3>
                    <p>{portfolio.role}</p>
                  </div>

                  <div className={styles.portfolioSummary}>
                    <ul aria-label={`${portfolio.name} experience`}>
                      {portfolio.credentials.map((credential) => (
                        <li key={credential}>{credential}</li>
                      ))}
                    </ul>
                    <p>{portfolio.philosophy}</p>
                  </div>
                </header>

                <div
                  aria-label={`Selected grooming work by ${portfolio.name}`}
                  className={styles.portfolioGallery}
                  role="group"
                >
                  {portfolio.images.map((image) => (
                    <figure className={styles.portfolioImage} key={image.src.src}>
                      <Image
                        alt={image.alt}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 680px) 44vw, (max-width: 1020px) 31vw, 370px"
                        src={image.src}
                      />
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>Our approach</span>
              <h2>Care at every step.</h2>
            </div>
            <p>
              A calm, considered visit—from drop-off to pickup.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {careValues.map((item) => (
              <article className={styles.valueCard} key={item.title}>
                <span className={styles.valueIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          {/* <div className={styles.teamNote}>
            <span aria-hidden="true">♥</span>
            <div>
              <strong>Prefer a groomer?</strong>
              <p>
                Select one when booking, or call us for help.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* <section className={styles.ctaSection}>
        <div className={styles.shell}>
          <div className={styles.cta}>
            <div>
              <h2>Ready to book with our team?</h2>
              <p>
                Request your preferred date and service online, then select a
                groomer when availability allows.
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
