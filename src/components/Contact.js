import Parallax from "./Parallax";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...');
        }
      );
  };

  return (
    <section className="main-pad" id="contact">
      <div className="lrg-text" id="heading-contact">
        Contact Me<span className="span-dot">.</span>
      </div>
      <div id="flex">
        <Parallax type="parallax-img" tag="pic-contact" />
        <div id="form-container">
          <div className="sml-text">
            This form is powered by <span className="span-font">EmailJS</span>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="user_name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-input"
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <input className="btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
