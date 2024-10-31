import React from 'react';
import { Chart, Tooltip, Legend, Filler } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { Chart as ReactChart } from 'react-chartjs-2';

// Registrar los controladores y plugins necesarios en Chart.js
Chart.register(TreemapController, TreemapElement, Tooltip, Legend, Filler);

const TreemapChart = ({ data }) => {
  // Transformar los datos al formato esperado por el treemap
  const transformedData = data.map(d => ({
    g: d.nombre_producto, // Grupo
    v: d.valor_total_inventario, // Valor
  }));

  // Configuración del Treemap
  const chartData = {
    datasets: [
      {
        label: 'Valor Total de Inventario',
        tree: transformedData,
        key: 'v', // Clave del valor
        groups: ['g'], // Clave del grupo
        backgroundColor: (ctx) => {
          // Asegurarse de que ctx.raw y ctx.raw.v existan
          const value = ctx.raw?.v ?? 0;
          return value > 20000 
            ? 'rgba(85, 192, 192, 0.6)' 
            : 'rgba(75, 192, 192, 0.2)';
        },
        borderWidth: 1,
        borderColor: '#fff',
        spacing: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataItem = context.raw;
            return `${dataItem.g}: ${dataItem.v}`;
          },
        },
      },
    },
  };

  return <ReactChart type="treemap" data={chartData} options={options} />;
};

export default TreemapChart;
