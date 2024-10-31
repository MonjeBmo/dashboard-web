import React, { useEffect, useState } from "react";
import { format_date } from "../controllers/drive";
import { LineCharts } from "../components/stats/LineCharts";
import { BarCharts } from "../components/stats/BarCharts";
import PieCharts from "../components/stats/PieCharts";
import DataTable from "../components/stats/DataTable";
import GaugeChart from "../components/stats/GaugeChart";
import StackedHorizontalBarChart from "../components/stats/StackedHorizontalBarChart";

const ReportNo1 = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/report1")
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error: ", error));
  }, []);

  // Preparar datos para los gráficos de líneas y barras
  const data_charts = {
    labels: datos.map((dato) => format_date(dato.fecha)),
    datasets: [
      {
        label: "Fechas",
        data: datos.map((dato) => dato.total_ventas),
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        tension: 1,
      },
    ],
  };

  // Preparar datos para el gráfico de pastel
  const ventasPorMes = datos.reduce((acumulador, dato) => {
    const mes = new Date(dato.fecha).toLocaleString("es-ES", { month: "long" });
    if (!acumulador[mes]) {
      acumulador[mes] = 0;
    }
    acumulador[mes] += Number(dato.total_ventas);
    return acumulador;
  }, {});

  const data_chart_pie = {
    labels: Object.keys(ventasPorMes),
    datasets: [
      {
        label: "Ventas por Mes",
        data: Object.values(ventasPorMes),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Obtener columnas de la tabla usando el primer objeto de 'datos'
  const columns = datos.length > 0 ? Object.keys(datos[0]) : [];

  // Formatear los datos para la tabla
  const formattedData = datos.map((dato) => ({
    ...dato,
    fecha: format_date(dato.fecha),
  }));

   // Calcular la suma total de ventas
   const totalVentas = datos.reduce(
    (acumulador, dato) => acumulador + Number(dato.total_ventas),
    0
  );


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 p-1 min-h-screen">
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <LineCharts data={data_charts} title_chart={"Grafico de Ventas"} />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <BarCharts data={data_charts} title_chart={"Grafico de Ventas"} />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <PieCharts
          data={data_chart_pie}
          title_chart={"Grafico Ventas por Mes"}
        />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 overflow-y-auto">
        <DataTable columns={columns} data={formattedData} />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <GaugeChart value={totalVentas} max={totalVentas*2}/>
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <StackedHorizontalBarChart labels={Object.keys(ventasPorMes)} data={ventasPorMes} />
      </div>
    </div>
  );
};

export default ReportNo1;
