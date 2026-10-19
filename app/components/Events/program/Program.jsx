'use client';

// Not used at the moment.

import { useState } from "react";
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/program/Program.scss";
import ProgramTab from "./ProgramTab";
import DateButton from "./DateButton";
import { programData } from "../../../../data/program";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";

const Program = ({
  isSmallScreen,
}) => {  

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // const handleDateChange = (event) => {
  //   const selectedIndex = parseInt(event.target.value);
  //   setActiveTab(selectedIndex);
  // };
  
  return (
    <section
      className="program"
    >
      <motion.div
        className="program__header"
      >
        <motion.p
          className="program__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Details about the
        </motion.p>
        <motion.h2
          className="program__title"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Program
        </motion.h2>
      </motion.div>

      {/* {isSmallScreen && (
  <select 
    value={activeTab} 
    onChange={handleDateChange}
    className="text-earth bg-tertiary font-links font-bold uppercase text-2xl drop-shadow-xl py-1 px-2 rounded-xl my-2 w-[70%] mx-2 hover:bg-background hover:text-primary focus:outline-none active:bg-tertiary active:text-earth cursor-pointer"
  >
    {programData.map((item, index) => (
      <option key={index} value={index}>{item.date}</option>
    ))}
  </select>
)} */}

{!isSmallScreen && (
  <motion.div
    className="program__dates"
    variants={fadeIn}
    initial="initial"
    whileInView="animate" 
    viewport={{ once: true }}
  >
    {programData.map((item, index) => (
      <DateButton
        key={index}
        date={item.date}
        isActive={activeTab === index}
        onClick={() => handleTabClick(index)}
      />
    ))}
  </motion.div>
)}

      <motion.div
        className="program__tabs"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
        viewport={{ once: true }}
      >
        {programData.map((item, index) => (
          <ProgramTab
            key={index}
            {...item}
            activeTab={activeTab}
          />
        ))}
      </motion.div>

      <motion.div
        className="program__links"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
        viewport={{ once: true }}
      >
        <a
              href="/Life Goats The Program.pdf"
              download="Life Goats The Program.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <p className="program__link-text">Click here to download the program as a PDF file</p>
            </a>

            <a
              href="/the-route"
              target="_blank"
              rel="noreferrer"
            >
              <p className="program__link-text">Click here for more information about the hike</p>
            </a>



      </motion.div>
    </section>
  );
};

Program.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Program;
