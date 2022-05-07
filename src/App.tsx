import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Calendar } from "./components/Calendar";
import { Day, newDays, sumPressedDays } from "./domain/day";

export const App = () => {
  // TODO redux-toolkitの導入。
  const [days, setDays] = useState<Day[]>(newDays({ isRandom: true }));

  const handleCalendarChange = (argDays: Day[]) => {
    setDays(argDays);
  };

  return (
    <div>
      <h1>365日貯金</h1>
      <main>
        <div>貯金額{sumPressedDays(days)}円</div>
        <div>貯金した日数{days.filter((day) => day.pressed).length}日</div>
        <Calendar days={days} onCalendarChange={handleCalendarChange} />
      </main>
    </div>
  );
};
