import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, floatFromLeftVariant, floatFromRightVariant } from "../../../motion/motion.js";
import emailjs from "@emailjs/browser";
import { phone, phoneHover, email, emailHover } from "../../../assets/index.js";

const Contact = ({
  phoneIsHovered,
  handlePhoneMouseEnter,
  handlePhoneMouseLeave,
  emailIsHovered,
  handleEmailMouseEnter,
  handleEmailMouseLeave,
}) => {
  
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
    <section id="contact" className="overflow-hidden z-10 mb-[-10]">
      <div className="bg-background relative bg-cover w-full inset-0 pb-10 pt-14">
        {/* Title */}
        <motion.div
        className="text-start w-[80%] lg:w-[90%] mx-12 sm:mx-20 md:mx-[10.5%] lg:mr-4 lg:ml-[13.6%]
        pt-6 mb-5 overflow-hidden"
      >
        <p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
        >
          Ways to reach out
        </p>
        <h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
          style={{ textShadow: "3px 2px 3px rgba(0, 0, 0, 0.3)" }}
        >
          Contact Life Goats
        </h2>
      </motion.div>
        {/* End of title */}

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 mt-1">
          {/* Contact Information */}
          <motion.div
          className="mb-6 text-center w-[80%] lg:w-[80%] mx-auto flex items-center flex-col lg:mx-24 xl:mx-36"
          variants={floatFromLeftVariant} initial="initial" whileInView="animate" viewport={{once: true}}
          >
            <div className="text-primary font-body text-lg max-w-full sm:px-16 px-6 pt-3 mb-5 leading-[30px]">
              <p>For any questions or suggestions, feel free to reach out to the host, Maria:</p>
            </div>

            {/* Contact Info Container */}
            <div className="bg-gradient-to-b from-secondary via-tertiary to-earth p-2 rounded-lg shadow-lg text-center w-[80%] md:w-[60%] lg:w-[80%] mx-auto lg:mx-16">
              <div className="bg-background w-full rounded-lg border pb-3 pt-4">

                {/* Contact Links */}
                <div className="flex flex-col gap-5 py-3 font-links text-lg">
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
            </div>
            {/* End of Contact Info Container */}
          </motion.div>
          {/* End of Contact Information */}

          {/* Contact Form */}
          <motion.div
          className="text-center w-[80%] xl:w-[70%] mx-auto lg:mr-[28%] pt-6 mb-5"
          variants={floatFromRightVariant} initial="initial" whileInView="animate" viewport={{once: true}}
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
                  className="bg-primary hover:bg-tertiary mt-1 font-links font-bold uppercase text-md md:text-xl text-background hover:text-earth py-2 px-4 rounded-md items-center mx-auto shadow-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
          {/* End of Contact Form */}
        </div>
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
  <div className="mb-4 flex items-center bg-gradient-to-b from-secondary via-tertiary to-earth p-2 rounded-lg shadow-lg w-[80%] md:w-[60%] lg:w-[90%] mx-auto lg:ml-[5%]">
    {type === 'textarea' ? (
      <textarea
        name={name}
        placeholder={placeholder}
        className="border py-2 px-3 text-body bg-background w-full md:w-full rounded-lg text-primary font-body"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border py-2 px-3 text-body bg-background w-full md:w-full rounded-lg text-primary font-body"
      />
    )}
  </div>
);

export default Contact;
