import { Day, DAYS_PER_YEAR } from "./day";

export interface Calendar {
  [row: string]: Day[];
}

export function separateDays(days: Day[], dayCntPerRow: number): Calendar {
  const calendar: Calendar = {};

  days.forEach((day) => {
    const row = `${Math.ceil(day.value / dayCntPerRow)}`;
    if (!calendar[row]) {
      calendar[row] = [];
    }
    calendar[row].push({ ...day });
  });

  return calendar;
}
