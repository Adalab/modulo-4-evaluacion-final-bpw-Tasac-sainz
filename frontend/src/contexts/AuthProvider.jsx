import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const saveUser = (userData) => setUser(userData);
    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value= {{user, saveUser, logout}}>{children}</AuthContext.Provider>
    )
}
//eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}