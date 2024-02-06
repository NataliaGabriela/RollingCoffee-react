import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
    <NavBar></NavBar>
    <Container className='mainPage'></Container>
    <Footer></Footer>
      <NavBar></NavBar>
    </>
  );
}

export default App;
