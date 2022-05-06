import { Color, graduateColor } from "./color";

export const DAYS_PER_YEAR = 365;

export interface Day {
  value: number;
  pressed: boolean;
  pressedColor?: Color;
}

export function newDays(dayPerYear = DAYS_PER_YEAR) {
  const startColor = "#FFE300";
  const endColor = "#FF09CC";
  const colors = graduateColor(startColor, endColor, dayPerYear);
  return [...new Array(DAYS_PER_YEAR)].map((_, index) => {
    return {
      value: index + 1,
      // pressed: Math.random() > 0.5,
      pressed: false,
      pressedColor: colors[index],
    };
  });
}

export function sumPressedDays(days: Day[]) {
  return days.reduce((acc, cur) => {
    return acc + (cur.pressed ? cur.value : 0);
  }, 0);
}
