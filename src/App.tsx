import { useState } from "react";
import { ErrorBoundary } from "./basis/components/ErrorBoundary";
import { Calendar } from "./components/Calendar";
import { Day, newDays, sumPressedDays } from "./domain/day";

export const App = () => {
  // TODO redux-toolkitの導入。
  const [days, setDays] = useState<Day[]>(newDays());

  const handleCalendarChange = (argDays: Day[]) => {
    setDays(argDays);
  };

  return (
    <ErrorBoundary>
      <div>
        <h1>365日貯金</h1>
        <main style={{ display: "flex" }}>
          <Calendar days={days} onCalendarChange={handleCalendarChange} />
          <div>
            <div>貯金額{sumPressedDays(days)}円</div>
            <div>貯金した日数{days.filter((day) => day.pressed).length}日</div>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};
