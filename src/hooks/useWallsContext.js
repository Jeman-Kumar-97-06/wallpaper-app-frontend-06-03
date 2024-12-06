import { useContext } from "react";
import { WallsContext } from "../contexts/WallsContext";

export const useWallsContext = () => {
    const context = useContext(WallsContext);
    if (!context){
        throw Error("useWallsContext must be used inside components with access to WallsContext");
    }
    return context;
};
