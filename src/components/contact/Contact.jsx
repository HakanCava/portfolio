import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useThemeContext } from "../../Context";
import "./contact.scss";

const Contact = () => {
  const theme = useThemeContext();
  const { darkMode } = theme.state;
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMessage(true);
    setInterval(() => {
      setMessage(false);
    }, 5000);
  };
  return (
    <div
      className="contact"
      id="contact"
      
    >
      <div className="left">
        <img src="assets/shake.svg" alt="" style={{
              backgroundColor: "white",
              borderRadius:"100px"
            }} />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="label-input">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div className="label-input">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="label-text">
            <label>Message</label>
            <textarea name="message" placeholder="Your message" />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: darkMode ? "white" : "black",
              color: darkMode ? "black" : "white",
            }}
          >
            Send Message
          </button>
        </form>
        {message && <span>Thanks, I'll reply ASAP 😊</span>}
      </div>
    </div>
  );
};

export default Contact;
