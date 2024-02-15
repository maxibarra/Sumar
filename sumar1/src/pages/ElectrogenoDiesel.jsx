import { useState } from 'react';
import GrupoElectrogeno from '../images/videos/SCANIAGE.mp4'
import './stylesPages/electrogenodiesel.css'
const ElectrogenoDiesel = () => {
    const [playing] = useState(true);

    return (
        <div className='section_diesel'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-grupos-electrogenos-sumar.jpg" alt="grupo electrogeno diesel" />
            </div>
            {/* <div className='tvideo'> */}
            
            {/* <button onClick={() => setPlaying(!playing)}>
                    {playing ? 'Pausar' : 'Reproducir'}
                </button> */}
            {/* </div> */}
            <div className='trogenocontaniner'>
                <h1><strong>Grupos electrógenos diesel y Gas</strong></h1>

                <video
                muted
                src={GrupoElectrogeno}
                controls={playing}
                autoPlay={playing}
            />
                <p><strong>Sumar Servicios Industriales SRL</strong> se dedica a la fabricación de grupos electrógenos diésel y gas desde el año 2013, apostando a la calidad de los componentes y la fabricación de los mismos.
                    <br /><br />
                    Apoyándose principalmente en los motores Baudouin, FPT, PERKINS, CUMMINS y SCANIA, en los alternadores en marcas como WEG.
                    <br /><br />
                    Los componentes eléctricos de nuestros grupos electrógenos diésel y gas  principalmente son: ABB y WEG.
                    <br /><br />
                    Somos representantes de controladores marca DeepSea, líderes en fabricación de controladores de equipos, tanto para control del equipo, paralelismo, transferencia automática; contamos con amplio stock para entrega inmediata.
                    <br /><br />
                    Ofrecemos tanto opciones abiertas como cabinadas, en el caso de esta última con chapa galvanizada y pintura epoxi, e insonorización ignifuga con lana basáltica mineral.
                    <br /><br />
                    También contamos con transferencias automáticas (módulos de conmutación) fabricados con la más alta calidad tanto con componentes WEG o ABB.
                    <br /><br />
                    Adaptamos proyectos a medida de grupos electrógenos diésel y gas de acuerdo a la necesidad del cliente como por ejemplo: tanques de combustible desmontable con mayor autonomía, chasis y cabinas, cáncamos de izaje, batea antiderrame
                    <br /><br />
                    Los tipos de escape que hay son: industriales, residenciales o críticos.
                    <br /><br />
                    Tenemos precalentadores de block, cargadores de batería.
                </p>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos_electrogenos_Diesel-1.jpg" alt="grupo" />

            </div>
            <div className='trogenocontaniner2'>
                
                <ul className='lu'>
                    <li>Sistemas de paralelismo, load sharing and peak shaving.</li>
                    <li>Iluminación interior.</li>
                </ul>
                <div className='motoralt'>
                    <img className='img2' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos-electrogenos_motores.jpg" alt="repuesto" />
                    <img className='img2' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos-electrogenos_alternadores.jpg" alt="repuesto" />
                    {/* <img className='img2' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos-electrogenos_tableros-150x150.jpg" alt="repuesto" /> */}
                </div>
            </div>
           
        </div>
        
    )
}

export default ElectrogenoDiesel