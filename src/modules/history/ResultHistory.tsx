import React from "react";
import styled from "styled-components";

interface ResultHistoryProps {
  history: number[];
}

const ResultHistory: React.FC<ResultHistoryProps> = ({ history }) => {
  console.log("ResultHistory- rendered");
  return (
    <Container>
      <Title>History numbers:</Title>
      {history.map((num, index) => (
        <EachNumber key={index}>{num}</EachNumber>
      ))}
    </Container>
  );
};

export default ResultHistory;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
const EachNumber = styled.div``;
