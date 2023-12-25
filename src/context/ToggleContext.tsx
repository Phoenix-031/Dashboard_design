/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from "react";
import { useState } from "react";

export interface ToggleContextType {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
}

interface ToggleContextProviderProps {
    children: React.ReactNode
}

export const ToggleContext = createContext<ToggleContextType | null>(null);

const ToggleContextProvider = ({ children }:ToggleContextProviderProps ) => {

    const [toggle, setToggle] = useState(false)

    return (
        <ToggleContext.Provider value={{toggle, setToggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider