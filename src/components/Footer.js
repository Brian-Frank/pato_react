import React from 'react'

function Footer() {
    return (
        <div>
            <footer className='text-white mt-5 py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <ul className='col-12 col-md-3 d-flex aling-item-center justyfy-center'>
                            <img src='https://i.ibb.co/rfxw2X0/tia-pato.png' alt='logo' className='mx-2 rounded-circle border border-5' height='80' />
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>
                                Nosotros
                            </li>
                            <li>
                                <a href='#'>
                                    Quienes somos
                                </a>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>
                                Contacto
                            </li>
                            <li>
                                <a href='#'>
                                    <i className='fas fa-phone'></i>
                                    +54 221 1234567
                                </a>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>
                                Ubicacion
                            </li>
                            <li>
                                <a href='#' className='text-white'>
                                    <i className='fas fa-map-marker-alt'></i>
                                    <span className='ml-2'>
                                        La Plata-Buenos Aires
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>

    )
}

export default Footer