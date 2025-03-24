import { useContext, useEffect, useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/css.files/App.css";
import { ScreenSizeProvider, useScreenSize } from "./contexts";
import { DarkThemeContext, DarkThemeContextProvider } from "./contexts";
import { LightThemeContext, LightThemeContextProvider } from "./contexts";
import {
  EnglishLanguageContext,
  EnglishLanguageContextProvider,
} from "./contexts";

const TypingAnimation = (fullText) => {
  const [displayText, setDisplayText] = useState("");
  const typingSpeed = 100;
  useEffect(() => {
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.lenght) {
        setDisplayText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
    return () => clearTimeout(typeText);
  });
  return { displayText };
};

function TitlePart() {
  const { isMobile } = useScreenSize();
  const { title } = useContext(EnglishLanguageContext);
  return (
    <>
      {isMobile ? (
        <div className="row">
          {/* this is for mobile */}
          <img
            className="profile-pic d-block mx-auto img-fluid fadein col-6"
            src="\page-pictures\dark-theme\about-me\altumcode-U0tBTn8UR8I-unsplash.jpg"
          />
          <h1>Hi</h1>
          <h1>I'm Mehdi</h1>
          <button>plus</button>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          {/* this for laptop */}
          <div
            style={{ textAlign: "left" }}
            className="mt-auto mb-auto ms-auto p-0"
          >
            <h2 style={{fontWeight: "bold"}} className="highlight p-0">Hello there, I'm </h2>
            <div className="clo-8">
              <h1 className="name p-0 fade-in ms-auto col-12">Mehdi Rezaei</h1>
            </div>
            
            <p className="col-3 p-0 ms-auto">{title.firstPart}</p>

            
          </div>
        </div>
      )}
    </>
  );
}

function NavBar() {
    const sun = document.getElementById("Capa_1")
    const moon = document.getElementById("Capa_2")  
    
  const changeTheme = () => { 

    sun.classList.add("rotate");
  }

  const handleAnimationEnd = () => {
     console.log("hello")
  }

  return <div id="navbar" className="d-flex mt-2 justify-content-between">
    <h1 className="col-3 text-center" id="header-name">arshad</h1>
    <div className="col-3">
      <button onClick={() => changeTheme()} className="d-block ms-auto h-100">
      <svg onAnimationEnd={handleAnimationEnd} fill="#ffffff" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 207.628 207.628" xml:space="preserve">
<circle cx="103.814" cy="103.814" r="45.868"/>
<path d="M103.814,157.183c-29.427,0-53.368-23.941-53.368-53.368s23.941-53.368,53.368-53.368s53.368,23.941,53.368,53.368
	S133.241,157.183,103.814,157.183z M103.814,65.446c-21.156,0-38.368,17.212-38.368,38.368s17.212,38.368,38.368,38.368
	s38.368-17.212,38.368-38.368S124.97,65.446,103.814,65.446z"/>
<path d="M103.814,39.385c-4.142,0-7.5-3.358-7.5-7.5V7.5c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385
	C111.314,36.027,107.956,39.385,103.814,39.385z"/>
<path d="M103.814,207.628c-4.142,0-7.5-3.358-7.5-7.5v-24.385c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385
	C111.314,204.271,107.956,207.628,103.814,207.628z"/>
<path d="M200.128,111.314h-24.385c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5
	S204.271,111.314,200.128,111.314z"/>
<path d="M31.885,111.314H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5
	S36.027,111.314,31.885,111.314z"/>
<path d="M154.676,60.452c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.242
	c2.929-2.929,7.678-2.93,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.242C158.515,59.72,156.595,60.452,154.676,60.452z"
	/>
<path d="M35.709,179.419c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.243
	c2.929-2.929,7.678-2.929,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.243C39.548,178.687,37.629,179.419,35.709,179.419z
	"/>
<path d="M171.918,179.419c-1.919,0-3.839-0.732-5.303-2.197l-17.243-17.243c-2.929-2.929-2.929-7.678,0-10.606
	c2.929-2.929,7.678-2.929,10.606,0l17.243,17.243c2.929,2.929,2.929,7.678,0,10.606
	C175.757,178.687,173.838,179.419,171.918,179.419z"/>
<path d="M52.952,60.452c-1.919,0-3.839-0.732-5.303-2.197L30.406,41.013c-2.929-2.929-2.929-7.677,0-10.606
	c2.929-2.929,7.678-2.93,10.606,0l17.243,17.242c2.929,2.929,2.929,7.677,0,10.606C56.791,59.72,54.872,60.452,52.952,60.452z"/>
</svg>

<svg fill="#ffffff" id="Capa_2" className="hidden" width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></svg>
      </button>
    </div>
    <button className="col-1">lang</button>
    <button className="col-1">home</button>
    <button className="col-1">projects</button>
    <div className="col-2">
      <button className="h-100 d-block w-50 me-auto">contact</button>
    </div>
    
  </div>;
}

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
  );
}
export default App;
