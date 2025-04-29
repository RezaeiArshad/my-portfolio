import imageMe from "./projects/photo1742210095.jpeg"
import imageBootstrap from "./assets/bootstrappic.png"
import imageJavascript from "./assets/javascriptpic.png"
import imageJquery from "./assets/jquerypic.png"
import imageSass from "./assets/sasspic.png"
import imageCss from "./assets/csspic.png"
import imageReact from "./assets/reactpic.png"
import imageHtml from "./assets/htmlpic.png"
import imageRedux from "./assets/reduxpic.png"
import imageMotion from "./assets/motionpic.png"
import imageFFC from "./assets/ffcpic.png"
import imageTypescript from "./assets/typescriptpic.png"
import { useEffect, useState } from "react"
import App from "./App"
import { motion, AnimatePresence } from "motion/react"
import "./css.files/preloader.css"
import { mehdiSvg } from "./assets/titleSvg"


const Preloader = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        
        const imagePaths = [
         imageMe,
         imageBootstrap,
         imageJavascript,
         imageJquery,
         imageSass,
         imageCss,
         imageReact,
         imageHtml,
         imageRedux,
         imageMotion,
         imageFFC,
         imageTypescript
        ];

        const loadImage = (path) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = path;
                img.onload = () => resolve(path);
                img.onerror = (err) => reject(err)
            });
        };
   
        setTimeout(() => {
          Promise.all(imagePaths.map(path => loadImage(path)))
          .then(() => setImagesLoaded(true))
          .catch(err => {
              console.log("Error loading Images:", err)
              setImagesLoaded(true)
        })
        }, 2000)

    }, []);

   return (
    <>
      <AnimatePresence mode="wait">
        {!imagesLoaded ?   
          <motion.div 
            key="mehdi-svg"
            id="preloader"
            initial={{opacity: 1}}
            animate={{opacity: 1}}
            exit={{
                opacity: 0,
                transition: {duration: 0.5}
            }}
            className="h1-clamp"
            >
            {mehdiSvg}
          </motion.div>
            : 
          <App />
        }        
      </AnimatePresence>
    </>
   )
}

export default Preloader