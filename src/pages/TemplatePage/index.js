import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Menu from "../../components/Menu";
import { Container, MainContent } from "./style";

function TemplatePage() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <Container>
      <Menu>
        <div style={{ marginTop: "auto" }}>
          <button onClick={logout}>Sair</button>
        </div>
      </Menu>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}

export default TemplatePage;
