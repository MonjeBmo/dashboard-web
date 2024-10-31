import React, { useEffect, useState } from "react";
import { format_date } from "../controllers/drive";
import { LineCharts } from "../components/stats/LineCharts";
import { BarCharts } from "../components/stats/BarCharts";
import PieCharts from "../components/stats/PieCharts";
import GaugeChart from "../components/stats/GaugeChart";
import StackedHorizontalBarChart from "../components/stats/StackedHorizontalBarChart";
import DataTable from "../components/stats/DataTable";

const ReportNo3 = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/report3")
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error: ", error));
  });

  const columns = datos.length > 0 ? Object.keys(datos[0]) : [];

  const devolucionPorMes = datos.reduce((acumulador, dato) => {
    const mes = new Date(dato.fecha_emision).toLocaleDateString("es-ES", {
      month: "long",
    });
    if (!acumulador[mes]) {
      acumulador[mes] = 0;
    }
    acumulador[mes] += Number(dato.total);
    return acumulador;
  }, {});

  const data_formatted = datos.map((dato) => ({
    ...dato,
    fecha_emision: format_date(dato.fecha_emision),
  }));

  const data_charts_line = {
    labels: data_formatted.map((dato) => dato.fecha_emision),
    datasets: [
      {
        label: "Devoluciones del Mes",
        data: datos.map((dato) => dato.total),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        fill: true,
      },
    ],
  };

  const data_chart_pie = {
    labels: Object.keys(devolucionPorMes),
    datasets: [
      {
        label: "Ventas por Mes",
        data: Object.values(devolucionPorMes),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Calcular la suma total de ventas
  const totalDevoluciones = datos.reduce(
    (acumulador, dato) => acumulador + Number(dato.total),
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 p-1 min-h-screen">
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 overflow-y-auto">
        <DataTable columns={columns} data={data_formatted} />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <LineCharts data={data_charts_line} title_chart={"Devolucion ventas"} />
      </div>
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <PieCharts
          data={data_chart_pie}
          title_chart={"Grafico Devoluciones por Mes"}
        />
      </div>
      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <StackedHorizontalBarChart
          labels={Object.keys(devolucionPorMes)}
          data={devolucionPorMes}
        />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <BarCharts data={data_charts_line} title_chart={"Devolucion Ventas"} />
      </div>

      <div className="bg-white p-2 m-4 rounded-lg shadow-md h-96 flex justify-center items-center">
        <GaugeChart value={totalDevoluciones} max={totalDevoluciones * 2} />
      </div>
    </div>
  );

  // return (

  //   <div>
  //     <h1> DAtos de la DB</h1>
  //     <ul>
  //       <div
  //         className="text-black
  //        font-medium"
  //       >
  //         encabezado - fecha_emision - nombre_cliente - nit - metodo_pago -
  //         total
  //       </div>
  //       {datos.map((dato, index) => (
  //         <li key={index}>
  //           {dato.encabezado} - {format_date(dato.fecha_emision)} -{" "}
  //           {dato.nombre_cliente} - {dato.nit} - {dato.metodo_pago} -
  //           {dato.total}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default ReportNo3;
