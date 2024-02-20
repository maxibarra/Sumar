import {useState} from 'react'
import PlataformaAltura from '../images/videos/PlataformaAltura.mp4'
import './stylesPages/tijeraelectrica.css'

const TijeraElectrica = () => {
    const [playing, setPlaying] = useState(true);

    return (
        <div className='tijeraeleconten'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-plataformas-de-altura-tijera-electrica.jpg" alt="header" />
            </div>

            <div className='videotijera'>
                <video
                    muted
                    src={PlataformaAltura}
                    controls={playing}
                    autoPlay={playing}
                />
                {/* <button onClick={() => setPlaying(!playing)}>
                    {playing ? 'Pausar' : 'Reproducir'}
                </button> */}
            </div>


            <div className='subtijeraeleconten'>
                <h2><strong>Plataformas de elevación tipo Tijeras Eléctricas</strong></h2>
                <p>Las Plataformas de elevación tipo Tijeras Eléctricas Skyjack hacen más sencillo y productivo su trabajo, cuentan con el mejor valor de ciclo de vida de la industria a través del bajo costo de propiedad, facilidad de servicio y mantenimiento. Conservando altos valores residuales.
                    <br /><br />

                    Los productos <strong>Skyjack</strong> están diseñados para un sencillo servicio y mantenimiento.
                    <br /><br />
                    Manteniendo un diseño simple, utilizando tecnología probada y aprobada por nuestros clientes, la fiabilidad y facilidad de servicio son comunes a todos nuestros equipos.
                </p>

                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Plataforma-de-elevacio%CC%81n-tipo-Tijera-electrica.jpg" alt="tijera electrica" />

                <h4>Características estándar</h4>
                <ul>
                    <li>Manejable a toda altura.</li>
                    <li>Velocidad variable, tracción hidráulica delantera de dos ruedas.</li>
                    <li>Dirección de 90 ° (cero dentro del radio de giro).</li>
                    <li>Frenos dobles.</li>
                    <li>Controles proporcionales para las funciones de conducción y elevación.</li>
                    <li>Fuente de alimentación de 24V DC.</li>
                    <li>Protección de batería de baja tensión.</li>
                    <li>Pendiente máxima abordable del 30%.</li>
                    <li>Goma maciza, neumáticos que no dejan marcas.</li>
                    <li>Sistema de protección contra baches.</li>
                    <li>Velicidad nominal del viento 12,5 mts por segundo.</li>
                    <li>Alarma de inclinación con accionamiento y desconexión de ascensor.</li>
                    <li>Alarma sonora todo movimiento.</li>
                    <li>Puntos de sujeción de cordón.</li>
                    <li>Bocina de operador.</li>
                    <li>Cavidades para montacargas y puntos de amarres de elevación.</li>
                    <li>Sistema de control basado en relés.</li>
                    <li>Sistema de cableado numerado y codificado por colores.</li>
                    <li>Telemática lista.</li>
                    <li>Controlador de motor de corriente continua.</li>
                </ul>
            </div>

        </div>
    )
}

export default TijeraElectrica