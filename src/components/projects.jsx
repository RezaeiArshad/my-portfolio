import "../css.files/projects.css"
import { useScreenSize } from '../contexts';
import { motion } from 'motion/react'

function ProjectsPart() {
  const {isMobile} = useScreenSize()
    return (
      <>
      {isMobile ? <>
        <div id="projects-div"></div>
        </> : <><div id="projects-div">
          <div className="row">
            <div className="offset-md-2 col-9">
              <motion.div 
                initial={{opacity: 0, y:200}}
                animate={{opacity: 1, y:0}}
                transition={{duration: 0.5}}
                className="projects-project col-3">
                <img className="projects-project-img" src="\page-pictures\projects\425689123-7e93652b-ef23-4b26-bd21-ce890a3e68da.png" alt="A picture of my clock" />
                <h3>25 + 5 clock</h3>
                <p className="forground">mini-project</p>
              </motion.div>
            </div>
            <div className="col-2"></div>
          </div>
        </div></>
      }
      </>
    )
}

export default ProjectsPart