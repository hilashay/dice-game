import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomInt } from "../../utils/getRandomNumber";

interface DiceProps {
  range: number;
  onDiceResult?: (x: number) => void;
}

const Dice: React.FC<DiceProps> = ({ range, onDiceResult }) => {
  console.log("Dice- rendered");
  const [diceResult, setDiceResult] = useState(0);

  const handleClick = () => {
    const randomNumber = getRandomInt(range);
    setDiceResult(randomNumber);
    onDiceResult?.(randomNumber);
  };

  return (
    <Container disabled={range > 0}>
      <StyledDice onClick={handleClick}>{diceResult}</StyledDice>
    </Container>
  );
};

export default React.memo(Dice);

const Container = styled.div<{ disabled: boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? "auto" : "none")};
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
