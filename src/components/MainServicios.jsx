import "../css/MainServicios.css"
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



const MainServicios = () => {

    useEffect(()=>{
        Aos.init();
      },[])



  return (
    <div className="Servicios">

        <div className="TituloServicios" data-aos="flip-down">
            <h1 className="text-center my-4">Servicios</h1>
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
                        ¡Dale a tu cabello la atención que merece! Repara, hidrata y fortalece con tratamientos 
                        personalizados que dejarán tu melena más saludable y brillante que nunca. 
                        ¡Cabello de revista en cada visita!
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
                        ¿No sabes qué necesita tu cabello? Te lo decimos. Con nuestro diagnóstico capilar, 
                        analizamos tu pelo y cuero cabelludo para ofrecerte soluciones a medida. 
                        ¡Descubre el camino hacia un cabello perfecto!
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
                        Ilumina tu look con mechas que transformarán tu estilo. Desde sutiles reflejos 
                        hasta contrastes atrevidos, añade dimensión y luz a tu cabello. 
                        ¡Un toque moderno que no pasa desapercibido!
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
                        ¿Buscas un cambio natural y luminoso? El balayage es tu mejor opción. 
                        Degradados suaves y elegantes que le dan a tu cabello un acabado fresco, 
                        brillante y, sobre todo, ¡único!
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
                        Renueva tu estilo con un corte de cabello a medida. Desde looks modernos y atrevidos 
                        hasta cortes clásicos que nunca fallan, saldrás de aquí sintiéndote totalmente renovado. 
                        ¡El corte perfecto para cada personalidad!
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
                        ¿Evento especial o simplemente un día increíble? Elige el peinado perfecto. Rizos, liso, 
                        ondas o recogidos espectaculares, ¡tu cabello siempre impecable y listo para cualquier ocasión!
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
                        <MDBCardTitle>Color</MDBCardTitle>
                        <MDBCardText>
                        ¡Reinventa tu color! Desde tonos naturales hasta colores vibrantes, 
                        dale a tu cabello ese toque especial que estabas buscando. Cobertura de canas, 
                        cambio total o simplemente reflejos de luz, ¡atrévete a cambiar y destacar!
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>

        </div>
        
    </div>
  )
}

export default MainServicios
