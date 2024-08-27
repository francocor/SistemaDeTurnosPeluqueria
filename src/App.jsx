import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainServicios from './pages/MainServicios';
import MainProductos from "./pages/MainProductos"
import MainCursos from "./pages/MainCursos"
import MainTurnos from './pages/MainTurnos';
import Login from "./pages/Login";
import PanelDeControl from "./pages/PanelDeControl"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainServicios" element={<MainServicios />} />
        <Route path="/MainProductos" element={<MainProductos />} />
        <Route path="/MainCursos" element={<MainCursos />} />
        <Route path="/MainTurnos" element={<MainTurnos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PanelDeControl" element={<PanelDeControl />} />
      </Routes>
    </Router>
  );
}

export default App;