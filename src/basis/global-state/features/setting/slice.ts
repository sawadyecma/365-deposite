import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startOfYear } from "date-fns";

export interface SettingState {
  // startDate: Date;
  startDate: string;
}

const initialState: SettingState = {
  // startDate: startOfYear(new Date()),
  startDate: startOfYear(new Date()).toISOString(),
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    onStartDateChange: (state, action: PayloadAction<Date>) => {
      state.startDate = action.payload.toISOString();
    },
  },
});

export const { onStartDateChange } = settingSlice.actions;

export const settingSliceReducer = settingSlice.reducer;
