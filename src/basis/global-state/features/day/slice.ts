import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Day, newDays } from "../../../../domain/day";

export interface DayState {
  days: Day[];
}

const initialState: DayState = {
  days: newDays({ isRandom: true }),
};

export const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    dayClick: (state, action: PayloadAction<Day>) => {
      const targetIndex = action.payload.value - 1;

      state.days[targetIndex].pressed = !state.days[targetIndex].pressed;
    },
  },
});

export const { dayClick } = daySlice.actions;

export const daySliceReducer = daySlice.reducer;
