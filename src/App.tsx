import { useState } from "react";
import { createCalendar } from "./constants";
import { Day } from "./types";
import { DayCell } from "./components/DayCell";

export const App = () => {
  const [calendar, setCalendar] = useState(createCalendar());
  const handleDayClick = (argDay: Day, row: string) => {
    setCalendar((calendar) => {
      const copied = { ...calendar };
      const foundIndex = calendar[row].findIndex(
        (day) => day.value === argDay.value
      );
      copied[row][foundIndex] = { ...argDay, pressed: !argDay.pressed };
      return copied;
    });
  };

  return (
    <div className="App">
      <h1>365 deposite</h1>
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
                    onDayClick={(day) => handleDayClick(day, row)}
                  />
                );
              })}
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};
