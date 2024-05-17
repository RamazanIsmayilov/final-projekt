import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {

    const [lang, setLang] = useState(localStorage.getItem("myTranslate") === "En" ? false : true);
    
    const langModeFunc = () => {
        setLang(!lang)
    }


    return <LangContext.Provider value={{ lang, setLang, langModeFunc }}>
        {children}
    </LangContext.Provider>
}