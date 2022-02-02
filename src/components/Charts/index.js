import React from "react";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

import { ChartContainer, ChartDiv } from "./style";
import { getMeses, getTotalGeradoMes } from "../../pages/Painel/functions";

function LineChart({ geracao }) {

  /* chart config */
  const chartData = {
    labels: getMeses(geracao),
    datasets: [
      {
        label: "",
        data: getTotalGeradoMes(geracao),
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
    <ChartContainer>
      <ChartDiv data={chartData} options={options} />
    </ChartContainer>
  );
}

export default LineChart;
