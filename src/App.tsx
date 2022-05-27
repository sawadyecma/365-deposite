import { Grid, Paper } from "@mui/material";
import { differenceInCalendarDays } from "date-fns";
import { dayClick } from "./basis/global-state/features/day/slice";
import { onStartDateChange } from "./basis/global-state/features/setting/slice";
import { useAppDispatch, useAppSelector } from "./basis/global-state/hooks";
import { AppHeader } from "./components/AppHeader";
import { Calendar } from "./components/Calendar";
import { Config } from "./components/Config";
import { Summary } from "./components/Summary";
import { Day } from "./domain/day";

export const App = () => {
  const days = useAppSelector((state) => state.day.days);
  const { startDate } = useAppSelector((state) => state.setting);
  const dispatch = useAppDispatch();

  const handleCalendarChange = (argDay: Day) => {
    dispatch(dayClick(argDay));
  };

  const handleStartDateChange = (startDate: Date) => {
    dispatch(onStartDateChange(startDate));
  };

  return (
    <div>
      <AppHeader />
      <Grid
        container
        columns={12}
        columnSpacing={{ xs: 1, sm: 2 }}
        rowSpacing={{ xs: 1, sm: 2 }}
        padding={{ xs: 1, sm: 2 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Summary days={days} startDate={startDate} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Config date={startDate} onDateChange={handleStartDateChange} />
          </Paper>
        </Grid>
        <Grid item>
          <Calendar days={days} onCalendarChange={handleCalendarChange} />
        </Grid>
      </Grid>
    </div>
  );
};
