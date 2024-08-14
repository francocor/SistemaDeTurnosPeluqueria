import Carrusel from "./Carrusel";
import MainHistoria from "./MainHistoria";
import MainClientas from "./MainClientas";
import Promos from "./Promos";


const MainHome = () => {
  

  return (
    <div>

      <Carrusel/>
    
    <div id="Promos">
        <Promos/>
    </div>

      <div id="MainHistoria">
        <MainHistoria/>
      </div>

      <MainClientas/>
      
    </div>
  );
};

export default MainHome;