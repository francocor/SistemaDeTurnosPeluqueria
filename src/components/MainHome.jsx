import Carrusel from "./Carrusel";
import MainHistoria from "./MainHistoria";
import MainClientas from "./MainClientas";


const MainHome = () => {
  

  return (
    <div>

      <Carrusel/>

      <div id="MainHistoria">
        <MainHistoria/>
      </div>

      <MainClientas/>
      
    </div>
  );
};

export default MainHome;