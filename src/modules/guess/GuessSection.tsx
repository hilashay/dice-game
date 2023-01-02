import React, { useState } from "react";
import styled from "styled-components";
import { useRange } from "../../MyContext";
import GuessResult from "./GuessResult";
import UserGuessInput from "./UserGuessInput";

interface GuessSectionProps {
  lastNumber: number;
}

const GuessSection: React.FC<GuessSectionProps> = ({ lastNumber }) => {
  console.log("GuessSection- rendered");

  const { range } = useRange();
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
