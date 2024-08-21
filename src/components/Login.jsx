import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login.css";
import {Link} from "react-router-dom";


const Login = () => {
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
                            />
                            <img src="{}" alt="" />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Contraseña"
                                required
                            />
                            <img src="" alt="" />
                        </div>
                        
                        <button type="submit" className="btn" >
                          Iniciar Sesión
                        </button>

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