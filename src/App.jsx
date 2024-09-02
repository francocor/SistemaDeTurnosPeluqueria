import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import MainServicios from './pages/MainServicios';
import MainProductos from "./pages/MainProductos"
import MainCursos from "./pages/MainCursos"
import MainTurnos from './pages/MainTurnos';
import Login from "./pages/Login";
import PanelDeControl from "./pages/PanelDeControl"
import UsuariosAdmin from "./pages/UsuariosAdmin"
import ServiciosAdmin from "./pages/ServiciosAdmin"
import ProductosAdmin from "./pages/ProductosAdmin"
import CursosAdmin from "./pages/CursosAdmin"
import {UserProvider} from "./context/UserProvider"

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainServicios" element={<MainServicios />} />
        <Route path="/MainProductos" element={<MainProductos />} />
        <Route path="/MainCursos" element={<MainCursos />} />
        <Route path="/MainTurnos" element={<MainTurnos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PanelDeControl" element={<PanelDeControl />} />
        <Route path="/UsuariosAdmin" element={<UsuariosAdmin />} />
        <Route path="/ServiciosAdmin" element={<ServiciosAdmin />} />
        <Route path="/ProductosAdmin" element={<ProductosAdmin />} />
        <Route path="/CursosAdmin" element={<CursosAdmin />} />
      </Routes>
    </UserProvider>
  );
}

export default App;