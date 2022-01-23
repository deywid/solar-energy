import React from "react";
import { useNavigate } from "react-router-dom";

function CadUnidade() {
  const navigate = useNavigate();

  return (
    <>
      <div>Form Cadastro Unidades</div>
      <button onClick={() => navigate("/Unidades/")}>Voltar</button>
    </>
  );
}

export default CadUnidade;
