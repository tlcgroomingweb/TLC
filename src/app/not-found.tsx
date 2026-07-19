import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Page not found</span>
          <h1>We couldn&apos;t find that page.</h1>
          <p>
            The address may be outdated, or the page may have moved. Use one of
            the links below to find what you need.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/">
              Back to home
            </Link>
            <Link className={styles.secondaryAction} href="/our-services">
              View services
            </Link>
          </div>
        </div>

        <div className={styles.code} aria-hidden="true">
          <strong>404</strong>
          <span>TLC Grooming</span>
        </div>
      </section>
    </main>
  );
}
