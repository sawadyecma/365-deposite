import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { theme } from "./basis/theme";
import { store } from "./basis/global-state/store";
import { Provider } from "react-redux";

const container = document.querySelector("#app");

// Non-null assertion operatorを使うと、コンパイルエラーが発生した。
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  );
}
