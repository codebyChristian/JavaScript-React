import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';


const TelaCar = () => {
    const { carrinho } = useCart();
    const navigate = useNavigate();

    const calcularValorTotal = () => {
        return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
    };
    

    const voltarParaProdutos = () => {
        navigate('/');
    };

        // Buscar os itens do carrinho
    useEffect(() => {
        //itens do carrinho
    }, [carrinho]);


    

    return(
        <div className="container mt-4">
        <h1 className="mb-4">Carrinho de compras</h1>
        {carrinho.length > 0 ? (
            <div>
                <ul className="list-group">
                    {carrinho.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={item.imagem} alt={item.nome} style={{ width: '100px', marginRight: '20px' }} />
                            <div>
                                <h3>{item.nome}</h3>
                                <p>Quantidade: {item.quantidade}</p>
                                <p>Preço Unitário: R$ {item.preco}</p>
                                <p>Valor Total: R$ {item.preco * item.quantidade}</p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
          <p className="mt-4">Valor Total da Compra: R$ {calcularValorTotal()}</p>
          <button className="btn btn-primary mt-4" onClick={voltarParaProdutos}>Voltar para os Produtos</button>
        </div>
      ) : (
        <p>Carrinho de compras vazio.</p>
      )}
    </div>
  );
};

export default TelaCar;