import React from 'react';
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guessWords }) {
  const numOfGuesses = NUM_OF_GUESSES_ALLOWED - guessWords.length;

  return <div>
    <div className="guess-results">
      {guessWords.map((word, rowIndex) => {
        const result = checkGuess(word, answer)
        return (
          <p key={rowIndex} className="guess">
            { result.map(({letter, status}, wordIndex) => (
              <span key={rowIndex-wordIndex} className={`cell ${status}`}>{ letter }</span>
            ))}
          </p>
        )
      })}
    </div>
    <div className="guess-results">
      {range(0, numOfGuesses).map((num) => (
        <p key={num} className="guess">
          {range(0, WORD_LENGTH).map((word) => (
            <span key={word} className="cell"></span>
          ))}
        </p>
      ))}
    </div>
  </div>;
}


export default Guess;
