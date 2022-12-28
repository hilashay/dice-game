import React, { useState } from "react";
import styled from "styled-components";

interface GuessedNumberProps {
  isSubmit: boolean;
  guessedNumber: number;
}

const GuessedNumber: React.FC<GuessedNumberProps> = ({ isSubmit, guessedNumber }) => {
  return isSubmit ? <SelectedNumberStyle>chosen number:{guessedNumber}</SelectedNumberStyle> : null;
};

export default GuessedNumber;

const SelectedNumberStyle = styled.p`
  font-size: 16px;
  align-self: center;
`;
