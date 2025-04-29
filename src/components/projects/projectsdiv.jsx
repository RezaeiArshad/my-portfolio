import "../../css.files/projects/projectsdiv.css"
import { motion } from "motion/react"
import { useScreenSize } from "../../contexts"
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
import imageF1 from "../../projects/f1pic.jpg"


const projects = [
  {
    projectName: "MyF1",
    projectType: "web-app",
    projectImage: imageF1,
    projectFrame: "typescript react",
    projectDescription: "A web app to provide access to formula 1's races for free using OpenF1's API"
  },
  {
    projectName: "25 + 5 clock",
    projectType: "mini-project",
    projectImage: imageClock,
    projectFrame: "bootstrap react",
    projectLink: "https://my25-5clock-gxtu.vercel.app/",
    projectDescription: "The last project to complete for the freeCodeCamp curriculum"
  }, 
  {
    projectName: "my calculator",
    projectType: "mini-project",
    projectImage: imageCalculator,
    projectFrame: "react",
    projectLink: "https://my-calculator-five-cyan.vercel.app/",
    projectDescription: "The penultimate project for finishing The freeCodeCamp FrontEnd curriculum"
  },
  {
    projectName: "drum machine",
    projectType: "mini-project",
    projectImage: imageDrum,
    projectFrame: "react", 
    projectLink: "https://drum-machine-project-two.vercel.app/",
    projectDescription: "A really straight forward project in The curriculum to create a drum machine"
  },
  {
    projectName: "random quote machine",
    projectType: "mini-project",
    projectFrame: "bootstrap react",
    projectImage: imageQuote,
    projectLink: "https://random-quote-machine-one-kohl.vercel.app/",
    projectDescription: "A not so random quote machine . I wanted to make it random But I couldn't find a working API"
  },
  {
    projectName: "markdown previewer",
    projectType: "mini-project",
    projectFrame: "markdown react",
    projectImage: imageMarkdown,
    projectLink: "https://markdown-previewer-project.vercel.app/",
    projectDescription: "A project to feature Markdown before this I had no idea what Mark"
  },
  {
    projectName: "highschool biology",
    projectType: "mini-project",
    projectFrame: "bootstrap jQuery",
    projectImage: imageBiology,
    projectLink: "https://high-school-biology-project.vercel.app/",
    projectDescription: "One of the older projects that I needed to complete in the curriculum It's a summary of highschool's biology"    
  },
  {
    projectName: "validator form",
    projectType: "practice-project",
    projectFrame: "bootstrap jQuery",
    projectImage: imageValidator,
    projectLink: "https://validator-form-project.vercel.app/",
    projectDescription: "I just learned about jQuey and I neede some practice so I created this responsive form"
  },
  {
    projectName: "product landing page",
    projectType: "mini-project",
    projectFrame: "bootstrap",
    projectImage: imageProduct,
    projectLink: "https://product-landing-page-one-delta.vercel.app/#slogan",
    projectDescription: "I project to complete from the Responsive Web Design curriculum and my first project with bootstrap"
  },
  {
    projectName: "pokemon search app",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imagePokemon,
    projectLink: "https://pokemon-search-app-olive.vercel.app/",
    projectDescription: "The last project in The javascript curriculum and It was the first project made with an API"
  }, 
  {
    projectName: 'cash register',
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageCash,
    projectLink: "https://cash-register-project-pied.vercel.app/",
    projectDescription: "A project to complete for the javascript curriculum , And I made life really difficult for my self with it"
  },
  {
    projectName: "runner",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageRunner,
    projectLink: "https://runner-object-oriented-programing.vercel.app/",
    projectDescription: "I finally learned how to create animations with canvas so I made this runner app"
  }, 
  {
    projectName: "gaming store",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageGaming,
    projectLink: "https://gaming-store-project.vercel.app/",
    projectDescription: "I learned about the classlist property on elements so created this with adding classes to elements"
  }, 
  {
    projectName: "book shop",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageBook,
    projectLink: "https://javascript-class-practice.vercel.app/",
    projectDescription: "I just learned about classes in javascript but I didn't feel comfortable with them so ..."
  },
  {
    projectName: "telephone validator",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imagePhone,
    projectLink: "https://telephone-number-vaildator-project.vercel.app/",
    projectDescription: "I just needed to make a Regex but I decided to make a phone look alike with local storage"
  },
  {
    projectName: "statistics calculator (per)",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageStatistical,
    projectLink: "https://array-methods-practice.vercel.app/",
    projectDescription: "I did complete the statistics calculator in freeCodeCamp so I created one of my own"
  }, 
  {
    projectName: "number sorter",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageSorter,
    projectLink: "https://algorithms-practice-mini-project.vercel.app/",
    projectDescription: "I wanted to practice all the sorting methods so I did this"
  },
  {
    projectName: "spam tester",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageSpam,
    projectLink: "https://regex-practice-mini-project.vercel.app/",
    projectDescription: "Just needed some practice with regex, so created a spam tester to match some words"
  }, 
  {
    projectName: "roman numeral",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageNumeral,
    projectLink: "https://roman-numeral-project.vercel.app/",
    projectDescription: "The second project to complete in the javascript curriculum It's an App to turn numbers into roman numeral"
  }, 
  {
    projectName: "TODO app",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imageTODO,
    projectLink: "https://todo-app-mini-ptoject.vercel.app/",
    projectDescription: "A pretty standard project to make for any developer"
  },
  {
    projectName: "redbull drivers",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageRedbull,
    projectLink: "https://redbull-f1-team-cards-mini-project.vercel.app/",
    projectDescription: "I completed the football player cards lesson And I made a version of my own"
  }, 
  {
    projectName: "my watch",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageWatch,
    projectLink: "https://watch-mini-project.vercel.app/",
    projectDescription: "I completed a lesson to work with the Time object So I did this to get some practice"
  }, 
  {
    projectName: "palindrome checker",
    projectType: "mini-project",
    projectFrame: "javascript",
    projectImage: imagePalindrome,
    projectLink: "https://palindrome-checker-eta-two.vercel.app/",
    projectDescription: "The first project to complete in freeCodeCamp javascript curriculum"
  }, 
  {
    projectName: "fueled",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageFueled,
    projectLink: "https://fueled-mini-project.vercel.app/",
    projectDescription: "I made this because I needed practice with literal templates, regex, and some other functions so..."
  },
  {
    projectName: "dungeon",
    projectType: "practice-project",
    projectFrame: "javascript",
    projectImage: imageDungeon,
    projectLink: "https://dungeon-mini-game.vercel.app/",
    projectDescription: "My first ever project with javascript. I completed the RPG game in freeCodeCamp but made it better by giving it pictures"
  }
]

