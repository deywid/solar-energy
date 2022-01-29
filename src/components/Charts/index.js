import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, options }) {
  return (
    <div style={{width: 800}}>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
