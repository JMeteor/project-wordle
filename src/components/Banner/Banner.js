import React from 'react';

function Banner({isWinner, numOfGuesses, answer}) {
  return <div className={`banner ${isWinner ? 'happy' : 'sad'}`}>
    {isWinner ?
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{' ' + numOfGuesses} guesses</strong>.
      </p>
    :
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    }
  </div>;
}

export default Banner;
