import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessWords, setGuessWords] = React.useState([])



  const setGuessWord = (value) => {
    const newGuessWords  = [ ...guessWords]
    newGuessWords.push(value);
    setGuessWords(newGuessWords)
  }

  const numberOfGuesses = NUM_OF_GUESSES_ALLOWED - guessWords.length
  const isWinner = guessWords.includes(answer)
  const gameOver = isWinner || numberOfGuesses === 0;

  return <>
    <Guess answer={answer} guessWords={guessWords} />
    <GuessInput setGuessWord={setGuessWord} disable={isWinner || gameOver}/>
    { gameOver && <Banner answer={answer} isWinner={isWinner} numOfGuesses={numberOfGuesses} />}
  </>;
}

export default Game;
