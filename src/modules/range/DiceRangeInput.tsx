import React from "react";
import styled from "styled-components";

interface DiceRangeInputProps {
  range: number;
  setRange: any;
}

const DiceRangeInput: React.FC<DiceRangeInputProps> = ({ range, setRange }) => {
  return (
    <Container>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <Label>Choose a number:</Label>
        <TextInput type="text" value={range} onChange={(e) => setRange(e.target.value)} />
        <SubmitInput type="submit" />
      </StyledForm>
    </Container>
  );
};

export default DiceRangeInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 104px;
  align-items: center;
`;

const Label = styled.label`
  font-size: 24px;
`;

const TextInput = styled.input`
  width: 88px;
`;

const SubmitInput = styled.input`
  background-color: #447c99;
  border-radius: 5px;
  border-width: inherit;
  cursor: pointer;
  color: white;
  width: 64px;
  padding: 5px 0;
  font-family: "Dosis", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  on-hover: yellow;
`;
