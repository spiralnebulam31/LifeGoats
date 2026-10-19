'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mobileNav, linkReveal, listItem } from "../../../motion/motion";
import Link from "next/link";  

import PropTypes from 'prop-types';
import "@/src/scss/components/Navbar/MobileMenu.scss";

const MobileMenu = ({ active, setActive, setMobile, aboutLinks, eventsLinks }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  return (
    <motion.div
      className="mobile-menu"
      variants={mobileNav}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <motion.div
        className="mobile-menu__panel"
        variants={linkReveal}
        initial="initial"
        animate="animate"
      >

        {/* About Section */}
        <h2
          className="mobile-menu__heading"
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
              className="mobile-menu__sublinks"
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
          className="mobile-menu__heading"
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
              className="mobile-menu__sublinks"
            >
              {eventsLinks.map((link) => (
                <motion.div key={link.id} variants={listItem}>
                  <Link href={link.link} onClick={() => setMobile(false)}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Section */}
        <motion.div
          className="mobile-menu__item"
          variants={linkReveal}
          initial="initial"
          animate="animate"
        >
          <Link
            href="/testimonials"
            className={`mobile-menu__link ${
              active === "Testimonials" ? "mobile-menu__link--active" : ""
            }`}
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
          className="mobile-menu__item"
          variants={linkReveal}
          initial="initial"
          animate="animate"
        >
          <Link
            href="/contact"
            className={`mobile-menu__link ${
              active === "Contact" ? "mobile-menu__link--active" : ""
            }`}
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
  aboutLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  eventsLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileMenu;