import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = ({ value, max }) => {
  const data = {
    labels: ["Progreso", "Restante"],
    datasets: [
      {
        data: [value, max - value],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "#eaeaea"],
        borderWidth: 0,
        hoverOffset: 4,
        circumference: 180, // Semicírculo
        rotation: -90, // Rotar para iniciar desde la parte inferior
        cutout: "80%", // Para hacerlo más delgado
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: { enabled: false }, // Desactivar tooltips
      legend: { display: false }, // Ocultar leyenda
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold">{`Suma Ventas: ${value.toFixed(2)}`}</div>
      <Doughnut data={data} options={options} />
      <div className="flex justify-between w-full mt-2 text-sm">
        <span>0.00M</span>
        <span>{`${max.toFixed(2)}M`}</span>
      </div>
    </div>
  );
};

export default GaugeChart;
