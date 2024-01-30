import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileNav, linkReveal, listItem } from "../../motion/motion";
import { Link } from "react-router-dom";

const MobileMenu = ({ active, setActive, mobile, setMobile, homeLinks, hikeLinks }) => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isHikeOpen, setIsHikeOpen] = useState(false);

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
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer"
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
                    active === link.title ? "text-secondary underline" : "text-primary"
                  } hover:text-tertiary text-[20px] hover:text-[24px] font-medium cursor-pointer w-[86px]`}
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

        <h2
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer"
          onClick={() => setIsHikeOpen(!isHikeOpen)}
        >
          The Hike
        </h2>
        <AnimatePresence>
          {isHikeOpen && (
            <motion.div
              layout
              initial="closed"
              animate={isHikeOpen ? "open" : "closed"}
              exit="closed"
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              className="flex flex-col gap-3 pb-4"
            >
              {hikeLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={listItem}
                  className={`${
                    active === link.title ? "text-secondary underline" : "text-primary"
                  } hover:text-tertiary text-[20px] hover:text-[24px] font-medium cursor-pointer w-[86px]`}
                  onClick={() => {
                    setMobile(!mobile);
                    setActive(link.title);
                    window.scrollTo(0, 0);
                  }}
                >
                  <a href={link.link}>{link.title}</a>
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
          to="/contact"
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer"
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
