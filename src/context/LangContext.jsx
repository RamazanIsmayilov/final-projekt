import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {



    const [lang, setLang] = useState();
    const [langMode, setLangMode] = useState(true);


    const langModeFunc = () => {
        setLangMode(langMode)
        setLang(!lang)
    }


    return <LangContext.Provider value={{ lang, setLang, langMode, setLangMode, langModeFunc }}>
        {children}
    </LangContext.Provider>
}