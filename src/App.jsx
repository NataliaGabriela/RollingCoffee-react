import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Inicio from "./components/Inicio";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container fluid className="mainPage">
        <Inicio></Inicio>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
