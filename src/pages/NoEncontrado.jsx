import React from "react";
import '../styles/NoEncontrado.scss'

import Astronauta from '../assets/astronauta.svg'
import GalaxyLogo from '../assets/GalaxyLogoSL.png'
import Nube from '../assets/nube.svg'
import Nube2 from '../assets/nubes2.svg'
import Nubes3 from '../assets/nubes3.svg'
import Bandera from '../assets/bandera.svg'
import Eart from '../assets/eart.svg'
import Moon from '../assets/moon.svg'
import MoonBase from '../assets/moonBase.svg'
import Satelite from '../assets/satelite.svg'
import Stars from '../assets/stars.svg'


const NoEncontrado = () => {
    return (
        <div class="container">
        <div class="content__404">
            <div class="content__top">
                <h2 class="oops">¡Oops!</h2>
                <div class="content__image">
                    <h1 class="txt__404--1 txt__404">4</h1>
                    <img class="img__logo404" src={GalaxyLogo} alt=""/>            
                    <h1 class="txt__404--2 txt__404">4</h1>
                </div>
                <h2 class="description">Page not found</h2>
            </div>
            <div class="content__body">
                <a href="#" class="btn btn-focus">REGRESAR</a>
            </div>

            
        </div>
        <object data={Nube} class="nube1" type="image/svg+xml" width="100" height="100">
        </object>
        <object data={Nube2} class="nube2" type="image/svg+xml" width="100" height="100">
        </object>
        <object data={Nube} class="nube3" type="image/svg+xml" width="100" height="100">
        </object>
        <object data={Nube2} class="nube4" type="image/svg+xml" width="100" height="100">
        </object>
        <object data={Nube} class="nube5" type="image/svg+xml" width="100" height="100">
        </object>
        <object data={Eart}  class="eart" type="image/svg+xml" width="100" height="100">
        </object>
        <object data={Astronauta} class="astronauta" type="image/svg+xml" width="200" height="250">
        </object>
        <object data={Bandera} class="bandera" type="image/svg+xml" width="100" height="200">
        </object>
        <object data={MoonBase} class="moonBase" type="image/svg+xml" width="800" height="120">
        </object>
        
    </div>
    );
}

export default NoEncontrado;