import React, { createContext, useContext } from 'react';
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