import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {

    const [lang, setLang] = useState(localStorage.getItem("myLang") == null ? "En" : localStorage.getItem("myLang"));

    useEffect(() => {
        if (localStorage.getItem("myLang") === null) {
            localStorage.setItem("myLang", "En")
        } else {
            localStorage.setItem("myLang", lang);
        }
    }, [lang])

    
    const langModeFunc = () => {
        // setLang(!lang)

        if(lang === "En"){
            setLang("Az")
        }else{
            setLang("En")
        }
    }


    return <LangContext.Provider value={{ lang, setLang, langModeFunc }}>
        {children}
    </LangContext.Provider>
}