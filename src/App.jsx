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
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category};
  }

  const startGame = () => {
    setGameStage(stages[1].name);
    const {word, category} = pickWordAndCategory();
    console.log(word, category)

    let lettersOfWord = word.split("");
    lettersOfWord = lettersOfWord.map((letter) => (letter.toLowerCase()));
    console.log(lettersOfWord);
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(lettersOfWord);

  };

  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStage = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(()=>{
    if(guesses <= 0){
      setGameStage(stages[2].name);
      clearLetterStage();
    }
  },[guesses])

  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
        {gameStage === "end" && <End retry={retry} score={score}/>}
      </div>
    </>
  );
}

export default App;
