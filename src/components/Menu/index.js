import React from "react";
import logo from "../../images/logo2.png";
import {
  StyledMenu,
  MenuOption,
  Text,
  StyledLink,
  MenuLogo,
  IcoPainel,
  IcoUnidade,
  IcoCadastro,
} from "./style";

function Menu() {
  return (
    <StyledMenu>
      <MenuLogo src={logo} alt="solar-energy-logo" />
      <ul>
        <StyledLink to="/">
          <MenuOption>
            <IcoPainel />
            <Text>Painel</Text>
          </MenuOption>
        </StyledLink>
        <StyledLink to="/Unidades">
          <MenuOption>
            <IcoUnidade />
            <Text>Unidades geradoras</Text>
          </MenuOption>
        </StyledLink>
        <StyledLink to="/Cadastros">
          <MenuOption>
            <IcoCadastro />
            <Text>Cadastro de energia gerada</Text>
          </MenuOption>
        </StyledLink>
      </ul>
    </StyledMenu>
  );
}

export default Menu;
