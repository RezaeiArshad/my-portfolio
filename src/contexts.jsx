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

export const DashContext = createContext({
    onDash: "TitlePart",
    setDash: () => {}
})

export const DashContextProvider = ({ children}) => {
    const [onDash, setDash] = useState("TitlePart")
    return (
        <DashContext.Provider value={{onDash, setDash}}>
            {children}
        </DashContext.Provider>
    )
}

export const NavbarMenuContext = createContext({
    navbarButtonStatus: "inactive",
    setNavbarButtonStatus: () => {}
})

export const NavBarMenuProvider = ({ children }) => {
    const [navbarButtonStatus, setNavbarButtonStatus] = useState("inactive")
    return (
        <NavbarMenuContext.Provider value={{navbarButtonStatus, setNavbarButtonStatus}}>
            {children}
        </NavbarMenuContext.Provider>
    )
}