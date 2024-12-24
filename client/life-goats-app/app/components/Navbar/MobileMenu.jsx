'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileNav, linkReveal, listItem } from "../../../motion/motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";  

import PropTypes from 'prop-types';

const MobileMenu = ({ active, setActive, setMobile, homeLinks, aboutLinks, eventsLinks, hikeLinks }) => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isTheHikeOpen, setIsTheHikeOpen] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  const handleHomeLinkClick = (link) => {
    setActive(link.title);
    setMobile(false);
    if (pathname !== "/") { 
      router.push("/");
    } else {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      className="flex lg:hidden fixed right-0 top-0 bottom-0 w-[70%] h-screen mx-0 my-0 z-10 flex-col items-end gap-60 bg-background"
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
        {/* Home Section */}
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
                <motion.div key={link.id} variants={listItem}>
                  <a href={`/#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleHomeLinkClick(link);
                    }}
                  >
                    {link.title}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rest of the sections remain the same */}
        {/* About Section */}
        <h2
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer hover:text-tertiary"
          onClick={() => setIsAboutOpen(!isAboutOpen)}
        >
          About
        </h2>
        <AnimatePresence>
          {isAboutOpen && (
            <motion.div
              layout
              initial="closed"
              animate={isAboutOpen ? "open" : "closed"}
              exit="closed"
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              className="flex flex-col gap-3 pb-4"
            >
              {aboutLinks.map((link) => (
                <motion.div key={link.id} variants={listItem}>
                  <Link href={link.link} onClick={() => setMobile(false)}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Events Section */}
        <h2
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer hover:text-tertiary"
          onClick={() => setIsEventsOpen(!isEventsOpen)}
        >
          Events
        </h2>
        <AnimatePresence>
          {isEventsOpen && (
            <motion.div
              layout
              initial="closed"
              animate={isEventsOpen ? "open" : "closed"}
              exit="closed"
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              className="flex flex-col gap-3 pb-4"
            >
              {eventsLinks.map((link) => (
                <motion.div key={link.id} variants={listItem}>
                  <Link href={link.link} onClick={() => setMobile(false)}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Hike Section */}
        <h2
          className="text-primary text-2xl font-bold mb-1 font-subtitle cursor-pointer hover:text-tertiary"
          onClick={() => setIsTheHikeOpen(!isTheHikeOpen)}
        >
          The Hike
        </h2>
        <AnimatePresence>
          {isTheHikeOpen && (
            <motion.div
              layout
              initial="closed"
              animate={isTheHikeOpen ? "open" : "closed"}
              exit="closed"
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              className="flex flex-col gap-3 pb-4"
            >
              {hikeLinks.map((link) => (
                <motion.div key={link.id} variants={listItem}>
                  <Link href={link.link} onClick={() => setMobile(false)}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Section */}
        <motion.div
          className="flex flex-col justify-center items-center gap-4 px-16 w-[90%]"
          variants={linkReveal}
          initial="initial"
          animate="animate"
        >
          <Link
            href="/testimonials"
            className={`${
              active === "Testimonials" ? "text-secondary underline" : "text-primary"
            } hover:text-tertiary text-2xl font-bold font-subtitle cursor-pointer`}
            onClick={() => {
              setMobile(false);
              setActive("Testimonials");
              window.scrollTo(0, 0);
            }}
          >
            Testimonials
          </Link>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="flex flex-col justify-center items-center gap-4 px-16 w-[90%]"
          variants={linkReveal}
          initial="initial"
          animate="animate"
        >
          <Link
            href="/contact"
            className={`${
              active === "Contact" ? "text-secondary underline" : "text-primary"
            } hover:text-tertiary text-2xl font-bold font-subtitle cursor-pointer`}
            onClick={() => {
              setMobile(false);
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

MobileMenu.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  setMobile: PropTypes.func.isRequired,
  homeLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  aboutLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  eventsLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  hikeLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileMenu;