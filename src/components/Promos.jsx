import promoDelMes from "../assets/promosDelMes.mp4";
import "../css/promoDelMes.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from "aos"
import { HiFire } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

const Promos = () => {
  return (

<div className="Promos">

    <Container fluid className="promo-container pt-5 mt-5">
      <Row className="align-items-center justify-content-center">
        <Col md={6} className="d-flex justify-content-center promo-video" data-aos="zoom-in-right">
          <video
            className="video-responsive"
            src={promoDelMes}
            autoPlay
            muted
            loop
            playsInline
            >
            Tu navegador no soporta el video.
          </video>
        </Col>

        <Col md={6} className="promo-text d-flex flex-column justify-content-center" data-aos="zoom-in-left">
          <h1 className="mb-4">< HiFire/>Promos de Agosto< HiFire/></h1>
          <a href="./MainTurnos" className="botonpromo" target="_blank"><p><FaHeart/> Lavado+Corte+Brashing/plancha $</p></a>
          <a href="./MainTurnos" className="botonpromo" target="_blank"><p><FaHeart/> Color(retoque crecimiento)+Tratamiento+Modelado $</p></a>
          <a href="./MainTurnos" className="botonpromo" target="_blank"><p><FaHeart/> Mechas/Balayage+Tratamiento+Modelado $</p></a>
          <a href="./MainTurnos" className="botonpromo" target="_blank"><p><FaHeart/> Color(completo)+Tratamiento+Modelado $</p></a>
        </Col>
      </Row>
    </Container>
</div>
  );
};

export default Promos;