'use client';

// Not used at the moment.

import { motion } from "framer-motion";
import { downArrow, downArrowHover } from "@/src/assets";
import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import "@/src/scss/components/LinksColumns/LinksDropdown.scss";
import Link from "next/link";
import Image from "next/image";

const PastLinksDropdown = ({ active, setActive, handleLinkClick, pastLinks }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  const isOpen = active === "Past Events";
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
          aria-controls="past-links"
          onClick={() => setActive(active === "Past Events" ? null : "Past Events")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="links-dropdown__label">
            <span>Past Events</span>
            <Image
              src={isHovered ? downArrowHover : downArrow}
              alt=""
              className="links-dropdown__arrow"
              width={20}
              height={20}
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
          <div id="past-links" className="links-dropdown__list">
            {pastLinks.map((link) => (
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

PastLinksDropdown.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  pastLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default PastLinksDropdown;
