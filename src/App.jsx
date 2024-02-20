import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { Container } from "react-bootstrap";
import Inicio from "./components/pages/Inicio";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid className="mainPage">
        <Inicio></Inicio>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App;
