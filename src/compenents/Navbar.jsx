import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
            <div className="container">
                <div className="logo">
                    <a className="navbar-brand" href="/#"><img src="img/logo_blanco.png" alt='logo' height='auto' width='190px' /></a>
                </div>
                <div className="center-nav row">
                    <div className="toggle">
                        <p className="title-tag-text h6">Envíos a todo México</p>
                    </div>
                    <div className="navbar-section">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <h1 className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Obras
                                    </h1>
                                </li>
                                <li className="nav-item dropdown">
                                    <h1 className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Artistas
                                    </h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="icons">
                    <ul className="items">
                        <li className="item">
                            <a href="/#"><img src="img/lupa-blanca.png" alt="lupa" style={{width: '18px', height: '18px'}} />
                            </a>
                        </li>
                        <li className="item">
                            <a href="/#"><img src="img/login-icon.png" alt="lupa" style={{width: '18px', height: '18px'}} />
                            </a>
                        </li>
                        <li className="item">
                            <a href="/#"><img src="img/heart.png" alt="lupa" style={{width: '18px', height: '18px'}} />
                            </a>
                        </li>
                        <li className="item">
                            <a href="/#"><img src="img/cart.png" alt="lupa" style={{width: '18px', height: '18px'}} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar