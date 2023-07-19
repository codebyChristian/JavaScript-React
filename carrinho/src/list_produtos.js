// Importar carrinho
import TelaCar from './tela_car.js';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// As imagens só funcionam por importação
const imagemSabao = require('./photo_react/sabonete.jpg');
const imagemBrilho = require('./photo_react/brilho.jpg');
const imagemPerfume = require('./photo_react/perfume.jpg');
const imagemBatom = require('./photo_react/baton.jpg');
const imagemBase = require('./photo_react/base.jpg');
const imagemCondiciona = require('./photo_react/condicionador.jpg');
const imagemCreme = require('./photo_react/creme.jpg');
const imagemPincel = require('./photo_react/pincel.jpg');



const ListaProduto = () => {
    
    const [showModal, setShowModal] = useState(false);    // Definindo a variável showModal e a função setShowModal

    const [carrinho, setCarrinho] = useState([]);

    const navigate = useNavigate();

    // Dados do produto
    const produto = [
        {
            id: 1,
            nome: "Sabonete",
            descricao: "Sabonete suave",
            preco: 10.00,
            imagem: imagemSabao,
            quantidade: 1
        }, 
        {
            id: 2,
            nome: "Brilho",
            descricao: "Mais brilhante",
            preco: 25.00,
            imagem: imagemBrilho,
            quantidade: 1
        }, 
        {
            id: 3,
            nome: "Perfume",
            descricao: "Mixo de gato",
            preco: 350.00,
            imagem: imagemPerfume,
            quantidade: 1
        },
        {
            id: 4,
            nome: "Batom",
            descricao: "Batom da Marta",
            preco: 25.00,
            imagem: imagemBatom,
            quantidade: 1
        },
        {
            id: 5,
            nome: "Base",
            descricao: "Base da Virginia",
            preco: 200.00,
            imagem: imagemBase,
            quantidade: 1
        },
        {
            id: 6,
            nome: "Condicionador",
            descricao: "Não cai cabelo",
            preco: 15.00,
            imagem: imagemCondiciona,
            quantidade: 1
        },
        {
            id: 7,
            nome: "Creme",
            descricao: "É do bom",
            preco: 135.00,
            imagem: imagemCreme,
            quantidade: 1
        },
        {
            id: 8,
            nome: "Pincel",
            descricao: "Variedades incríveis de pinceis",
            preco: 20.00,
            imagem: imagemPincel,
            quantidade: 1
        },
        // repita com outros
    ];

//Adicionando a função do carrinho de compras
const adicionarAoCarrinho = (produto) => {
    //o produto está no carrinho?
    const produtoNoCarrinho = carrinho.find((item) => item.id === produto.id);
    
    if (produtoNoCarrinho) {
        //Se estiver, atualiza o numero
        setCarrinho((prevCarrinho) => 
            prevCarrinho.map((item) =>
                item.id === produto.id
                    ? { ...item, quantidade: item.quantidade + 1}
                    : item
                    )
                    );
    } else {
        // Se não está, adiciona 1
        setCarrinho((prevCarrinho) => [...prevCarrinho, { ...produto, quantidade: 1 }]);
    }
//set modal

    const novoCarrinho = [...carrinho, produto];
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));

    //Vare para vê se há itens no carrinho
    let itensCarrinho = localStorage.getItem('carrinho') || '[]';
    if (itensCarrinho) {
        // Se tiver, o JSON faz o parse
        itensCarrinho = JSON.parse(itensCarrinho);
        itensCarrinho.push(produto)
        
    } else {
        //Se não tiver, cria um array
        itensCarrinho = [produto];
    }

    //Como pedido, armazena os itens em localStorage
    localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));

    // Alterar o valor do Modal
    setShowModal(true);

    
};


//Limpar carrinho
const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem('carrinho');
};

const handleCloseModal = () => {
    setShowModal(false);
    navigate('/TelaCar');
    // aqui colocar o carrinho
};

const handleCloseModal1 = () => {
    setShowModal(false);
    // aqui colocar o carrinho
};

//Array com as imformações dos produto

    return(
        <div>            
            <h1>Produtos Disponíveis</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">                
                {produto.map(produto => (

                    <Col key={produto.id} className="mb-4">
                        <Card key={produto.id} style={{width: '95%'}} className="text-center">
                            <Card.Img variant="top" src={produto.imagem} alt={produto.nome}/>
                            <Card.Body>
                                <Card.Title>{produto.nome}</Card.Title>
                                <Card.Text>{produto.descricao}</Card.Text>
                                <Card.Text>Preço: R$ {produto.preco}</Card.Text>
                                <Button variant="primary" onClick={() => adicionarAoCarrinho(produto)}>Adicione ao carrinho</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
                
            </Row>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>  
                    <Modal.Title>Produto Adicionado ao carrinho!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja ir para a tela do carrinho de compras?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal1}>
                    Fechar
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleCloseModal();
                        //Redirecionar
                    }}>
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


export default ListaProduto;
