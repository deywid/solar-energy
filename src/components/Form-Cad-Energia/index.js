import React from "react";

function CadEnergia() {
  return (
    <div >
      <h2>Lançamento mensal</h2>
      <form className="item-form">
        <label htmlFor="input-geradora">Unidade geradora</label>
        <select id="input-geradora">
          <option value="temp">temp</option>
        </select>
        <label htmlFor="input-total">Mês/Ano</label>
        <input type="date" id="input-total" />
        <label htmlFor="input-total">Total kW gerados</label>
        <input type="text" id="input-total" />
        <button>Salvar</button>
      </form>
    </div>
  );
}

export default CadEnergia;
