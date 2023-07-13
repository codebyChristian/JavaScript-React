import React from "react";

const ListaProduto = () => {
    // Dados do produtos
    const produtos = [
        {
            id: 1,
            nome: "Sabonete",
            descricao: "Sabonete suave",
            preco: 10.00,
            imagem: '../photo_react/sabonete'
        }, 
        // repita com outros
    ];

    return(
        <div>
            <h1>Produtos Disponíveis</h1>
            <ul>
                {produtos.map(produtos => (
                    <li key={produtos.id}> 
                        <img src={produtos.imagem}  alt={produtos.nome} />
                        <h2>{produtos.name}</h2>
                        <p>{produtos.descricao}</p>
                        <p>{produtos.preco}</p>
                        <p>Preço: R$ {produtos.preco}</p>

                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ListaProduto;
