import { styled } from "styled-components";

export const Nutriments = ({ imgSrc, value, unit }) => {
  return (
    <CardContainer>
      <CardImg src={imgSrc} alt={unit} />
      <ValueContainer>
        <ValueCount>{value}</ValueCount>
        <Unit>{unit}</Unit>
      </ValueContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 26rem;
  border-radius: 1rem;
  background-color: #fbfbfb;
  height: 12.4rem;
  display: flex;
  padding: 0 3rem 0 3rem;
  align-items: center;
`;

const CardImg = styled.img`
  height: 6rem;
  width: 6rem;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const ValueCount = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
`;

const Unit = styled.div`
  font-size: 1.4rem;
  color: #74798c;
`;
