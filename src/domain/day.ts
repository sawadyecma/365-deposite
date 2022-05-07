import { Color, graduateColor } from "./color";

export const DAYS_PER_YEAR = 365;

export interface Day {
  value: number;
  pressed: boolean;
  pressedColor?: Color;
}

interface NewDaysArg {
  dayPerYear?: number;
  isRandom?: boolean;
}

const defaultNewDaysArg: Required<NewDaysArg> = {
  dayPerYear: DAYS_PER_YEAR,
  isRandom: false,
};

export function newDays(opt: NewDaysArg) {
  const params = { ...defaultNewDaysArg, ...opt };

  const startColor = "#FFE300";
  const endColor = "#FF09CC";
  const colors = graduateColor(startColor, endColor, params.dayPerYear);

  const days = [...new Array(DAYS_PER_YEAR)].map((_, index) => {
    return {
      value: index + 1,
      pressed: false,
      pressedColor: colors[index],
    };
  });

  if (!params.isRandom) {
    return days;
  }

  return days.map((day) => {
    return { ...day, pressed: Math.random() > 0.5 };
  });
}

export function sumPressedDays(days: Day[]) {
  return days.reduce((acc, cur) => {
    return acc + (cur.pressed ? cur.value : 0);
  }, 0);
}
