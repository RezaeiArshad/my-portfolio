import "../css.files/projects.css"
import "../css.files/App.css"
import { useScreenSize } from '../contexts';
import { motion } from 'motion/react';
import { ParticlesSnow } from "./particles";
import { improvingSvg } from "../assets/titleSvg";
import imageClock from "/page-pictures/projects/425689123-7e93652b-ef23-4b26-bd21-ce890a3e68da.png" 
import imageCalculator from "/page-pictures/projects/Screenshot 2025-04-04 201521.png"
import imageDrum from "/page-pictures/projects/Screenshot 2025-04-05 125921.png"
import imageQuote from "/page-pictures/projects/Screenshot 2025-04-05 130701.png"
import imageMarkdown from "/page-pictures/projects/Screenshot 2025-04-05 131344.png"
import imageBiology from "/page-pictures/projects/Screenshot 2025-04-05 124835.png"
import imageValidator from "/page-pictures/projects/validatorpic.png"
import imageProduct from "/page-pictures/projects/productlanding.png"
import imagePokemon from "/page-pictures/projects/pokemonpic.png"
import imageCash from "/page-pictures/projects/cashpic.png"
import imageRunner from "/page-pictures/projects/runnerpic.png"
import imageGaming from "/page-pictures/projects/gamingpic.png"
import imageBook from "/page-pictures/projects/bookpic.png"
import imagePhone from "/page-pictures/projects/phonepic.png"
import imageStatistical from "/page-pictures/projects/statisticalpic.png"
import imageSorter from "/page-pictures/projects/sorterpic.png"
import imageSpam from "/page-pictures/projects/spampic.png"
import imageNumeral from "/page-pictures/projects/romanpic.png"
import imageTODO from "/page-pictures/projects/todopic.png"
import imageRedbull from "/page-pictures/projects/redbullpic.png"
import imageWatch from "/page-pictures/projects/watchpic.png"
import imagePalindrome from "/page-pictures/projects/palindromepic.png"
import imageFueled from "/page-pictures/projects/fueledpic.png"
import imageDungeon from "/page-pictures/projects/dungeonpic.png"


const projects = [
  {
    projectName: "25 + 5 clock",
    projectType: "mini-project",
    projectImage: imageClock,
    projectFrame: "bootstrap react",
    projectLink: "https://my25-5clock-gxtu.vercel.app/"
  }, 
  {
    projectName: "my calculator",
    projectType: "mini-project",
    projectImage: imageCalculator,
    projectFrame: "react",
    projectLink: "https://my-calculator-five-cyan.vercel.app/"
  },
  {
    projectName: "drum machine",
    projectType: "mini-project",
    projectImage: imageDrum,
    projectFrame: "react", 
    projectLink: "https://drum-machine-project-two.vercel.app/"
  },
  {
    projectName: "random quote machine",
    projectType: "mini-project",
    projectFrame: "bootstrap react",
    projectImage: imageQuote,
    projectLink: "https://random-quote-machine-one-kohl.vercel.app/"
  },
  {
    projectName: "markdown previewer",
    projectType: "mini-project",
    projectFrame: "markdown react",
    projectImage: imageMarkdown,
    projectLink: "https://markdown-previewer-project.vercel.app/"
  },
  {
    projectName: "highschool biology",
    projectType: "mini-project",
    projectFrame: "bootstrap jQuery",
    projectImage: imageBiology,
    projectLink: "https://high-school-biology-project.vercel.app/"
  },
  {
    projectName: "validator form",
    projectType: "mini-project",
    projectFrame: "bootstrap jQuery",
    projectImage: imageValidator,
    projectLink: "https://validator-form-project.vercel.app/"
  },
  {
    projectName: "product landing page",
    projectType: "mini-project",
    projectFrame: "bootstrap",
    projectImage: imageProduct,
    projectLink: "https://product-landing-page-one-delta.vercel.app/#slogan"
  },
  {
    projectName: "pokemon search app",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imagePokemon,
    projectLink: "https://pokemon-search-app-olive.vercel.app/"
  }, 
  {
    projectName: 'cash register',
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageCash,
    projectLink: "https://cash-register-project-pied.vercel.app/"
  },
  {
    projectName: "runner",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageRunner,
    projectLink: "https://runner-object-oriented-programing.vercel.app/"
  }, 
  {
    projectName: "gaming store",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageGaming,
    projectLink: "https://gaming-store-project.vercel.app/",
  }, 
  {
    projectName: "book shop",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageBook,
    projectLink: "https://javascript-class-practice.vercel.app/"
  },
  {
    projectName: "telephone validator",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imagePhone,
    projectLink: "https://telephone-number-vaildator-project.vercel.app/"
  },
  {
    projectName: "statistics calculator (per)",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageStatistical,
    projectLink: "https://array-methods-practice.vercel.app/"
  }, 
  {
    projectName: "number sorter",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageSorter,
    projectLink: "https://algorithms-practice-mini-project.vercel.app/"
  },
  {
    projectName: "spam tester",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageSpam,
    projectLink: "https://regex-practice-mini-project.vercel.app/"
  }, 
  {
    projectName: "roman numeral",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageNumeral,
    projectLink: "https://roman-numeral-project.vercel.app/"
  }, 
  {
    projectName: "TODO app",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageTODO,
    projectLink: "https://todo-app-mini-ptoject.vercel.app/"
  },
  {
    projectName: "redbull drivers",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageRedbull,
    projectLink: "https://redbull-f1-team-cards-mini-project.vercel.app/"
  }, 
  {
    projectName: "my watch",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageWatch,
    projectLink: "https://watch-mini-project.vercel.app/"
  }, 
  {
    projectName: "palindrome checker",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imagePalindrome,
    projectLink: "https://palindrome-checker-eta-two.vercel.app/"
  }, 
  {
    projectName: "fueled",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageFueled,
    projectLink: "https://fueled-mini-project.vercel.app/"
  },
  {
    projectName: "dungeon",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageDungeon,
    projectLink: "https://dungeon-mini-game.vercel.app/"
  }
]

