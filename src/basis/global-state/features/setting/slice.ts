import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startOfYear } from "date-fns";

export interface SettingState {
  startDate: Date;
}

const initialState: SettingState = {
  startDate: startOfYear(new Date()),
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    onStartDateChange: (state, action: PayloadAction<Date>) => {
      state.startDate = action.payload;
    },
  },
});

export const { onStartDateChange } = settingSlice.actions;

export const settingSliceReducer = settingSlice.reducer;
