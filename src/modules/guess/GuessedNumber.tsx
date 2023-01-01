import React, { useState } from "react";
import styled from "styled-components";

interface GuessedNumberProps {
  number: number;
}

const GuessedNumber: React.FC<GuessedNumberProps> = ({ number }) => {
  console.log("GuessedNumber- rendered");
  return <SelectedNumberStyle>chosen number:{number}</SelectedNumberStyle>;
};

export default GuessedNumber;

const SelectedNumberStyle = styled.p`
  font-size: 16px;
  align-self: center;
`;
