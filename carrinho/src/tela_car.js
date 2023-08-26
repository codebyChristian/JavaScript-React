
import { useNavigate } from "react-router-dom";

const TelaCar = ({ carrinho, setCarrinho }) => {
    
  const navigate = useNavigate();

  const calcularValorTotal = () => {
    return carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  };

  const voltarParaProdutos = () => {
    navigate("/");
  };



//Aumentar e diminuir quantidade
const aumentarQuantidade = (id) => {
    setCarrinho((prevCarrinho) =>
    prevCarrinho.map((item) =>
    item.id === id ? {...item, quantidade: Math.max(item.quantidade + 1)} : item
        )
    );
};

//Aumentar e diminuir quantidade
const diminuirQuantidade = (id) => {
    setCarrinho((prevCarrinho) =>
    prevCarrinho.map((item) =>
    item.id === id ? {...item, quantidade: Math.max(item.quantidade - 1, 1)} : item
        )
    );
};


  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Carrinho de compras</h1>
      {carrinho.length > 0 ? (
        <div>
          <ul className="list-group">
            {carrinho.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    style={{ width: "100px", marginRight: "20px" }}
                  />
                  <div>
                    <h3>{item.nome}</h3>
                    
                    <p><button className="btn btn-secondary botao-qtd0" onClick={() => diminuirQuantidade(item.id)}>-</button>
                    Quantidade: {item.quantidade}
                    <button className="btn btn-secondary botao-qtd1" onClick={() => aumentarQuantidade(item.id)}>+</button></p>
                    <p>Preço Unitário: R$ {item.preco}</p>
                    <p>Valor Total: R$ {item.preco * item.quantidade}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center ">
            Valor Total da Compra: R$ {calcularValorTotal()}
          </p>
          <div className="text-center">
              <button className="btn btn-primary mt-4 text-center" onClick={voltarParaProdutos}>
                Voltar para os Produtos
              </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-center">Carrinho de compras vazio.</p>
          <button className="btn btn-primary mt-4 text-center" onClick={voltarParaProdutos}>Voltar para os Produtos</button>
        </div>
      )}
    </div>
  );
};

export default TelaCar;
