import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import LineChart from "../../components/Charts";
import { Title } from "../../components/Title/";
import Cards from "../../components/Cards";

import {
  mediaEnergia,
  totalAtivo,
  totalInativo,
  totalUnidades,
} from "./functions";

function Painel() {
  const [geracao, setGeracao] = useState([]);
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    async function request() {
      try {
        const response = await axios.get("http://localhost:3333/geracao");
        setGeracao(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro ao requisitar dados do sistema");
        console.log(error);
      }
    }
    request();
  }, []);

  useEffect(() => {
    async function request() {
      try {
        const response = await axios.get("http://localhost:3333/unidades");
        setUnidades(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro ao requisitar dados do sistema");
        console.log(error);
      }
    }
    request();
  }, []);

  return (
    <>
      <Title>Painel de indicadores</Title>
      <Cards
        tUnidades={totalUnidades(unidades)}
        tAtivo={totalAtivo(unidades)}
        tInativo={totalInativo(unidades)}
        media={mediaEnergia(geracao)}
      />
      <LineChart geracao={geracao} />
    </>
  );
}

export default Painel;
