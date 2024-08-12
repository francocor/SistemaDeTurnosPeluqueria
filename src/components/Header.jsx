import "../css/Header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/logo.png";


const Header = () => {

  const scrollToHistoria = () => {
    const historiaSection = document.getElementById("MainHistoria");
    if (historiaSection) {
      historiaSection.scrollIntoView({ behavior: "smooth" });
    }
  };






  return (
    <div className="header" >
      <Navbar expand="lg" style={{ backgroundColor: '#f48f9f' }}>
        <Container>
          <Navbar.Brand >
            <img
              alt="Logo"
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#servicios">Promos del mes</Nav.Link>
              <Nav.Link onClick={scrollToHistoria}>Sobre mí</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#Productos">Productos</Nav.Link>
              <Nav.Link href="#cursos">Cursos</Nav.Link>
              <Nav.Link href="#cursosTecItali">Tec Itali</Nav.Link>
              <Nav.Link href="#turnos">Turnos</Nav.Link>
              <Nav.Link href="#turnos">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;