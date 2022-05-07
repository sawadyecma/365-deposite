import { Grid, Paper, Stack, styled } from "@mui/material";
import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { Calendar } from "./components/Calendar";
import { Config } from "./components/Config";
import { Summary } from "./components/Summary";
import { Day, newDays } from "./domain/day";

export const App = () => {
  // TODO redux-toolkitの導入。
  const [days, setDays] = useState<Day[]>(newDays({ isRandom: true }));

  const handleCalendarChange = (argDays: Day[]) => {
    setDays(argDays);
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
        <Grid item xs={12} sm={6}>
          <Paper>
            <Summary days={days} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Config />
          </Paper>
        </Grid>
        <Grid item>
          <Calendar days={days} onCalendarChange={handleCalendarChange} />
        </Grid>
      </Grid>
    </div>
  );
};
