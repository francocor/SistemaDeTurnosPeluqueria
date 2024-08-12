import "../css/MainClientas.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import clienta from "../assets/Clienta.jpg";
import Aos from "aos"
import "aos/dist/aos.css"


/*const images = [
    clienta1, clienta2, clienta3, clienta4,
    clienta5, clienta6, clienta7, clienta8
  ];*/



const MainClientas = () => {





    return (
      <div className="main-clientas-container">
        <Container className="main-clientas mt-5">

          <div className="TituloClientas" data-aos="fade-down"  data-aos-easing="linear"  data-aos-duration="2500">
            <h2 className="text-center">Clientas</h2>
          </div>

          <Row className="CardClientas">
          
          {/*{images.map((img, idx) => (*/}
            {Array.from({ length: 8 }).map((_, idx) => (

              <Col md={3} key={idx} className="mb-4" data-aos="flip-right">

                <Card>
                  <Card.Img variant="top" src={clienta} alt="Clienta" className="img-fluid" />
                </Card>
                
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  };
  
  export default MainClientas;