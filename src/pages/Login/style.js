import styled from "styled-components";

import background from "../../images/background.png";
import logo from "../../images/logo.png";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  background-color: #fafafa; ;
`;

export const LoginLeftSide = styled.div`
  width: 50%;

  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const LoginRightSide = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginLogo = styled.img`
  width: 50%;
`;
LoginLogo.defaultProps = {
  src: logo,
  alt: "solar-energy-logo",
};

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginGreeting = styled.h3`
  font-family: "Roboto Slab", serif;
  text-align: center;
  color: #374557;
  font-weight: 500;
  font-size: 1.2em;
`;

export const LoginForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`;
