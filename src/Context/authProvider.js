import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider value = {{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider};