import "./App.css";
import StartScreen from "./Components/StartScreen/StartScreen";
import { useCallback, useEffect, useState } from "react";
import { wordsList } from "./data/words";
import Game from "./Components/game/Game";
import End from "./Components/end/End";

function App() {
  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
  ];
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
        {gameStage === "end" && <End retry={retry}/>}
      </div>
    </>
  );
}

export default App;
