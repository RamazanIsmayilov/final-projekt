import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();


export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("myMode") == null) {
            localStorage.setItem("myMode", "light")
        } else {
            localStorage.setItem("myMode", mode)
        }
    })

    const modeFunc = () => {
        setMode(!mode)
    }

    return <ModeContext.Provider value={{ mode, setMode, modeFunc }}>
        {children}
    </ModeContext.Provider>
}