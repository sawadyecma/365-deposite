import { useState } from "react";
import { separateDays } from "../domain/calendar";
import { Day } from "../domain/day";
import { DayCell } from "./DayCell";

interface Props {
  days: Day[];
  dayCntPerRow?: number;
  onCalendarChange: (days: Day[]) => void;
}

export const Calendar = ({ dayCntPerRow = 20, ...props }: Props) => {
  const calendar = separateDays(props.days, dayCntPerRow);

  const handleDayClick = (argDay: Day) => {
    const copied = [...props.days];
    const foundIndex = props.days.findIndex(
      (day) => day.value === argDay.value
    );
    copied[foundIndex] = { ...argDay, pressed: !argDay.pressed };
    props.onCalendarChange(copied);
  };

  return (
    <div
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {Object.keys(calendar).map((row) => {
        return (
          <div
            key={row}
            style={{
              height: "40px",
            }}
          >
            {calendar[row].map((day) => {
              return (
                <DayCell
                  key={day.value}
                  day={day}
                  onDayClick={(day) => handleDayClick(day)}
                />
              );
            })}
            <br />
          </div>
        );
      })}
    </div>
  );
};
