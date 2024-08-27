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
const [horariosDisponibles, setHorariosDisponibles] = useState([])

useEffect(()=>{
  const horarios = []
  const startHour = 9
  const endHour = 21
  const interval = 2

  for(let hour = startHour; hour <= endHour; hour += interval){
    horarios.push(`${hour.toString().padStart(2, "0")}:00`)
  }
  setHorariosDisponibles(horarios)
}, [])


const handleChange = (e)=>{
  setFormData({...formData, [e.target.id]: e.target.value,})
}

const handleSubmit = (e)=>{
  e.preventDefault();
  
  console.log("Datos antes de validar:", formData);

  const { isValid, message } = validacionFechayHora(formData.fecha, formData.hora);
  console.log("Resultado de validacion:", isValid, message);

  if (!isValid){
    setError(message);
    return;
  }

  const mensaje = `Hola, me gustaria solicitar un turno. Mis datos son:
  Nombre: ${formData.nombre}
  Apellido: ${formData.apellido}
  Telefono: ${formData.telefono}
  Fecha: ${formData.fecha}
  Hora: ${formData.hora}
  Servicios: ${formData.servicios}`

  console.log("mensaje", mensaje)
  window.alert("Tu turno se asigno correctamente");

  const url = `https://wa.me/+5493816348569?text=${encodeURIComponent(mensaje)}`;
  console.log("URL de WhatsApp:", url);

  setTimeout(()=>{
    console.log("intentando abrir URL...")
    window.open(url, "_blank");
  }, 100)

  setFormData({
    nombre: "",
    apellido: "",
    telefono: "",
    fecha: "",
    hora: "", 
    servicios:""
  })

  
}





  return (
    <div className="MainTurnos">

    <div className="container my-5">
      <div className="row">
        
        <div className="col-md-6 mb-4 mb-md-0" data-aos="flip-up">
          <div className="text-center text-md-start">
            <h1 className="tituloTurnos">Sistema de Turnos</h1>
            <p>
              1 - Para solicitar un turno primero deben realizar una seña de
              $5000 pesos, haciendo click <a href="https://www.mercadopago.com.ar/paid?CODE=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=CjwKCAjwiaa2BhAiEiwAQBgyHqTmsXem-W2HCa0DveUX5AkWV1yMylsE6pcaH0HILi6bBhlLrDLlahoCBFAQAvD_BwE" target="_blank">
                Aquí
              </a> los llevará a
              Mercado Pago para realizar la seña.
            </p>
            <p>
              2 - Una vez realizada la seña, mandar captura al{" "}
              <a href="https://wa.me/3816223344" target="_blank">WhatsApp</a>.
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
                <select
                  id="hora"
                  className="form-control"
                  value={formData.hora}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione el horario</option>
                  {horariosDisponibles.map((hora) => (
                    <option key={hora} value={hora}>
                      {hora}
                    </option>
                  ))}
                </select>               
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="servicios" className="form-label">
                  Servicios
                </label>
                <textarea
                  id="servicios"
                  className="form-control"
                  placeholder="Servicios"
                  rows="4"
                  value={formData.servicios}
                  onChange={handleChange}
                  required
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