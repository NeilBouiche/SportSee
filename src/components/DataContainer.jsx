import { styled } from "styled-components";
import Charts from "./Charts";
import NutrimentsContainer from "./NutrimentsContainer";

export default function DataContainer() {
  return (
    <PageContainer>
      <Charts />
      <NutrimentsContainer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin: 0 10% 0 10%;
  display: flex;
`;
