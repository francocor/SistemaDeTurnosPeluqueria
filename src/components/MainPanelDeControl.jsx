import "../css/MainPanelDeControl.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";
import {useNavigate} from "react-router-dom"
import { useContext } from "react";

const MainPanelDeControl = () => {

  const {handleLogout} = useContext(UserContext)
  const navigate = useNavigate()

  const handleClick =()=>{

    if(handleLogout){
      handleLogout()
      navigate('/')
    }else{
      console.error("handleLogout no está definido en UserContext.")
    }
  }


  return (
    <div>
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
              <Nav.Link href="/AdminUsuarios">Usuarios</Nav.Link>
              <Nav.Link href="/AdminServicios">Servicios</Nav.Link>
              <Nav.Link href="/AdminProductos">Productos</Nav.Link>
              <Nav.Link href="/AdminCursos">Cursos</Nav.Link>
              <Nav.Link onClick={handleClick}>Cerrar sesion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MainPanelDeControl