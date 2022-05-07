import { StyledEngineProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.querySelector("#app");

// Non-null assertion operatorを使うと、コンパイルエラーが発生した。
if (container) {
  const root = createRoot(container);
  root.render(
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  );
}
