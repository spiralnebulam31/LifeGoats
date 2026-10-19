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
import "@/src/scss/components/Events/pricing/Pricing.scss";

const Pricing = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section
      className="pricing"
    >
      <motion.div
        className="pricing__header"
      >
        <motion.p
          className="pricing__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Details about the
        </motion.p>
        <motion.h2
          className="pricing__title"
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
        className="pricing__cards"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
        viewport={{ once: true }}
      >
      {pricingData.map((item, index) => (
        <motion.div
              key={index}
              className="pricing__card-wrap"
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
          className="pricing__additional"
          variants={fadeIn}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
        <p className="pricing__additional-title">Additional costs</p>
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
              <p className="pricing__download">Click here to download the pricing information as a PDF file</p>
            </a>

            <p className="pricing__coming-soon">
            More details about the accommodation options and the cost analysis coming soon
        </p>
        </motion.div>

        <motion.div className="pricing__prints">
          <GoatPrintsWalking />
        </motion.div>
    </section>
  )
}

export default Pricing;
