import Logo from "../assets/logo.png";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <LogoSportSee src={Logo} alt="SportSee Logo"></LogoSportSee>
      <MenuLink>Accueil</MenuLink>
      <MenuLink>Profil</MenuLink>
      <MenuLink>Réglage</MenuLink>
      <MenuLink>Communauté</MenuLink>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 7rem;
  background-color: black;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem 0 2.8rem;
`;

const LogoSportSee = styled.img`
  width: 18rem;
`;

const MenuLink = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  color: white;
  &:hover {
    color: #e60000;
  }
`;

export default Header;
