import { Row, Image, Container } from 'react-bootstrap';
import CardProducto from '../CardProducto';
import "../../App.css";
const Inicio = () => {
    return (
   
   <section className='mainSection'>
    <Image src="/assets/banner.png" fluid />
   <Container>
    <h1 className='display-4'>Nuestros Productos</h1>
    <Row><CardProducto></CardProducto></Row>
    </Container>
    </section>
    
    )
};

export default Inicio;