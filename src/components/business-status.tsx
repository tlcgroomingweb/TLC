"use client";

import { useSyncExternalStore } from "react";
import styles from "./business-status.module.css";

const OTTAWA_TIME_ZONE = "America/Toronto";
const OPEN_HOUR = 9;
const CLOSE_HOUR = 17;

const weekdayNumbers: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

type BusinessStatusProps = {
  variant?: "compact" | "detail";
};

type BusinessStatusDetails = {
  isOpen: boolean;
  label: string;
  timing: string;
};

function getOttawaTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: OTTAWA_TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return {
    weekday: weekdayNumbers[values.weekday],
    hour: Number(values.hour),
    minute: Number(values.minute),
  };
}

export function getBusinessStatus(date: Date): BusinessStatusDetails {
  const { weekday, hour, minute } = getOttawaTime(date);
  const minutesSinceMidnight = hour * 60 + minute;
  const opensAt = OPEN_HOUR * 60;
  const closesAt = CLOSE_HOUR * 60;
  const isMonday = weekday === 1;
  const isOpen =
    !isMonday &&
    minutesSinceMidnight >= opensAt &&
    minutesSinceMidnight < closesAt;

  if (isOpen) {
    return {
      isOpen: true,
      label: "Open now",
      timing: "Until 5pm",
    };
  }

  if (isMonday || (weekday === 0 && minutesSinceMidnight >= closesAt)) {
    return {
      isOpen: false,
      label: "Closed now",
      timing: "Opens Tuesday at 9am",
    };
  }

  if (minutesSinceMidnight < opensAt) {
    return {
      isOpen: false,
      label: "Closed now",
      timing: "Opens today at 9am",
    };
  }

  return {
    isOpen: false,
    label: "Closed now",
    timing: "Opens tomorrow at 9am",
  };
}

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
  const label = status?.label ?? "Regular hours";
  const timing = status?.timing ?? "Tue–Sun 9am–5pm";

  return (
    <span
      className={`${styles.status} ${styles[variant]} ${isOpen ? styles.open : styles.closed}`}
      role="status"
      aria-live="polite"
      title="Based on regular business hours in Ottawa"
    >
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      {variant === "detail" ? (
        <span className={styles.timing}>· {timing}</span>
      ) : null}
    </span>
  );
}
