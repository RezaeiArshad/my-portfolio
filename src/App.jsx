import { useEffect, useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/css.files/App.css";
import { ScreenSizeProvider, useScreenSize } from "./contexts";
import {EnglishLanguageContext,EnglishLanguageContextProvider} from "./contexts";
import { ThemeContext, ThemeContextProvider } from "./contexts";
import TitlePart from './components/title'  
import NavBar from "./components/navbar";


function DashBoard() {
  const { isMobile } = useScreenSize();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof isMobile !== "undefined") {
      setIsLoading(false);
    }
  }, [isMobile]);
  return (
    <>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <NavBar />
          <TitlePart />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <>
    <ThemeContextProvider>
      <EnglishLanguageContextProvider>
            <ScreenSizeProvider>
              <DashBoard />
            </ScreenSizeProvider>
      </EnglishLanguageContextProvider>      
    </ThemeContextProvider>
    </>
  );
}

export default App;
