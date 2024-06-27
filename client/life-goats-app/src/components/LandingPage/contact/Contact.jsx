import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { floatFromLeftContact, floatFromRightContact } from "../../../motion/home-sections";
import { floatFromDownPreTitle, floatFromDownMainTitle } from "../../../motion/home-sections";
import emailjs from "@emailjs/browser";
import { phone, phoneHover, email, emailHover, transparentMountainBG2 } from "../../../assets";

const Contact = ({
  phoneIsHovered,
  handlePhoneMouseEnter,
  handlePhoneMouseLeave,
  emailIsHovered,
  handleEmailMouseEnter,
  handleEmailMouseLeave,
  isSmallScreen,
}) => {

  const leftSideRef = useRef();
  const rightSideRef = useRef();

  const leftSideView = useInView({ threshold: 0.5 });
  const rightSideView = useInView({ threshold: 0.5 });
  
  const form = useRef();

  const openPopup = () => {
    alert("Email Sent! Maria will reply to you as soon as possible.");
  };

  const templateCode = import.meta.env.VITE_EMAILJS_TEMPLATE_CODE;
  const serviceCode = import.meta.env.VITE_EMAILJS_SERVICE_CODE;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceCode,
        templateCode,
        form.current,
        userID
      )
      .then(
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
    <section id="contact" className="overflow-hidden z-10 bg-gradient-to-b from-blue-400 via-blue-100 to-background
    relative bg-cover w-full h-full inset-0 pb-12 sm:pb-20 md:pb-36 lg:pb-20 xl:pb-36 pt-6 mb-[129px]">
        {/* Title */}
        <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto pt-8 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-background font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle} initial="initial" whileInView="animate" viewport={{once: true}}
        >
          Ways to reach out
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
          style={{ textShadow: "3px 2px 3px rgba(0, 0, 0, 0.3)" }}
          variants={floatFromDownMainTitle} initial="initial" whileInView="animate" viewport={{once: true}}
        >
          Contact Life Goats
        </motion.h2>
      </motion.div>
        {/* End of title */}

        <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 mt-1 mb-20 sm:mb-44 lg:mb-[50vh]">
          {/* Contact Information */}
          <motion.div
          className="text-center justify-start w-[80%] lg:w-[85%] mx-auto flex items-center flex-col lg:mx-24 xl:mx-36"
          variants={floatFromLeftContact} initial="initial" whileInView={isSmallScreen ? "initial" : "animate"} ref={leftSideRef}
          >
            <div className="text-primary font-body text-lg max-w-full sm:px-16 px-6 pt-1 lg:pt-10 mb-5 leading-[30px]">
              <p>For any questions or suggestions, feel free to reach out to Maria:</p>
            </div>

            {/* Contact Info Container */}
            <div className="bg-background p-2 rounded-2xl drop-shadow-xl text-center w-[90%] md:w-[60%] lg:w-[80%] mx-auto lg:mx-16">

                {/* Contact Links */}
                <div className="flex flex-col gap-5 pb-3 pt-5 font-links text-lg">
                  <ContactLink
                    href="mailto:maria.telikiozoglou@gmail.com"
                    onMouseEnter={handleEmailMouseEnter}
                    onMouseLeave={handleEmailMouseLeave}
                    icon={emailIsHovered ? emailHover : email}
                    text="maria.telikiozoglou@gmail.com"
                  />
                  <ContactLink
                    href="tel:+306980489843"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={handlePhoneMouseEnter}
                    onMouseLeave={handlePhoneMouseLeave}
                    icon={phoneIsHovered ? phoneHover : phone}
                    text="+306980489843 (WhatsApp)"
                  />
                </div>
                {/* End of Contact Links */}

              </div>
              {/* End of Contact Info */}
            {/* End of Contact Info Container */}
          </motion.div>
          {/* End of Contact Information */}

          {/* Contact Form */}
          <motion.div
          className="text-center justify-start w-[80%] xl:w-[70%] mx-auto lg:mr-[28%]"
          variants={floatFromRightContact} initial="initial" whileInView={isSmallScreen ? "initial" : "animate"} ref={rightSideRef}
          >
            <p className="text-primary font-body text-lg max-w-lg xl:max-w-6xl pb-5 mx-auto">
              Or send a message below:
            </p>

            <form ref={form} onSubmit={sendEmail}>
              {/* Form Inputs */}
              <ContactInput type="text" placeholder="Your name" name="from_name" />
              <ContactInput type="email" placeholder="Your email address" name="user_email" />
              <ContactInput type="textarea" placeholder="Your message" name="message" />

              {/* Submit Button */}
              <div className="mb-1 =">
                <button
                  type="submit"
                  className="bg-primary hover:bg-tertiary mt-1 font-links font-bold uppercase text-md md:text-xl text-background hover:text-earth py-2 px-4 rounded-2xl items-center mx-auto drop-shadow-xl"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
          {/* End of Contact Form */}
        </motion.div>

        <div className="absolute right-0 left-0 bottom-0 z-20 bg-no-repeat w-full pointer-events-none">
          <img src={transparentMountainBG2} alt="transparent mountain background" className="w-screen h-auto" />
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
      <img src={icon} alt={`${text} icon`} className="w-[20px] h-[20px] object-contain" />
      <p className="ml-2">{text}</p>
    </a>
  </div>
);

const ContactInput = ({ type, placeholder, name }) => (
  <div className="mb-4 flex items-center bg-background drop-shadow-xl p-2 rounded-lg w-[80%] md:w-[60%] lg:w-[90%] mx-auto lg:ml-[5%]">
    {type === 'textarea' ? (
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

export default Contact;

