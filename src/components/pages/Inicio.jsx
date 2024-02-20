import { Row, Image } from 'react-bootstrap';
import CardProducto from '../CardProducto';

const Inicio = () => {
    return (
   <>
    <Image src="/assets/banner.png" fluid />
    <h2 className='display-2'>Nuestros Productos</h2>
    <Row><CardProducto></CardProducto></Row>
    </>
    )
};

export default Inicio;