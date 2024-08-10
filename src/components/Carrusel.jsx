import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from '../assets/carrusel1.jpg';
import carrusel2 from '../assets/carrusel2.jpg';
import carrusel3 from '../assets/carrusel3.jpg';
import "../css/Carrusel.css"

const Carrusel = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  return (
    <div>

<div className='carrusel' >
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} controls={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrusel1}
            alt="First slide"
            />
          <Carousel.Caption>
            {}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrusel2}
            alt="Second slide"
            />
          <Carousel.Caption>
            {}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carrusel3}
            alt="Third slide"
            />
          <Carousel.Caption>
            {}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>




    </div>
  )
}

export default Carrusel