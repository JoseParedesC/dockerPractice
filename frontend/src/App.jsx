import { useEffect, useState } from "react";

function App() {
  const API_URL = import.meta.env.VITE_APP_API_URL
  const [prueba, setDataP] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/prueba`) // Nginx redirige al backend cuando esta configurado el proxy en el nginx.conf /api
      .then(res => res.json())
      .then(setDataP)
      .catch(console.error);

    fetch(`${API_URL}/api/products`) // Nginx redirige al backend
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚀 Frontend React con Nginx - JdParedesC</h1>
      <div>HOLA </div>
      <pre>{JSON.stringify(prueba, `No hay conexion al backend`, 2)}</pre>
      <hr />
      <a href="https://backend-service-129342308367.us-central1.run.app/api/prueba">{API_URL}/api/prueba</a>
      <hr></hr>
      <pre>{JSON.stringify(data, "No hay conexion a la base de datos", 2)}</pre>
    </div>
  );
}

export default App;
