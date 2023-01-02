import React, { useState } from "react";
import styled from "styled-components";
import GuessResult from "./GuessResult";
import UserGuessInput from "./UserGuessInput";

interface GuessSectionProps {
  range: number;
  lastNumber: number;
}

const GuessSection: React.FC<GuessSectionProps> = ({ range, lastNumber }) => {
  console.log("GuessSection- rendered");
  const [guessedNumber, setGuessedNumber] = useState(0);

  const onGuess = (number: number) => {
    setGuessedNumber(number);
  };
  return (
    <Container>
      <UserGuessInput range={range} onGuess={onGuess} />
      {lastNumber > 0 ? (
        <GuessResult guessedNumber={guessedNumber} lastNumber={lastNumber} />
      ) : null}
    </Container>
  );
};

export default React.memo(GuessSection);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
