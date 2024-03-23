import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();


export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(localStorage.getItem("mode") == null ? "light" : "dark");

    useEffect(() => {
        if (localStorage.getItem("mode") === null) {
            localStorage.setItem("mode", "light");
        } else {
            localStorage.setItem("mode", "dark");
        }
    }, [mode])

    return <ModeContext.Provider value={[mode, setMode]}>
        {children}
    </ModeContext.Provider>
}