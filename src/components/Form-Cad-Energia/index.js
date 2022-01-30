import React, { useEffect, useState } from "react";
import axios from "axios";

import { PageButton } from "../Buttons";
import { SubTitle } from "../Title/style";
import CustomInput from "../Inputs";
import { CadEnergiaContainer, Form } from "./style";

function CadEnergia() {
  const initialForm = {
    unidade_id: "",
    data: "",
    total_gerado: 0,
  };

  const [geracao, setGeracao] = useState(initialForm);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    function handleGetOptions() {
      axios.get("http://localhost:3333/unidades").then(function (response) {
        setOptions(response.data);
      });
    }
    handleGetOptions();
  }, []);

  function handleChange(ev) {
    const { name, value } = ev.target;
    setGeracao({ ...geracao, [name]: value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    axios.post("http://localhost:3333/geracao", geracao);
  }

  return (
    <CadEnergiaContainer>
      <SubTitle>Lançamento mensal</SubTitle>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="unidade">Unidade geradora</label>
        <CustomInput>
          <select
            id="unidade_id"
            name="unidade_id"
            defaultValue=""
            onChange={handleChange}
          >
            <option value="" disabled hidden></option>
            {options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.apelido}
              </option>
            ))}
          </select>
        </CustomInput>
        <label htmlFor="data">Mês/Ano</label>
        <CustomInput>
          <input type="date" id="data" name="data" onChange={handleChange} />
        </CustomInput>

        <label htmlFor="total_gerado">Total kW gerados</label>
        <CustomInput>
          <input
            type="number"
            id="total_gerado"
            name="total_gerado"
            onChange={handleChange}
          />
        </CustomInput>
        <PageButton primary>Salvar</PageButton>
      </Form>
    </CadEnergiaContainer>
  );
}

export default CadEnergia;
