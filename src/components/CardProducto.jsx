import React from 'react';
import {Button, Card} from 'react-bootstrap';

const CardProducto = () => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/assets/cafeAmericano.jpg" />
        <Card.Body>
          <Card.Title>Café Americano</Card.Title>
          <Card.Text>
            Descripción: Una taza de café suave y aromático.
            <span>Precio: $250</span>
          </Card.Text>
          <Button variant="success">Ver Más</Button>
        </Card.Body>
      </Card>
    );
};

export default CardProducto;