import React from "react";                              
import { View,Text } from "react-native";

const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={{user: "sonny",}}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return React.useContext(AuthContext);
}