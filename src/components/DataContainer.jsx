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
  margin: 0 10% 0 14rem;
  display: flex;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    margin: 0 10% 0 20rem;
  }
`;
