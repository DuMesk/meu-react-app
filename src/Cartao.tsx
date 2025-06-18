type CartaoProps = {
  titulo: string;
  conteudo: string;
  cor?: string; // "?" = opcional
};

function Cartao({ titulo, conteudo, cor = "#f2f2f2" }: CartaoProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", backgroundColor: cor, borderRadius: '8px', marginBottom: '16px' }}>
      <h3>{titulo}</h3>
      <p>{conteudo}</p>
    </div>
  );
}

export default Cartao;
