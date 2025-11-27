import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import {login} from "../services/api.js"
import Header from "../components/Header";
import Cooking from "../images/cooking.png";


const LoginPage = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { saveUser } = useAuth();
    const navigate = useNavigate();

    const handleChangeUser = (e) => setUser(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        login({user_name: user, password}).then (data => {
            localStorage.setItem("token", data.token)
            saveUser(data)
            navigate ("/recipes")
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
            <div className="container-form">
                <div className="user-container">
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
                <div className="user-container">
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
                <button  className="show-pass" onClick={handleChangeShowPassword}>{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}</button>
                </div>
            </div>
            <div className="submit-btn">
            <button className="login-btn" onClick={handleSubmit}>Entrar</button>
            <p className="question">¿Aún no te has registrado? Hazte una cuenta y guarda tus recetas</p>
            <Link to="/signup" className="a-signup">Haz click y registrate</Link>
            </div>
            {error && <div>{error}</div> }
        </form>
        

    </>
    )
}

export default LoginPage;