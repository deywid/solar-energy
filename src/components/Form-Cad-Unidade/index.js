import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function CadUnidade() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const initialForm = {
    apelido: state ? state.apelido : "",
    local: state ? state.local : "",
    marca: state ? state.marca : "",
    modelo: state ? state.modelo : "",
    ativo: state ? state.ativo : false,
  };

  const [unidades, setUnidades] = useState(initialForm);

  function handleChange(ev) {
    const { name, value, checked } = ev.target;
    const formValues = name !== "ativo" ? value : checked;
    setUnidades({ ...unidades, [name]: formValues });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (state) {
      axios.put(`http://localhost:3333/unidades/${state.id}`, unidades);
    } else {
      axios.post("http://localhost:3333/unidades", unidades);
    }
  }

  return (
    <>
      <h2>Cadastro de unidade geradora</h2>
      <form className="item-form" onSubmit={handleSubmit}>
        <label htmlFor="apelido">Apelido</label>
        <input
          type="text"
          id="apelido"
          name="apelido"
          value={unidades.apelido}
          onChange={handleChange}
        />
        <label htmlFor="local">Local</label>
        <input
          type="text"
          id="local"
          name="local"
          value={unidades.local}
          onChange={handleChange}
        />
        <label htmlFor="marca">Marca</label>
        <input
          type="text"
          id="marca"
          name="marca"
          value={unidades.marca}
          onChange={handleChange}
        />
        <label htmlFor="modelo">Modelo</label>
        <input
          type="text"
          id="modelo"
          name="modelo"
          value={unidades.modelo}
          onChange={handleChange}
        />
        <label htmlFor="ativo">
          <input
            type="checkbox"
            id="ativo"
            name="ativo"
            checked={unidades.ativo}
            onChange={handleChange}
          />
          Ativo
        </label>
        <button type="submit">Salvar</button>
      </form>
      <button onClick={() => navigate("/Unidades")}>Voltar</button>
    </>
  );
}

export default CadUnidade;