function ProjectsDiv() {
    const {isMobile} = useScreenSize() 


    return (
      <>
        {isMobile ? (
          <div style={{ marginTop: "10vh" }}>
            {projects.map((project, index) => (
              <a
                key={index}
                target="_blank"
                style={{ textDecoration: "none"}}
                href={project.projectLink}
                className="col-8 offset-2 project-a d-block"
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
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: "20px 20px 0 0",
                    }}
                    className="project-upper-div"
                  >
                    <motion.div
                      initial={{ scale: 1}}
                      whileHover={{ scale: 1.05}}
                      className="projects-project-img-container"
                    >
                      <motion.div
                        initial={{ opacity: 0}}
                        whileHover={{ opacity: 1}}
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
                              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
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
                            <h4 className="p-clamp">hasn't been finished</h4>
                          </>
                        )}
                      </motion.div>
                        <img
                          className="projects-project-img"
                          src={project.projectImage}
                          alt={`A picture of ${project.projectName}`}
                          loading="lazy"
                        />  
                      
                    </motion.div>
                  </div>
                  <h4
                    style={{
                      marginTop: "10px",
                      width: "90%",
                      marginBottom: "3px",
                    }}
                    className="h3-clamp"
                  >
                    {project.projectName}
                  </h4>
                  <h4
                    style={{ marginBottom: "20px", width: "90%" }}
                    className="text-color p-clamp"
                  >
                    {project.projectDescription}
                  </h4>
                  <p
                    style={{ display: "inline" }}
                    className="forground p-clamp"
                  >
                    {project.projectType}
                  </p>
                  <div
                    style={{ width: "95%", display: "inline" }}
                    className="text-color mt-1"
                  >
                    {project.projectFrame.split(" ").map((frame, index) => (
                      <div
                        style={{ display: "inline", marginLeft: "5%" }}
                        className="p-clamp project-frame"
                        key={index}
                      >
                        {frame}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        ) : (
          <>
            {/* this is for laptop */}
            {projects.map((project, index) => (
              <a
                key={index}
                target="_blank"
                className="col-6 col-md-6 col-xxl-4"
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
                  <h4
                    style={{
                      marginTop: "10px",
                      width: "90%",
                      marginBottom: "3px",
                    }}
                    className="h4-clamp"
                  >
                    {project.projectName}
                  </h4>
                  <h4
                    style={{ marginBottom: "20px", width: "90%" }}
                    className="text-color p-clamp"
                  >
                    {project.projectDescription}
                  </h4>
                  <p className="forground p-clamp">{project.projectType}</p>
                  <div style={{ width: "95%" }} className="text-color mt-1">
                    {project.projectFrame.split(" ").map((frame, index) => (
                      <div
                        style={{ display: "inline", marginLeft: "5%" }}
                        className="p-clamp project-frame"
                        key={index}
                      >
                        {frame}
                      </div>
                    ))}
                  </div>
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
                          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
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
                        <h4 className="p-clamp">hasn't been finished</h4>
                      </>
                    )}
                  </motion.div>
                </motion.div>
              </a>
            ))}
          </>
        )}
      </>
    );
}

export default ProjectsDiv