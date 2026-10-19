'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import { coreValues } from "../../../../data/core-values";
import CoreValuesCard from "./CoreValuesCard";
import "@/src/scss/components/LandingPage/core-values/CoreValues.scss";

const CoreValues = () => {
  return (
    <section
      id="core-values"
      className="core-values"
    >
      <motion.div
        className="core-values__header"
      >
        <motion.p
          className="core-values__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Our
        </motion.p>
        <motion.h2
          className="core-values__title"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Core Values
        </motion.h2>
      </motion.div>

      <motion.div className="core-values__row">
        <motion.div className="core-values__grid">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="core-values__item"
              initial={{
                opacity: 0,
                translateX: index % 2 === 0 ? -100 : 100,
                translateY: -100,
              }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                translateY: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.2,
                }
              }}
              >
              <CoreValuesCard key={index} {...value} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoreValues;