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
  margin: 0 5rem;
  padding: 3rem 7rem;
  font-size: 2rem;
  color: #e60000;
  border: 1px solid black;
  background-color: black;
  border-radius: 1rem;
  text-decoration: none;
  font-weight: bold;
`;

export default function Selector() {
  return (
    <StyledLinks>
      <StyledLink to="/user/18">Cécilia</StyledLink>
      <StyledLink to="/user/12">Karl</StyledLink>
    </StyledLinks>
  );
}
