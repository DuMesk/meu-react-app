import { useState } from "react";

const produtosDisponiveis = [
  { id: 1, nome: 'Camiseta React' },
  { id: 2, nome: 'Mouse Gamer' },
];

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState<{ id: number; nome: string }[]>([]);

  const adicionarProduto = (produto: { id: number; nome: string }) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerProduto = (id: number) => {
    setCarrinho(carrinho.filter((produto) => produto.id !== id));
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>🛒 Produtos disponíveis:</h2>
      {produtosDisponiveis.map((produto) => (
        <div key={produto.id} style={{ marginBottom: '8px' }}>
          {produto.nome}
          <button
            onClick={() => adicionarProduto(produto)}
            style={{ marginLeft: '12px' }}
          >
            Adicionar ao carrinho
          </button>
        </div>
      ))}

      <h2 style={{ marginTop: '32px' }}>🧺 Carrinho:</h2>
      {carrinho.length === 0 ? (
        <p>Nenhum produto no carrinho.</p>
      ) : (
        <>
          {carrinho.map((produto) => (
            <div key={produto.id} style={{ marginBottom: '8px' }}>
              {produto.nome}
              <button
                onClick={() => removerProduto(produto.id)}
                style={{ marginLeft: '12px' }}
              >
                Remover do carrinho
              </button>
            </div>
          ))}
          <p style={{ marginTop: '24px' }}>
            Total: {carrinho.length} item(s)
          </p>
        </>
      )}
    </div>
  );
}
