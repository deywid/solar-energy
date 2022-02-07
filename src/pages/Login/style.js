import styled from "styled-components";

import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  background-color: #fafafa; ;
`;

export const LeftSide = styled.div`
  width: 50%;

  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const RightSide = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 50%;
`;
Logo.defaultProps = {
  src: logo,
  alt: "solar-energy-logo",
};

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Greetings = styled.h3`
  font-family: "Roboto Slab", serif;
  text-align: center;
  color: #374557;
  font-weight: 500;
  font-size: 1.2em;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`;
