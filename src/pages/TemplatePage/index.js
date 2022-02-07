import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Menu from "../../components/Menu";
import { Container, MainContent } from "./style";

function TemplatePage() {
  return (
    <>
      <Container>
        <Menu />
        <MainContent>
          <Outlet />
        </MainContent>
      </Container>
      <ToastContainer />
    </>
  );
}

export default TemplatePage;
