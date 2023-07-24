import React, { useState, useEffect } from "react";
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

const cartImage = require("./photo_react/carrinho_logo.png");

const Produtos = ({ carrinho, setCarrinho }) => {
  const [showModal, setShowModal] = useState(false);
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
    {
      id: 1,
      nome: "Sabonete",
      descricao: "Sabonete suave",
      preco: 10.0,
      imagem: imagemSabao,
      quantidade: 1,
    },
    {
      id: 2,
      nome: "Brilho",
      descricao: "Mais brilhante",
      preco: 25.0,
      imagem: imagemBrilho,
      quantidade: 1,
    },
    {
      id: 3,
      nome: "Perfume",
      descricao: "Mixo de gato",
      preco: 350.0,
      imagem: imagemPerfume,
      quantidade: 1,
    },
    {
      id: 4,
      nome: "Batom",
      descricao: "Batom da Marta",
      preco: 25.0,
      imagem: imagemBatom,
      quantidade: 1,
    },
    {
      id: 5,
      nome: "Base",
      descricao: "Base da Virginia",
      preco: 200.0,
      imagem: imagemBase,
      quantidade: 1,
    },
    {
      id: 6,
      nome: "Condicionador",
      descricao: "Não cai cabelo",
      preco: 15.0,
      imagem: imagemCondiciona,
      quantidade: 1,
    },
    {
      id: 7,
      nome: "Creme",
      descricao: "É do bom",
      preco: 135.0,
      imagem: imagemCreme,
      quantidade: 1,
    },
    {
      id: 8,
      nome: "Pincel",
      descricao: "Variedades incríveis de pinceis",
      preco: 20.0,
      imagem: imagemPincel,
      quantidade: 1,
    },
    // repita com outros
  ];


  const adicionarAoCarrinho = (produto) => {
    const produtoNoCarrinho = carrinho.find((item) => item.id === produto.id);

    if (produtoNoCarrinho) {
      //Atualizar número da quant...
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
    //Recurar itens do carrinho

 
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
                  <img src={cartImage} alt="Carrinho" className="cart-icon" />
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
