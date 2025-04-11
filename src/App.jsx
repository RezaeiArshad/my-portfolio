import React, { useState, useEffect, useContext  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/css.files/App.css";
import { ScreenSizeProvider, useScreenSize } from "./contexts";
import { ThemeContextProvider } from "./contexts";
import { DashContext, DashContextProvider, NavBarMenuProvider } from "./contexts";
import TitlePart from './components/title/title'  
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer";
import ProjectsPart from "./components/projects/projects";
import ContactPart from "./components/contact/contact";
import { motion, useScroll } from "motion/react"
import { ParallaxProvider } from "react-scroll-parallax";


function DashBoard() {
  const { scrollYProgress } = useScroll()
  const { isMobile } = useScreenSize();
  const { onDash } = useContext(DashContext);
  const [ toBedisplayed, setDisplay ] = useState(<TitlePart />);

  useEffect(() => {
    if (onDash === "TitlePart") {
      setDisplay(<TitlePart />)
    }
    else if (onDash === "ProjectsPart") {
      setDisplay(<ProjectsPart />)
    }
    else if (onDash === "ContactPart") {
      setDisplay(<ContactPart />)
    }
  }, [onDash])


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
      {isMobile ? (
        <>
          <NavBar />
          {toBedisplayed}
          <Footer />
        </>
      ) : (
        <>
          <NavBar />
          {toBedisplayed}
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
  <>
  <ParallaxProvider>
  <NavBarMenuProvider>
    <DashContextProvider>
      <ThemeContextProvider>
        <ScreenSizeProvider>
          <DashBoard />
        </ScreenSizeProvider>     
      </ThemeContextProvider> 
    </DashContextProvider>     
  </NavBarMenuProvider>    
  </ParallaxProvider>
  </>
  );
}

export default App;
