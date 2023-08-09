import React, { createContext, useContext, useState } from "react";

interface ScoreContextProps {
  scores: { X: number; O: number };
  updateScore: (player: "X" | "O") => void;
}

const ScoreContext = createContext<ScoreContextProps | undefined>(undefined);

export function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [scores, setScores] = useState<{ X: number; O: number }>({
    X: 0,
    O: 0,
  });

  const updateScore = (player: "X" | "O") => {
    setScores((prevScores) => ({
      ...prevScores,
      [player]: prevScores[player] + 1,
    }));
  };

  return (
    <ScoreContext.Provider value={{ scores, updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
}
