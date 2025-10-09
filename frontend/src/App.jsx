import { useEffect, useState } from "react";

function App() {
  const [prueba, setDataP] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/prueba") // Nginx redirige al backend
      .then(res => res.json())
      .then(setDataP)
      .catch(console.error);

      fetch("/api/products") // Nginx redirige al backend
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
