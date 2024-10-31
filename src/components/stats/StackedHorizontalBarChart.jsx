import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedHorizontalBarChart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Ventas",
        data: data,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Cambia el gráfico a barras horizontales
    responsive: true,
    plugins: {
      legend: {
        display: false, // Ocultar la leyenda
      },
      tooltip: {
        enabled: true, // Mostrar tooltips al pasar el mouse
      },
    },
    scales: {
      x: {
        stacked: true, // Apilar barras en el eje X
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // Formato de números
          },
        },
      },
      y: {
        stacked: true, // Apilar barras en el eje Y
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default StackedHorizontalBarChart;
