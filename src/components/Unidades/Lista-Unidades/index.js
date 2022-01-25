import React from "react";
import { useNavigate } from "react-router-dom";

function ListaUnidades() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/Unidades/cadastro-unidade")}>
        Nova unidade
      </button>
    </>
  );
}

export default ListaUnidades;
