import ParticlesComponent from '../particles.jsx'
import { useScreenSize } from '../../contexts.jsx';
import { motion } from 'motion/react';
import ContactForm from './contactform.jsx';
import imageMe from "../../projects/photo1742210095.jpeg"
import { ThemeContext } from '../../contexts.jsx';
import { useContext } from 'react';
import "../../css.files/contact/contact.css"
import resume from "../../assets/MehdiRezaeiResume.pdf"


function ContactPart() {
const {isMobile} = useScreenSize()
const {theme} = useContext(ThemeContext)

    return (
      <>
        {isMobile ? (
          <div id="contact">
            <ParticlesComponent />
            <motion.div id="contact-profile" className="offset-1 col-10">
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                alt="A picture of me"
                style={{
                  filter: `brightness(${theme === "dark" ? "0.8" : "0.9"})`,
                }}
                src={imageMe}
                className="mx-auto d-block col-10"
              />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                id="contact-profile-name"
                className="offset-3 offset-sm-4 col-6 col-sm-4 mt-3"
              >
                <h4>Mehdi Rezaei</h4>
                <h6 className="forground mb-3">RezaeiArshad</h6>
              </motion.div>
              <h6 className="mt-3 mb-3 offset-3 offset-sm-4">
                looking for a job{" "}
                <span
                  style={{ position: "relative", top: 2 }}
                  className="green-span"
                >
                  <motion.span
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.7, opacity: 0 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{ inset: 0, position: "absolute" }}
                    className="green-span"
                  ></motion.span>
                </span>
              </h6>
              <a
                href="https://maps.app.goo.gl/Z3HBXeMcKmd8wd4XA"
                target="_blank"
                className="offset-sm-4 offset-3 mt-2 forground"
                id="location-contact"
              >
                <svg
                  id="location-svg"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  ariaHidden="true"
                >
                  <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
                </svg>{" "}
                Iran.kermanshah
              </a>
              <a
                className="offset-sm-4 offset-3 forground d-block mt-2"
                id="email-contact"
                href="mailto:mehdirezaeiarshad@gmail.com"
                target="_blank"
              >
                <svg
                  id="email-icon-contact"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>{" "}
                mehdirezaeiarshad
              </a>
              <div className="d-block offset-5 col-sm-4 mb-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/mehdi-rezaeiarshad-b33975326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <svg
                    id="linkedin-icon-contact"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    color="#3CCF91"
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </a>
                <a
                  className="ms-4"
                  href={resume}
                  download
                >
                  <svg
                    id="resume-icon-contact"
                    viewBox="0 0 846.66 846.66"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <style type="text/css"></style>
                    </defs>

                    <g id="Layer_x0020_1">
                      <path d="M539.75 794.68c27.15,0 27.15,41.29 0,41.29l-497.47 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -621.69c0,-5.7 2.31,-10.87 6.04,-14.6l162.3 -162.29c4.03,-4.03 9.31,-6.05 14.59,-6.05l466.89 0c11.4,0 20.65,9.25 20.65,20.65l0 361.36c0,27.16 -41.29,27.16 -41.29,0l0 -340.72 -437.7 0 -150.19 150.2 0 592.5 476.82 0zm-351.21 -181.98c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm496.57 238.25c49.84,0 90.24,40.4 90.24,90.24 0,18.1 -5.33,34.95 -14.5,49.07 37.57,24.93 61.47,66.08 64.13,111.2 1.59,27.06 -39.55,29.47 -41.13,2.42 -2.11,-35.69 -22.61,-67.48 -54.13,-84.24 -13.16,7.5 -28.38,11.78 -44.61,11.78 -17.56,0 -33.95,-5.01 -47.81,-13.69 -33.44,16.12 -55.6,49.04 -57.79,86.15 -1.59,27.05 -42.72,24.64 -41.13,-2.42 2.79,-47.18 28.75,-89.88 69.08,-114.28 -7.99,-13.47 -12.58,-29.19 -12.58,-45.99 0,-49.83 40.4,-90.24 90.23,-90.24zm0 41.29c-27.03,0 -48.94,21.92 -48.94,48.95 0,27.03 21.91,48.94 48.94,48.94 27.03,0 48.95,-21.91 48.95,-48.94 0,-27.03 -21.91,-48.95 -48.95,-48.95z" />
                    </g>
                  </svg>
                </a>
              </div>
            </motion.div>
            <ContactForm />
          </div>
        ) : (
          <div id="contact">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
            >
              <ParticlesComponent />
            </motion.div>
            <div className="row">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                id="contact-profile"
                className="offset-md-2 col-3"
              >
                <img
                  alt="A picture of me"
                  style={{
                    filter: `brightness(${theme === "dark" ? "0.8" : "1"})`,
                  }}
                  src={imageMe}
                  className="col-lg-8 offset-lg-2 col-10 offset-1 mt-4"
                />
                <div
                  id="contact-profile-name"
                  className="col-lg-8 offset-lg-2 offset-1 col-10 mt-3"
                >
                  <h4>Mehdi Rezaei</h4>
                  <h6 className="forground mb-3">RezaeiArshad</h6>
                </div>
                <h6 className="mt-3 mb-3 offset-1 offset-lg-2">
                  looking for a job{" "}
                  <span
                    style={{ position: "relative", top: 2 }}
                    className="green-span"
                  >
                    <motion.span
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 1.7, opacity: 0 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{ inset: 0, position: "absolute" }}
                      className="green-span"
                    ></motion.span>
                  </span>
                </h6>
                <a
                  id="location-contact"
                  href="https://maps.app.goo.gl/Z3HBXeMcKmd8wd4XA"
                  target="_blank"
                  className="forground offset-lg-2 offset-1 mt-2"
                >
                  <svg
                    id="location-svg"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    ariaHidden="true"
                  >
                    <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
                  </svg>{" "}
                  Iran.kermanshah
                </a>
                <a
                  className="offset-lg-2 offset-1 forground d-block"
                  id="email-contact"
                  href="mailto:mehdirezaeiarshad@gmail.com"
                  target="_blank"
                >
                  <svg
                    id="email-icon-contact"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>{" "}
                  mehdirezaeiarshad
                </a>
                <div className="d-block col-4 offset-4 offset-lg-5 mb-3 mt-2">
                  <a
                    href="https://www.linkedin.com/in/mehdi-rezaeiarshad-b33975326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <svg
                      id="linkedin-icon-contact"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      color="#3CCF91"
                      aria-hidden="true"
                      focusable="false"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                    </svg>
                  </a>
                  <a
                    className="ms-3"
                    href={resume}
                    download
                  >
                    <svg
                      id="resume-icon-contact"
                      viewBox="0 0 846.66 846.66"
                      version="1.1"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <style type="text/css"></style>
                      </defs>

                      <g id="Layer_x0020_1">
                        <path d="M539.75 794.68c27.15,0 27.15,41.29 0,41.29l-497.47 0c-11.4,0 -20.64,-9.25 -20.64,-20.65l0 -621.69c0,-5.7 2.31,-10.87 6.04,-14.6l162.3 -162.29c4.03,-4.03 9.31,-6.05 14.59,-6.05l466.89 0c11.4,0 20.65,9.25 20.65,20.65l0 361.36c0,27.16 -41.29,27.16 -41.29,0l0 -340.72 -437.7 0 -150.19 150.2 0 592.5 476.82 0zm-351.21 -181.98c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 91.56c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm0 -274.68c-27.16,0 -27.16,-41.29 0,-41.29l306.67 0c27.16,0 27.16,41.29 0,41.29l-306.67 0zm496.57 238.25c49.84,0 90.24,40.4 90.24,90.24 0,18.1 -5.33,34.95 -14.5,49.07 37.57,24.93 61.47,66.08 64.13,111.2 1.59,27.06 -39.55,29.47 -41.13,2.42 -2.11,-35.69 -22.61,-67.48 -54.13,-84.24 -13.16,7.5 -28.38,11.78 -44.61,11.78 -17.56,0 -33.95,-5.01 -47.81,-13.69 -33.44,16.12 -55.6,49.04 -57.79,86.15 -1.59,27.05 -42.72,24.64 -41.13,-2.42 2.79,-47.18 28.75,-89.88 69.08,-114.28 -7.99,-13.47 -12.58,-29.19 -12.58,-45.99 0,-49.83 40.4,-90.24 90.23,-90.24zm0 41.29c-27.03,0 -48.94,21.92 -48.94,48.95 0,27.03 21.91,48.94 48.94,48.94 27.03,0 48.95,-21.91 48.95,-48.94 0,-27.03 -21.91,-48.95 -48.95,-48.95z" />
                      </g>
                    </svg>
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: +200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                id="contact-profile"
                className="col-5 ms-4"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        )}
      </>
    );
}

export default ContactPart