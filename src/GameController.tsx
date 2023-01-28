import React, { useCallback, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Dice from "./modules/dice/Dice";
import GuessSection from "./modules/guess/GuessSection";
import ResultHistory from "./modules/history/ResultHistory";
import DiceRangeInput from "./modules/range/DiceRangeInput";
import SelectedNumberOfDice from "./modules/selectedNumberOfDice/selectedNumberOfDice";
import {
  GeneralContextProvider,
  useLastNumber,
  useHistory,
  useSelectedNumberOfDices,
} from "./MyContext";

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
  const { selectedNumberOfDices } = useSelectedNumberOfDices();

  return (
    <Container>
      <DiceRangeInput />
      <GuessSection />
      <SelectedNumberOfDice />
      <DicesContainer>
        {Array(selectedNumberOfDices)
          .fill("")
          .map(() => (
            <Dice />
          ))}
      </DicesContainer>
      <ResultHistory />
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
  height: 100%;
  align-items: center;
  flex-flow: wrap;
  padding-bottom: 50px;
`;
