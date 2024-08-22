import "../css/MainTurnos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react";
import { validacionFechayHora } from "../Validacion/validacionFechayHora";




const MainTurnos = () => {
    useEffect (()=>{
        Aos.init();
    }, [])

const [formData, setFormData] = useState({
  nombre:"",
  apellido:"",
  telefono:"",
  fecha:"",
  hora:"",
  servicios:""
})

const [error, setError] = useState("")

const handleChange = (e)=>{
  setFormData({...formData, [e.target.id]: e.target.value,})
}

const handleSubmit = (e)=>{
  e.preventDefault()

  const {isValid, message} = validacionFechayHora(formData.fecha, formData.hora)
  if(!isValid){
    setError(message)
    return
  }


  const mensaje = `Hola, me gustaria solicitar un turno. Mis datos son:
  Nombre: ${formData.nombre}
  Apellido: ${formData.apellido}
  Telefono: ${formData.telefono}
  Fecha: ${formData.fecha}
  Hora: ${formData.hora}
  Servicios: ${formData.servicios}`

  const url = `https://wa.me/+5493815151747?text=${encodeURIComponent(
  mensaje
)}`

  window.open(url, "_blank");

}





  return (
    <div className="MainTurnos">

    <div className="container my-5">
      <div className="row">
        
        <div className="col-md-6 mb-4 mb-md-0" data-aos="flip-up">
          <div className="text-center text-md-start">
            <h1>Sistema de Turnos</h1>
            <p>
              1 - Para solicitar un turno primero deben realizar una seña de
              $5000 pesos, haciendo click <a href="#">aquí</a> los llevará a
              Mercado Pago para realizar la seña.
            </p>
            <p>
              2 - Una vez realizada la seña, mandar captura al{" "}
              <a href="#">WhatsApp</a>.
            </p>
            <p>
              3 - Una vez finalizado el paso anterior, ya podes llenar el
              formulario del turno.
            </p>
            <p>
              4 - Llenar el formulario con las fechas y horas disponibles y
              enviar. Esto llegará a nuestro WhatsApp junto con el comprobante
              de la seña y te confirmaremos a la brevedad.
            </p>
          </div>
        </div>

        
        <div className="col-md-6" data-aos="flip-up">
          <div className="container">
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                    
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="apellido" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    />
                </div>

              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  />
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label htmlFor="fecha" className="form-label">
                    Fecha
                  </label>
                  <input type="date" 
                  className="form-control" 
                  id="fecha" 
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="hora" className="form-label">
                    Hora
                  </label>
                  <input type="time" 
                  className="form-control" 
                  id="hora" 
                  value={formData.hora}
                  onChange={handleChange}
                  required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="Servicios" className="form-label">
                  Servicios
                </label>
                <textarea
                  id="Servicios"
                  className="form-control"
                  placeholder="Servicios"
                  rows="4"
                  value={formData.servicios}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
};

export default MainTurnos;