import React from "react";
import Home from "../pages/Home";
import NoEncontrado from "../pages/NoEncontrado";
import CrearPass from "../containers/CrearPass"
import CrearCuenta from '../containers/CrearCuenta'
import Layout from "../containers/Layout";

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/crearpass' element={<CrearPass/>}/>
                    <Route path='/crearcuenta' element={<CrearCuenta/>}/>
                    <Route path='*' element={<NoEncontrado/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;