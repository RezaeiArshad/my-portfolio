import "../../css.files/navbar/navbarmenu.css"
import { motion } from "motion/react"
import { NavbarMenuContext } from "../../contexts"
import { DashContext } from "../../contexts"
import { useContext } from "react"

function NavBarMenu() {
  const {setNavbarButtonStatus} = useContext(NavbarMenuContext);
  const {setDash} = useContext(DashContext)


    return (
        <>
          <motion.div 
            id="navbar-menu"
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 0.98, x: 0}}
            exit={{
                opacity: 0,
                x:50,
                transition: {duration: 0.5}
            }}
            >
          <button onClick={() => {
            setDash("TitlePart")
            setNavbarButtonStatus("inactive")
          }} 
            >
            home
          </button>
          <button
            onClick={() => {
              setDash("ProjectsPart")   
              setNavbarButtonStatus("inactive")
            }}
          >
            projects
          </button>
            <button 
              onClick={() => {
                setDash("ContactPart")
                setNavbarButtonStatus("inactive")
              }}
            >
              contact
            </button>
            <p className="text-center">created by <a style={{textDecoration: "none"}} href='https://github.com/rezaeiarshad' target='_blank'>mehdi rezaei</a></p>
          </motion.div>
          <motion.div
            id="navbar-menu-rest"
            initial={{opacity: 0}}
            animate={{opacity: 0.6}}
            exit={{
                opacity: 0,
                transition: {duration: 0.5}
            }}
            onClick={() => setNavbarButtonStatus("inactive")}
            >

          </motion.div>
        </>
    )
}

export default NavBarMenu