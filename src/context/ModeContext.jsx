import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();


export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(localStorage.getItem("myMode") == null ? "light" : localStorage.getItem("myMode"));

    useEffect(() => {

        if (localStorage.getItem("myMode") == null) {
            localStorage.setItem("myMode", "light");
        } else {
            localStorage.setItem("myMode", mode);
        }

        document.body.className = mode;

    }, [mode])

    const modeFunc = () => {
        setMode(!mode)
    }

    return <ModeContext.Provider value={{ mode, setMode, modeFunc }}>
        {children}
    </ModeContext.Provider>
}