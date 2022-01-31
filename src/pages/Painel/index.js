import React, { useEffect, useState } from "react";
import axios from "axios";

import LineChart from "../../components/Charts";
import { Title } from "../../components/Title/style";
import Cards from "../../components/Cards";
import { toast, ToastContainer } from "react-toastify";

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
    const media = totalEnergia / getMeses().length;
    return media.toFixed(0);
  };

  function getTotalGeradoMes() {
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

  function getMeses() {
    const meses = [
      ...new Set(
        geracao.map((item) =>
          new Date(item.data).toLocaleString("pt-br", { month: "long" })
        )
      ),
    ];

    const months = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    const sorter = (a, b) => {
      return months.indexOf(a) - months.indexOf(b);
    };

    meses.sort(sorter);

    return meses;
  }

  const data = {
    labels: getMeses(),
    datasets: [
      {
        label: "",
        data: getTotalGeradoMes(),
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
      <ToastContainer />
    </>
  );
}

export default Painel;
