'use client';

import { useState } from "react";
import PropTypes from 'prop-types';
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
      className="bg-gradient-to-b from-background via-blue-100 to-blue-400
      relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 bottom-0 top-0
      overflow-hidden pt-2 pb-2 z-10"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Details about the
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-1 mt-0"
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
    className="flex flex-wrap lg:flex-row justify-center items-center mx-auto mb-2 text-primary font-body md:text-[16px] text-[14px] w-[80%] lg:w-[55%]"
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
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
        className="flex flex-col justify-start items-start mx-auto mt-2 py-4 bg-background rounded-2xl drop-shadow-xl text-primary
        font-body md:text-[16px] text-[14px] w-[80%] lg:w-[63%] h-auto md:h-[430px]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
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
        className="flex flex-col justify-center items-center mx-auto mt-2 py-4 text-primary
        font-body md:text-[16px] text-[14px] w-[80%] lg:w-[45%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >
        <a
              href="/Life Goats The Program.pdf"
              download="Life Goats The Program.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <p className="pt-3 pb-2 text-center text-bold cursor-pointer font-bold font-links text-bold underline text-primary hover:text-tertiary text-xl">Click here to download the program as a PDF file</p>
            </a>

            <a
              href="/the-route"
              target="_blank"
              rel="noreferrer"
            >
              <p className="pt-3 pb-2 text-center text-bold cursor-pointer font-bold font-links text-bold underline text-primary hover:text-tertiary text-xl">Click here for more information about the hike</p>
            </a>



      </motion.div>
    </section>
  );
};

Program.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Program;
