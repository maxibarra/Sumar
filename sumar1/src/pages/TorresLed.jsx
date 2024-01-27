import './stylesPages/torresled.css'

const TorresLed = () => {
   

    return (
        <div className='contenedorled'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-torres-de-iluminacion.jpg" alt="header" />
            </div>

            <div className='ledcontainer'>
                <img className='torreled' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Torres-de-iluminacion-led.png" alt="torres2" />
                <h1> <strong>Torres de iluminación Led</strong></h1>
                <p><strong>Sumar Servicios Industriales SRL</strong> es uno de los pocos fabricantes nacionales de torres de iluminación led. Contamos con una unidad de potencia compacta de altísima calidad, altamente confiable y de diseño robusto. Las torres de iluminación de Sumar Servicios Industriales SRL poseen una sencilla operación, mantenimiento, y están sujetas a un exhaustivo programa de pruebas.
                    <br /><br />
                    Confiamos principalmente en las motorizaciones diésel Perkins y Mitsubishi,todos con componentes de primera calidad.
                    <br /><br />
                
                    Las cabinas de las torres de iluminación son insonorizadas aptas para intemperie, construidas en chapa galvanizada y pintura poliéster termoconfortable.
                    <br /><br />
                    Las torres poseen cuatro patas de apoyo para lograr una mayor estabilidad. Cuentan con mástil telescópico, rebatible de tres tramos llegando a una altura máxima de 9.5 metros.
                </p>
                <div>
                    {/* <img className='tablaled' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/ORIG_SUMAR_web_Torres-led.jpg" alt="torres1" /> */}
                    {/* <img className='torreled' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Torres-de-iluminacion-led.png" alt="torres2" /> */}
                </div>
            </div>
        </div>

    )
}

export default TorresLed