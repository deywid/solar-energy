import React from "react";
import { Outlet } from "react-router-dom";
import { Title } from "../../components/Title/style";

function Unidades() {
  return (
    <>
      <Title>Unidades</Title>
      <Outlet />
    </>
  );
}

export default Unidades;
