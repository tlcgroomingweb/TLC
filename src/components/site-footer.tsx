import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./site-footer.module.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Book", href: "/#book" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerIdentity}>
            <Link
              aria-label="TLC Grooming home"
              className={styles.footerBrand}
              href="/"
            >
              <Image
                alt=""
                className={styles.footerLogo}
                height={490}
                src="/brand/tlc-logo.png"
                width={1160}
              />
            </Link>
            <p>Gentle dog grooming in Ottawa since 1986.</p>
          </div>
          <nav className={styles.footerLinks} aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
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
              <a
                aria-label="TLC Grooming on Instagram"
                href="https://www.instagram.com/tlcgroomingottawa/"
                rel="noreferrer"
                target="_blank"
                title="Instagram"
              >
                <span className={styles.instagramIcon} aria-hidden="true">
                  <span />
                </span>
              </a>
            </div>
            <small>© 2026 {site.name}</small>
          </div>
        </div>
      </footer>

      <div className={styles.mobileActions} aria-label="Quick actions">
        <Link href="/#book">Appointments</Link>
        <a href={site.phoneHref}>Call TLC</a>
      </div>
    </>
  );
}
