import React, { useState } from "react";
import styled from "styled-components";
import RangeNumber from "./RangeNumber";

interface DiceRangeInputProps {
  range: number;
  setRange: (x: number) => void;
}

const DiceRangeInput: React.FC<DiceRangeInputProps> = ({ range, setRange }) => {
  console.log("DiceRangeInput- rendered");

  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Label>Choose a number:</Label>
        <Input type="number" value={range} onChange={(e) => setRange(parseInt(e.target.value))} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
      <RangeNumber isSubmit={isSubmit} range={range} />
    </Container>
  );
};

export default DiceRangeInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 160px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  align-items: center;
`;

const Label = styled.label`
  font-size: 24px;
`;

const Input = styled.input`
  width: 88px;
`;

const SubmitButton = styled.button`
  height: 30px;
  width: 64px;
  background-color: #447c99;
  border-radius: 5px;
  border-width: inherit;
  cursor: pointer;
  color: white;
  padding: 5px 0;
  font-family: "Dosis", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  on-hover: yellow;
`;
