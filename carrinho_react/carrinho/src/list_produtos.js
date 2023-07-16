
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

// As imagens só funcionam por importação
import imagemSabao from './photo_react/sabonete.jpg';
import imagemBrilho from './photo_react/brilho.jpg';
import imagemPerfume from './photo_react/perfume.jpg';
import imagemBatom from './photo_react/baton.jpg';
import imagemBase from './photo_react/base.jpg';
import imagemCondiciona from './photo_react/condicionador.jpg';
import imagemCreme from './photo_react/creme.jpg';
import imagemPincel from './photo_react/pincel.jpg';

//Adicionando a função do carrinho de compras
const adicionarAoCarrinho = (produtos) => {
    //Vare para vê se há itens no carrinho
    let itensCarrinho = localStorage.getItem('carrinho');
    if (itensCarrinho) {
        // Se tiver, o JSON faz o parse
        itensCarrinho = JSON.parse(itensCarrinho);
        itensCarrinho.push(produtos)
        
    } else {
        //Se não tiver, cria um array
        itensCarrinho = [produtos];
    }

    //Como pedido, armazena os itens em localStorage
    localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));

    // Alterar o valor do Modal
    setShowModal(true);
};

const handleCloseModal = () => {
    setShowModal(false);
    // aqui colocar o carrinho
}

//Array com as imformações dos produtos
const ListaProduto = () => {
    
    // Dados do produtos
    const produtos = [
        {
            id: 1,
            nome: "Sabonete",
            descricao: "Sabonete suave",
            preco: 10.00,
            imagem: imagemSabao
        }, 
        {
            id: 2,
            nome: "Brilho",
            descricao: "Mais brilhante",
            preco: 10.00,
            imagem: imagemBrilho
        }, 
        {
            id: 3,
            nome: "Perfume",
            descricao: "Mixo de gato",
            preco: 10.00,
            imagem: imagemPerfume
        },
        {
            id: 4,
            nome: "Batom",
            descricao: "Batom da Marta",
            preco: 10.00,
            imagem: imagemBatom
        },
        {
            id: 5,
            nome: "Base",
            descricao: "Base da Virginia",
            preco: 10.00,
            imagem: imagemBase
        },
        {
            id: 6,
            nome: "Condicionador",
            descricao: "Não cai cabelo",
            preco: 10.00,
            imagem: imagemCondiciona
        },
        {
            id: 7,
            nome: "Creme",
            descricao: "É do bom",
            preco: 10.00,
            imagem: imagemCreme
        },
        {
            id: 8,
            nome: "Pincel",
            descricao: "Variedades incríveis de pinceis",
            preco: 10.00,
            imagem: imagemPincel
        },
        // repita com outros
    ];

    return(
        <div>            
            <h1>Produtos Disponíveis</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">                
                {produtos.map(produtos => (

                    <Col key={produtos.id} className="mb-4">
                        <Card key={produtos.id} style={{width: '95%'}} className="text-center">
                            <Card.Img variant="top" src={produtos.imagem} alt={produtos.nome}/>
                            <Card.Body>
                                <Card.Title>{produtos.nome}</Card.Title>
                                <Card.Text>{produtos.descricao}</Card.Text>
                                <Card.Text>Preço: R$ {produtos.preco}</Card.Text>
                                <Button variant="primary" onClick={() => adicionarAoCarrinho(produtos)}>Adicione ao carrinho</Button>
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
                    <Button variant="primary" onClick={handleCloseModal}>
                    Fechar
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        handleCloseModal();
                        //Redirecionar
                    }}>
                        Ir para o carrinho
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
};


export default ListaProduto;
