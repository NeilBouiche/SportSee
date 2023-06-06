import { styled } from "styled-components";
import { Nutriments } from "./Nutriments";
import { useData } from "../Api";
// import Formatter from "../utils/Formatter";
import CaloriesIcon from "../assets/calories-icon.png";
import ProteinIcone from "../assets/protein-icon.png";
import CarbsIcon from "../assets/carbs-icon.png";
import FatIcon from "../assets/fat-icon.png";

export default function NutrimentsContainer() {
  const userData = useData({ additionalParam: "" });
  return (
    <NutContainer>
      <Nutriments
        imgSrc={CaloriesIcon}
        value={userData?.data?.keyData.calorieCount + "kCal"}
        unit={"Calories"}
      />
      <Nutriments
        imgSrc={ProteinIcone}
        value={userData?.data?.keyData.proteinCount + "g"}
        unit={"Proteins"}
      />
      <Nutriments
        imgSrc={CarbsIcon}
        value={userData?.data?.keyData.carbohydrateCount + "g"}
        unit={"Glucides"}
      />
      <Nutriments
        imgSrc={FatIcon}
        value={userData?.data?.keyData.lipidCount + "g"}
        unit={"Lipides"}
      />
    </NutContainer>
  );
}

const NutContainer = styled.div`
  margin-top: 3rem;
  margin-left: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8.4rem;
`;
