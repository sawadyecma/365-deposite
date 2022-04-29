import { Calendar } from "./types";

export const DAYS_PER_YEAR = 365;

export function createCalendar(): Calendar {
  const calendar: Calendar = {};
  const days = [...new Array(DAYS_PER_YEAR)].map((_, i) => {
    return i + 1;
  });
  days.forEach((value) => {
    const row = `${Math.ceil(value / 20)}`;
    if (!calendar[row]) {
      calendar[row] = [];
    }
    calendar[row].push({ value, pressed: false });
  });

  return calendar;
}
