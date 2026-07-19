"use client";

import { useSyncExternalStore } from "react";
import { getBusinessStatus } from "@/lib/business-hours";
import styles from "./business-status.module.css";

type BusinessStatusProps = {
  variant?: "compact" | "detail";
};

function getClockSnapshot() {
  const date = new Date();
  date.setSeconds(0, 0);
  return date.toISOString();
}

function getServerSnapshot() {
  return "";
}

function subscribeToClock(callback: () => void) {
  const delayUntilNextMinute = 60_000 - (Date.now() % 60_000) + 50;
  let intervalId: number | undefined;

  const timeoutId = window.setTimeout(() => {
    callback();
    intervalId = window.setInterval(callback, 60_000);
  }, delayUntilNextMinute);

  return () => {
    window.clearTimeout(timeoutId);
    if (intervalId !== undefined) {
      window.clearInterval(intervalId);
    }
  };
}

export function BusinessStatus({ variant = "compact" }: BusinessStatusProps) {
  const clockSnapshot = useSyncExternalStore(
    subscribeToClock,
    getClockSnapshot,
    getServerSnapshot,
  );
  const status = clockSnapshot
    ? getBusinessStatus(new Date(clockSnapshot))
    : null;
  const isOpen = status?.isOpen ?? false;
  const isHoliday = status?.isHoliday ?? false;
  const label = status
    ? variant === "compact"
      ? status.compactLabel
      : status.label
    : "Regular hours";
  const timing = status?.timing ?? "Tue–Sun 9am–5pm";
  const statusDescription = status?.holidayName
    ? `${status.label}. ${status.timing}.`
    : "Based on regular business hours in Ottawa";

  return (
    <span
      aria-label={statusDescription}
      className={`${styles.status} ${styles[variant]} ${isOpen ? styles.open : styles.closed} ${isHoliday ? styles.holiday : ""}`}
      role="status"
      aria-live="polite"
      title={statusDescription}
    >
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      {variant === "detail" ? (
        <span className={styles.timing}>· {timing}</span>
      ) : null}
    </span>
  );
}
