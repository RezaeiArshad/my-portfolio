import "../css.files/titleframeworks.css"
import {motion} from "motion/react"
import { useScreenSize } from "../../contexts"
import imageBootstrap from "../assets/bootstrappic.png"
import imageJavascript from "../assets/javascriptpic.png"
import imageJquery from "../assets/jquerypic.png"
import imageSass from "../assets/sasspic.png"
import imageCss from "../assets/csspic.png"
import imageReact from "../assets/reactpic.png"
import imageHtml from "../assets/htmlpic.png"
import imageRedux from "../assets/reduxpic.png"
import imageMotion from "../assets/motionpic.png"


const frameworks = [
    {
      name: "bootstrap",
      image: imageBootstrap
    },
    {
      name: "css",
      image: imageCss
    },
    {
      name: "jQuery",
      image: imageJquery
    }, 
    {
      name: "scss",
      image: imageSass
    },
    {
      name: 'javascript',
      image: imageJavascript      
    }, 
    {
      name: "react",
      image: imageReact
    },
    {
      name: 'html5',
      image: imageHtml
    },
    {
      name: "redux",
      image: imageRedux
    },
    {
      name: "motion",
      image: imageMotion
    }
]

function TitleFrameWorks() {
    const {isMobile} = useScreenSize()
  return (
    <>
      {isMobile ? <div></div> : 
      <div id="title-frameworks">
           <h2 className="text-center">my frameworks</h2> 
           <div className="col-9 mx-auto mt-5 row gy-5 justify-content-center">
           {frameworks.map((framework, index) => (
            <motion.div 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: false, margin: "+70px"}}
              transition={{duration: 0.2 , delay: index / 5}}
              className="col-6 col-md-4 col-lg-3 text-center" key={index} id="title-frameworks-framework">
              <img className="img-fluid" src={framework.image} />
              <h3 className="h4-clamp"> {framework.name}</h3>
            </motion.div>
           ))}
           </div>
      </div>}
    </>
  )
}

export default TitleFrameWorks