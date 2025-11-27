import "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthProvider"

const Header = ()=> {

    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleClickHome = () => {navigate("/")};
    const handleClickLogin = () => {navigate("/login")};
    const handleClickSignup = () => {navigate("/signup")};
    const handleClickRecipes = () => {navigate("/recipes")};
    const handleClickAdd = () => {navigate("/new-recipe")};
    const handleClickLogout = () => logout();
    
    return (
        <nav>
            <ul className="header-nav">
                <li><button className="header-btn" onClick={handleClickHome}>Inicio</button></li>
                <li><button className="header-btn" onClick={handleClickLogin}>Iniciar sesión</button></li>
                <li><button className="header-btn" onClick={handleClickSignup}>Regístrate</button></li>
                <li><button className="header-btn" onClick={handleClickRecipes}>Mis recetas</button></li>
                <li><button className="header-btn" onClick={handleClickAdd}>Añadir receta</button></li>
                <li><button className="header-btn" onClick={handleClickLogout}>Cerrar sesión</button></li>
            </ul>
        </nav>
  
    )

}

export default Header;