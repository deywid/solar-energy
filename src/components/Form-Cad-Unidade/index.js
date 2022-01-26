import React from "react";
import { useNavigate } from "react-router-dom";

function CadUnidade() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Cadastro de unidade geradora</h2>
      <form className="item-form">
        <label htmlFor="item-apelido">Apelido</label>
        <input type="text" id="item-apelido" />
        <label htmlFor="item-local">Local</label>
        <input type="text" id="item-local" />
        <label htmlFor="item-marca">Marca</label>
        <input type="text" id="item-marca" />
        <label htmlFor="item-modelo">Modelo</label>
        <input type="text" id="item-modelo" />
        <label htmlFor="item-isAtivo">
          <input type="checkbox" id="item-isAtivo" />
          Ativo
        </label>
        <div>
          <button>Salvar</button>
          <button onClick={() => navigate("/Unidades")}>Voltar</button>
        </div>
      </form>
    </>
  );
}

export default CadUnidade;
