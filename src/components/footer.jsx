import { motion } from "motion/react"

function Footer() {
    return (
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          id="footer" className="col-6 ms-auto me-auto">
          <h5 className="p-clamp">this page was created with</h5>
          <h6 className="forground p-clamp">react, motion.js and bootstrap</h6>
          <h6 className="forground p-clamp">v1.01</h6>
        </motion.div>
    )
}

export default Footer