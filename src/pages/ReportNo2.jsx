import React, { useEffect, useState, useMemo } from "react";
import { getRandomColor } from "../controllers/drive";
import { LineCharts } from "../components/stats/LineCharts";
import { BarCharts } from "../components/stats/BarCharts";
import DataTable from "../components/stats/DataTable";
import GaugeChart from "../components/stats/GaugeChart";
import StackedHorizontalBarChart from "../components/stats/StackedHorizontalBarChart";
import TreemapChart from "../components/stats/TreemapChart";

const ReportNo2 = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/report2")
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error: ", error));
  }, []);

  const labels = datos.map((dato) => dato.nombre_producto);
  const data_send = datos.map((dato) => dato.valor_total_inventario);

  const data_charts = {
    labels: labels,
    datasets: [
      {
        label: "Ventas sin IVA",
        data: data_send,
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        tension: 1,
      },
    ],
  };

  const columns = datos.length > 0 ? Object.keys(datos[0]) : [];

  const totalVentas = datos.reduce(
    (count, dato) => count + Number(dato.valor_total_inventario),
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 p-1 min-h-screen">
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 overflow-y-auto">
        <DataTable columns={columns} data={datos} />
      </div>
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <LineCharts data={data_charts} title_chart={"Gráfico de Productos"} />
      </div>
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <BarCharts data={data_charts} title_chart={"Gráfico de Productos"} />
      </div>
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <TreemapChart data={datos} />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <GaugeChart value={totalVentas} max={totalVentas * 2} />
      </div>
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <StackedHorizontalBarChart labels={labels} data={data_send} />
      </div>
    </div>
  );
};

export default ReportNo2;