function ProjectsPart() {
  const {isMobile} = useScreenSize()
    return (
      <>
      {isMobile ? <>
        <div id="projects-div"></div>
        </> : <><div id="projects-div">
          <div className="row">
            <div style={{marginLeft: "15%"}} className="col-7">
              <div className="row justify-content-center gy-3">
                {projects.map((project, index) => (
                  <a key={index} target="_blank" className="col-6 col-md-6 col-lg-4" style={{textDecoration: "none"}} href={project.projectLink}>
                    <motion.div
                      initial={{opacity: 0, y:50}}
                      animate={{opacity: 1, y:0}}
                      transition={
                        { duration: 0.7,
                          ease: "anticipate",
                          delay: index / 4
                        }}
                      className="projects-project col-12">
                        <img className="projects-project-img" src={project.projectImage} alt={`A picture of ${project.projectName}`} />
                        <h4 className="h4-clamp">{project.projectName}</h4>
                        <p style={{marginTop: "-10px"}} className="p-clamp text-color">{project.projectFrame}</p>
                        <p className="forground p-clamp">{project.projectType}</p>
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
                ))}
              </div>
            </div>
            <motion.div 
              initial={{opacity: 0, x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.7}}
              className="col-2" id="contact-side-div">
              <div style={{marginBottom: "25vh"}}>
                <h4 className="mb-0 h4-clamp">Tell me and I forget. Teach me and I remember. involve me and <span className="highlight">I learn.</span></h4>
                <p className="forground">Benjamin Franklin</p>
              </div>
              {improvingSvg}
              <div style={{marginBottom: "3vh"}}>
                <h4 className="highlight">3 months</h4>
                <p className="d-inline forground">of </p>
                <h4 className="d-inline">experience</h4>                  
              </div>
              <h4 className="highlight">30+</h4>
              <h4><a className="ms-3" href='https://github.com/rezaeiarshad' target='_blank'>
              <svg id="github-icon-projects" stroke="currentColor" strokeWidth="0" viewBox="0 0 496 512" color="#3CCF91" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </a> projects</h4>
            </motion.div>
          </div>
        </div></>
      }
      </>
    )
}

export default ProjectsPart