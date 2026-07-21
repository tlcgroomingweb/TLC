import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import yuLargeDog from "../references/yu/IMG_7049.jpeg";
import yuMaltese from "../references/yu/IMG_4872.jpeg";
import yuPomeranian from "../references/yu/IMG_2909.jpeg";
import yuPoodle from "../references/yu/IMG_2104.jpeg";
import yuSmallDog from "../references/yu/IMG_8466.jpeg";
import yuWhiteDoodle from "../references/yu/IMG_3224.jpeg";
import zandyBrownDog from "../references/zandy/6515.jpeg";
import zandyCreamDog from "../references/zandy/6517.jpeg";
import zandyDarkDog from "../references/zandy/6516.jpeg";
import zandyFluffyWhiteDog from "../references/zandy/IMG_9183.jpeg";
import zandyPomeranian from "../references/zandy/IMG_6903.jpeg";
import zandyWhiteDog from "../references/zandy/6518.jpeg";
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
    number: "01",
    name: "Yu Yu",
    role: "Head Groomer",
    featured: true,
    bio: [
      "Hi, I’m Yu Shan, though most clients know me as Yu Yu. I have more than 13 years of hands-on grooming experience and graduated from Algonquin College’s Groomer Assistant program in 2013. For the past nine years, I’ve served as Head Groomer at TLC, where I also help train newer groomers and uphold our standards.",
      "I’m known for a calm, gentle approach, whether I’m welcoming a wiggly puppy, an anxious senior or a nervous first-timer. I always put comfort first and believe grooming is about more than style—it’s about trust, kindness and treating every dog like family.",
    ],
    specialties: ["Custom styling", "Precision finishing"],
  },
  {
    number: "02",
    name: "Ling",
    role: "Groomer",
    featured: false,
    bio: [
      "Hi, I’m Ling. I bring careful coat work and a steady eye for neat, balanced finishes.",
      "I adapt my approach to dogs with a range of grooming needs.",
    ],
    specialties: ["Detailed coat care", "Balanced finishes"],
  },
  {
    number: "03",
    name: "Zandy",
    role: "Groomer",
    featured: false,
    bio: [
      "Hi, I’m Zandy. I have more than four years of professional grooming experience, with hands-on knowledge of grooming techniques and animal care. I genuinely love working with dogs of every breed, size and personality.",
      "Every dog is unique, so I take time to understand what they need and work at their pace—especially when they’re energetic, shy or nervous. From baths and haircuts to nails and ear care, I focus on every detail while keeping comfort, safety and happiness first.",
    ],
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
        src: yuPomeranian,
        alt: "A smiling brown dog with a rounded, sculpted coat after grooming by Yu Yu",
      },
      {
        src: yuPoodle,
        alt: "A grey poodle with a rounded topknot and neatly shaped legs after grooming by Yu Yu",
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
        alt: "A large black, white and brown dog wearing a blue bandana after grooming by Yu Yu",
      },
      {
        src: yuSmallDog,
        alt: "A small tan dog with a neat short trim and green bandana after grooming by Yu Yu",
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
        src: zandyPomeranian,
        alt: "A smiling white dog with a softly rounded coat after grooming by Zandy",
      },
      {
        src: zandyBrownDog,
        alt: "A brown dog with a rounded face and even coat after grooming by Zandy",
      },
      {
        src: zandyDarkDog,
        alt: "A small dark dog with a neat face and white chin after grooming by Zandy",
      },
      {
        src: zandyCreamDog,
        alt: "A cream-coloured dog with a rounded head and tidy body trim after grooming by Zandy",
      },
      {
        src: zandyWhiteDog,
        alt: "A fluffy white dog with a rounded finish after grooming by Zandy",
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
    number: "01",
    title: "Listen first",
    description:
      "Tell us what your dog needs and how they prefer to be handled.",
  },
  {
    number: "02",
    title: "Go at their pace",
    description:
      "Patient handling and flexible crating help dogs feel at ease.",
  },
  {
    number: "03",
    title: "Finish with care",
    description:
      "We check every detail before pickup; touch-ups are welcome within 24 hours.",
  },
] as const;

export default function OurTeamPage() {
  return (
    <main className={styles.page}>
      <section className={styles.pageIntro}>
        <div className={styles.shell}>
          <div className={styles.pageIntroGrid}>
            <div>
              <span className={styles.eyebrow}>Our grooming team</span>
              <h1>
                The hands behind <em>thoughtful care.</em>
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
                    <span className={styles.memberNumber} aria-hidden="true">
                      {member.number}
                    </span>
                  </div>
                  <h2>{member.name}</h2>
                  <div className={styles.memberBio}>
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
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
              <article className={styles.valueCard} key={item.number}>
                <span className={styles.valueNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.teamNote}>
            <span aria-hidden="true">♥</span>
            <div>
              <strong>Prefer a groomer?</strong>
              <p>
                Select one when booking, or call us for help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
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
      </section>
    </main>
  );
}
