import { Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../helpers/queries";
const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No puedes revertir este proceso posteriormente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProductoAPI(producto.id);
        if (respuesta.status === 200) {
          //actualizar tabla
          const productosActualizados = await leerProductosAPI();
          setProductos(productosActualizados);
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto"${producto.nombreProducto}"fue eliminado correctamente`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto"${producto.nombreProducto}" no fue eliminado, intente en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td>
        <Image src={producto.imagen} fluid width={200} />
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="me-lg-2" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
