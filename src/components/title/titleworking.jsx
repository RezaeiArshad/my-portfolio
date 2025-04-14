import { useScreenSize } from "../../contexts"
import "../../css.files/title/titleworking.css"
import { motion, useScroll, useTransform } from "motion/react"
import { Parallax } from 'react-scroll-parallax';
import { ThemeContext } from "../../contexts";
import { useContext, useEffect, useRef, useState } from 'react';
import imageFFC from "../../assets/ffcpic.png"
import { workingSvg } from "../../assets/titleSvg"
import { globeSvg } from "../../assets/titleSvg"
import { javaScriptSvg } from "../../assets/titleSvg"
import { librariesSvg } from "../../assets/titleSvg"
import { codeWarsSvg } from "../../assets/titleSvg"
import { codeWarsSvgLittle } from "../../assets/titleSvg"


function TitleWorking() {
   const {isMobile} = useScreenSize()

    return (
      <>
        {isMobile ? (
          <div id="title-working">
            <ScrollEffectFfc />
            <ScrollEffectCodeWars />
            <motion.div
             initial={{opacity: 0, x: 100}}
             whileInView={{opacity: 1, x: 0}}
             viewport={{once: false, margin: "-60px"}}
             transition={{duration: 0.4}}
             id="title-working-ffc" className="col-10 offset-1">
              <h2 className="mb-4 text-center h2-clamp">my certifications</h2>
              <div id="working-svg-div">
              {workingSvg}                
              </div>
              <a 
                href="https://www.freecodecamp.org/certification/MehdiRezaeiArshad/responsive-web-design" 
                target="_blank"
                className="offset-2 offset-sm-3 mb-2"
                >
                {globeSvg}
                <h4 className="h4-clamp"> responsive web design</h4>
              </a>
              <a
                href="https://www.freecodecamp.org/certification/MehdiRezaeiArshad/javascript-algorithms-and-data-structures-v8"
                target="_blank"
                className="offset-2 offset-sm-3 mb-2"
              >
                {javaScriptSvg}
                <h4 className="h4-clamp">javascript data structures</h4>
              </a>
              <a
                href="https://www.freecodecamp.org/certification/MehdiRezaeiArshad/front-end-development-libraries"
                target="_blank"
                className="offset-2 offset-sm-3"
              >
                {librariesSvg}
                <h4 className="h4-clamp"> front end development libraries</h4>
              </a>
              <h2 
                className="mt-5 h2-clamp text-center"
                  >my codewars profile</h2>
              <a
                href="https://www.codewars.com/users/RezaeiArshad"
                target="_blank"
                className="ms-auto me-auto"
              >
                {codeWarsSvgLittle}
                <h4 className="h4-clamp">code wars academy</h4>
              </a>
            </motion.div>
           <motion.div 
             id="scroll-background">
            </motion.div>
          </div>
        ) : (
          <div id="title-working" className="offset-md-2 row">
            <motion.div 
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: false, margin: "-60px"}}
              transition={{duration: 0.4}}
              className="col-5">
                <h1 
                  className="h3-clamp">
                  freeCodeCamp <img id="ffc-png" src={imageFFC} />
                </h1>
              <p className="p-clamp col-11">I started with freecodecamp and I trusted the process , But I knew that some of the curriculum was old so I continously updated my knowledge with the help YouTube and AI.</p>
              <h1 className="h3-clamp mt-4">
                CodeWars {codeWarsSvg}
              </h1>
              <p className="p-clamp col-11">Knowing how to create a project isn't enough to land a job , LeetCode is a huge part of an interview. I needed to practice it <span>so...</span></p>
            </motion.div>
            <motion.div
             initial={{opacity: 0, x: 100}}
             whileInView={{opacity: 1, x: 0}}
             viewport={{once: false, margin: "-60px"}}
             transition={{duration: 0.4}}
             id="title-working-ffc" className="col-4 offset-1">
              <h3 className="mb-4">my certifications</h3>
              {workingSvg}
              <a href="https://www.freecodecamp.org/certification/MehdiRezaeiArshad/responsive-web-design" target="_blank">
                {globeSvg}
                <h4 className="p-clamp"> responsive web design</h4>
              </a>
              <a
                href="https://www.freecodecamp.org/certification/MehdiRezaeiArshad/javascript-algorithms-and-data-structures-v8"
                target="_blank"
              >
                {javaScriptSvg}
                <h4 className="p-clamp">javascript data structures</h4>
              </a>
              <a
                href="https://www.freecodecamp.org/certification/MehdiRezaeiArshad/front-end-development-libraries"
                target="_blank"
              >
                {librariesSvg}
                <h4 className="p-clamp"> front end development libraries</h4>
              </a>
              <h3 className="mt-4">my codewars profile</h3>
              <a
                href="https://www.codewars.com/users/RezaeiArshad"
                target="_blank"
              >
                {codeWarsSvgLittle}
                <h4 className="p-clamp">code wars academy</h4>
              </a>
            </motion.div>
          </div>
        )}
      </>
    );
}

