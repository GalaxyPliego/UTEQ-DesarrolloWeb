import React from "react"
import '../styles/CrearPass.scss';

import ForgotPass from '../assets/forgot_password.svg';

const CrearPass = () => {
  return (
    <section className="container">
      <div className="content__forgot-pass bg-container">
        <div className="container__img">
          <img
            className="img__forgot-pass"
            src={ForgotPass}
            alt=""
          />
        </div>
        <div className="content__title">
          <h1>¿Olvidaste tu contraseña?</h1>
        </div>
        <div className="content__subtitle">
          <p>No te preocupes, te mandaremos un correo para ayudarte.</p>
        </div>
        <div className="login__form">
          <form action="">
            <div className="content__email content__form">
              <label className="label" for="correoElectronico labels">
                Correo electrónico
              </label>
              <input
                type="text"
                className="input__primary input__primary--focus"
                placeholder="tucorreo@gmail.com"
              />
            </div>
            <input
              type="submit"
              className="btn__login btn__primary btn__primary--hover buton__login"
              value="RECUPERAR CONTRASEÑA"
            />
          </form>
        </div>
        <div className="btn__regresar">
          <box-icon
            className="arrow__icon"
            color="grey"
            name="arrow-back"
          ></box-icon>
          <a href="index.html" className="link link__regresar">
            Regresar
          </a>
        </div>
      </div>
    </section>
  );
};

export default CrearPass;
