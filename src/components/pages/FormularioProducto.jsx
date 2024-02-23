import { Form, Button, Container } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const FormularioProducto = ({editar,titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const productoValidado = async(producto) => {
    if (editar) {
      
    } else {
      console.log(producto);
    //logica cuando quiero crear un producto
    const respuesta = await crearProductoAPI(producto);
    if (respuesta.satus === 201) {
      //mensaje
      Swal.fire({
        title: "Producto creado",
        text: `El producto: ${producto.nombreProducto} fue creado correctamente`,
        icon: "success"
      });
      reset();
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intente crear este producto en unos minutos`,
        icon: "error"
      });
    }
    
  };
    }
    
  return (
    <Container>
      <h1 className="display-4">{titulo}</h1>
      <hr></hr>
      <Form className="my-3" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: café"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como minimo 2 caracteres para el producto",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como máximo 50 caracteres para el producto",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 100"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 500,
                message: "El precio mínimo es $500",
              },
              max: {
                value: 5000,
                message: "El precio máximo es $5000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/foto/manos-mujer-cafe-bebidas-6612666/"
            {...register("imagen", {
              required: "La imagen del producto es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                message: "Debe ingresar una imagen valida(jpg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            aria-label="Default select example"
            {...register("categoria", {
              required: "Debe seleccionar una opción",
            })}
          >
            <option>Seleccione una opción</option>
            <option value="1">Infusiones</option>
            <option value="2">Batidos</option>
            <option value="3">Dulce</option>
            <option value="4">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            {...register("descripcion_breve", {
              required: "La descripción del producto es obligatoria",
              minLength: {
                value: 3,
                message:
                  "Debe ingresar como minimo 3 caracteres para el producto",
              },
              maxLength: {
                value: 30,
                message:
                  "Debe ingresar como máximo 30 caracteres para el producto",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción amplia*</Form.Label>
          <Form.Control
            as="textarea"
            rows={15}
            {...register("descripcion_amplia", {
              required: "La descripción del producto es obligatoria",
              minLength: {
                value: 50,
                message:
                  "Debe ingresar como minimo 100 caracteres para el producto",
              },
              maxLength: {
                value: 500,
                message:
                  "Debe ingresar como máximo 500 caracteres para el producto",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioProducto;
