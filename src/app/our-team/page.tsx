import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import styles from "../inner-page.module.css";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the TLC Grooming team in Gloucester, Ottawa and learn about the patient, practical care behind every appointment.",
};

const teamMembers = [
  {
    name: "Yu Yu",
    nameDetail: "Yu Shan",
    role: "Head groomer",
    bio: "Yu Shan, also known as Yu Yu, leads TLC's grooming work with an experienced eye for styling and finishing details that help every dog look its best.",
    image: site.imageUrls[0],
    specialties: ["Custom styling", "Finishing detail"],
  },
  {
    name: "Ling",
    nameDetail: "TLC grooming team",
    role: "Groomer",
    bio: "Ling is part of TLC's grooming team. Her public work gallery reflects careful coat care and tidy finishes across dogs with different grooming needs.",
    image:
      "https://www.tlc4dogs.com/uploads/2/8/2/4/28247963/3807fb90-203e-4393-baab-168bd56205d9.jpg",
    specialties: ["Coat care", "Tidy finishes"],
  },
  {
    name: "Zandy",
    nameDetail: "TLC grooming team",
    role: "Groomer",
    bio: "Zandy trained alongside experienced groomers and brings a gentle approach focused on helping dogs feel comfortable while delivering a polished result.",
    image:
      "https://www.tlc4dogs.com/uploads/2/8/2/4/28247963/angela.jpg",
    specialties: ["Gentle handling", "Low-stress care"],
  },
] as const;

const careValues = [
  {
    number: "01",
    title: "Listen before we begin",
    description:
      "Share the haircut, coat concerns and handling preferences that matter to you and your dog.",
  },
  {
    number: "02",
    title: "Comfort over hurry",
    description:
      "TLC aims for a clean, calm experience, with optional crating based on what works best for each pet.",
  },
  {
    number: "03",
    title: "Finish with care",
    description:
      "The team checks the details before pickup and asks clients to contact TLC promptly if a touch-up is needed.",
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
                People behind <em>the care.</em>
              </h1>
            </div>

            <div className={styles.pageIntroAside}>
              <p className={styles.lead}>
                Yu Yu, Ling and Zandy bring patient handling, practical skill
                and thoughtful finishing to pets across Ottawa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>Care shaped by experience.</h2>
            </div>
            <p>
              Every appointment starts with the pet in front of us. Groomer
              availability can vary, so share your preference in DaySmart or
              call the salon before booking.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <article className={styles.memberCard} key={member.name}>
                <div className={styles.memberImage}>
                  <Image
                    alt={`Example of grooming work featured on ${member.name}'s TLC profile`}
                    fill
                    sizes="(max-width: 860px) 92vw, 370px"
                    src={member.image}
                  />
                  <span className={styles.workLabel}>Selected grooming work</span>
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
            Images are examples of grooming work from TLC&apos;s existing public
            team galleries, not staff portraits.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.kicker}>How the team works</span>
              <h2>A calmer path from drop-off to pickup.</h2>
            </div>
            <p>
              Clear expectations and a thoughtful pace help the team make each
              visit more comfortable for pets and easier for their people.
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
                Choose an employee in DaySmart when available, or call TLC so
                the salon can help match your dog with the right appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.shell}>
          <div className={styles.cta}>
            <div>
              <h2>Ready to meet your groomer?</h2>
              <p>
                Request a date and service through TLC&apos;s existing booking
                system, then add your groomer preference when available.
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
