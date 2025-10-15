import express from "express";
import pkg from "pg";
import cors from "cors";

const { Pool } = pkg;

const port = process.env.PORT || 8080

const app = express();

// Configurar CORS para permitir el dominio del frontend
const allowedOrigins = [
  "http://localhost:3000", // para desarrollo local
  "https://frontend-service-129342308367.us-central1.run.app" // URL real de tu frontend en Cloud Run
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
  user: "admin",
  host: "db", // nombre del servicio en docker-compose
  database: "my_database",
  password: "postgresql",
  port: 5432,
});

// Ruta de prueba
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT codigo, nombre, presentacion, descripcion FROM productos");
    res.json({ message: "Conexión exitosa a PostgreSQL", rows: result.rows });
  } catch (err) {
    res.json({ message: err });
    console.error(err);
  }
});

app.get("/api/prueba", async (req, res) => {
  res.json({ message: "Conexión exitosa a Backend" });
  console.log("Conexión exitosa a Backend");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Backend corriendo en http://0.0.0.0:${port} 🤔`);
});
