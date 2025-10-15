import { useEffect, useState } from "react";

function App() {
  const API_URL = process.env.REACT_APP_API_URL
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
      <pre>{JSON.stringify(prueba, null, 2)}</pre>
      <hr></hr>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
