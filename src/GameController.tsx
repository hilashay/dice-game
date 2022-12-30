import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Dice from "./modules/dice/Dice";
import ResultHistory from "./modules/history/ResultHistory";
import DiceRangeInput from "./modules/range/DiceRangeInput";
import UserGuessInput from "./modules/guess/UserGuessInput";
import GuessSection from "./modules/guess/GuessSection";

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
  const [history, setHistory] = useState<number[]>([]);
  const [range, setRange] = useState<number>(0);
  const [lastNumber, setLastNumber] = useState<number>(0);

  const onDiceResult = (number: number) => {
    setHistory((prev) => [...prev, number]);
    setLastNumber(number);
  };

  return (
    <Container>
      <DiceRangeInput range={range} setRange={setRange} />
      <GuessSection range={range} lastNumber={lastNumber} />
      <DicesContainer>
        <Dice range={range} onDiceResult={onDiceResult} />
        <Dice range={range} onDiceResult={onDiceResult} />
      </DicesContainer>
      <ResultHistory history={history} />
    </Container>
  );
};

export default GameController;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px;
`;
const DicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  align-items: center;
`;
