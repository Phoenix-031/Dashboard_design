/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext } from "react";
import { useState } from "react";

export interface AppContextType {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
}

interface AppContextProviderProps {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }:AppContextProviderProps ) => {

    const [toggle, setToggle] = useState(false)
    const [selected, setSelected] = useState('Settings');

    return (
        <AppContext.Provider value={{toggle, setToggle,selected,setSelected}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider