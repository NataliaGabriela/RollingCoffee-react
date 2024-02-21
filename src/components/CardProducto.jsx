import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
const CardProducto = () => {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src="/assets/cafeAmericano.jpg" />
      <Card.Body>
        <Card.Title>Café Americano</Card.Title>
        <Card.Text>
          Descripción: Una taza de café suave y aromático.
          <br />
          <span className="fw-bold">Precio: $350</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        <Link className="btn btn-success me-2" to="/detalleProducto">
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardProducto;
