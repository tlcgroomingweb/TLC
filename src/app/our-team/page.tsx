import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sampleImages } from "@/lib/site";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Meet Our Dog Groomers in Ottawa",
  description:
    "Meet the TLC Grooming team in Gloucester, Ottawa and discover the skill, gentle handling and attention behind every appointment.",
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
      "Meet the TLC Grooming team in Gloucester, Ottawa and discover the skill, gentle handling and attention behind every appointment.",
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
      "Meet the TLC Grooming team in Gloucester, Ottawa and discover the skill and gentle handling behind every appointment.",
    images: ["/brand/tlc-logo.png"],
  },
};

const teamMembers = [
  {
    name: "Yu Yu",
    nameDetail: "Yu Shan",
    role: "Head groomer",
    bio: "Yu Shan, known to clients as Yu Yu, leads TLC’s grooming team. She brings an experienced eye to custom styling and the finishing details that make each groom feel polished and personal.",
    image: sampleImages.team[0],
    specialties: ["Custom styling", "Detailed finishing"],
  },
  {
    name: "Ling",
    nameDetail: "TLC grooming team",
    role: "Groomer",
    bio: "Ling brings careful coat work and a steady eye for neat, balanced finishes. She adapts her approach to dogs with a range of grooming needs.",
    image: sampleImages.team[1],
    specialties: ["Detailed coat care", "Balanced finishes"],
  },
  {
    name: "Zandy",
    nameDetail: "TLC grooming team",
    role: "Groomer",
    bio: "Zandy pairs her grooming training with gentle, patient handling. She focuses on helping dogs settle into the process while working toward a clean, polished finish.",
    image: sampleImages.team[2],
    specialties: ["Gentle handling", "Comfort-focused care"],
  },
] as const;

const careValues = [
  {
    number: "01",
    title: "Start by listening",
    description:
      "Tell us about the haircut, coat concerns and handling preferences that matter to you and your dog.",
  },
  {
    number: "02",
    title: "Work at your dog’s pace",
    description:
      "We use patient handling and offer optional crating based on the setup that works best for your dog.",
  },
  {
    number: "03",
    title: "Check every detail",
    description:
      "We review the finished groom before pickup. If a detail needs adjusting, contact TLC within 24 hours.",
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
                Meet the people <em>behind every groom.</em>
              </h1>
            </div>

            <div className={styles.pageIntroAside}>
              <p className={styles.lead}>
                Yu Yu, Ling and Zandy bring skilled grooming, patient handling
                and a careful eye for detail to dogs across Ottawa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Experience in every detail.</h2>
            </div>
            <p>
              Every appointment is shaped around the dog in front of us. If you
              have a groomer preference, select it when booking online or call
              the salon so we can confirm availability.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <article className={styles.memberCard} key={member.name}>
                <div className={styles.memberImage}>
                  <Image
                    alt={`Sample grooming photo for ${member.name}’s profile`}
                    fill
                    sizes="(max-width: 860px) 92vw, 370px"
                    src={member.image}
                  />
                  <span className={styles.workLabel}>Sample photo</span>
                </div>
                <div className={styles.memberBody}>
                  <span className={styles.memberRole}>{member.role}</span>
                  <h2>{member.name}</h2>
                  <p className={styles.memberNameDetail}>{member.nameDetail}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                  <ul className={styles.specialties} aria-label={`${member.name} focus areas`}>
                    {member.specialties.map((specialty) => (
                      <li key={specialty}>{specialty}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.portfolioNote}>
            These temporary stock photos do not show TLC staff or client dogs.
            Client-provided team photos will replace them before launch.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>Our approach</span>
              <h2>Clear, considerate care from drop-off to pickup.</h2>
            </div>
            <p>
              Clear expectations and a patient pace help make each visit more
              comfortable for dogs and easier for their people.
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
              <strong>Have a groomer preference?</strong>
              <p>
                Choose a groomer when booking online, or call TLC so we can help
                match your dog with the right appointment.
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
