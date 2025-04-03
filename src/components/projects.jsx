import "../css.files/projects.css"
import "../css.files/App.css"
import { useScreenSize } from '../contexts';
import { easeOut, motion } from 'motion/react'

function ProjectsPart() {
  const {isMobile} = useScreenSize()
    return (
      <>
      {isMobile ? <>
        <div id="projects-div"></div>
        </> : <><div id="projects-div">
          <div className="row">
            <div className="offset-md-2 col-9">
              <div className="row">
              <a className="col-3" style={{textDecoration: "none"}} href="https://play.typeracer.com/">
                <motion.div
                  initial={{opacity: 0, y:100}}
                  whileInView={{opacity: 1, y:0}}
                  viewport={{once: false, margin: "-60px"}}
                  transition={{duration: 0.5, ease: "easeOut"}}
                  className="projects-project col-12">
                   <img className="projects-project-img" src="\page-pictures\projects\425689123-7e93652b-ef23-4b26-bd21-ce890a3e68da.png" alt="A picture of my clock" />
                  <h4 className="h4-clamp">25 + 5 clock</h4>
                  <p className="forground p-clamp">mini-project</p>
                  <motion.div 
                  initial={{opacity: 0}}
                  whileHover={{opacity: 1}}
                  transition={{duration: 0.3, ease: "easeOut"}}
                  className="projects-watch-svg">
                  <svg
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path
                    d="M45 73.264c-14.869 0-29.775-8.864-44.307-26.346c-0.924-1.112-0.924-2.724 0-3.836C15.225 25.601 30.131 16.737 45 16.737c14.868 0 29.775 8.864 44.307 26.345c0.925 1.112 0.925 2.724 0 3.836C74.775 64.399 59.868 73.264 45 73.264zM6.934 45C19.73 59.776 32.528 67.264 45 67.264c12.473 0 25.27-7.487 38.066-22.264C70.27 30.224 57.473 22.737 45 22.737C32.528 22.737 19.73 30.224 6.934 45z"
                     />
                    <path
                    d="M45 62c-9.374 0-17-7.626-17-17s7.626-17 17-17s17 7.626 17 17S54.374 62 45 62zM45 34c-6.065 0-11 4.935-11 11s4.935 11 11 11s11-4.935 11-11S51.065 34 45 34z"
                     />
                     </g>
                   </svg>
                  </motion.div>
                </motion.div> 
              </a>  
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div></>
      }
      </>
    )
}

export default ProjectsPart