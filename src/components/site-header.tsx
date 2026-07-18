"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useState } from "react";
import { navItems, site } from "@/lib/site";
import { BusinessStatus } from "./business-status";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const handleHeaderLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    closeMenu();

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const [targetPath, targetId] = href.split("#");
    const isRepeatedHash =
      targetId &&
      pathname === targetPath &&
      window.location.hash === `#${targetId}`;

    if (!isRepeatedHash) {
      return;
    }

    const target = document.getElementById(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <>
      <div className={styles.announcement}>
        <div className={styles.inner}>
          <span className={styles.announcementMessage}>
            Skilled grooming. Patient care. Happier pets.
          </span>
          <span className={styles.announcementContact}>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <span className={styles.announcementDivider} aria-hidden="true">
              ·
            </span>
            <BusinessStatus />
          </span>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.navInner}>
          <Link
            aria-label="TLC Grooming home"
            className={styles.brand}
            href="/"
            onClick={closeMenu}
          >
            <Image
              alt=""
              className={styles.brandLogo}
              height={490}
              src="/brand/tlc-logo.png"
              width={1160}
            />
            <span className={styles.heritageText} aria-hidden="true">
              SINCE <strong>1986</strong>
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
                  onClick={(event) => handleHeaderLinkClick(event, item.href)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className={styles.mobileBook}
              href="/#book"
              onClick={(event) => handleHeaderLinkClick(event, "/#book")}
            >
              Book appointment
            </Link>
          </div>

          <Link
            className={styles.bookButton}
            href="/#book"
            onClick={(event) => handleHeaderLinkClick(event, "/#book")}
          >
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
