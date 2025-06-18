type ProdutoProps = {
    nome: string;
    preco: number;
    emEstoque: boolean;
    imagem: string;
};

function Produto({ nome, preco, emEstoque, imagem }: ProdutoProps){
    return (
        <div style={{
            border: '2px solid #A94D0D',
            padding: '16px',
            borderRadius: '10px',
            width: '200px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: '#68B7CC',
        }}>
        <img 
            src={imagem}
            alt={`Foto de ${nome}`} 
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <h3>{nome}</h3>
        <p style={{ color: '#555' }}>Preço: R$ {preco.toFixed(2)}</p>
        <p style={{ color: emEstoque ? 'green' : 'red', fontWeight: 'bold' }}>
        {emEstoque ? 'Disponível' : 'Esgotado'}
        </p>
        </div>
    );
}

export default Produto;