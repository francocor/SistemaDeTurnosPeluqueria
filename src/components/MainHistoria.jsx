import { Container, Row, Col } from 'react-bootstrap';
import '../css/MainHistoria.css';
import historiaImg from '../assets/imgeuge.jpg';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const MainHistoria = () => {
  useEffect(()=>{
    Aos.init();
  },[])

  


  return (
    <div className="main-historia">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="historia-content">
            <div className="historia-text" data-aos="fade-right">
              <h2 className='tituloHistoria'>Mi Historia</h2>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloribus quaerat placeat quam
                 repellendus dolor beatae at ex obcaecati dolores ipsam quo iure molestias, omnis cupiditate sit quisquam, molestiae ab?
              </span>
            </div>
          </Col>
          <Col md={6} className="historia-content">
            <div className="historia-img" data-aos="fade-left">
              <img src={historiaImg} alt="" className="img-fluid" />
              <img src={historiaImg} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainHistoria;