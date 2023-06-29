import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: black;
`;

export default function Selector() {
  return (
    <StyledLinks>
      <StyledLink to="/user/18">Cécilia</StyledLink>
      <StyledLink to="/user/12">Karl</StyledLink>
    </StyledLinks>
  );
}
