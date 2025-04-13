import imageMe from "./projects/photo1742210095.jpeg"
import imageClock from "./projects/425689123-7e93652b-ef23-4b26-bd21-ce890a3e68da.png" 
import imageCalculator from "./projects/Screenshot 2025-04-04 201521.png"
import imageDrum from "./projects/Screenshot 2025-04-05 125921.png"
import imageQuote from "./projects/Screenshot 2025-04-05 130701.png"
import imageMarkdown from "./projects/Screenshot 2025-04-05 131344.png"
import imageBiology from "./projects/Screenshot 2025-04-05 124835.png"
import imageValidator from "./projects/validatorpic.png"
import imageProduct from "./projects/productlanding.png"
import imagePokemon from "./projects/pokemonpic.png"
import imageCash from "./projects/cashpic.png"
import imageRunner from "./projects/runnerpic.png"
import imageGaming from "./projects/gamingpic.png"
import imageBook from "./projects/bookpic.png"
import imagePhone from "./projects/phonepic.png"
import imageStatistical from "./projects/statisticalpic.png"
import imageSorter from "./projects/sorterpic.png"
import imageSpam from "./projects/spampic.png"
import imageNumeral from "./projects/romanpic.png"
import imageTODO from "./projects/todopic.png"
import imageRedbull from "./projects/redbullpic.png"
import imageWatch from "./projects/watchpic.png"
import imagePalindrome from "./projects/palindromepic.png"
import imageFueled from "./projects/fueledpic.png"
import imageDungeon from "./projects/dungeonpic.png"
import imageHouse from "./projects/housepic.jpg"
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
         imageClock,
         imageCalculator,
         imageDrum,
         imageQuote,
         imageMarkdown,
         imageBiology,
         imageValidator,
         imageProduct,
         imagePokemon,
         imageCash,
         imageRunner,
         imageGaming,
         imageHouse,
         imageBook,
         imagePhone,
         imageStatistical,
         imageSorter,
         imageSpam,
         imageNumeral,
         imageTODO,
         imageRedbull,
         imageWatch,
         imagePalindrome,
         imageFueled,
         imageDungeon,
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