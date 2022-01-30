import React, { useEffect, useState } from "react";
import axios from "axios";

import LineChart from "../../components/Charts";
import { Title } from "../../components/Title/style";
import Cards from "../../components/Cards";

function Painel() {
  const [geracao, setGeracao] = useState([]);
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/geracao").then(function (response) {
      setGeracao(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3333/unidades").then(function (response) {
      setUnidades(response.data);
    });
  }, []);

  const totalUnidades = () => {
    return unidades.length;
  };

  const totalAtivo = () => {
    return unidades.filter((item) => item.ativo).length;
  };

  const totalInativo = () => {
    return unidades.filter((item) => !item.ativo).length;
  };

  const mediaEnergia = () => {
    const totalEnergia = geracao.reduce((acum, elem) => {
      return acum + +elem.total_gerado;
    }, 0);
    const media = totalEnergia / get_UniqueMonths().length;
    return media.toFixed(0);
  };

  function get_TotalGenerated() {
    const groupBy = geracao.reduce(function (acum, elem) {
      const mes = new Date(elem.data).getMonth();
      acum[mes] = acum[mes] || [];
      acum[mes].push(elem.total_gerado);
      return acum;
    }, Object.create(null));

    const soma = [];

    for (let val of Object.values(groupBy)) {
      soma.push(
        val.reduce(function (acum, elem) {
          return acum + +elem; //parse
        }, 0)
      );
    }
    return soma;
  }

  function get_UniqueMonths() {
    const meses = [
      ...new Set(
        geracao.map((item) =>
          new Date(item.data).toLocaleString("pt-br", { month: "long" })
        )
      ),
    ];

    return meses;
  }

  const data = {
    labels: get_UniqueMonths(),
    datasets: [
      {
        label: "",
        data: get_TotalGenerated(),
        backgroundColor: "#2196F3",
        borderWidth: 2,
        borderColor: "#2196F3",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        align: "start",
        text: "Total de energia gerada por mês",
        padding: {
          bottom: 30,
        },
      },
    },
  };

  return (
    <>
      <Title>Painel de indicadores</Title>
      <Cards
        tUnidades={totalUnidades()}
        tAtivo={totalAtivo()}
        tInativo={totalInativo()}
        media={mediaEnergia()}
      />
      <LineChart chartData={data} options={options} />
    </>
  );
}

export default Painel;
