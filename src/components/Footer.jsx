import "../css/Footer.css"
import { FaInstagram } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { TbMapSearch } from "react-icons/tb";
import { SiGithubsponsors } from "react-icons/si";
import tecitali from "../assets/tecitali.jpg"



const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3><span>Eugenia</span>Colorista</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
              
              <div className="footer-icons">
                
                <a href="https://www.instagram.com/eugecolorista/" target="_blank"><FaInstagram size="3rem"/></a>
                
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5><SiGithubsponsors/>Sponsor</h5>
              <a href="https://www.tecitaly.com.ar/" target="_blank"><img src={tecitali} className="tecitali-image" alt="TecItali"/></a>

              
            </div>

            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contacto</h5>
              <p><i className="fa-solid fa-phone-volume"></i><FaWhatsapp size="1.5rem"/> +381 6223344</p>
              <p><i className="fa-solid fa-envelope"></i><CiMail size="1.5rem"/> eugecolorista@gmail.com</p>
              <p><i className="fa-solid fa-paper-plane"></i>< TbBrandGoogleMaps size="1.5rem"/> San martin 1100, San Miguel de Tucuman, Tucuman, Argentina</p>
            </div>

          </div>
        </div>
      </div>
      <div className='Last-footer'>
        <p>© 2024 Copyright: FC.<SiYoutubegaming/></p>
      </div>


      <a href="https://wa.me/3816223344" 
         className="whatsapp-float" 
         target="_blank" 
         rel="noopener noreferrer">
        <FaWhatsapp size="2.5rem" />
      </a>



    </div>
  )
}

export default Footer;