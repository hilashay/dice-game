import React, { useState } from "react";
import styled from "styled-components";
import GuessResult from "./GuessResult";
import UserGuessInput from "./UserGuessInput";

interface GuessSectionProps {
  range: number;
}

const GuessSection: React.FC<GuessSectionProps> = ({ range }) => {
  const [guessedNumber, setGuessedNumber] = useState(0);

  const onGuess = (number: number) => {
    setGuessedNumber(number);
  };
  return (
    <Container>
      <UserGuessInput range={range} onGuess={onGuess} />
      <GuessResult />
    </Container>
  );
};

export default GuessSection;

const Container = styled.div``;
