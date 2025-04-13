import "../../css.files/projects/projects.css"
import "../../css.files/App.css"
import { useScreenSize } from '../../contexts';
import { motion } from 'motion/react';
import { improvingSvg } from "../../assets/titleSvg";
import imageClock from "../../projects/425689123-7e93652b-ef23-4b26-bd21-ce890a3e68da.png" 
import imageCalculator from "../../projects/Screenshot 2025-04-04 201521.png"
import imageDrum from "../../projects/Screenshot 2025-04-05 125921.png"
import imageQuote from "../../projects/Screenshot 2025-04-05 130701.png"
import imageMarkdown from "../../projects/Screenshot 2025-04-05 131344.png"
import imageBiology from "../../projects/Screenshot 2025-04-05 124835.png"
import imageValidator from "../../projects/validatorpic.png"
import imageProduct from "../../projects/productlanding.png"
import imagePokemon from "../../projects/pokemonpic.png"
import imageCash from "../../projects/cashpic.png"
import imageRunner from "../../projects/runnerpic.png"
import imageGaming from "../../projects/gamingpic.png"
import imageBook from "../../projects/bookpic.png"
import imagePhone from "../../projects/phonepic.png"
import imageStatistical from "../../projects/statisticalpic.png"
import imageSorter from "../../projects/sorterpic.png"
import imageSpam from "../../projects/spampic.png"
import imageNumeral from "../../projects/romanpic.png"
import imageTODO from "../../projects/todopic.png"
import imageRedbull from "../../projects/redbullpic.png"
import imageWatch from "../../projects/watchpic.png"
import imagePalindrome from "../../projects/palindromepic.png"
import imageFueled from "../../projects/fueledpic.png"
import imageDungeon from "../../projects/dungeonpic.png"
import imageHouse from "../../projects/housepic.jpg"


const projects = [
  {
    projectName: "maped",
    projectType: "web-app",
    projectImage: imageHouse,
    projectFrame: "typescript react"
  },
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
    projectType: "practice-project",
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
    projectType: "practice-project",
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
    projectType: "practice-project",
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
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageStatistical,
    projectLink: "https://array-methods-practice.vercel.app/"
  }, 
  {
    projectName: "number sorter",
    projectType: "practice-project",
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
    projectType: "practice-project",
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
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageFueled,
    projectLink: "https://fueled-mini-project.vercel.app/"
  },
  {
    projectName: "dungeon",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageDungeon,
    projectLink: "https://dungeon-mini-game.vercel.app/"
  }
]

function ProjectsPart() {
  const {isMobile} = useScreenSize();


    return (
      <>
        {isMobile ? (
          <>
            <div id="projects-div">
              <h1 style={{ marginTop: "500px" }}>
                this is the projects in mobile
              </h1>
            </div>
          </>
        ) : (
          <>
            <div id="projects-div">
              <div className="row">
                <div style={{ marginLeft: "15%" }} className="col-7">
                  <div className="row justify-content-center gy-3">
                    {projects.map((project, index) => (
                      <a
                        key={index}
                        target="_blank"
                        className="col-6 col-md-6 col-lg-4"
                        style={{ textDecoration: "none" }}
                        href={project.projectLink}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.7,
                            ease: "anticipate",
                            delay: index / 4,
                          }}
                          className={
                            project.projectType === "mini-project"
                              ? "projects-project col-12 mini-project"
                              : project.projectType === "practice-project"
                              ? "projects-project col-12 practice-project"
                              : "projects-project col-12 app-project"
                          }
                        >
                          <img
                            className="projects-project-img"
                            src={project.projectImage}
                            alt={`A picture of ${project.projectName}`}
                          />
                          <h4 className="h4-clamp">{project.projectName}</h4>
                          <p
                            style={{ marginTop: "-10px" }}
                            className="p-clamp text-color"
                          >
                            {project.projectFrame}
                          </p>
                          <p className="forground p-clamp">
                            {project.projectType}
                          </p>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={
                              project.projectLink
                                ? "projects-watch-svg"
                                : "projects-incompelete-svg"
                            }
                          >
                            {project.projectLink ? (
                              <svg
                                viewBox="0 0 256 256"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                  <path d="M45 73.264c-14.869 0-29.775-8.864-44.307-26.346c-0.924-1.112-0.924-2.724 0-3.836C15.225 25.601 30.131 16.737 45 16.737c14.868 0 29.775 8.864 44.307 26.345c0.925 1.112 0.925 2.724 0 3.836C74.775 64.399 59.868 73.264 45 73.264zM6.934 45C19.73 59.776 32.528 67.264 45 67.264c12.473 0 25.27-7.487 38.066-22.264C70.27 30.224 57.473 22.737 45 22.737C32.528 22.737 19.73 30.224 6.934 45z" />
                                  <path d="M45 62c-9.374 0-17-7.626-17-17s7.626-17 17-17s17 7.626 17 17S54.374 62 45 62zM45 34c-6.065 0-11 4.935-11 11s4.935 11 11 11s11-4.935 11-11S51.065 34 45 34z" />
                                </g>
                              </svg>
                            ) : (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  width="256"
                                  height="256"
                                  viewBox="0 0 256 256"
                                  xmlSpace="preserve"
                                >
                                  <g
                                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                  >
                                    <path
                                      d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 4 C 22.393 4 4 22.393 4 45 s 18.393 41 41 41 s 41 -18.393 41 -41 S 67.607 4 45 4 z"
                                      transform=" matrix(1 0 0 1 0 0) "
                                      strokeLinecap="round"
                                    />
                                    <circle
                                      cx="30.344"
                                      cy="33.274"
                                      r="5.864"

                                      transform="  matrix(1 0 0 1 0 0) "
                                    />
                                    <circle
                                      cx="59.663999999999994"
                                      cy="33.274"
                                      r="5.864"
                                      transform="  matrix(1 0 0 1 0 0) "
                                    />
                                    <path
                                      d="M 72.181 65.49 c -0.445 0 -0.893 -0.147 -1.265 -0.451 c -7.296 -5.961 -16.5 -9.244 -25.916 -9.244 c -9.417 0 -18.62 3.283 -25.916 9.244 c -0.854 0.7 -2.115 0.572 -2.814 -0.283 c -0.699 -0.855 -0.572 -2.115 0.283 -2.814 C 24.561 55.398 34.664 51.795 45 51.795 c 10.336 0 20.438 3.604 28.447 10.146 c 0.855 0.699 0.982 1.959 0.283 2.814 C 73.335 65.239 72.76 65.49 72.181 65.49 z"
                                      transform=" matrix(1 0 0 1 0 0) "
                                      strokeLinecap="round"
                                    />
                                  </g>
                                </svg>
                                <h3 className="h4-clamp">
                                  hasn't been finished 
                                </h3>
                              </>
                            )}
                          </motion.div>
                        </motion.div>
                      </a>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="col-2"
                  id="contact-side-div"
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