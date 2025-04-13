import { useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useScreenSize } from "../../contexts";
import { DashContext, NavbarMenuContext } from "../../contexts";
import "../../css.files/navbar/navbar.css"
import NavBarMenu from "./navbarmenu";
import ChangeThemeButton from "./navbarchangetheme";
import NavBarMenuButton from "./navbarmenubutton";


function NavBar() {
  const {setDash} = useContext(DashContext)
  const {isMobile} = useScreenSize();
  const {navbarButtonStatus} = useContext(NavbarMenuContext)


  return (
    <>
      {isMobile ? (
        <motion.div
          id="navbar"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ChangeThemeButton />
          <div className="col-8  text-center">
            <h1
              id="header-name"
              onClick={() => setDash("TitlePart")}
              className=" h2-clamp"
            >
              arshad
            </h1>
          </div>

          <div className="col-2 p-0" id="navbar-menu-btn-div">
           <NavBarMenuButton />
          </div>
          <AnimatePresence mode="wait">
            {navbarButtonStatus === "clicked" || navbarButtonStatus === "clickedHovered" ? 
            <>
              <NavBarMenu />          
            </>
               : 
              null}
          </AnimatePresence> 
        </motion.div>   

      ) : (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          id="navbar"
          className="d-flex mt-2 justify-content-between"
        >
          <h1
            className="col-3 text-center"
            id="header-name"
            onClick={() => setDash("TitlePart")}
          >
            arshad
          </h1>
          <div className="col-3">
            <ChangeThemeButton />
          </div>
          <button onClick={() => setDash("TitlePart")} className="col-1">
            home
          </button>
          <button
            onClick={() => setDash("ProjectsPart")}
            className="col-1"
          >
            projects
          </button>
          <div onClick={() => setDash("ContactPart")} className="col-2">
            <button 
              className="h-100 d-block w-50 me-auto"
            >
              contact
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}




export default NavBar