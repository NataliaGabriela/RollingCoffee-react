import { Form, Button, Container } from "react-bootstrap";

const FormularioProducto = () => {
  return (
    <Container>
      <h1 className="display-4">Nuevo Producto</h1>
      <hr></hr>
      <Form className="my-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: café" />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 100" />
          <Form.Text className="text-danger">prueba de error</Form.Text>
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/foto/manos-mujer-cafe-bebidas-6612666/"
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoría*</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Seleccione una opción</option>
            <option value="1">Infusiones</option>
            <option value="2">Batidos</option>
            <option value="3">Dulce</option>
            <option value="4">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control as="textarea" rows={5} />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción amplia*</Form.Label>
          <Form.Control as="textarea" rows={15} />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioProducto;
