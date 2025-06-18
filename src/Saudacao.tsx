type SaudacaoProps = {
  nome: string;
};

function Saudacao({ nome }: SaudacaoProps) {
  return <h2>Seja bem-vindo(a), {nome}!</h2>;
}

export default Saudacao;
