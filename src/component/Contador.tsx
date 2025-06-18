import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      padding: '24px',
      borderRadius: '8px',
      width: '200px',
      margin: '20px auto'
    }}>
      <h2>Contador</h2>
      <p style={{ fontSize: '32px', margin: '16px 0' }}>{contador}</p>
      <button onClick={incrementar}>Clique aqui</button>
    </div>
  );
}

export default Contador;
