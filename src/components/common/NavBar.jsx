import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to='/'><img src="/assets/Coffee_Logo.png" className='ImgRollingCoffe'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto">
                <NavLink end className='nav-link' to='/'>Inicio</NavLink>
                <NavLink end className='nav-link' to='/administrador'>Administrador</NavLink>
                <NavLink end className='nav-link' to='/login'>Registro</NavLink>
                <NavLink end className='nav-link' to='/registro'>Login</NavLink>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavBar;