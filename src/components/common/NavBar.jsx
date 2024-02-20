import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css'

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home"><img src="/assets/Coffee_Logo.png" className='ImgRollingCoffe'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto">
                <Nav.Link href="#home" active>Inicio</Nav.Link>
                <Nav.Link href="#link">Administrador</Nav.Link>
                <Nav.Link href="#link">Registro</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavBar;