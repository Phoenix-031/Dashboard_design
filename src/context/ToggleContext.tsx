/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from "react";
import { useState } from "react";

export interface ToggleContextType {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
}

interface ToggleContextProviderProps {
    children: React.ReactNode
}

export const ToggleContext = createContext<ToggleContextType | null>(null);

const ToggleContextProvider = ({ children }:ToggleContextProviderProps ) => {

    const [toggle, setToggle] = useState(false)
    const [selected, setSelected] = useState('settings');

    return (
        <ToggleContext.Provider value={{toggle, setToggle,selected,setSelected}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContextProvider