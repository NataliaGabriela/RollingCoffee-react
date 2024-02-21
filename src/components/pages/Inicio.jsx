import { Row, Image, Container } from 'react-bootstrap';
import CardProducto from '../CardProducto';

const Inicio = () => {
    return (
   <>
    <Image src="/assets/banner.png" fluid />
   <Container>
    <h3 className='display-3'>Nuestros Productos</h3>
    <Row><CardProducto></CardProducto></Row>
    </Container>
    </>
    )
};

export default Inicio;