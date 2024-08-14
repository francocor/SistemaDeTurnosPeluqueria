import "../css/Carrusel.css";
import videoCarrusel from "../assets/videoCarrusel.mp4";

const Carrusel = () => {
  return (
    <div className="carrusel">
      <video
        className="d-block w-100 video-responsive"
        src={videoCarrusel}
        autoPlay
        muted
        loop
        playsInline
      >
        Tu navegador no soporta el video.
      </video>
    </div>
  );
};

export default Carrusel;