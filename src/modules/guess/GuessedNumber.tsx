import React, { useState } from "react";
import styled from "styled-components";

interface GuessedNumberProps {
  number: number;
}

const GuessedNumber: React.FC<GuessedNumberProps> = ({ number }) => {
  return <SelectedNumberStyle>chosen number:{number}</SelectedNumberStyle>;
};

export default React.memo(GuessedNumber);

const SelectedNumberStyle = styled.p`
  font-size: 16px;
  align-self: center;
`;
