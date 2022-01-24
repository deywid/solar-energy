import React from "react";
import { useNavigate } from "react-router-dom";

import background from "../../images/login-bg-1920x1080.jpg";
//import logo  from "../../images/logo.jpg";
import "./style.css";

function Login() {
  const navigate = useNavigate();
  function handleLogin(event) {
    event.preventDefault();

    navigate("/");
  }

  return (
    <div className="container">
      <img
        src={background}
        alt="solar-energy-background"
        className="item-login-bg"
      ></img>
      <div className="item-login-content">
        <img src="" alt="solar-energy-logo" className="item-img-logo"></img>
        <form onSubmit={handleLogin} className="item-form-login">
          <h3>Seja bem vindo</h3>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
