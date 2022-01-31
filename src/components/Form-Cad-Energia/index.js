import React, { useEffect, useState } from "react";
import axios from "axios";

import { PageButton } from "../Buttons";
import { SubTitle } from "../Title/style";
import CustomInput from "../Inputs";
import { CadEnergiaContainer, Form } from "./style";
import { toast, ToastContainer } from "react-toastify";

function CadEnergia() {
  const initialForm = {
    unidade_id: "",
    data: "",
    total_gerado: 0,
  };

  const [geracao, setGeracao] = useState(initialForm);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function handleGetOptions() {
      try {
        const response = await axios.get("http://localhost:3333/unidades");
        setOptions(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro ao requisitar dados do sistema");
        console.log(error);
      }
    }
    handleGetOptions();
  }, []);

  function handleChange(ev) {
    const { name, value } = ev.target;
    setGeracao({ ...geracao, [name]: value });
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!objetoVazio(geracao)) {
      try {
        await axios.post("http://localhost:3333/geracao", geracao);
        toast.success("Cadastro salvo com sucesso");
      } catch (error) {
        toast.error("Ocorreu um erro ao salvar");
        console.log(error);
      }
    } else {
      toast.error("Preencha todos os campos antes de salvar");
    }
  }

  function objetoVazio(obj) {
    const valid = Object.values(obj).some((e) => e === "");
    return valid;
  }

  return (
    <CadEnergiaContainer>
      <ToastContainer />
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
