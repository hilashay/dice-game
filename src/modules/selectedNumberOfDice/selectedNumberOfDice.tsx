import React, { useState } from "react";
import styled from "styled-components";
import { useSelectedNumberOfDices } from "../../MyContext";

const SelectedNumberOfDice = () => {
  const [number, setNumber] = useState(0);
  const { selectedNumberOfDices, setSelectedNumberOfDices } = useSelectedNumberOfDices();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSelectedNumberOfDices(number);
    // onGuess(guessedNumber);
    if (selectedNumberOfDices > 20 || selectedNumberOfDices < 0) {
      alert("Only numbers between 1 to 20");
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Label>Select number of dices</Label>
        <Input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        ></Input>
        <SubmitButton>Submit guess</SubmitButton>
      </StyledForm>
      {/* {isSubmit ? <GuessedNumber number={guessedNumber} /> : null} */}
    </Container>
  );
};

export default SelectedNumberOfDice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  padding: 20px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  align-items: center;
`;

const Label = styled.label`
  font-size: 24px;
`;

const Input = styled.input`
  width: 88px;
`;

const SubmitButton = styled.button`
  background-color: #447c99;
  border-radius: 5px;
  border-width: inherit;
  cursor: pointer;
  color: white;
  width: 64px;
  padding: 5px 0;
  font-family: "Dosis", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
