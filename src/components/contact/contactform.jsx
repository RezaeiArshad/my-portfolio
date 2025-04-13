import React from "react";
import "../../css.files/contact/contactForm.css"
import "../../css.files/App.css"
import { motion } from "motion/react";

export default function ContactForm() {
    const [result, setResult] = React.useState();
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult(<>
        <motion.p 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        exit={{opacity: 0}}
        className="d-inline m-0 p-clamp" id="contact-form-message">sending message</motion.p>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        exit={{opacity: 0}}
        className="loader"></motion.div>
        </>);
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5500f17b-86db-4842-aced-133ff7933509");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult(<>
          <motion.p 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2}}
          exit={{opacity: 0}}
          className="d-inline m-0 p-clamp" id="contact-form-message">Message sent</motion.p>
          <motion.div 
          ><svg id="contact-checkmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <motion.path 
            initial={{pathLength: 0}}
            animate={{pathLength: 1}}
            transition={{duration: 2}}
            stroke="#4caf50"
            strokeWidth="2"
            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></motion.div>
          </>);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div id="form-div">
        <form id="form" style={{height: "100%"}} onSubmit={onSubmit}>
            <div style={{height: "13%"}} className="d-block mx-auto col-11">
             <input className="col-5 contact-form-input" placeholder="name" type="text" name="name" required/>
             <input className=" offset-1 col-6 contact-form-input" placeholder="email" type="email" name="email" required/>  
            </div>
            <div style={{height: "13%"}} className="d-block col-11 mx-auto mt-4">
             <input className="contact-form-input col-12" placeholder="subject" type="text" name="subject" required />   
            </div>
            <div style={{height: "34%"}} className="d-block col-11 mx-auto mt-4">
              <textarea className="contact-form-input col-12" placeholder="message" name="message" required></textarea>
            </div>  
            <div className="mt-4 col-11 d-block mx-auto">
              <div className="row">
                <div className="col-lg-5 col-6 d-inline">
                  <button className="p-clamp" id="contact-form-button" type="submit">send message</button>
                </div>
                <div className="col-6 d-flex justify-content-end">
                 {result} 
                </div>
              </div>
            </div> 
          </form>
      </div>
    );
  }