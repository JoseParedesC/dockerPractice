import express from "express";
import pkg from "pg";

const { Pool } = pkg;

const port = process.env.PORT

const app = express();
app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
  user: "admin",
  host: "db", // nombre del servicio en docker-compose
  database: "mydb",
  password: "postgresql",
  port: 5432,
});

// Ruta de prueba base de datos
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT codigo, nombre, presentacion, descripcion FROM productos");
    res.json({ message: "Conexión exitosa a PostgreSQL", rows: result.rows });
  } catch (err) {
    console.error(err);
    res.json({ message: "Error en la base de datos " + error });
  }
});

app.get("/api/prueba", async (req, res) => {
    res.json({ message: "Conexión exitosa a Backend" });
});

app.listen(port, () => {
  console.log("🚀 Backend corriendo en http://localhost:8080");
});
