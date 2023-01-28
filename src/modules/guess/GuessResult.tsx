// secretNum2 = { secondDiceNumber };
// isUserGuess = { isUserGuess };
// guessedNumber = { selectedGuessNumber };

import React from "react";
import styled from "styled-components";

interface GuessResultProps {
  guessedNumber: number;
  lastNumber: number;
}

const GuessResult: React.FC<GuessResultProps> = ({ guessedNumber, lastNumber }) => {
  let result;
  if (guessedNumber === lastNumber || guessedNumber === lastNumber) {
    result = "yay!";
  } else {
    result = "boo:(";
  }
  return guessedNumber && lastNumber !== 0 ? <Text>{result}</Text> : null;
};

export default GuessResult;

const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;
