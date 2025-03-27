import React, { createContext, useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const ScreenSizeContext = createContext();

export const useScreenSize = () => useContext(ScreenSizeContext);

export const ScreenSizeProvider = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 768});

    return (
        <ScreenSizeContext.Provider value={{isMobile}}>
            {children}
        </ScreenSizeContext.Provider>
    )
}

export const ThemeContext = createContext({
    theme: "dark",
    setTheme: () => {}
});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const EnglishLanguageContext = createContext({
    title: {
        firstPart: "an ever-improving frontend developer specializing in React, dedicated to crafting responsive, user-friendly web applications."
    },
    body: "to be programed" 
})

export const EnglishLanguageContextProvider = ({ children }) => {
    const [EnglishLanguage] = useState({
        title: {
            firstPart: "an ever-improving frontend developer specializing in React, dedicated to crafting responsive, user-friendly web applications."
        },
        body: "to be programed" 
    });

    return (
        <EnglishLanguageContext.Provider value={EnglishLanguage}>
            {children}
        </EnglishLanguageContext.Provider>
    )
}

