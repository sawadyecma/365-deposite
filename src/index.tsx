import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { theme } from "./basis/theme";
import { persistor, store } from "./basis/global-state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const container = document.querySelector("#app");

// Non-null assertion operatorを使うと、コンパイルエラーが発生した。
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
