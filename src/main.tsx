import React from "react";
import ReactDOM from "react-dom/client";

import References from "./references.tsx";
import Score from "./score.tsx";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Score />
    <App />
    <References />
  </React.StrictMode>
);
