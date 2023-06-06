import ActivityBarGraph from "./ActivityBarGraph";
import SessionsLengthGraph from "./SessionsLengthGraph";
import PerfoGraph from "./PerfoGraph";
import ScoreGraph from "./ScoreGraph";
import { styled } from "styled-components";

export default function Charts() {
  return (
    <ChartsContainer>
      <ActivityBarGraph />
      <SessionsLengthGraph />
      <PerfoGraph />
      <ScoreGraph />
    </ChartsContainer>
  );
}

const ChartsContainer = styled.div`
  width: 85rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  flex-grow: 1;
`;
