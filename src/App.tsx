import Perfil from "./component/Perfil";
import Produto from "./component/Produto";
import Contador from "./component/Contador";
import TrocarTema from "./component/TrocarTema";
import Carrinho from "./component/Carrinho";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Perfil do Usuário</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px", // espaço entre os cards
          flexWrap: "wrap", // quebra em telas pequenas
        }}
      >
        <Perfil
          nome="Edu Mesquita"
          idade={32}
          profissao="Desenvolvedor Fullstack"
          foto="https://i.ibb.co/PzPg1PmB/euzabumbacpt2.png"
        />

        <Perfil
          nome="Celyne Souza"
          idade={28}
          profissao="Designer de Unhas"
          foto="https://i.ibb.co/dsXMpJ3C/image.png"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px", // espaço entre os cards
          flexWrap: "wrap", // quebra em telas pequenas
        }}
      >
        <Produto
          nome="Camiseta React"
          preco={79.9}
          emEstoque={true}
          imagem="https://i.ibb.co/NnQjvcHW/image.png"
        />
        <Produto
          nome="Mouse Gamer"
          preco={199.9}
          emEstoque={false}
          imagem="https://i.ibb.co/Y4zM8c4j/image.png"
        />
      </div>
      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center" }}>Exemplo com useState</h1>
        <Contador />
      </div>
      <div style={{ padding: "40px" }}>
        <h1 style={{ textAlign: "center" }}>Exemplo com useState</h1>
        <TrocarTema />
      </div>
      <Carrinho />
    </div>
  );
}

export default App;
