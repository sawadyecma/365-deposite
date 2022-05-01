import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");

// Non-null assertion operatorを使うと、コンパイルエラーが発生した。
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
