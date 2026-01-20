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
} from "@/public/assets";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

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
      className="overflow-hidden z-10 bg-gradient-to-b from-blue-400 via-blue-100 to-background
    relative bg-cover w-full h-full inset-0 mx-auto pb-14 sm:pb-20 md:pb-36 lg:pb-20 xl:pb-36 pt-6 mb-[180px]"
    >
      {/* Title */}
      <motion.div className="text-center w-[80%] lg:w-[90%] mx-auto pt-8 mb-5 z-10 overflow-hidden">
        <motion.p
          className="md:text-[18px] text-[14px] text-background font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Ways to reach out
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
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

      <motion.div className="flex flex-col lg:flex-row justify-center lg:justify-between text-center gap-2 mt-1 mb-20 sm:mb-44 lg:mb-[60vh]">
        {/* Contact Information */}
        <motion.div
          className="flex flex-col justify-center text-center w-[80%] lg:w-1/2 mx-auto items-center"
          variants={floatFromLeftContact}
          initial="initial"
          whileInView={isSmallScreen ? "initial" : "animate"}
          ref={leftSideRef}
        >
          <div className="text-primary font-body text-lg max-w-full sm:px-16 px-6 pt-1 lg:pt-10 mb-5 leading-[30px]">
            <p>
              For any questions or suggestions, feel free to reach out to us:
            </p>
          </div>

          {/* Contact Info Container */}
          <div className="bg-background p-2 rounded-2xl drop-shadow-xl text-center w-[90%] md:w-[60%] mx-auto lg:mx-16">
            {/* Contact Links */}
            <div className="flex flex-col gap-5 pb-3 pt-5 font-links text-lg">
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
                href="https://www.instagram.com/anastasia.ad.m31/"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={handleInstagramIconMouseEnter}
                onMouseLeave={handleInstagramIconMouseLeave}
                icon={instagramIconIsHovered ? instagramIconHover : instagramIcon}
                text="anastasia.ad.m31 (Natasa's Instagram)"
              />
            </div>
            {/* End of Contact Links */}
          </div>
          {/* End of Contact Info Container */}
        </motion.div>
        {/* End of Contact Information */}

        {/* Contact Form */}
        <motion.div
          className="flex flex-col text-center justify-center w-[80%] lg:w-1/2 mx-auto mt-10 lg:mt-14"
          variants={floatFromRightContact}
          initial="initial"
          whileInView={isSmallScreen ? "initial" : "animate"}
          ref={rightSideRef}
        >
          <p className="text-primary font-body text-lg max-w-lg xl:max-w-6xl pb-5 mx-auto">
            Or send us a message below:
          </p>

          <div className="flex justify-center text-center mx-auto w-full lg:w-[60%]">
            <form ref={form} onSubmit={sendEmail} className="w-full">
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
              <div className="mb-1">
                <button
                  type="submit"
                  className="bg-primary hover:bg-tertiary mt-1 font-links font-bold uppercase text-md md:text-xl text-background hover:text-earth py-2 px-4 rounded-2xl items-center mx-auto drop-shadow-xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </motion.div>
        {/* End of Contact Form */}
      </motion.div>

      <div className="absolute right-0 left-0 bottom-0 z-20 bg-no-repeat w-full pointer-events-none">
        <Image
          src={transparentMountainBG2}
          alt="transparent mountain background"
          className="w-screen h-auto"
        />
      </div>
    </section>
  );
};

// Additional components (helper components)
const ContactLink = ({ href, onMouseEnter, onMouseLeave, icon, text }) => (
  <div className="flex justify-center items-center gap-5 pb-3">
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      target="_blank"
      rel="noreferrer"
      className="text-secondary hover:text-tertiary flex items-center whitespace-nowrap text-md lg:text-xl tracking-wide"
    >
      <Image
        src={icon}
        alt={`${text} icon`}
        className="w-[20px] h-[20px] object-contain"
      />
      <p className="ml-2">{text}</p>
    </a>
  </div>
);

const ContactInput = ({ type, placeholder, name }) => (
  <div className="mb-4 flex items-center bg-background drop-shadow-xl p-2 rounded-lg w-[80%] md:w-[60%] lg:w-[90%] mx-auto lg:ml-[5%]">
    {type === "textarea" ? (
      <textarea
        name={name}
        placeholder={placeholder}
        className="border py-2 px-3 text-body bg-background w-full md:w-full rounded-lg text-primary font-body"
        required
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border py-2 px-3 text-body bg-background w-full md:w-full rounded-lg text-primary font-body"
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

export default Contact;
