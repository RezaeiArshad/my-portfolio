import React from "react";

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5500f17b-86db-4842-aced-133ff7933509");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value="5500f17b-86db-4842-aced-133ff7933509" />
          <input placeholder="name" type="text" name="name" required/>
          <input placeholder="email" type="email" name="email" required/>
          <input placeholder="subject" type="text" name="subject" />
          <textarea placeholder="text" name="message" required></textarea>
  
          <button type="submit">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }