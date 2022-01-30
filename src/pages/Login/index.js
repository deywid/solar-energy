import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiLock, FiMail } from "react-icons/fi";
import { PageButton } from "../../components/Buttons";

import {
  LoginContainer,
  LoginFormContainer,
  LoginLeftSide,
  LoginRightSide,
  LoginGreeting,
  LoginForm,
  LoginLogo,
} from "./style";
import CustomInput from "../../components/Inputs";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (email && password) {
      navigate("/");
    }
  }

  return (
    <LoginContainer>
      <LoginLeftSide />
      <LoginRightSide>
        <LoginFormContainer>
          <LoginLogo />
          <LoginForm onSubmit={handleLogin}>
            <LoginGreeting>Seja bem vindo</LoginGreeting>
            <CustomInput>
              <FiMail />
              <input
                type="email"
                placeholder="E-mail"
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </CustomInput>
            <CustomInput>
              <FiLock />
              <input
                type="password"
                placeholder="Senha"
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </CustomInput>
            <PageButton>Entrar</PageButton>
          </LoginForm>
        </LoginFormContainer>
      </LoginRightSide>
    </LoginContainer>
  );
}

export default Login;
