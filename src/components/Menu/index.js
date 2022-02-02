import React from "react";

import logo from "../../images/logo2.png";
import { FaChartPie, FaThList, FaLightbulb } from "react-icons/fa";
import { StyledMenu, MenuOption, Text, StyledLink, MenuLogo } from "./style";

function Menu() {
  return (
    <StyledMenu>
      <MenuLogo src={logo} alt="solar-energy-logo" />
      <ul>
        <StyledLink to="/">
          <MenuOption>
            <FaChartPie />
            <Text>Painel</Text>
          </MenuOption>
        </StyledLink>
        <StyledLink to="/Unidades">
          <MenuOption>
            <FaThList />
            <Text>Unidades geradoras</Text>
          </MenuOption>
        </StyledLink>
        <StyledLink to="/Cadastros">
          <MenuOption>
            <FaLightbulb />
            <Text>Cadastro de energia gerada</Text>
          </MenuOption>
        </StyledLink>
      </ul>
    </StyledMenu>
  );
}

export default Menu;
