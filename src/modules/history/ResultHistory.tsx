import React from "react";
import styled from "styled-components";
import { useHistory } from "../../MyContext";

interface ResultHistoryProps {}

const ResultHistory: React.FC<ResultHistoryProps> = () => {
  console.log("ResultHistory- rendered");
  const { history } = useHistory();
  console.log("history:", useHistory());
  console.log("history:", history);

  return (
    <Container>
      <Title>History numbers:</Title>
      {history?.map((num: number, index: number) => (
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
