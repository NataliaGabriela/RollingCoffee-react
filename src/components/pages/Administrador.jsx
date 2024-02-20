import {Table, Container} from 'react-bootstrap';
import ItemProducto from '../ItemProducto';
const Administrador = () => {
    return (
    <Container> 
        <h4 className='display-4 my-3'>Productos Disponibles</h4>
        <hr />

    <Table striped bordered hover className='my-3'>
      <thead>
        <tr>
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
       <ItemProducto></ItemProducto>
      </tbody>
    </Table>
    </Container> 
  );

};

export default Administrador;