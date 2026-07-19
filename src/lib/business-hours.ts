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

const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

type CalendarDate = {
  year: number;
  month: number;
  day: number;
  weekday: number;
};

type OttawaDateTime = CalendarDate & {
  hour: number;
  minute: number;
};

type StatutoryHoliday = {
  name: string;
  date: CalendarDate;
};

export type BusinessStatusDetails = {
  isOpen: boolean;
  isHoliday: boolean;
  label: string;
  compactLabel: string;
  timing: string;
  holidayName?: string;
};

function toCalendarDate(date: Date): CalendarDate {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    weekday: date.getUTCDay(),
  };
}

function createCalendarDate(year: number, month: number, day: number) {
  return toCalendarDate(new Date(Date.UTC(year, month - 1, day)));
}

function addCalendarDays(date: CalendarDate, amount: number) {
  return createCalendarDate(date.year, date.month, date.day + amount);
}

function sameCalendarDate(left: CalendarDate, right: CalendarDate) {
  return (
    left.year === right.year &&
    left.month === right.month &&
    left.day === right.day
  );
}

function nthWeekdayOfMonth(
  year: number,
  month: number,
  weekday: number,
  occurrence: number,
) {
  const firstDay = createCalendarDate(year, month, 1);
  const offset = (weekday - firstDay.weekday + 7) % 7;

  return createCalendarDate(year, month, 1 + offset + (occurrence - 1) * 7);
}

function getVictoriaDay(year: number) {
  const may24 = createCalendarDate(year, 5, 24);
  const daysSinceMonday = (may24.weekday + 6) % 7;

  return addCalendarDays(may24, -daysSinceMonday);
}

// Meeus/Jones/Butcher Gregorian algorithm. Good Friday is two days earlier.
function getEasterSunday(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return createCalendarDate(year, month, day);
}

function getStatutoryHolidays(year: number): StatutoryHoliday[] {
  const easterSunday = getEasterSunday(year);

  return [
    { name: "New Year's Day", date: createCalendarDate(year, 1, 1) },
    {
      name: "Family Day",
      date: nthWeekdayOfMonth(year, 2, 1, 3),
    },
    { name: "Good Friday", date: addCalendarDays(easterSunday, -2) },
    { name: "Victoria Day", date: getVictoriaDay(year) },
    { name: "Canada Day", date: createCalendarDate(year, 7, 1) },
    {
      name: "Labour Day",
      date: nthWeekdayOfMonth(year, 9, 1, 1),
    },
    {
      name: "Thanksgiving Day",
      date: nthWeekdayOfMonth(year, 10, 1, 2),
    },
    { name: "Christmas Day", date: createCalendarDate(year, 12, 25) },
    { name: "Boxing Day", date: createCalendarDate(year, 12, 26) },
  ];
}

export function getStatutoryHoliday(date: CalendarDate) {
  return (
    getStatutoryHolidays(date.year).find((holiday) =>
      sameCalendarDate(holiday.date, date),
    ) ?? null
  );
}

function getOttawaTime(date: Date): OttawaDateTime {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: OTTAWA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    weekday: weekdayNumbers[values.weekday],
    hour: Number(values.hour),
    minute: Number(values.minute),
  };
}

function isRegularOpeningDay(date: CalendarDate) {
  return date.weekday !== 1 && !getStatutoryHoliday(date);
}

function findNextOpening(date: CalendarDate, canOpenLaterToday: boolean) {
  const firstOffset = canOpenLaterToday ? 0 : 1;

  for (let offset = firstOffset; offset <= 14; offset += 1) {
    const candidate = addCalendarDays(date, offset);

    if (isRegularOpeningDay(candidate)) {
      return { date: candidate, offset };
    }
  }

  throw new Error("Unable to find the next TLC opening day.");
}

function formatNextOpening(date: CalendarDate, canOpenLaterToday: boolean) {
  const nextOpening = findNextOpening(date, canOpenLaterToday);

  if (nextOpening.offset === 0) {
    return "Opens today at 9am";
  }

  if (nextOpening.offset === 1) {
    return "Opens tomorrow at 9am";
  }

  return `Opens ${weekdayNames[nextOpening.date.weekday]} at 9am`;
}

export function getBusinessStatus(date: Date): BusinessStatusDetails {
  const ottawaTime = getOttawaTime(date);
  const holiday = getStatutoryHoliday(ottawaTime);
  const minutesSinceMidnight = ottawaTime.hour * 60 + ottawaTime.minute;
  const opensAt = OPEN_HOUR * 60;
  const closesAt = CLOSE_HOUR * 60;
  const isOpen =
    !holiday &&
    ottawaTime.weekday !== 1 &&
    minutesSinceMidnight >= opensAt &&
    minutesSinceMidnight < closesAt;

  if (isOpen) {
    return {
      isOpen: true,
      isHoliday: false,
      label: "Open now",
      compactLabel: "Open now",
      timing: "Until 5pm",
    };
  }

  const canOpenLaterToday =
    !holiday && ottawaTime.weekday !== 1 && minutesSinceMidnight < opensAt;
  const timing = formatNextOpening(ottawaTime, canOpenLaterToday);

  if (holiday) {
    return {
      isOpen: false,
      isHoliday: true,
      label: `Closed for ${holiday.name}`,
      compactLabel: "Closed · Stat holiday",
      timing,
      holidayName: holiday.name,
    };
  }

  return {
    isOpen: false,
    isHoliday: false,
    label: "Closed now",
    compactLabel: "Closed now",
    timing,
  };
}
