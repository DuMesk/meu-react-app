type PerfilProps = {
  nome: string;
  idade: number;
  profissao: string;
  foto: string;
};

function Perfil({ nome, idade, profissao, foto }: PerfilProps) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '16px',
      borderRadius: '8px',
      width: '250px',
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
    }}>
      <img
        src={foto}
        alt={`Foto de ${nome}`}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <h3>{nome}</h3>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}

export default Perfil;
