
import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaWhatsappSquare } from "react-icons/fa";
import './styles/footer.css';


const Footer = () => {
    return (

        <div>
            <div className='contenedor-footer'>
                <h5>Córdoba Capital</h5>
                {/* <div className="linea-divisora">.</div> */}

                <div className='datos-footer'>
                    <p>Tel.: +54(351)7667501</p>
                    <p>Pje. Giuliano 300 Guiñazu Sud.</p>
                    <p>comercialcba@sumarservicios.com.ar</p>
                </div>
                <div className='link-footer'>

                    {/* <a href="https://www.linkedin.com/company/sumar-servicios-industriales-srl/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin />
                    </a> */}
                    <a href="https://www.facebook.com/SumarenCordoba" target="_blank">
                        <FiFacebook />
                    </a>
                    <a href="https://www.instagram.com/sumar_cba/" target="_blank">
                        <FiInstagram />
                    </a>

                    {/* <FiTwitter /> */}
                </div>
            </div>
            <div className='pie-footer'>
                © SUMAR SERVICIOS INDUSTRIALES S.R.L. 2020
                <br />
                - Todos los derechos reservados.-
            </div>

        </div>
    )
}

export default Footer