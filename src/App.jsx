import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { Container } from "react-bootstrap";
import Inicio from "./components/pages/Inicio";
import Error from "./components/pages/Error";
import Administrador from "./components/pages/Administrador";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid className="mainPage">
        {/*<Inicio></Inicio>*/}
        {/*<Error></Error>*/}
        <Administrador></Administrador>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App;
