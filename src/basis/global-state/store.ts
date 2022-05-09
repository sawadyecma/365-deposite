import { configureStore } from "@reduxjs/toolkit";
import { daySliceReducer } from "./features/day/slice";

export const store = configureStore({
  reducer: {
    day: daySliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
