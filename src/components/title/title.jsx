import { useScreenSize } from '../../contexts';
import { motion } from 'motion/react';
import { useAnimationFrame } from "motion/react"
import { useRef } from "react";
import TitleFrameWorks from './titleframeworks';
import TitleWorking from './titleworking';
import TitleName from './titlename';
import { Parallax } from 'react-scroll-parallax';


function UseAnimationFrame() {
  const ref = useRef(null)
  useAnimationFrame((t) => {
      if (!ref.current) return
      const rotate = Math.sin(t / 10000) * 200
      const y = (1 + Math.sin(t / 1000)) * -50
      ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })
  return (
      <motion.div 
      initial={{opacity: 0, y: 200}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{ once: false, margin: "-10px"}}
      transition={{duration: 1}}
      style={{zIndex: -3}}
      className="container col-12">
          <div className="cube" ref={ref}>
              <div className="side front" />
              <div className="side left" />
              <div className="side right" />
              <div className="side top" />
              <div className="side bottom"></div>
              <div className="side middle"><svg fill="none" strokeLinecap="square" strokeMiterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(8.964 4.2527)" fillRule="evenodd" stroke="" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="4">
                <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
                <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
                <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
                <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
                <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
                <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
                </g>
               </svg></div>
              <div className="side back" />
          </div>
      </motion.div>
  )
}

function TitlePart() {
  const { isMobile } = useScreenSize();
  return (
    <>
      {isMobile ? (
        <>
          {/* this is for mobile */}
          <TitleName />
          <TitleWorking />
          <div style={{marginTop: "45vh"}} id='title-improving'>
            <UseAnimationFrame />              
            <motion.h1 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: false, margin: "-100px"}}
              transition={{ duration: 1}}
              className='text-center h1-clamp mt-5'
              style={{zIndex: 2}}
              >Ever-improving</motion.h1>
              <Parallax speed={5}>
                <motion.h4
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  viewport={{once: false, margin: "-150px"}}
                  transition={{ duration: 1}}
                  className="col-8 offset-2 mt-4"
                  >I know technology moves fast but I'm faster , for my next ambition I'll learn <span className="highlight">Three.js</span>. . .</motion.h4>
              </Parallax>
            <TitleFrameWorks /> 
          </div>
        </>
      ) : (
        <div>
          <TitleName />
          <TitleWorking />
          <div id='title-improving'>
            <div className="row" style={{width: "100%"}}>
              <div className='offset-md-2 col-5'>
                <motion.h1 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: false, margin: "+50px"}}
                transition={{ duration: 1}}
                className='col-12 p-0 h2-clamp'>Ever-improving</motion.h1>
                <motion.h4
                initial={{opacity: 0, x: 200}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false, margin: "+50px"}}
                transition={{ duration: 1}}
                className="col-9 forground"
                >I know <span className="text-color">technology moves fast</span> but I'm <span className="text-color">faster</span> , for my next ambition I'll learn <span className="highlight">Three.js</span>. . .</motion.h4>
              </div>
              <div className="col-3">
              <UseAnimationFrame />
            </div>
          </div>
        </div>
          <TitleFrameWorks />
        </div>
      )}
    </>
  );
}

export default TitlePart