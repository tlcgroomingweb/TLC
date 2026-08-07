import Image from "next/image";
import Link from "next/link";
import { mapDirectionsUrl, site } from "@/lib/site";
import { BusinessStatus } from "./business-status";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <>
      <footer
        aria-labelledby="footer-contact-heading"
        className={styles.footer}
        id="contact"
      >
        <div className={styles.footerInner}>
          <div className={styles.footerMain}>
            <div className={styles.identity}>
              <Link
                aria-label="TLC Grooming home"
                className={styles.brand}
                href="/"
              >
                <Image
                  alt=""
                  className={styles.logo}
                  height={490}
                  src="/brand/tlc-logo.png"
                  width={1160}
                />
              </Link>
              <p>
                Gentle, professional grooming for Ottawa dogs who feel like
                family.
              </p>
              <span className={styles.heritage}>loving paws since 1986</span>
            </div>

            <section className={styles.footerSection}>
              <h2 id="footer-contact-heading">Contact us</h2>
              <address className={styles.contactList}>
                <a
                  aria-label="Open TLC Grooming address in Google Maps"
                  href={mapDirectionsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className={styles.contactIcon} aria-hidden="true">
                    ⌖
                  </span>
                  <span>
                    <strong>Visit the salon</strong>
                    {site.address}
                  </span>
                  <span className={styles.externalArrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a href={site.phoneHref}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    ☎
                  </span>
                  <span>
                    <strong>Call TLC</strong>
                    {site.phoneDisplay}
                  </span>
                </a>
                <a href={`mailto:${site.email}`}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    @
                  </span>
                  <span>
                    <strong>Email us</strong>
                    {site.email}
                  </span>
                </a>
              </address>
            </section>

            <section
              aria-labelledby="footer-hours-heading"
              className={styles.footerSection}
            >
              <h2 id="footer-hours-heading">Hours &amp; status</h2>
              <div className={styles.statusPanel}>
                <BusinessStatus />
              </div>
              <dl className={styles.hoursList}>
                <div>
                  <dt>Tuesday–Sunday</dt>
                  <dd>9am–5pm</dd>
                </div>
                <div>
                  <dt>Monday</dt>
                  <dd>Closed</dd>
                </div>
                <div>
                  <dt>Statutory holidays</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </section>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.privacyNote}>
              Online booking is provided by{" "}
              <a
                href="https://www.daysmart.com/privacy-policy/"
                rel="noreferrer"
                target="_blank"
              >
                DaySmart
              </a>
              {", and address links open in "}
              <a
                href="https://policies.google.com/privacy"
                rel="noreferrer"
                target="_blank"
              >
                Google Maps
              </a>
              {"."}
            </p>

            <div className={styles.footerMeta}>
              <div className={styles.socialLinks} aria-label="TLC social media">
                <a
                  aria-label="TLC Grooming on Facebook"
                  href="https://www.facebook.com/Tlcgroomingottawa/"
                  rel="noreferrer"
                  target="_blank"
                  title="Facebook"
                >
                  <span className={styles.facebookIcon} aria-hidden="true">
                    f
                  </span>
                </a>
              </div>
              <small>© 2026 {site.name}</small>
            </div>
          </div>
        </div>
      </footer>

      <div className={styles.mobileActions} aria-label="Quick actions">
        <Link href="/#book">Book online</Link>
        <a href={site.phoneHref}>Call TLC</a>
      </div>
    </>
  );
}
