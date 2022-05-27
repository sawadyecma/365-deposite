import { configureStore } from "@reduxjs/toolkit";
import { daySliceReducer } from "./features/day/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { settingSliceReducer } from "./features/setting/slice";

export const store = configureStore({
  reducer: {
    day: persistReducer({ key: "days", version: 1, storage }, daySliceReducer),
    setting: persistReducer(
      { key: "setting", version: 1, storage },
      settingSliceReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
