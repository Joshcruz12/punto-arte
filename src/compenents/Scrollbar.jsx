import React from 'react'

const Scrollbar = () => {
    return (
        <div className="scroll-min" style={{ float: 'rigth' }}>
            <img width="5%" className="mt-3 ml-2" src="img/dragon.png" alt="" />
            <div className="scrollbar scrollbar-pink bordered-pink linked-scrollbar-fixed" data-scrolling="false">
                <div className="force-overflow "></div>
            </div>
            <div className="scrollbar">
                <p className="texto-vertical-1  ml-4">Contáctanos</p>
                <div className="scrollbar-1">
                    <div className="progress" style={{ height: '1px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="icons-scroll">
                <a href="https://www.instagram.com/puntoartemx " target="_blank"><img className="mt-2" src="https://puntoarte.mx/img/icons/insta-scroll.png" alt="" /></a>
                <br />
                <a href="https://api.whatsapp.com/send?phone=33 35840142&amp;text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20PuntoArte%20." target="_blank">
                    <img className="mt-2" src="https://puntoarte.mx/img/icons/whats-scroll.png" alt="" />
                </a>
                <br />
                <a href="https://www.facebook.com/Punto-Arte-102704654917266" target="_blank"><img className="mt-2" src="https://puntoarte.mx/img/icons/facebook-scroll.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Scrollbar