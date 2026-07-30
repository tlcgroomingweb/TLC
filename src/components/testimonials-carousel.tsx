"use client";

import type { FocusEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import type { Testimonial } from "@/lib/testimonials";
import styles from "./testimonials-carousel.module.css";

const AUTO_ADVANCE_DELAY = 5200;

type TestimonialsCarouselProps = {
  reviews: readonly Testimonial[];
};

export function TestimonialsCarousel({
  reviews,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reviewCount = reviews.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + reviewCount) % reviewCount);
    },
    [reviewCount],
  );

  useEffect(() => {
    if (isPaused || reviewCount < 2) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % reviewCount);
    }, AUTO_ADVANCE_DELAY);

    return () => window.clearInterval(intervalId);
  }, [isPaused, reviewCount]);

  if (reviewCount === 0) {
    return null;
  }

  const previousIndex = (activeIndex - 1 + reviewCount) % reviewCount;
  const nextIndex = (activeIndex + 1) % reviewCount;
  const toneClasses = [
    styles.toneBlue,
    styles.toneCream,
    styles.toneBlush,
    styles.toneSage,
    styles.toneLavender,
    styles.tonePeach,
  ];

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  return (
    <div
      className={styles.carousel}
      onBlur={handleBlur}
      onFocusCapture={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Customer review carousel"
      aria-roledescription="carousel"
    >
      <div
        className={styles.viewport}
        aria-live={isPaused ? "polite" : "off"}
      >
        {reviews.map((review, index) => {
          const isActive = index === activeIndex;
          const positionClass = isActive
            ? styles.cardActive
            : index === previousIndex
              ? styles.cardPrevious
              : index === nextIndex
                ? styles.cardNext
                : styles.cardHidden;
          const reviewDetails = [
            review.petName ? `${review.petName}’s family` : undefined,
            review.service,
          ]
            .filter(Boolean)
            .join(" · ");

          return (
            <blockquote
              aria-hidden={!isActive}
              aria-label={`Review ${index + 1} of ${reviewCount}`}
              className={`${styles.card} ${toneClasses[index % toneClasses.length]} ${positionClass}`}
              key={review.id}
            >
              <div className={styles.cardTop}>
                <span
                  className={styles.rating}
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  <span aria-hidden="true">
                    {"★★★★★".slice(0, review.rating)}
                  </span>
                </span>
                {review.sourceUrl ? (
                  <a
                    className={styles.source}
                    href={review.sourceUrl}
                    rel="noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    target="_blank"
                  >
                    {review.source}
                  </a>
                ) : (
                  <span className={styles.source}>{review.source}</span>
                )}
              </div>

              <p>“{review.quote}”</p>

              <footer className={styles.author}>
                <span aria-hidden="true">♥</span>
                <div>
                  <strong>{review.customerName}</strong>
                  {reviewDetails ? <small>{reviewDetails}</small> : null}
                </div>
              </footer>
            </blockquote>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          aria-label="Show previous customer review"
          className={styles.arrow}
          onClick={() => goTo(activeIndex - 1)}
          type="button"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className={styles.dots} aria-label="Choose a customer review">
          {reviews.map((review, index) => (
            <button
              aria-label={`Show review ${index + 1} from ${review.customerName}`}
              aria-pressed={index === activeIndex}
              className={index === activeIndex ? styles.dotActive : styles.dot}
              key={review.id}
              onClick={() => goTo(index)}
              type="button"
            />
          ))}
        </div>

        <button
          aria-label="Show next customer review"
          className={styles.arrow}
          onClick={() => goTo(activeIndex + 1)}
          type="button"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
