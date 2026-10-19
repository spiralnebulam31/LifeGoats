'use client';

// Not used at the moment.

import { motion } from "framer-motion";
import { downArrow } from "@/src/assets";
import { useRef } from "react";
import PropTypes from 'prop-types';
import "@/src/scss/components/LinksColumns/LinksDropdown.scss";

const HomeLinksDropdown = ({ active, setActive, handleLinkClick, homeLinks }) => {

  const isOpen = active === "Home";
  const toggleRef = useRef(null);

  const closeOnEscape = (event) => {
    if (event.key === "Escape" && isOpen) {
      setActive(null);
      toggleRef.current?.focus();
    }
  };

  const closeWhenFocusLeaves = (event) => {
    if (isOpen && !event.currentTarget.contains(event.relatedTarget)) {
      setActive(null);
    }
  };

  return (
    <div className="links-dropdown" onKeyDown={closeOnEscape} onBlur={closeWhenFocusLeaves}>
      <div>
        <button
          type="button"
          className="links-dropdown__toggle"
          ref={toggleRef}
          aria-expanded={isOpen}
          aria-controls="home-links"
          onClick={() => setActive(active === "Home" ? null : "Home")}
        >
          <span className="links-dropdown__label">
            <span>Home</span>
            <span
              className="links-dropdown__arrow"
              style={{ "--icon-src": `url(${downArrow.src})` }}
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="links-dropdown__panel"
        >
          <div id="home-links" className="links-dropdown__list">
            {homeLinks.map((link) => (
              <a
                href={`/#${link.id}`}
                key={link.id}
                className="links-dropdown__link"
                onClick={() => {
                  handleLinkClick(link);
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

HomeLinksDropdown.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  homeLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default HomeLinksDropdown;
