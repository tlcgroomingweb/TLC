"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./booking-embed.module.css";

const LOAD_TIMEOUT_MS = 10_000;

type BookingEmbedProps = {
  bookingUrl: string;
  phoneDisplay: string;
  phoneHref: string;
};

type LoadState = "idle" | "loading" | "ready" | "slow";

export function BookingEmbed({
  bookingUrl,
  phoneDisplay,
  phoneHref,
}: BookingEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [loadKey, setLoadKey] = useState(0);
  const [loadState, setLoadState] = useState<LoadState>("idle");

  useEffect(() => {
    const container = containerRef.current;

    if (!container || hasStarted) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const startId = globalThis.setTimeout(() => {
        setHasStarted(true);
        setLoadState("loading");
      }, 0);

      return () => globalThis.clearTimeout(startId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasStarted(true);
        setLoadState("loading");
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || loadState !== "loading") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setLoadState("slow");
    }, LOAD_TIMEOUT_MS);

    return () => window.clearTimeout(timeoutId);
  }, [hasStarted, loadKey, loadState]);

  const retry = () => {
    setLoadState("loading");
    setLoadKey((current) => current + 1);
  };

  const isWaiting = loadState === "idle" || loadState === "loading";

  return (
    <div className={styles.embed} ref={containerRef}>
      <div
        aria-busy={loadState === "loading"}
        aria-label="DaySmart online booking"
        className={styles.frame}
      >
        {loadState !== "ready" ? (
          <div
            aria-live="polite"
            className={styles.status}
            role={loadState === "slow" ? "alert" : "status"}
          >
            <div className={styles.statusCard}>
              {isWaiting ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  <strong>Loading secure online booking…</strong>
                  <p>
                    DaySmart may take a moment to appear.
                  </p>
                </>
              ) : (
                <>
                  <span className={styles.slowIcon} aria-hidden="true">
                    !
                  </span>
                  <strong>Booking system is taking longer than expected.</strong>
                  <p>
                    A privacy setting or network delay may be blocking the
                    embedded form. You can continue securely in a new window,
                    call us, or retry the embedded form.
                  </p>
                  <div className={styles.failureActions}>
                    <a
                      className={styles.secureBookingButton}
                      href={bookingUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Open secure booking in a new window
                      <span aria-hidden="true">↗</span>
                    </a>
                    <a className={styles.phoneButton} href={phoneHref}>
                      Call {phoneDisplay}
                    </a>
                    <button
                      className={styles.retryButton}
                      onClick={retry}
                      type="button"
                    >
                      Retry
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null}

        {hasStarted ? (
          <iframe
            key={loadKey}
            loading="eager"
            onError={() => setLoadState("slow")}
            onLoad={() => setLoadState("ready")}
            src={bookingUrl}
            title="TLC online appointment booking"
          />
        ) : null}
      </div>
    </div>
  );
}
