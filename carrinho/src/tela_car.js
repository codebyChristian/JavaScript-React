const TelaCar = () => {
    // Chamar os itens do carrinho pelo localStorage
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho'));

    return(
        <div>
            <h1>Carrinho de compras</h1>
            {carrinhoItens && carrinhoItens.length > 0 ? (
                <ul>
                    {carrinhoItens.map((item) => (
                        <li key={item.id}>
                            <h3>{item.nome}</h3>
                            <p>{item.descricao}</p>
                            <p>{item.preco}</p>

                        </li>
                    ))}
                </ul>
            ) : (
                <p>Carrinho de compras vazio.</p>
            )}
        </div>
    );
};

export default TelaCar;