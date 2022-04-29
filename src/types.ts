export interface Day {
  value: number;
  pressed: boolean;
}

export interface Calendar {
  [row: string]: Day[];
}
