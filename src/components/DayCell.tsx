import { Day } from "../types";

interface Props {
  day: Day;
  onDayClick: (day: Day) => void;
}

export const DayCell = ({ day, onDayClick }: Props) => {
  return (
    <button
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: day.pressed ? "red" : "",
      }}
      onClick={() => {
        onDayClick(day);
      }}
    >
      {day.value}
    </button>
  );
};
