import * as React from "react";
import { Day } from "../domain/day";
import { experimentalStyled as styled } from "@mui/material/styles";

import { Card, CardActionArea, CardContent, Grid, Box } from "@mui/material";

interface Props {
  days: Day[];
  dayCntPerRow?: number;
  onCalendarChange: (days: Day[]) => void;
}

export const Calendar = ({ dayCntPerRow = 20, ...props }: Props) => {
  const handleDayClick = (argDay: Day) => {
    const copied = [...props.days];
    const foundIndex = props.days.findIndex(
      (day) => day.value === argDay.value
    );
    copied[foundIndex] = { ...argDay, pressed: !argDay.pressed };
    props.onCalendarChange(copied);
  };

  return (
    <Box>
      <Grid container spacing={0.5} columns={{ xs: 7, sm: 10, md: 20, lg: 20 }}>
        {props.days.map((day) => (
          <Grid item xs={1} sm={1} md={1} lg={1} key={day.value}>
            <Card
              sx={{
                backgroundColor: day.pressed ? day.pressedColor : "",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <CardActionArea onClick={() => handleDayClick(day)}>
                <CardContent sx={{ padding: 1 }}>{day.value}</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
