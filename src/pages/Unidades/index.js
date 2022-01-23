import React from "react";
import { Outlet } from "react-router-dom";

function Unidades() {
  return (
    <>
      <h1>Unidades</h1>
      <Outlet />
    </>
  );
}

export default Unidades;
