import React from 'react';

function GuessInput({ setGuessWord, disable }) {
  const [guessValue, setGuessValue] = React.useState('')

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setGuessWord(guessValue)
    setGuessValue('')
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        minLength={5}
        maxLength={5}
        disabled={disable}
        value={guessValue}
        onChange={event => setGuessValue(event.target.value)}/>
    </form>
  </div>;
}

export default GuessInput;
