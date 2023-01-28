import styled from "styled-components";
import { useGuessedNumber, useLastNumber } from "../../MyContext";

const GameOver = () => {
  const { guessedNumber } = useGuessedNumber();
  const { lastNumber } = useLastNumber();

  return guessedNumber === lastNumber && guessedNumber !== 0 ? (
    <Container>
      <Restart>
        <RestartText>Start Over</RestartText>
      </Restart>
    </Container>
  ) : null;
};

export default GameOver;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(189, 195, 199, 0.5);
`;

const Restart = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(108, 122, 137);
  top: 25%;
  right: 25%;
  left: 10%;
  bottom: 25%;
  border-width: inherit;
  cursor: pointer;
`;

const RestartText = styled.p`
  font-size: 36px;
  margin-top: 64px;
`;
