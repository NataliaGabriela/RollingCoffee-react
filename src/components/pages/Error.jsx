import { Button, Image } from "react-bootstrap";
import imgError from "../../../assets/error404.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="tx-center d-flex justify-content-center">
        <Image src={imgError} className="imagenError" fluid />
      </div>
      <Button as={Link} to="/" variant="success" className="botonError">
        Volver al Inicio
      </Button>
    </>
  );
};

export default Error;
