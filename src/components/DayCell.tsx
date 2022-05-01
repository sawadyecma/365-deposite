import { Color, newColor } from "../domain/color";
import { Day } from "../domain/day";

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
        backgroundColor: day.pressed ? day.pressedColor : "",
      }}
      onClick={() => {
        onDayClick(day);
      }}
    >
      {day.value}
    </button>
  );
};
