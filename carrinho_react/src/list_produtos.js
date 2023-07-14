import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imagemSabao from './photo_react/sabonete.jpg';

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
            descricao: "Sabonete suave",
            preco: 10.00,
            imagem: imagemSabao
        }, 
        {
            id: 3,
            nome: "Perfume",
            descricao: "Sabonete suave",
            preco: 10.00,
            imagem: imagemSabao
        },
        {
            id: 4,
            nome: "Batom",
            descricao: "Sabonete suave",
            preco: 10.00,
            imagem: imagemSabao
        },
        // repita com outros
    ];

    return(
        <div>
            <h1>Produtos Disponíveis</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-0">                
                {produtos.map(produtos => (

                    <Col key={produtos.id} className="mb-4">
                        <Card key={produtos.id} style={{width: '100%'}}>
                            <Card.Img variant="top" src={produtos.imagem} alt={produtos.nome}/>
                            <Card.Body>
                                <Card.Title>{produtos.nome}</Card.Title>
                                <Card.Text>{produtos.descricao}</Card.Text>
                                <Card.Text>Preço: R$ {produtos.preco}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
                
            </Row>
        </div>
    );
};


export default ListaProduto;
