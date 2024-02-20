import {Table, Image, Container} from 'react-bootstrap';
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
        <tr>
          <td>1</td>
          <td>Cafe Americano</td>
          <td>$1500</td>
          <td><Image src='../../../assets/cafeAmericano.jpg' fluid width={200}/></td>
          <td>Bebida Caliente</td>
          <td>Editar Borrar</td>
        </tr>
      </tbody>
    </Table>
    </Container> 
  );

};

export default Administrador;