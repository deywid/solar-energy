import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { PageButton } from "../Buttons";
import { SubTitle } from "../Title";
import CustomInput from "../Inputs";
import CustomSelect from "../Select";
import { CadEnergiaContainer, Form } from "./style";

function CadEnergia() {
  const initialForm = {
    unidade_id: "",
    data: "",
    total_gerado: 0,
  };

  const [geracao, setGeracao] = useState(initialForm);

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
    <>
      <CadEnergiaContainer>
        <SubTitle>Lançamento mensal</SubTitle>
        <Form onSubmit={handleSubmit}>
          <CustomSelect
            label="Unidade geradora"
            htmlFor="unidade"
            id="unidade_id"
            name="unidade_id"
            defaultValue=""
            onChange={handleChange}
          />
          <CustomInput
            label="Mês/Ano"
            htmlFor="data"
            type="date"
            id="data"
            name="data"
            onChange={handleChange}
          />
          <CustomInput
            label="Total kW gerado"
            htmlFor="total_gerado"
            type="number"
            id="total_gerado"
            name="total_gerado"
            onChange={handleChange}
          />
          <PageButton primary>Salvar</PageButton>
        </Form>
      </CadEnergiaContainer>
    </>
  );
}

export default CadEnergia;
