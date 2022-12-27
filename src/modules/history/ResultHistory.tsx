import React from "react";
import styled from "styled-components";

interface ResultHistoryProps {
  history: number[];
}

const ResultHistory: React.FC<ResultHistoryProps> = ({ history }) => {
  return <Container>{history}</Container>;
};

export default ResultHistory;

const Container = styled.div``;
