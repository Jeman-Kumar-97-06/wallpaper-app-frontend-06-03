import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context){
        throw Error("useAuthContext must be used inside components that have access to AuthContext")
    }
    return context;
};