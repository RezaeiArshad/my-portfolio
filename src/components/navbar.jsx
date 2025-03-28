import { useRef, useContext } from "react";
import { ThemeContext } from "../contexts";
import { motion } from "motion/react"


function NavBar() {
    const root = document.documentElement;
    const sunRef = useRef(null)
    const moonRef = useRef(null) 
    const {theme, setTheme} = useContext(ThemeContext)


    
  const changeTheme = () => { 
    if (theme === "dark") {
      sunRef.current?.classList.add("fadeout")
      setTheme("light")
    }
    else {
      moonRef.current?.classList.add("fadeout")
      setTheme("dark")
    }
  }

  const handleAnimationEnd = (element) => {
    if (element === "sun" && theme === "light") {
      sunRef.current?.classList.remove("fadeout")
      sunRef.current?.classList.add("hidden")
      root.style.setProperty('--background-color', 'white')
      root.style.setProperty('--forground-color', 'gray')
      root.style.setProperty('--color', 'black')
      root.style.setProperty('--highlight-color', '#00cee4')
      moonRef.current?.classList.remove("hidden")
      moonRef.current?.classList.add("fadein")
    }
    else if (element === "sun" && theme !== "light") {
      sunRef.current?.classList.remove("fadein")
      sunRef.current?.classList.remove("fadeout")
    }
    else if (element === "moon" && theme === "dark") {
      moonRef.current?.classList.remove("fadeout")
      moonRef.current?.classList.add("hidden");
      root.style.setProperty('--background-color', '#000000')
      root.style.setProperty('--forground-color', 'gray')
      root.style.setProperty('--color', 'white')
      root.style.setProperty('--highlight-color', '#00cee4')
      sunRef.current?.classList.remove("hidden");
      sunRef.current?.classList.add("fadein")
    }
    else if (element === "moon" && theme !== "dark") {
      moonRef.current?.classList.remove("fadein")
      moonRef.current?.classList.remove("fadeout")
    }
  }
  return <motion.div
    initial={{y: -50}}
    animate={{y: 0}}
    transition={{duration: 0.7}}
    id="navbar" className="d-flex mt-2 justify-content-between">
    <h1 className="col-3 text-center" id="header-name">arshad</h1>
    <div className="col-3">
      <button id="theme-button" onClick={() => changeTheme()} className="d-block ms-auto h-100">
      <svg ref={sunRef} onAnimationEnd={() => handleAnimationEnd("sun")} fill="#ffffff" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 207.628 207.628" xmlSpace="preserve">
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

<svg ref={moonRef} onAnimationEnd={() => handleAnimationEnd("moon")} fill="#000000" id="Capa_2" className="hidden" width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></svg>
      </button>
    </div>
    <button className="col-1">home</button>
    <button className="col-1">projects</button>
    <div className="col-2">
      <span></span>
      <button className="h-100 d-block w-50 me-auto">contact</button>
    </div>
    
  </motion.div>;
}

export default NavBar