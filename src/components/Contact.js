import Parallax from "./Parallax";
import { useRef } from "react";
import emailjs from "@emailjs/browser"; //npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yrsrbwp",
        "template_5drlgue",
        form.current,
        "user_DZq5OEWPyAN4UReMR7Da3"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Email Sent Unsuccessful!");
        }
      );
    e.target.reset();
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
                name="from_name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-input"
                type="email"
                name="from_email"
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
