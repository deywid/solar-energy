import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Logo = styled.img`
  width: 50%;
`;

export const Text = styled.span`
  font-weight: 500;
  text-align: left;
  font-size: 1em;
`;

export const Option = styled.li`
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

export const Link = styled(NavLink)`
  text-decoration: none;

  &.active {
    ${Option} {
      background: #4cbc9a;
    }

    ${Text},
    svg {
      color: #fff;
    }
  }
`;

export const Styled = styled.nav`
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;

  padding: 16px;
  width: 20%;
  min-width: 250px;
  height: 100%;
`;

export const Logout = styled.button`
  margin-top: auto;
  padding: 8px;

  font-weight: 500;
  text-align: center;
  font-size: 0.9em;

  width: 100%;

  background-color: #d2faee;
  border-radius: 20px;
  color: #4cbc9a;

  cursor: pointer;

  &:hover {
    border: 1px solid #4cbc9a;
  }
`;
