import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { Container } from "react-bootstrap";
import Inicio from "./components/pages/Inicio";
import Error from "./components/pages/Error";
import Administrador from "./components/pages/Administrador";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DetalleProducto from "./components/pages/DetalleProducto";
function App() {
  return (
   <BrowserRouter>
   <NavBar></NavBar>
    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route exact path="/administrador/crear" element={<Administrador></Administrador>}></Route>
      <Route exact path="/administrador/editar" element={<Administrador></Administrador>}></Route>
      <Route exact path="/detalleproducto" element={<DetalleProducto></DetalleProducto>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
  )
}

export default App;
