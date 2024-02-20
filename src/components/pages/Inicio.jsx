import { Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CardProducto from '../CardProducto';

const Inicio = () => {
    return (
   <>
    <Image src="/assets/banner.png" fluid />
    <Row><CardProducto></CardProducto></Row>
    </>
    )
};

export default Inicio;