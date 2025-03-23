import { useContext, useEffect, useState } from 'react';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '/src/css.files/App.css';
import { ScreenSizeProvider, useScreenSize } from './contexts';
import { DarkThemeContext, DarkThemeContextProvider } from './contexts';
import { LightThemeContext, LightThemeContextProvider } from './contexts';
import { EnglishLanguageContext,  EnglishLanguageContextProvider} from './contexts';

const TypingAnimation = (fullText) => {
  const[displayText, setDisplayText] = useState("");
  const typingSpeed = 100;
  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.lenght) {
        setDisplayText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
        setTimeout(typeText, typingSpeed)
      }
    }
    typeText();
    return () => clearTimeout(typeText)
  })
  return {displayText}
}

function TitlePart() {
  const {isMobile} = useScreenSize()
  const {title} = useContext(EnglishLanguageContext)
  return (
    <>
    {isMobile ? <div className="row">
      {/* this is for mobile */}
      <img className="profile-pic d-block mx-auto img-fluid fadein col-6" src="public\page-pictures\dark-theme\about-me\altumcode-U0tBTn8UR8I-unsplash.jpg" />
      <h1>Hi</h1>
      <h1>I'm Mehdi</h1>
      <button>plus</button>
    </div> : <div style={{width: "100%"}} className="d-flex row">
      {/* this for laptop */}
        <div style={{textAlign: "right"}} className="col-5 mt-auto mb-auto ms-auto p-0">
          <h1 className="fade-in ms-auto"><span className="highlight">FRONTEND</span> DEVELOPER</h1>
          <p className='col-7 ms-auto' dangerouslySetInnerHTML={{__html: title.firstPart }} />
        </div>
        <div className="col-7 p-0">
          <img className="profile-pic img-fluid me-auto fadein" src="public\page-pictures\dark-theme\about-me\altumcode-U0tBTn8UR8I-unsplash.jpg"/>
        </div>
      </div>}
    </>
  )
}

function NavBar() {

  return (
    <>
    </>
  )
}

function DashBoard() {
  const {isMobile} = useScreenSize()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof isMobile !== 'undefined') {
      setIsLoading(false)
    }
  }, [isMobile])
  return (
    <>
    {isLoading ? <div className="loader"></div> :
      <>
        <TitlePart />
        
      <NavBar />
      </>
    }
    </>
  )
}
function App() {
  return (
    <>
      <EnglishLanguageContextProvider>
        <LightThemeContextProvider>
          <DarkThemeContextProvider>
            <ScreenSizeProvider>
              <DashBoard />
            </ScreenSizeProvider>
          </DarkThemeContextProvider>
        </LightThemeContextProvider>  
      </EnglishLanguageContextProvider>
    </>
  )
}
export default App