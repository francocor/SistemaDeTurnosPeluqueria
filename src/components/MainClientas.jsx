import "../css/MainClientas.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import clienta from "../assets/Clienta.jpg";
import Aos from "aos"
import "aos/dist/aos.css"






const MainClientas = () => {





    return (
      <div className="main-clientas-container">
        <Container className="main-clientas mt-5">

          <div className="TituloClientas" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="2500">
            <h2 className="text-center">Inspiraciones Creativas</h2>
          </div>

          <Row className="CardClientas">
          
            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

            <Col xs={6} md={4} data-aos="zoom-in">
              <Image src={clienta} thumbnail />
            </Col>

              
          </Row>
        </Container>
      </div>
    );
  };
  
  export default MainClientas;