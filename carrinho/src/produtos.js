import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";

// Import images
import imagemSabao from "./photo_react/sabonete.jpg";
import imagemBrilho from "./photo_react/brilho.jpg";
import imagemPerfume from "./photo_react/perfume.jpg";
import imagemBatom from "./photo_react/baton.jpg";
import imagemBase from "./photo_react/base.jpg";
import imagemCondiciona from "./photo_react/condicionador.jpg";
import imagemCreme from "./photo_react/creme.jpg";
import imagemPincel from "./photo_react/pincel.jpg";

const Produtos = () => {
  const [showModal, setShowModal] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const navigate = useNavigate();

  // Carregar as imagens antes de renderizar o componente
  useEffect(() => {
    const preloadImagens = [
      imagemSabao,
      imagemBrilho,
      imagemBase,
      imagemBatom,
      imagemCondiciona,
      imagemCreme,
      imagemPerfume,
      imagemPincel,
    ];
    preloadImagens.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  // Dados do produto
  const produtos = [
    // Product data here...
  ];

  const adicionarAoCarrinho = (produto) => {
    const produtoNoCarrinho = carrinho.find((item) => item.id === produto.id);

    if (produtoNoCarrinho) {
      setCarrinho((prevCarrinho) =>
        prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho((prevCarrinho) => [
        ...prevCarrinho,
        { ...produto, quantidade: 1 },
      ]);
    }

    // Set modal
    setShowModal(true);
    // Update local storage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  };

  const limparCarrinho = () => {
    const confirLimpar = window.confirm(
      "Tem certeza que deseja limpar o carrinho?"
    );
    if (confirLimpar) {
      setCarrinho([]);
      // Update local storage
      localStorage.removeItem("carrinho");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoToCart = () => {
    handleCloseModal();
    navigate("/TelaCar");
  };

  useEffect(() => {
    const storedCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(storedCarrinho);
  }, []);

  return (
    <div>
      <h1>Produtos Disponíveis</h1>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">
        {produtos.map((produto) => (
          <Col key={produto.id} className="mb-4">
            <Card
              key={produto.id}
              style={{ width: "95%" }}
              className="text-center"
            >
              <Card.Img variant="top" src={produto.imagem} alt={produto.nome} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Text>Preço: R$ {produto.preco}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  Adicione ao carrinho
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Produto Adicionado ao carrinho!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja ir para a tela do carrinho de compras?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button variant="secondary" onClick={handleGoToCart}>
            Ir para o carrinho
          </Button>
          <Button variant="danger" onClick={limparCarrinho}>
            Limpar Carrinho
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Produtos;
