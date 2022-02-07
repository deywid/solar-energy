import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo2.png";
import { FaChartPie, FaThList, FaLightbulb } from "react-icons/fa";
import * as Nav from "./style";

function Menu() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <Nav.Styled>
      <Nav.Logo src={logo} alt="solar-energy-logo" />
      <ul>
        <Nav.Link
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <Nav.Option>
            <FaChartPie />
            <Nav.Text>Painel</Nav.Text>
          </Nav.Option>
        </Nav.Link>
        <Nav.Link to="/Unidades">
          <Nav.Option>
            <FaThList />
            <Nav.Text>Unidades geradoras</Nav.Text>
          </Nav.Option>
        </Nav.Link>
        <Nav.Link to="/Cadastros">
          <Nav.Option>
            <FaLightbulb />
            <Nav.Text>Cadastro de energia gerada</Nav.Text>
          </Nav.Option>
        </Nav.Link>
      </ul>
      <Nav.Logout onClick={logout}>Sair</Nav.Logout>
    </Nav.Styled>
  );
}

export default Menu;
