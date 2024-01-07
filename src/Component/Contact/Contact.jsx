/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { toast } from "react-toastify";
import linkidin from "../../image/linkidin.png";
import github from "../../image/github.png";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_21vt4fa",
        "template_247bo7b",
        form.current,
        "IqQDdOyeLv7AgLj9K"
      )
      .then(
        () => {
          toast.success("Message Submitted");
        },
        () => {
          toast.error("failed to Submit");
        }
      );
  };
  return (
    <div className="contact">
      <div className="textcontainer">
        <h1>Let's woek together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>akashikur011@gmail.com</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>8428446088</span>
        </div>
        <div className="item">
          <h2>Social</h2>
          <div className="item-con">
            <motion.div whileHover={{ scale: 1.2 }}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/akashm2002/"
                rel="noreferrer"
              >
                <img src={linkidin} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <a
                target="_blank"
                href="https://github.com/akashikur"
                rel="noreferrer"
              >
                <img src={github} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="formcontainer">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" placeholder="Email" required name="emial" />
          <textarea rows={8} placeholder="message" name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
