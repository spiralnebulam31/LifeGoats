'use client';

import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { downArrow, downArrowHover } from "@/public/assets";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LinksDropdown = ({ 
  title, 
  active, 
  setActive, 
  handleLinkClick, 
  links,
  className = "text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7" 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={`${className} ${isHovered ? 'hovered' : ''}`}
          onClick={() => setActive(active === title ? null : title)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <p className={`${isHovered ? 'hovered' : ''}`}>{title}</p>
            <Image
              src={isHovered ? downArrowHover : downArrow}
              alt="down arrow"
              className={`h-[20px] w-auto ${isHovered ? 'hovered' : ''}`}
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
      {active === title && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md drop-shadow-lg bg-background ring-1 ring-primary ring-opacity-10 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {links.map((link) => (
              <Link 
                key={link.id}
                href={link.link}
                className="bg-background block px-4 py-2 text-lg font-links font-bold text-primary hover:bg-secondary hover:text-background"
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

LinksDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default LinksDropdown;