export default TitleWorking



function ScrollEffectFfc() {
  const ref = useRef(null);
  const {theme} = useContext(ThemeContext)
  const [currentColor, setCurrentColor] = useState(theme === "dark" ? "#fff" : "#dfdfdf")

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  )

  const backgroundPercent = useTransform(
    scrollYProgress,
    [0.2, 0.65, 1],
    [0, 35, 0 ]
  )  

  useEffect(() => {
    const updateBackground = (value) => {
      const element = document.getElementById("scroll-background");
      if (value === 0) {
        element.style.background = "transparent";  
        return
      }
      if (element) {
        element.style.background = `radial-gradient(circle at center,#0a0a22 0%, #0a0a22 ${value}%, transparent ${(value * 3)}%, transparent 100%)`;
      }
    };
  
    updateBackground(backgroundPercent.get());
  
    const unsubscribe = backgroundPercent.on("change", updateBackground);
    
    return () => unsubscribe();
  }, [backgroundPercent, currentColor]);

  useEffect(() => {
    const newColor = theme === "dark" ? "#fff" : "#dfdfdf"
    setCurrentColor(newColor)  
  }, [theme])

  return (
    <>
      <Parallax speed={-5}>
        <motion.h1 
          ref={ref}
          style={{opacity}}
          className="text-center h2-clamp">
          freeCodeCamp <img id="ffc-png" src={imageFFC} />
        </motion.h1>               
      </Parallax>
      <Parallax speed={5} style={{marginTop: "8vh"}}>
        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{margin: "-100px", once: false}}
          transition={{ duration: 0.5}}
          className="h4-clamp text-center col-8 offset-2">I started with freecodecamp and I trusted the process , But I knew that some of the curriculum was old so I continously updated my knowledge with the help YouTube and AI.</motion.p>
      </Parallax>
    </>
  )
}
{/* ----------------------------------------------------------------- */}

function ScrollEffectCodeWars() {
  const ref = useRef(null);
  const {theme} = useContext(ThemeContext)
  const [currentColor, setCurrentColor] = useState(theme === "dark" ? "#fff" : "#dfdfdf")

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  )

  const backgroundPercent = useTransform(
    scrollYProgress,
    [0.2, 0.6, 0.9],
    [0, 20, 0 ]
  )  

  useEffect(() => {
    const updateBackground = (value) => {
      const element = document.getElementById("scroll-background");
      if (value === 0) {
        element.style.background = "transparent";
        return
      }
      if (element) {
        element.style.background = `radial-gradient(circle at center,rgba(255, 0, 0, 0.3) 0%, rgba(255, 0, 0, 0.3) ${value}%, transparent ${(value * 4)}%, transparent 100%)`;
      }
    };
  
    updateBackground(backgroundPercent.get());
  
    const unsubscribe = backgroundPercent.on("change", updateBackground);
    
    return () => unsubscribe();
  }, [backgroundPercent, currentColor]);

  useEffect(() => {
    const newColor = theme === "dark" ? "#fff" : "#dfdfdf"
    setCurrentColor(newColor)  
  }, [theme])

  return (
    <>
      <Parallax style={{marginTop: "58vh"}} speed={-5}>
        <motion.h1 
          ref={ref}
          style={{opacity}}
          className="h2-clamp text-center">
          CodeWars {codeWarsSvg}
        </motion.h1>              
      </Parallax>
      <Parallax speed={5} style={{marginTop: "8vh"}}>
        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{margin: "-100px", once: false}}
          transition={{ duration: 0.5}}
          className="h4-clamp text-center col-8 offset-2">Knowing how to create a project isn't enough to land a job , LeetCode is a huge part of an interview. I needed to practice it <span>so...</span></motion.p>
      </Parallax>
    </>
  )
}
