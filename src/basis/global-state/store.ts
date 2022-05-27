import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

const reducer = combineReducers({
  day: persistReducer({ key: "days", version: 2, storage }, daySliceReducer),
  setting: persistReducer(
    { key: "setting", version: 2, storage },
    settingSliceReducer
  ),
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
