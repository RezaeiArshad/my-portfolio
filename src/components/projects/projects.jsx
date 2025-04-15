import "../../css.files/projects/projects.css"
import "../../css.files/App.css"
import { useScreenSize } from '../../contexts';
import { motion } from 'motion/react';
import { improvingSvg } from "../../assets/titleSvg";


import ProjectsDiv from "./projectsdiv";



function ProjectsPart() {
  const {isMobile} = useScreenSize();


    return (
      <>
        {isMobile ? (
          <>
            <div id="projects-div">
              <motion.div
                initial={{x: 30, opacity: 0}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.5}}
                id="project-side-div"
                className="row offset-1 col-10">
                <div className="col-8">
                 <h4 className="mb-0 h3-clamp">
                   Tell me and I forget. Teach me and I remember. involve me
                      and <span className="highlight">I learn.</span>
                  </h4>
                  <p className="p-clamp forground col-10 mt-3">Benjamin Franklin</p> 
                </div>
                <div 
                  style={{padding: "0", position: "relative"}}
                  className="col-4">
                  {improvingSvg} 
                  <div style={{ marginBottom: "4vh"}}>                   
                    <h4 style={{marginBottom: "-1px"}} className="highlight h4-clamp">3 months</h4>
                    <p className="d-inline forground p-clamp">of </p>
                    <h4 className="d-inline h4-clamp">experience</h4>
                  </div>
                  <h4 style={{marginBottom: "-1px"}} className="highlight h4-clamp">30+</h4>
                  <h4 className="h4-clamp">
                    <a
                      className="ms-3"
                      href="https://github.com/rezaeiarshad"
                      target="_blank"
                    >
                      <svg
                        id="github-icon-projects"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        color="#3CCF91"
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>{" "}
                    projects
                  </h4>
                </div>
              </motion.div>
              <ProjectsDiv />
            </div>
          </>
        ) : (
          <>
            <div id="projects-div">
              <div className="row">
                <div style={{ marginLeft: "15%" }} className="col-7">
                  <div className="row justify-content-center gy-3">
                    <ProjectsDiv />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="col-2"
                  id="project-side-div"
                >
                  <div style={{ marginBottom: "25vh" }}>
                    <h4 className="mb-0 h4-clamp">
                      Tell me and I forget. Teach me and I remember. involve me
                      and <span className="highlight">I learn.</span>
                    </h4>
                    <p className="forground">Benjamin Franklin</p>
                  </div>
                  {improvingSvg}
                  <div style={{ marginBottom: "3vh" }}>
                    <h4 className="highlight">3 months</h4>
                    <p className="d-inline forground">of </p>
                    <h4 className="d-inline">experience</h4>
                  </div>
                  <h4 className="highlight">30+</h4>
                  <h4>
                    <a
                      className="ms-3"
                      href="https://github.com/rezaeiarshad"
                      target="_blank"
                    >
                      <svg
                        id="github-icon-projects"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        color="#3CCF91"
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>{" "}
                    projects
                  </h4>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </>
    );
}

export default ProjectsPart