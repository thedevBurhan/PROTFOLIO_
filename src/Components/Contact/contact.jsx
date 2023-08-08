import React, { useRef } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m6ctvy3",
       "template_g86luc5",
        form.current,
        "yHMJIPoYNwfuG822C"
      )
      .then(
        (result) => {
          console.log(result.text);
       
        },
        (error) => {
          console.log(error.text);
          alert("failed!");
        }
      );
  };

  
  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In<span> Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Don't be Shy!😳</h3>
          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <p className="contact-description">
            
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className="info_icon" />
              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc">smdburhan25@gmail.com</h4>
              </div>
            </div>
            <div className="info_item">
              <FaPhoneSquareAlt className="info_icon" />
              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">+91-9092955315</h4>
              </div>
            </div>
          </div>
          <div className="contact_socials">
            <a
              href="https://github.com/thedevBurhan"
              target="blank"
              className="contact_social_link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-burhan-25may/"
              target="blank"
              className="contact_social_link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/burhansaif20255/"
              target="blank"
              className="contact_social_link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/mohammed.burhan.1004"
              target="blank"
              className="contact_social_link"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="form_control"
                required
              ></input>
            </div>
            <div className="form_input-div">
              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="form_control"
                required
              ></input>
            </div>
            <div className="form_input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form_control"
              ></input>
            </div>
          </div>
          <div className="form_input-div">
            <textarea
              name="message"
              placeholder="Type Your Message Here..."
              className="form_control textarea"
            ></textarea>
          </div>

          <button className="button"type="submit" value="Send">
            Send Message
            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </button>
        </form>
       
      </div>
    </section>
  );
};

export default Contact;
