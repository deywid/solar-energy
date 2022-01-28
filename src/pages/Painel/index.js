import React, { useEffect, useState } from "react";
import axios from "axios";

import LineChart from "../../components/Charts";
import { Title } from "../../components/Title/style";

function Painel() {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/geracao").then(function (response) {
      setRequest([...response.data]);
    });
  }, []);

  const filter = request.filter((item) => new Date(item.data).getMonth());
  const soma = filter.reduce((a, b) => a + parseFloat(b.total_gerado), 0);

  console.log(filter, soma);

  const data = {
    labels: [
      ...new Set(
        request.map((item) =>
          new Date(item.data).toLocaleString("pt-br", { month: "long" })
        )
      ),
    ],
    datasets: [
      {
        label: "",
        data: request.map((item) => item.total_gerado),
        backgroundColor: ["#2196F3"],
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
