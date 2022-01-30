import React from "react";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

import { ChartContainer, ChartDiv } from "./style";

function LineChart({ chartData, options }) {
  return (
    <ChartContainer>
      <ChartDiv data={chartData} options={options} />
    </ChartContainer>
  );
}

export default LineChart;
