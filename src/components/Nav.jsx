import React from 'react'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Tia Pato</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Categorias</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav