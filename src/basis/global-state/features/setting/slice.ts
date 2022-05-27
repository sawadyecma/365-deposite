import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Day, newDays } from "../../../../domain/day";

export interface SettingState {
  startDate: Date | null;
}

const initialState: SettingState = {
  startDate: null,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    onStartDateChange: (state, action: PayloadAction<Date | null>) => {
      state.startDate = action.payload;
    },
  },
});

export const { onStartDateChange } = settingSlice.actions;

export const settingSliceReducer = settingSlice.reducer;
