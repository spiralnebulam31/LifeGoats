"use client";

import { useRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  floatFromLeftContact,
  floatFromRightContact,
} from "../../../../motion/home-sections";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import {
  phone,
  phoneHover,
  email,
  emailHover,
  instagramIcon,
  instagramIconHover,
  transparentMountainBG2,
} from "@/src/assets";
import "@/src/scss/components/LandingPage/contact/Contact.scss";

const Contact = ({
  phoneIsHovered,
  handlePhoneMouseEnter,
  handlePhoneMouseLeave,
  emailIsHovered,
  handleEmailMouseEnter,
  handleEmailMouseLeave,
  instagramIconIsHovered,
  handleInstagramIconMouseEnter,
  handleInstagramIconMouseLeave,
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
      className="contact"
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
        <motion.h2
          className="contact__title"
          style={{ textShadow: "3px 2px 3px rgba(0, 0, 0, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Contact Life Goats
        </motion.h2>
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
                onMouseEnter={handleEmailMouseEnter}
                onMouseLeave={handleEmailMouseLeave}
                icon={emailIsHovered ? emailHover : email}
                text="lifegoatsconnect@gmail.com"
              />
              <ContactLink
                href="tel:+306980489843"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handlePhoneMouseEnter}
                onMouseLeave={handlePhoneMouseLeave}
                icon={phoneIsHovered ? phoneHover : phone}
                text="+306980489843 (Maria's WhatsApp)"
              />
              <ContactLink
                href="tel:+306973900026"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handlePhoneMouseEnter}
                onMouseLeave={handlePhoneMouseLeave}
                icon={phoneIsHovered ? phoneHover : phone}
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
              />
              <ContactInput
                type="email"
                placeholder="Your email address"
                name="user_email"
              />
              <ContactInput
                type="textarea"
                placeholder="Your message"
                name="message"
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
          alt="transparent mountain background"
          className="contact__mountains-image"
        />
      </div>
    </section>
  );
};

// Additional components (helper components)
const ContactLink = ({ href, onMouseEnter, onMouseLeave, icon, text }) => (
  <div className="contact__link-row">
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      target="_blank"
      rel="noreferrer"
      className="contact__link"
      style={{textAlign: 'center'}}>
      <Image
        src={icon}
        alt={`${text} icon`}
        className="contact__link-icon"
      />
      <span className="contact__link-text">{text}</span>
    </a>
  </div>
);

const ContactInput = ({ type, placeholder, name }) => (
  <div className="contact__field">
    {type === "textarea" ? (
      <textarea
        name={name}
        placeholder={placeholder}
        className="contact__input"
        required
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="contact__input"
        required
      />
    )}
  </div>
);

// PropTypes

ContactLink.propTypes = {
  href: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ContactInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Contact.propTypes = {
  phoneIsHovered: PropTypes.bool.isRequired,
  handlePhoneMouseEnter: PropTypes.func.isRequired,
  handlePhoneMouseLeave: PropTypes.func.isRequired,
  emailIsHovered: PropTypes.bool.isRequired,
  handleEmailMouseEnter: PropTypes.func.isRequired,
  handleEmailMouseLeave: PropTypes.func.isRequired,
  email2IsHovered: PropTypes.bool.isRequired,
  handleEmail2MouseEnter: PropTypes.func.isRequired,
  handleEmail2MouseLeave: PropTypes.func.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

Contact.propTypes = {
  instagramIconIsHovered: PropTypes.bool.isRequired,
  handleInstagramIconMouseEnter: PropTypes.func.isRequired,
  handleInstagramIconMouseLeave: PropTypes.func.isRequired
};

export default Contact;
