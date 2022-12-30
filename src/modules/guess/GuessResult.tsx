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
  console.log("lastNumber", lastNumber);
  console.log("guessedNumber", guessedNumber);
  return <Container></Container>;
};

export default GuessResult;

const Container = styled.div``;
