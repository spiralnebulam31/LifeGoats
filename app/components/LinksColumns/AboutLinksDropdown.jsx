'use client';

import { motion } from "framer-motion";
import { downArrow, downArrowHover } from "@/src/assets";
import { useState } from "react";
import PropTypes from 'prop-types';
import "@/src/scss/components/LinksColumns/LinksDropdown.scss";
import Link from "next/link";
import Image from "next/image";

const AboutLinksDropdown = ({ active, setActive, handleLinkClick, aboutLinks }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <div className="links-dropdown">
      <div>
        <button
          type="button"
          className="links-dropdown__toggle"
          onClick={() => setActive(active === "About" ? null : "About")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="links-dropdown__label">
            <p>About</p>
            <Image
              src={isHovered ? downArrowHover : downArrow}
              alt="down arrow"
              className="links-dropdown__arrow"
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
      {active === "About" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="links-dropdown__panel"
        >
          <div className="links-dropdown__list" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {aboutLinks.map((link) => (
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

AboutLinksDropdown.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  aboutLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutLinksDropdown;
