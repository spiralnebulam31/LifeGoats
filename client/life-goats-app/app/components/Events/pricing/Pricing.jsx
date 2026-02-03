'use client';

import { useState } from 'react';
import MainPricingCard from './MainPricingCard';
import AdditionalCostsCard from './AdditionalCostsCard';
import { pricingData, additionalCosts } from "../../../../../data/pricing";
import { motion } from 'framer-motion';
import { fadeIn } from "../../../../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import GoatPrintsWalking from "../../Loaders/GoatPrintsWalking";

const Pricing = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section
      className="bg-gradient-to-b from-blue-400 via-blue-100 to-background
      relative bg-cover w-screen h-auto inset-0 left-0 right-0 bottom-0 top-0
      overflow-hidden pt-2 pb-12 z-10"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-background font-subtitle
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
          sm:text-[45px] text-[40px] outline-background-2 pb-2 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Pricing
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center md:items-start mx-auto gap-12 py-4 text-primary
        font-body md:text-[16px] text-[14px] w-[90%] lg:w-[70%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
        viewport={{ once: true }}
      >
      {pricingData.map((item, index) => (
        <motion.div
              key={index}
              className="relative z-10"
              // initial={{
              //   opacity: 0,
              //   translateX: index % 2 === 0 ? 100 : -100,
              //   translateY: 100,
              // }}
              // whileInView={{
              //   opacity: 1,
              //   translateX: 0,
              //   translateY: 0,
              //   transition: {
              //     duration: 0.8,
              //     delay: index * 0.2,
              //   }
              // }}
              >
              <MainPricingCard key={index} {...item} isOpen={isOpen} toggleOpen={toggleOpen} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center mx-auto py-4 mt-5 mb-7 bg-background rounded-2xl drop-shadow-xl text-primary
          font-body md:text-[16px] text-[14px] w-[80%] md:w-[55%]"
          variants={fadeIn}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
        <p className="text-center text-bold text-tertiary uppercase font-links font-bold text-3xl py-2">Additional costs</p>
          {additionalCosts.map((item, index) => (
            <AdditionalCostsCard key={index} {...item} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
        <a
              href="/Life Goats Cost Analysis.pdf"
              download="Life Goats Cost Analysis.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <p className="flex justify-center mx-auto w-[70%] pt-3 font-bold font-links text-center text-bold cursor-pointer underline text-primary hover:text-tertiary text-xl">Click here to download the pricing information as a PDF file</p>
            </a>

            <p className="flex flex-wrap justify-center text-center mx-auto pt-4 font-bold uppercase font-subtitle md:text-[20px] text-[16px]">
            More details about the accommodation options and the cost analysis coming soon
        </p>
        </motion.div>

        <motion.div className="w-[90%]">
          <GoatPrintsWalking />
        </motion.div>
    </section>
  )
}

export default Pricing;
