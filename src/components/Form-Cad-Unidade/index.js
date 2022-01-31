import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";

import { PageButton } from "../Buttons";
import CustomInput from "../Inputs";
import { SubTitle } from "../Title/style";
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

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!objetoVazio(unidades)) {
      if (state) {
        try {
          await axios.put(
            `http://localhost:3333/unidades/${state.id}`,
            unidades
          );
          toast.success("Unidade alterada com sucesso");
        } catch (error) {
          toast.error("Ocorreu um erro ao tentar alterar a unidade");
          console.log(error);
        }
      } else {
        try {
          await axios.post("http://localhost:3333/unidades", unidades);
          toast.success("Unidade salva com sucesso");
        } catch (error) {
          toast.error("Ocorreu um erro ao salvar");
          console.log(error);
        }
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
    <CadUnidadeContainer>
      <ToastContainer />
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
