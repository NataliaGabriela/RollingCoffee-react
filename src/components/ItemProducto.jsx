import { Button, Image } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Cafe Americano</td>
      <td>$1500</td>
      <td>
        <Image src="../../../assets/cafeAmericano.jpg" fluid width={200} />
      </td>
      <td>Bebida Caliente</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="me-lg-2">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
