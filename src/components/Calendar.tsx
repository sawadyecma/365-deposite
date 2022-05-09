import * as React from "react";
import { Day } from "../domain/day";

import { Card, CardActionArea, CardContent, Grid, Box } from "@mui/material";

interface Props {
  days: Day[];
  dayCntPerRow?: number;
  onCalendarChange: (day: Day) => void;
}

export const Calendar = ({
  dayCntPerRow = 20,
  onCalendarChange,
  ...props
}: Props) => {
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
              <CardActionArea onClick={() => onCalendarChange(day)}>
                <CardContent sx={{ padding: 1 }}>{day.value}</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
