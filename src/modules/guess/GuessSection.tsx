import React, { useState } from "react";
import styled from "styled-components";
import GuessResult from "./GuessResult";
import UserGuessInput from "./UserGuessInput";

interface GuessSectionProps {
  range: number;
}

const GuessSection: React.FC<GuessSectionProps> = ({ range }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [guessedNumber, setGuessedNumber] = useState(0);
  return (
    <Container>
      <UserGuessInput
        range={range}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        guessedNumber={guessedNumber}
        setGuessedNumber={setGuessedNumber}
      />
      <GuessResult />
    </Container>
  );
};

export default GuessSection;

const Container = styled.div``;
