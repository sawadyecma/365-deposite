import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { theme } from "./basis/theme";

const container = document.querySelector("#app");

// Non-null assertion operatorを使うと、コンパイルエラーが発生した。
if (container) {
  const root = createRoot(container);
  root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
