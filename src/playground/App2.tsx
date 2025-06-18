import Mensagem from './component/Mensagem';
import Saudacao from './component/Saudacao';
import Cartao from './component/Cartao';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', justifyContent: 'center' }}>
      <h1>Olá, React + TypeScript!</h1>
      <Mensagem />
      <Saudacao nome="Edu" />
      <Cartao titulo="Aviso" conteudo="Esse é um alerta importante!" cor="#7A1926" />
      <Cartao titulo="Notícia" conteudo="Saiu uma nova atualização do sistema." />

    </div>
  );
}

export default App;
