import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Sourav Ghosh",
        email: "placement.souarv@gmail.com",
        company: "Shareby",
        isAgency: "Yes"
    });

    const login = (userData) => {
        setUser(userData)
    }

    return(
        <AuthContext.Provider value={{user,login}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);