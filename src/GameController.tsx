import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Dice from "./modules/dice/Dice";
import ResultHistory from "./modules/history/ResultHistory";
import DiceRangeInput from "./modules/range/DiceRangeInput";

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
  const [history, setHistory] = useState<number[]>([]);
  const [range, setRange] = useState<number>(0);
  console.log(range);

  const onDiceResult = (number: number) => {
    setHistory((prev) => [...prev, number]);
  };

  return (
    <Container>
      <DiceRangeInput range={range} setRange={setRange} />
      <Dice range={range} onDiceResult={onDiceResult} />
      <Dice range={range} onDiceResult={onDiceResult} />
      <ResultHistory history={history} />
    </Container>
  );
};

export default GameController;

const Container = styled.div``;
