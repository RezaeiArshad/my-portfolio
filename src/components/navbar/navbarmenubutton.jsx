import { motion } from "motion/react"
import { NavbarMenuContext } from "../contexts"
import { useContext } from "react"
import { ThemeContext } from "../contexts"

function NavBarMenuButton() {

    const {navbarButtonStatus, setNavbarButtonStatus} = useContext(NavbarMenuContext)
    const {theme} = useContext(ThemeContext)

    return (
        <>
                    <motion.div
              onHoverStart={() => {
                if (navbarButtonStatus === "clicked") {
                  setNavbarButtonStatus("clickedHovered")
                  return
                }
                setNavbarButtonStatus("hovered")}}
              onHoverEnd={() => {
                if (navbarButtonStatus === "clickedHovered" || navbarButtonStatus === "clicked") {
                  setNavbarButtonStatus("clicked")
                  return
                }
                setNavbarButtonStatus("inactive")}}
              onClick={() => {
                if (navbarButtonStatus === "clicked" || navbarButtonStatus === "clickedHovered") {
                  setNavbarButtonStatus("inactive")
                  return
                }
                setNavbarButtonStatus("clicked")}}
              initial={false}
              animate={navbarButtonStatus}
              variants={{
                inactive: {
                  border: `2px solid ${theme === "dark" ? "rgb(90, 90, 90)" : "rgb(55, 55, 55)"}`,
                },
                hovered: {
                  boxShadow: "0 0 10px 2px #00cee4",
                },
                clicked: {
                  border: "none"
                },
                clickedHovered: {
                  boxShadow: "0 0 10px 2px #00cee4",
                }
              }}
              id="navbar-menu-btn"
              className="h2-clamp"
            >
              <motion.svg
                initial={false}
                animate={navbarButtonStatus}
                variants={{
                  inactive: {
                    rotate: 0,
                  },
                  hovered: {
                    rotate: "20deg",
                  },
                  clicked: {
                    rotate: "45deg"
                  },
                  clickedHovered: {
                    rotate: "45deg"
                  }
                }}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
                xmlSpace="preserve"
                id="straightline-svg"
              >
                <g>
                  <g>
                    <path d="M19.4,136.2h87.8h11.5h18.8h6.9h92.3c5.2,0,9.4-3.7,9.4-8.2c0-4.6-4.2-8.2-9.4-8.2h-92.3h-6.9h-18.8h-11.4H19.4c-5.2,0-9.4,3.7-9.4,8.2C10,132.6,14.2,136.2,19.4,136.2z" />
                  </g>
                </g>
              </motion.svg>
              <motion.svg
                initial={false}
                animate={navbarButtonStatus}
                variants={{
                  inactive: {
                    rotate: 0,
                  },
                  hovered: {
                    rotate: "-20deg",
                  },
                  clicked: {
                    rotate: "-45deg"
                  },
                  clickedHovered: {
                    rotate: "-45deg"
                  }
                  
                }}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 256 256"
                enableBackground="new 0 0 256 256"
                xmlSpace="preserve"
                id="straightline-svg"
              >
                <g>
                  <g>
                    <path d="M19.4,136.2h87.8h11.5h18.8h6.9h92.3c5.2,0,9.4-3.7,9.4-8.2c0-4.6-4.2-8.2-9.4-8.2h-92.3h-6.9h-18.8h-11.4H19.4c-5.2,0-9.4,3.7-9.4,8.2C10,132.6,14.2,136.2,19.4,136.2z" />
                  </g>
                </g>
              </motion.svg>
            </motion.div></>
    )
}

export default NavBarMenuButton