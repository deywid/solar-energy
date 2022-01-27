import { Link } from "react-router-dom";
import { FaChartPie, FaThList, FaLightbulb } from "react-icons/fa";

import styled from "styled-components";

export const MenuLogo = styled.img`
  width: 50%;
`;

export const IcoPainel = styled(FaChartPie)`
  color: #a098ae;
`;

export const IcoUnidade = styled(FaThList)`
  color: #a098ae;
`;

export const IcoCadastro = styled(FaLightbulb)`
  color: #a098ae;
`;

export const Text = styled.span`
  font-weight: 500;
  text-align: left;
  font-size: 0.9em;
  color: #a098ae;
`;

export const MenuOption = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 12px 22px;
  border-radius: 20px;

  &:hover {
    background: #d2faee;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus {
    ${MenuOption} {
      background: #4cbc9a;
    }

    ${Text},
    ${IcoPainel},
    ${IcoUnidade},
    ${IcoCadastro} {
      color: #fff;
    }
  }
`;

export const StyledMenu = styled.nav`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;
  width: 20%;
  min-width: 250px;
  height: 100%;
`;
