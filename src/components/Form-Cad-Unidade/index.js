import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

import { PageButton } from "../Buttons";
import { SubTitle } from "../Title";
import CustomInput from "../Inputs";
import CustomCheckbox from "../Checkbox";
import { CadUnidadeContainer, Form, ButtonContainer } from "./style";

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
    <>
      <CadUnidadeContainer>
        <SubTitle>Cadastro de unidade geradora</SubTitle>
        <Form onSubmit={handleSubmit}>
          <CustomInput
            label="Apelido"
            htmlFor="apelido"
            type="text"
            id="apelido"
            name="apelido"
            value={unidades.apelido}
            onChange={handleChange}
          />
          <CustomInput
            label="Local"
            htmlFor="local"
            type="text"
            id="local"
            name="local"
            value={unidades.local}
            onChange={handleChange}
          />
          <CustomInput
            label="Marca"
            htmlFor="marca"
            type="text"
            id="marca"
            name="marca"
            value={unidades.marca}
            onChange={handleChange}
          />
          <CustomInput
            label="Modelo"
            htmlFor="modelo"
            type="text"
            id="modelo"
            name="modelo"
            value={unidades.modelo}
            onChange={handleChange}
          />
          <CustomCheckbox
            label="Ativo"
            htmlFor="ativo"
            type="checkbox"
            id="ativo"
            name="ativo"
            checked={unidades.ativo}
            onChange={handleChange}
          />
          <ButtonContainer>
            <PageButton primary>Salvar</PageButton>
            <PageButton type="button" onClick={() => navigate("/Unidades")}>
              Voltar
            </PageButton>
          </ButtonContainer>
        </Form>
      </CadUnidadeContainer>
    </>
  );
}

export default CadUnidade;
