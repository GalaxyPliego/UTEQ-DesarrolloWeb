import React from 'react'
import '../styles/CrearCuenta.scss'

import GalaxyLogo from '../assets/GalaxyLogo.png'

const CrearCuenta = () => {
  return (
    <div className="container">
        <div className="content__login">
            <div className="login__imgC">
                <img className="img__logoC" src={GalaxyLogo} alt=""/>            
            </div>
            <div className="login__form">
                <form action="index.html">
                    <div className="content__name content__form">
                        <label className="label" for="name labels">Nombre</label>
                        <input type="text" className="input__primary input__primary--focus" placeholder="tucorreo@gmail.com"/>
                    </div>
                    <div className="content__email content__form">
                        <label className="label" for="correoElectronico labels">Correo electrónico</label>
                        <input type="text" className="input__primary input__primary--focus" placeholder="tucorreo@gmail.com"/>
                    </div>
                    <div className="content__password content__form">
                        <label className="label" for="correoElectronico">Contraseña</label>
                        <input type="text" className="input__primary input__primary--focus" placeholder="*********"/>
                    </div>
                    <input type="submit" className="btn__login btn__primary btn__primary--hover buton__login" value="REGISTRARSE"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CrearCuenta