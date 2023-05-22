import Yoga from "../assets/yoga.png";
import Swim from "../assets/swim.png";
import Bike from "../assets/bike.png";
import Power from "../assets/power.png";
import styled from "styled-components";

export default function VerticalHeader() {
  return (
    <VerticalContainer>
      <img src={Yoga} alt="Yoga Icon" />
      <img src={Swim} alt="Swim Icon" />
      <img src={Bike} alt="Bike Icon" />
      <img src={Power} alt="Power Icon" />
      <Copyright>Copiryght, SportSee 2020</Copyright>
    </VerticalContainer>
  );
}

const VerticalContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 11.7rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Copyright = styled.small`
  width: 20rem;
  position: absolute;
  bottom: 12rem;
  rotate: 270deg;
  color: white;
`;
