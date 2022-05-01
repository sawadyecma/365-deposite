import { useState } from "react";
import { Calendar } from "./components/Calendar";
import { Day, DAYS_PER_YEAR } from "./domain/day";

export const App = () => {
  const [days, setDays] = useState<Day[]>(
    [...new Array(DAYS_PER_YEAR)].map((_, index) => {
      return { value: index + 1, pressed: false };
    })
  );

  const handleCalendarChange = (argDays: Day[]) => {
    setDays(argDays);
  };

  return (
    <div className="App">
      <h1>365日貯金</h1>
      <Calendar days={days} onCalendarChange={handleCalendarChange} />
    </div>
  );
};
