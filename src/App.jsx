import './App.css'
import StartScreen from './Components/StartScreen/StartScreen'
import { useCallback, useEffect, useState } from 'react'
import { wordsList } from './data/words'
import Game from './Components/game/Game'
import End from './Components/end/End'

function App() {

  const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
  ]

  const [words] = useState(wordsList);


  const [gameStage, setGameStage] = useState(stages[0].name);
  return (
    <>
    <div className="App">
      {gameStage === "start" && <StartScreen/> }
      {gameStage === "game" && <Game/> }
      {gameStage === "end" && <End/> }
    </div>
      
    </>
  )
}

export default App
