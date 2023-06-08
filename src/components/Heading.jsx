import useData from "../Api";
import styled from "styled-components";

export default function Heading() {
  const userData = useData({ additionalParam: "" });

  return (
    <UserNameContainer>
      <HelloName>
        Bonjour <UserName>{userData?.data.userInfos.firstName}</UserName>
      </HelloName>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </UserNameContainer>
  );
}

const UserNameContainer = styled.div`
  margin: 12rem 0 0 14rem;
  @media (min-width: 1440px) {
    margin: 12rem 10% 0 20rem
  }
`;

const HelloName = styled.h1`
  font-size: 4.8rem;
  font-weight: 500;
`;

const UserName = styled.span`
  color: #ff0101;
`;
