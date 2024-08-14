import "../css/MainProductos.css"
import { useEffect } from "react";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';  

import Aos from "aos"
import "aos/dist/aos.css"

const MainProductos = () => {
    useEffect(()=>{
        Aos.init();
      },[])

  return (
    <div className="Productos">

        <div className="TituloProductos" data-aos="flip-down">
            <h1 className="text-center my-4">Productos</h1>
        </div>

        <div>

            <MDBRow className='row-cols-1 row-cols-md-2 g-4' >

                <MDBCol data-aos="flip-left">
                    <MDBCard >
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Tratamiento capilar</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard data-aos="flip-right">
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Diagonstico Capilar</MDBCardTitle>
                        <MDBCardText>
                         This is a longer card with supporting text below as a natural lead-in to additional content.
                         This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard data-aos="flip-left">
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Mechas</MDBCardTitle>
                        <MDBCardText>
                         This is a longer card with supporting text below as a natural lead-in to additional content.
                         This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard data-aos="flip-right">
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Balayage</MDBCardTitle>
                        <MDBCardText>
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                         This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard data-aos="flip-left">
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Corte</MDBCardTitle>
                        <MDBCardText>
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                         This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol>
                    <MDBCard data-aos="flip-right">
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>Peinado</MDBCardTitle>
                        <MDBCardText>
                          This is a longer card with supporting text below as a natural lead-in to additional content.
                         This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>

        </div>
        
    </div>
  )
}

export default MainProductos