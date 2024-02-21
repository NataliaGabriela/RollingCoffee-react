import { Container, Row, Image } from "react-bootstrap";
import "../../App.css";
const DetalleProducto = () => {
  return (
    <Container>
      <Row className="border border-1 rounded m-5 p-3">
        <div className="col-md-6">
          <Image
            src="../../../assets/cafe-americano.jpg"
            className="figure-img img-fluid rounded"
            fluid
            width={500}
          />
        </div>
        <div className="col-md-6">
          <h4>Capuccino</h4>
          <hr></hr>
          <p>
            El café americano es una bebida caliente que consiste en un espresso
            diluido con agua caliente, lo que resulta en una taza de café suave
            y aromatico. Es una opción popular para aquellos que prefieren un
            café menos intenso que el espresso tradicional. Perfecto para
            disfrutar en cualquier momento del día.
          </p>
          <p>
            <span className="textGreen fw-bold">Categoría:</span> infusiones
          </p>
          <p className="textGreen fw-bold">Precio: $1000</p>
        </div>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
