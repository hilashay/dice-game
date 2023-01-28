import React, { useCallback, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Dice from "./modules/dice/Dice";
import GuessSection from "./modules/guess/GuessSection";
import ResultHistory from "./modules/history/ResultHistory";
import DiceRangeInput from "./modules/range/DiceRangeInput";
import { MyContextProvider, useLastNumber, useHistory } from "./MyContext";

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
  const number = 5;
  const numberOfDices = [];
  for (let i = 0; i < number; i++) {
    numberOfDices.push(0);
  }

  return (
    <MyContextProvider>
      <Container>
        <DiceRangeInput />
        <GuessSection />
        <DicesContainer>
          {numberOfDices.map((el) => (
            <text>1</text>
          ))}
          <Dice />
          <Dice />
        </DicesContainer>
        <ResultHistory />
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
