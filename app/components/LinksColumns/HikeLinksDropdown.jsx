'use client';

// Not used at the moment.

import { motion } from "framer-motion";
import Link from "next/link";
import { downArrow } from "@/src/assets";
import { useRef } from "react";
import PropTypes from 'prop-types';
import "@/src/scss/components/LinksColumns/LinksDropdown.scss";

const HikeLinksDropdown = ({ active, setActive, handleLinkClick, hikeLinks }) => {

  const isOpen = active === "Hike";
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
          aria-controls="hike-links"
          onClick={() => setActive(active === "Hike" ? null : "Hike")}
        >
        <span className="links-dropdown__label">
        <span>The Hike</span>
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
          <div id="hike-links" className="links-dropdown__list">
            {hikeLinks.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="links-dropdown__link"
                onClick={() => {
                  handleLinkClick(link);
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

HikeLinksDropdown.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  hikeLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default HikeLinksDropdown;
