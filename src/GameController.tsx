import React, { useCallback, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Dice from "./modules/dice/Dice";
import GuessSection from "./modules/guess/GuessSection";
import ResultHistory from "./modules/history/ResultHistory";
import DiceRangeInput from "./modules/range/DiceRangeInput";
import { MyContextProvider } from "./MyContext";

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
  const [history, setHistory] = useState<number[]>([]);
  const [lastNumber, setLastNumber] = useState<number>(0);

  const onDiceResult = useCallback(
    (number: number) => {
      setHistory((prev) => [...prev, number]);
      setLastNumber(number);
    },
    [setHistory, setLastNumber]
  );

  return (
    <MyContextProvider>
      <Container>
        <DiceRangeInput />
        <GuessSection lastNumber={lastNumber} />
        <DicesContainer>
          <Dice onDiceResult={onDiceResult} />
          <Dice onDiceResult={onDiceResult} />
        </DicesContainer>
        <ResultHistory history={history} />
      </Container>
    </MyContextProvider>
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
