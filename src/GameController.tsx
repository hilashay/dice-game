import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Dice from "./modules/dice/Dice";
import ResultHistory from "./modules/history/ResultHistory";

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
  const [history, setHistory] = useState<number[]>([]);

  const onDiceResult = (number: number) => {
    console.log(number);
    setHistory((prev) => [...prev, number]);
    console.log(history);
  };

  return (
    <Container>
      <Dice range={5} onDiceResult={onDiceResult} />
      <ResultHistory history={history} />
    </Container>
  );
};

export default GameController;

const Container = styled.div``;
