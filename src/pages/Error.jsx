import React from "react";
import Logo from "../assets/logo.png";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <ErrorContainer>
      <Link to={"/"}>
        <LogoSportSee src={Logo} alt="SportSee Logo"></LogoSportSee>
      </Link>
      <ErrorTitle>
        Erreur, merci de vous rediriger vers le sélecteur d'utilisateur
      </ErrorTitle>
      <Link to={"/"}>
        <BackToSelection>Retour à la sélection</BackToSelection>{" "}
      </Link>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoSportSee = styled.img`
  width: 18rem;
  margin-bottom: 2rem;
`;

const ErrorTitle = styled.h1`
  margin-bottom: 2rem;
`;

const BackToSelection = styled.span`
  text-decoration: underline;
`;
