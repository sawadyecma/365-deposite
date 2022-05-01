import { useState } from "react";
import { Calendar } from "./components/Calendar";
import { Day, newDays } from "./domain/day";

export const App = () => {
  const [days, setDays] = useState<Day[]>(newDays());

  const handleCalendarChange = (argDays: Day[]) => {
    setDays(argDays);
  };

  return (
    <div>
      <h1>365日貯金</h1>
      <Calendar days={days} onCalendarChange={handleCalendarChange} />
    </div>
  );
};
