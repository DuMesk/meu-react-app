import Perfil from './Perfil';
import Produto from './Produto';

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ textAlign: 'center' }}>Perfil do Usuário</h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px', // espaço entre os cards
        flexWrap: 'wrap' // quebra em telas pequenas
      }}>
        <Perfil
          nome="Edu Mesquita"
          idade={32}
          profissao="Desenvolvedor Fullstack"
          foto="https://i.pravatar.cc/150?img=3"
        />

        <Perfil
          nome="Celyne Silva"
          idade={28}
          profissao="Designer de Unhas"
          foto="https://i.pravatar.cc/150?img=5"
        />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px', // espaço entre os cards
        flexWrap: 'wrap' // quebra em telas pequenas
      }}>
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
    </div>
  );
}

export default App;