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
          <Link className={styles.footerBrand} href="/">
            <span>TLC</span>
            <strong>TLC Grooming</strong>
          </Link>
          <p>Gentle dog grooming in Ottawa since 1986.</p>
          <div className={styles.footerLinks}>
            {footerLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <small>© 2026 {site.name}</small>
        </div>
      </footer>

      <div className={styles.mobileActions} aria-label="Quick actions">
        <Link href="/#book">Appointments</Link>
        <a href={site.phoneHref}>Call TLC</a>
      </div>
    </>
  );
}
