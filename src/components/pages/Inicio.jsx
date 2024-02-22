import { Row, Image, Container } from "react-bootstrap";
import "../../App.css";
import CardProducto from "../CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
const Inicio = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    traerProductos();
  }, []);
  const traerProductos = async () => {
    try {
      const listaProductosAPI = await leerProductosAPI();
      setProductos(listaProductosAPI);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="mainSection">
      <Image src="/assets/banner.png" fluid />
      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <Row>
          {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto}></CardProducto>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
