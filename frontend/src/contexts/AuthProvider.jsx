import {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const saveUser = (userData) => setUser(userData);
    const logout = () => {
        navigate("/")
        setUser(null)
        localStorage.removeItem("token")
    };

    return (
        <AuthContext.Provider value= {{user, saveUser, logout}}>{children}</AuthContext.Provider>
    )
}
//eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}