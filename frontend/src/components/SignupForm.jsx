import React from "react";
import Header from "./Header";
import Cooking from "../images/cooking.png"

const SignupForm = () => {

    return (
    <>
        <Header/>
        <div className="title-container">
            <h1 className="title-page">Recetas Four for Love</h1>
            <img className="cooking-login" src={Cooking}/>
        </div>
        <form className="login-form">
            <div className="user-container">
                <label htmlFor="name" className="login-label">Usuario</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="usuario" 
                    className="login-input"/>
            </div>
            <div className="mail-container">
                <label htmlFor="mail" className="login-label">Correo electrónico</label>
                <input 
                    type="text" 
                    id="mail" 
                    name="mail" 
                    placeholder="usuario@correo.es" 
                    className="login-input"/>
            </div>
            <div className="repeat-mail-container">
                <label htmlFor="repeat-mail" className="login-label">Repite tu correo electrónico</label>
                <input 
                    type="text" 
                    id="repeat-mail" 
                    name="mail" 
                    placeholder="usuario@correo.es" 
                    className="login-input"/>
            </div>
            <div className="pass-container">
                <label htmlFor="password" className="login-label">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="********" 
                    className="login-input"/>
            </div>
            <button className="login-btn">Enviar</button>
        </form>
    </>
    )
}

export default SignupForm;