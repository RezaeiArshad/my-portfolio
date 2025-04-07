import { useScreenSize } from "../contexts"
import "../css.files/titleworking.css"
import { motion } from "motion/react"
import imageFFC from "../assets/ffcpic.png"
import { workingSvg } from "../assets/titleSvg"
import { globeSvg } from "../assets/titleSvg"
import { javaScriptSvg } from "../assets/titleSvg"
import { librariesSvg } from "../assets/titleSvg"
import { codeWarsSvg } from "../assets/titleSvg"
import { codeWarsSvgLittle } from "../assets/titleSvg"


function TitleWorking() {
   const {isMobile} = useScreenSize()

    return (
      <>
        {isMobile ? (
          <div></div>
        ) : (
          <div id="title-working" className="offset-md-2 row">
            <motion.div 
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: false, margin: "-60px"}}
              transition={{duration: 0.4}}
              className="col-5">
              <h1 className="h3-clamp">
                freeCodeCamp <img id="ffc-png" src={imageFFC} />
              </h1>
              <p className="p-clamp col-11">I started with freecodecamp and I trusted the process , And I knew that some of the curriculum is old so I continuosly updated my knowledge with the help YouTube and AI.</p>
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