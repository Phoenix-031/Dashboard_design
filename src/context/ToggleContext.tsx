/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from "react";
import { useState } from "react";

export interface ToggleContextType {
    toggle : boolean,
    setToggle : React.Dispatch<React.SetStateAction<boolean>>,
}

export const ToggleContext = createContext<ToggleContextType | null>(null);

const ToggleContextProvider = ({ children } : {children : React.ReactNode}) => {

    const [toggle,setToggle] = useState<boolean>(false)
    
    return(
        <ToggleContext.Provider value={{toggle,setToggle}}>
            {children}
        </ToggleContext.Provider>
    )   
}

export default ToggleContextProvider