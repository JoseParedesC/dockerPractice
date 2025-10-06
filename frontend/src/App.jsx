import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/products") // Nginx redirige al backend
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚀 Frontend React con Nginx - JdParedesC</h1>
      <div>HOLA </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
