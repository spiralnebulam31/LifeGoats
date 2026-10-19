"use client";

import { useId, useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  floatFromLeftContact,
  floatFromRightContact,
} from "../../motion/home-sections";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../motion/home-sections";
import emailjs from "@emailjs/browser";
import {
  phone,
  email,
  instagramIcon,
  transparentMountainBG2,
} from "@/src/assets";
import Image from "next/image";
import "@/src/scss/components/LandingPage/contact/Contact.scss";

const Contact = ({
  isSmallScreen,
}) => {
  const leftSideRef = useRef();
  const rightSideRef = useRef();

  const form = useRef();

  const openPopup = () => {
    alert("Email Sent! We will reply to you as soon as possible.");
  };

  const templateCode = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CODE;
  const serviceCode = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_CODE;
  const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceCode, templateCode, form.current, userID).then(
      (result) => {
        console.log(result.text);
        form.current.reset();
        openPopup();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="contact contact--page"
    >
      {/* Title */}
      <motion.div className="contact__header">
        <motion.p
          className="contact__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Ways to reach out
        </motion.p>
        <motion.h1
          className="contact__title"
          style={{ textShadow: "3px 2px 3px rgba(0, 0, 0, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Contact Life Goats
        </motion.h1>
      </motion.div>
      {/* End of title */}

      <motion.div className="contact__columns">
        {/* Contact Information */}
        <motion.div
          className="contact__info"
          variants={floatFromLeftContact}
          initial="initial"
          whileInView={isSmallScreen ? "initial" : "animate"}
          ref={leftSideRef}
        >
          <div className="contact__intro">
            <p>
              For any questions or suggestions, feel free to reach out to us:
            </p>
          </div>

          {/* Contact Info Container */}
          <div className="contact__card">
            {/* Contact Links */}
            <div className="contact__links">
              <ContactLink
                href="mailto:lifegoatsconnect@gmail.com"
                icon={email}
                text="lifegoatsconnect@gmail.com"
              />
              <ContactLink
                href="tel:+306980489843"
                icon={phone}
                text="+306980489843 (Maria's WhatsApp)"
              />
              <ContactLink
                href="tel:+306973900026"
                icon={phone}
                text="+306973900026 (Anastasia's WhatsApp)"
              />
            </div>
            {/* End of Contact Links */}
          </div>
          {/* End of Contact Info Container */}
        </motion.div>
        {/* End of Contact Information */}

        {/* Contact Form */}
        <motion.div
          className="contact__form-column"
          variants={floatFromRightContact}
          initial="initial"
          whileInView={isSmallScreen ? "initial" : "animate"}
          ref={rightSideRef}
        >
          <p className="contact__form-intro">
            Or send us a message below:
          </p>

          <div className="contact__form-wrap">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              {/* Form Inputs */}
              <ContactInput
                type="text"
                placeholder="Your name"
                name="from_name"
                label="Name"
                autoComplete="name"
              />
              <ContactInput
                type="email"
                placeholder="Your email address"
                name="user_email"
                label="Email address"
                autoComplete="email"
              />
              <ContactInput
                type="textarea"
                placeholder="Your message"
                name="message"
                label="Message"
              />

              {/* Submit Button */}
              <div className="contact__submit-row">
                <button
                  type="submit"
                  className="contact__submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </motion.div>
        {/* End of Contact Form */}
      </motion.div>
      <div className="contact__mountains">
        <Image
          src={transparentMountainBG2}
          alt=""
          className="contact__mountains-image"
        />
      </div>
    </section>
  );
};

// Additional components (helper components)
const ContactLink = ({ href, icon, text }) => (
  <div className="contact__link-row">
    <a
      href={href}
      className="contact__link"
      style={{textAlign: 'center'}}>
      <span
        className="contact__link-icon"
        style={{ "--icon-src": `url(${icon.src})` }}
        aria-hidden="true"
      />
      <span className="contact__link-text">{text}</span>
    </a>
  </div>
);

const ContactInput = ({ type, placeholder, name, label, autoComplete }) => {
  const id = useId();

  return (
    <div className="contact__field">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          className="contact__input"
          required
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          autoComplete={autoComplete}
          className="contact__input"
          required
        />
      )}
    </div>
  );
};

// PropTypes

ContactLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

ContactInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
};

Contact.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Contact;
