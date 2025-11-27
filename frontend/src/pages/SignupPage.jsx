import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider.jsx";
import {signup} from "../services/api.js"
import Header from "../components/Header.jsx";
import Cooking from "../images/cooking.png";

const SignupPage = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { saveUser } = useAuth();
    const navigate = useNavigate();

    const handleChangeUser = (e) => setUser(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeConfirmPassword = (e) => setConfirmPassword(e.target.value)
    const handleChangeShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    };

    const getIsEmailValid = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if(!getIsEmailValid(email)) {
            return setError("Introduce un correo válido");
        }
        if (password !== confirmPassword) {
            return setError("Las contraseñas no coinciden")
        }
        signup({user_name: user, email, password}).then (data => {
            localStorage.setItem("token", data.token)
            saveUser(data)
            navigate ("/")
             })
    }

    return (
        <>
        <Header/>
        <div className="title-container">
            <h1 className="title-page">Recetas Four for Love</h1>
            <img className="cooking-login" src={Cooking}/>
        </div>
        <form className="login-form">
                <div className="user-container">
                    <div className="user-name">
                        <label htmlFor="name" className="login-label">Usuario</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="usuario" 
                            className="login-input"
                            value= {user}
                            onChange={handleChangeUser}
                        />
                    </div>
                    <div className="user-name" >
                        <label htmlFor="mail" className="signup-label">Correo electrónico</label>
                        <input
                            type="text"
                            id="mail"
                            name="mail"
                            placeholder="nombre@correo.com"
                            className="login-input"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div className="user-name" >
                        <label htmlFor="password" className="login-label">Contraseña</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            name="password" 
                            placeholder="********" 
                            className="login-input"
                            value= {password}
                            onChange={handleChangePassword}
                        />
                    </div>
                    <div className="user-name" >
                        <label htmlFor="confirmPassword">Repetir contraseña</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            className="login-input"
                            value={confirmPassword}
                            onChange={handleChangeConfirmPassword}
                        />
                    </div>
                </div>
            <button  className="show-pass" onClick={handleChangeShowPassword}>{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}</button>
            <div className="submit-btn">
            <button className="login-btn" onClick={handleSubmit}>Entrar</button>
            </div>
             {error && <div className="error-text">{error}</div> }
        </form>
        </>
    )
}

export default SignupPage;