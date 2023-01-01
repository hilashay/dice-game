import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomInt } from "../../utils/getRandomNumber";

interface DiceProps {
  range: number;
  onDiceResult?: (x: number) => void;
}

const Dice: React.FC<DiceProps> = React.memo(({ range, onDiceResult }) => {
  console.log("Dice- rendered");
  const [diceResult, setDiceResult] = useState(0);

  const handleClick = () => {
    const randomNumber = getRandomInt(range);
    setDiceResult(randomNumber);
    onDiceResult?.(randomNumber);
  };

  return (
    <Container range={range > 0}>
      <StyledDice onClick={handleClick}>{diceResult}</StyledDice>
    </Container>
  );
});

export default Dice;

const Container = styled.div<{ range: boolean }>`
  pointer-events: ${(range) => (range ? "none" : "auto")};
`;

const StyledDice = styled.div`
  width: 120px;
  height: 100px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
