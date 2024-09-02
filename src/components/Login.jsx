import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login.css";
import {Link, useNavigate} from "react-router-dom";
import {useState,useContext} from "react";
import {UserContext} from "../context/UserContext"
import {useForm} from "../hooks/useForm"
import axios from "axios"



const Login = () => {

  let navigate = useNavigate()

  const {handleLogear, getUser} = useContext(UserContext)
  const {valuesForm, onInputChange} = useForm({
    usuario: "",
    contraseña: ""
  })

  const handleSubmit = async () =>{
    axios.post("http://localhost:8000/login/login", valuesForm)
    .then ((resp)=>{
      handleLogear(true)
      getUser(valuesForm.usuario)
      navigate("/MainPanelDeControl", {replace:true})
      alert("Bienvenido")
    }).catch(()=>{
      alert("Usuario o contraseña incorrectos")
    })
  }


  
  return (
    <div className='MainLogin'>
            <div className='MainLogin'>
                <div className="wrapper">
                    <form >
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Usuario"
                                required
                                name="usuario"
                                onChange={onInputChange}
                            />
                            <img src="{}" alt="" />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                required
                                name="contraseña"
                                onChange={ onInputChange }
                            />
                            <img src="" alt="" />
                        </div>
                        
                        <Link to={""} >
                        <button type="submit" className="btn" onClick={handleSubmit}>
                          Iniciar Sesión
                        </button>
                        </Link>

                        <Link to="/"> 
                          <button type="button" className="btn">
                            Volver
                          </button>
                        </Link>             
                    
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Login;