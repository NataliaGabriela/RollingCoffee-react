import { Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../helpers/queries";
const ItemProducto = ({ producto }) => {
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
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProductoAPI(producto.id)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
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
