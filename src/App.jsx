import { useEffect, useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/css.files/App.css";
import { ScreenSizeProvider, useScreenSize } from "./contexts";
import {EnglishLanguageContext,EnglishLanguageContextProvider} from "./contexts";
import { ThemeContext, ThemeContextProvider } from "./contexts";
import TitlePart from './components/title'  
import NavBar from "./components/navbar";
import { motion, useScroll } from "motion/react"


function DashBoard() {
  const { scrollYProgress } = useScroll()
  const { isMobile } = useScreenSize();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof isMobile !== "undefined") {
      setIsLoading(false);
    }
  }, [isMobile]);
  return (
    <>
    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    bottom: 0,
                    left: "10%",
                    right: "10%",
                    height: 10,
                    originX: 0,
                    

                }}
            />
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
