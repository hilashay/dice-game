import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomInt } from "../../utils/getRandomNumber";

interface DiceProps {
  range: number;
  onDiceResult: any;
}

const Dice: React.FC<DiceProps> = ({ range, onDiceResult }) => {
  const [diceResult, setDiceResult] = useState(0);

  const handleClick = () => {
    const randomNumber = getRandomInt(range);
    setDiceResult(randomNumber);
    onDiceResult(randomNumber);
  };

  return (
    <Container>
      <StyledDice onClick={handleClick}>{diceResult}</StyledDice>
    </Container>
  );
};

export default Dice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledDice = styled.div`
  width: 120px;
  padding: 40px 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  border: 2px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
