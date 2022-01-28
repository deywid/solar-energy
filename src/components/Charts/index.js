import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, options }) {
  return (
    <div style={{width: 800}}>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
