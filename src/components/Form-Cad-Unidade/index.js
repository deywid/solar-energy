import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { PageButton } from "../Buttons";
import { SubTitle } from "../Title/style";
import CustomInput from "../Inputs";
import { CadUnidadeContainer, Form, ButtonContainer, Checkbox } from "./style";

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
    <CadUnidadeContainer>
      <SubTitle>Cadastro de unidade geradora</SubTitle>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="apelido">Apelido</label>
        <CustomInput>
          <input
            type="text"
            id="apelido"
            name="apelido"
            value={unidades.apelido}
            onChange={handleChange}
          />
        </CustomInput>

        <label htmlFor="local">Local</label>
        <CustomInput>
          <input
            type="text"
            id="local"
            name="local"
            value={unidades.local}
            onChange={handleChange}
          />
        </CustomInput>

        <label htmlFor="marca">Marca</label>
        <CustomInput>
          <input
            type="text"
            id="marca"
            name="marca"
            value={unidades.marca}
            onChange={handleChange}
          />
        </CustomInput>

        <label htmlFor="modelo">Modelo</label>
        <CustomInput>
          <input
            type="text"
            id="modelo"
            name="modelo"
            value={unidades.modelo}
            onChange={handleChange}
          />
        </CustomInput>

        <label htmlFor="ativo">
          <Checkbox
            type="checkbox"
            id="ativo"
            name="ativo"
            checked={unidades.ativo}
            onChange={handleChange}
          />
          Ativo
        </label>
        <ButtonContainer>
          <PageButton primary>Salvar</PageButton>
          <PageButton type="button" onClick={() => navigate("/Unidades")}>
            Voltar
          </PageButton>
        </ButtonContainer>
      </Form>
    </CadUnidadeContainer>
  );
}

export default CadUnidade;
