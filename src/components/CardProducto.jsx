import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
const CardProducto = ({producto}) => {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>
          Descripción: {producto.descripcion_breve}
          <br />
          <span className="fw-bold">Precio: ${producto.precio}</span>
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
