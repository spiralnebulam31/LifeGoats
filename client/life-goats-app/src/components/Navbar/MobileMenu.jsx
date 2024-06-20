import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileNav, linkReveal, listItem } from "../../motion/motion";
import { Link } from "react-router-dom";

const MobileMenu = ({
  active,
  setActive,
  mobile,
  setMobile,
  homeLinks,
  pastLinks,
}) => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPastEventsOpen, setIsPastEventsOpen] = useState(false);

  return (
    <motion.div
      className="flex lg:hidden absolute right-0 top-0 bottom-0 w-[70%] h-screen mx-0 my-0
        z-10 flex-col items-end gap-60"
      variants={mobileNav}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <motion.div
        className="list-none font-links font-bold flex flex-col justify-center text-center items-center gap-4 bg-background px-16 w-[90%] h-screen"
        variants={linkReveal}
        initial="initial"
        animate="animate"
      >
        <h2
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer hover:text-tertiary"
          onClick={() => setIsHomeOpen(!isHomeOpen)}
        >
          Home
        </h2>
        <AnimatePresence>
          {isHomeOpen && (
            <motion.div
              layout
              initial="closed"
              animate={isHomeOpen ? "open" : "closed"}
              exit="closed"
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              className="flex flex-col gap-3 pb-4"
            >
              {homeLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={listItem}
                  className={`${
                    active === link.title
                      ? "text-secondary underline"
                      : "text-primary"
                  } hover:text-tertiary text-[20px] font-bold cursor-pointer w-[90px]`}
                  onClick={() => {
                    setMobile(!mobile);
                    setActive(link.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <a href={`/#${link.id}`}>{link.title}</a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="flex flex-col justify-center items-center gap-4 px-16 w-[90%]"
          variants={linkReveal}
          initial="initial"
          animate="animate"
        >
          <Link
            to="/the-history"
            className={`${
              active === "The History"
                ? "text-secondary underline"
                : "text-primary"
            } hover:text-tertiary text-2xl font-bold font-subtitle cursor-pointer`}
            onClick={() => {
              setMobile(!mobile);
              setActive("The History");
              window.scrollTo(0, 0);
            }}
          >
            The History
          </Link>
        </motion.div>

        <h2
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer hover:text-tertiary"
          onClick={() => setIsPastEventsOpen(!isPastEventsOpen)}
        >
          Past Events
        </h2>
        <AnimatePresence>
          {isPastEventsOpen && (
            <motion.div
              layout
              initial="closed"
              animate={isPastEventsOpen ? "open" : "closed"}
              exit="closed"
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              className="flex flex-col gap-3 pb-4"
            >
              {pastLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={listItem}
                  className={`${
                    active === link.title
                      ? "text-secondary underline"
                      : "text-primary"
                  } hover:text-tertiary text-[20px] font-bold cursor-pointer w-[90px]`}
                  onClick={() => {
                    setMobile(!mobile);
                    setActive(link.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link key={link.id} to={link.link}>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="flex flex-col justify-center items-center gap-4 px-16 w-[90%]"
          variants={linkReveal}
          initial="initial"
          animate="animate"
        >
          <Link
            to="/upcoming-events"
            className={`${
              active === "Upcoming Events"
                ? "text-secondary underline"
                : "text-primary"
            } hover:text-tertiary text-2xl font-bold font-subtitle cursor-pointer`}
            onClick={() => {
              setMobile(!mobile);
              setActive("Upcoming Events");
              window.scrollTo(0, 0);
            }}
          >
            Upcoming Events
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-4 px-16 w-[90%]"
          variants={linkReveal}
          initial="initial"
          animate="animate"
        >
          <Link
            to="/contact"
            className={`${
              active === "Contact" ? "text-secondary underline" : "text-primary"
            } hover:text-tertiary text-2xl font-bold font-subtitle cursor-pointer`}
            onClick={() => {
              setMobile(!mobile);
              setActive("Contact");
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
