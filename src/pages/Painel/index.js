import React, { useEffect, useState } from "react";
import axios from "axios";

import LineChart from "../../components/Charts";
import { Title } from "../../components/Title/style";

function Painel() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/geracao").then(function (response) {
      setRequest(response.data);
    });
  }, []);

  function get_TotalGenerated() {
    const soma = [];

    const groupBy = request.reduce(function (acum, elem) {
      const mes = new Date(elem.data).getMonth();
      acum[mes] = acum[mes] || [];
      acum[mes].push(elem.total_gerado);
      return acum;
    }, Object.create(null));

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
    return [
      ...new Set(
        request.map((item) =>
          new Date(item.data).toLocaleString("pt-br", { month: "long" })
        )
      ),
    ];
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
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return (
    <>
      <Title>Painel de indicadores</Title>
      <LineChart chartData={data} options={options} />
    </>
  );
}

export default Painel;
