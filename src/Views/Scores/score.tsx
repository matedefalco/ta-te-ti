import React from "react";
import { useScore } from "../../ScoresContext";
import "./score.css";

export default function Score() {
  const { scores } = useScore();

  return (
    <section>
      <p>Scores:</p>
      <div>
        <p>Player X: {scores.X}</p>
        <p>Player O: {scores.O}</p>
      </div>
    </section>
  );
}
