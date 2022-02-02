import { Link } from "react-router-dom";

import styled from "styled-components";

export const MenuLogo = styled.img`
  width: 50%;
`;

export const Text = styled.span`
  font-weight: 500;
  text-align: left;
  font-size: 1em;
`;

export const MenuOption = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;

  padding: 16px;
  border-radius: 20px;
  color: #a098ae;

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
    svg {
      color: #fff;
    }
  }
`;

export const StyledMenu = styled.nav`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;
  width: 20%;
  min-width: 250px;
  height: 100%;
`;
