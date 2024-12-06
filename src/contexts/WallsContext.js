import { createContext,useReducer } from "react";

export const WallsContext = createContext();

export const wallsReducer = (state,action)  => {
    switch (action.type) {
        case "SET_WALLS":
            return {walls : action.payload};
        case "UPLOAD_WALLS":
            return {walls : [action.payload,...state.walls]};
        default :
            return state;
    }
};

export const WallsContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(wallsReducer,{walls:null});
    return (
        <WallsContext.Provider value={{...state,dispatch}}>
            {children}
        </WallsContext.Provider>
    )
}