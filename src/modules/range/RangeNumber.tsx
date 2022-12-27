import React, { useState } from "react";
import styled from "styled-components";

interface RangeNumberProps {
  isSubmit: boolean;
  range: number;
}

const RangeNumber: React.FC<RangeNumberProps> = ({ isSubmit, range }) => {
  return isSubmit ? <SelectedNumberStyle>chosen number:{range}</SelectedNumberStyle> : null;
};

export default RangeNumber;

const SelectedNumberStyle = styled.p`
  font-size: 16px;
  align-self: center;
  padding: 16px 0;
`;
