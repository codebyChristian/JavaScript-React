import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import logo from './logo.svg';
import './App.css';


function ExemploCard() {
    return (
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="..." />
        <Card.Body>
          <Card.Title>Zé da manggaaa</Card.Title>
          <Card.Text>
            Hello Mom
          </Card.Text>
          <Button variant="primary">Botão</Button>
        </Card.Body>
  
      </Card>
        
    )
  }


  export default ExemploCard;