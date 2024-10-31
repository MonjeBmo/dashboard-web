import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement } from "chart.js";

Chartjs.register(Tooltip, Legend, ArcElement);

const PieCharts = ({ data, title_chart }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title_chart,
      },
    },
  };
  return <Pie options={options} data={data}></Pie>;
};

export default PieCharts;
