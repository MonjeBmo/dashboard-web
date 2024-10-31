import express from "express";
import pkg from "pg"; 
import cors from "cors";

const { Pool } = pkg; // Desestructuración para obtener 'Pool'

const app = express();
const port = 5000;

// Configuración de CORS
app.use(cors());
app.use(express.json());

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "marketdb",
  password: "E#3%Capuch1n0",
  port: 5432,
});

// Ruta para obtener datos de la base de datos
app.get("/api/report1", async (req, res) => {
  try {
    const r = await pool.query(
      "SELECT fecha, SUM(total_ventas + (total_ventas * 0.12)) AS total_ventas FROM ventas_fecha GROUP BY fecha ORDER BY fecha"
    );
    res.json(r.rows);
  } catch (error) {
    console.error("Error en la consulta reporte no.1", error);
    res.status(500).send("Error Reporte No.1");
  }
});

app.get("/api/report2", async (req, res) => {
  try {
    const r = await pool.query("SELECT * FROM valor_total_inventario");
    res.json(r.rows);
  } catch (error) {
    console.error("error en el reporte no.2 ", error);
    res.status(500).send("Error Reporte No.2");
  }
});

app.get("/api/report3", async (req, res) => {
  try {
    const r = await pool.query("SELECT * FROM ventas_cliente_metodo_pago");
    res.json(r.rows);
  } catch (error) {
    console.error("error en el reporte no.2 ", error);
    res.status(500).send("Error Reporte No.2");
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server Run in http://localhost:${port}`);
});
