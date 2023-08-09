import React from "react";
import ReactDOM from "react-dom/client";
import { ScoreProvider } from "./ScoresContext.tsx";
import References from "./Views/References/references.tsx";
import Score from "./Views/Scores/score.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScoreProvider>
      <Score />
      <App />
      <References />
    </ScoreProvider>
  </React.StrictMode>
);
