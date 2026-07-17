"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className={styles.announcement}>
        <div className={styles.inner}>
          <span>Serving Ottawa pets with careful grooming since 1986</span>
          <span className={styles.announcementContact}>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <span aria-hidden="true">·</span>
            Tue–Sun 9am–5pm
          </span>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.navInner}>
          <Link className={styles.brand} href="/" onClick={closeMenu}>
            <span className={styles.brandMark} aria-hidden="true">
              TLC
            </span>
            <span>
              <strong>TLC Grooming</strong>
              <small>Dog grooming in Ottawa</small>
            </span>
          </Link>

          <div
            className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}
            id="main-navigation"
          >
            {navItems.map((item) => {
              const isActive =
                !item.href.includes("#") && pathname === item.href;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className={styles.mobileBook}
              href="/#book"
              onClick={closeMenu}
            >
              Book appointment
            </Link>
          </div>

          <Link className={styles.bookButton} href="/#book">
            Book appointment
          </Link>

          <button
            className={styles.menuButton}
            type="button"
            aria-controls="main-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
}
