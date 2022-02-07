import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { FiLock, FiMail } from "react-icons/fi";

import { PageButton } from "../../components/Buttons";
import Loader from "../../components/Loader";
import CustomInput from "../../components/Inputs";
import * as Page from "./style";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading && localStorage.getItem("token") !== null) {
      navigate("/");
    }
  }, [loading, navigate]);

  function handleLogin(event) {
    event.preventDefault();

    if (email && password) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("token", "token");
        setLoading(false);
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        toast.error("Usuário ou senha inválidos", {
          toastId: "preventDuplicated",
        });
        setLoading(false);
      }, 1000);
    }
  }

  return (
    <>
      <Page.Container>
        <Page.LeftSide />
        <Page.RightSide>
          <Page.FormContainer>
            <Page.Logo />
            <Page.Form onSubmit={handleLogin}>
              <Page.Greetings>Seja bem vindo</Page.Greetings>
              <CustomInput
                type="email"
                placeholder="E-mail"
                onChange={(ev) => setEmail(ev.target.value)}
              >
                <FiMail />
              </CustomInput>
              <CustomInput
                type="password"
                placeholder="Senha"
                onChange={(ev) => setPassword(ev.target.value)}
              >
                <FiLock />
              </CustomInput>
              <PageButton>{loading ? <Loader /> : "Entrar"}</PageButton>
            </Page.Form>
          </Page.FormContainer>
        </Page.RightSide>
      </Page.Container>
      <ToastContainer />
    </>
  );
}

export default Login;
