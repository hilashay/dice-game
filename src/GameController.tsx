import React from "react";
import styled from "styled-components";
import "./App.css";
import Dice from "./modules/dice/Dice";

interface GameControllerProps {}

const GameController: React.FC<GameControllerProps> = ({}) => {
  const onDiceResult = (number: number) => console.log(number);
  return (
    <Container>
      <Dice range={5} onDiceResult={onDiceResult} />
    </Container>
  );
};

export default GameController;

const Container = styled.div``;
