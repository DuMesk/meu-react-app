import { useState } from "react";

function TrocarTema() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  const estilo = {
    backgroundColor: temaEscuro ? "#1e1e1e" : "#ffffff",
    color: temaEscuro ? "#ffffff" : "#000000",
    padding: "24px",
    textAlign: "center" as const,
    borderRadius: "8px",
    width: "300px",
    margin: "20px auto",
    transition: "0.3s"
  };

  return (
    <div style={estilo}>
      <h2>{temaEscuro ? "Tema Escuro" : "Tema Claro"}</h2>
      <button onClick={alternarTema}>
        Mudar para {temaEscuro ? "claro" : "escuro"}
      </button>
    </div>
  );
}

export default TrocarTema;
