'use client';

import { motion } from "framer-motion";
import { floatFromLeftAbout, floatFromRightAbout, floatFromDownPreTitle, floatFromDownMainTitle } from "../../../../motion/home-sections";
import AltimeterGraph from "./AltimeterGraph";

const Altimeter = ({ 
  ascentData, 
  descentData, 
  showBoth = true 
}) => {
  if (!ascentData || (!showBoth && !descentData)) {
    return null;
  }

  return (
    <section
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0
      overflow-hidden pt-2 pb-2 z-10 mx-auto"
    >
      <motion.div className="text-center w-[80%] lg:w-full mx-auto pt-14 mb-5 z-10 overflow-hidden">
        <motion.p 
          className="md:text-[18px] text-[14px] text-secondary font-subtitle font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
        >
          A glimpse at
        </motion.p>
        <motion.h2 
          className="text-earth font-bold font-title uppercase md:text-[55px] sm:text-[45px] text-[40px] outline-background-2 pb-2 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}
          variants={floatFromDownMainTitle} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
        >
          Our Hike
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start mx-auto pt-5 pb-10 text-primary
        font-body md:text-[16px] text-[14px] w-[90%] lg:w-[85%]"
      >
        {/* Ascent Graph with Totals */}
        <motion.div
          className="w-full lg:w-[48%]"
          variants={floatFromLeftAbout}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <AltimeterGraph 
            points={ascentData.points}
            title="Ascent"
            difference="gain"
            totalAltitude={ascentData.totals.altitudeGain}
            distanceCovered={ascentData.totals.distanceCovered}
          />
        </motion.div>

        {/* Descent Graph with Totals */}
        {showBoth && descentData && (
          <motion.div
            className="w-full lg:w-[48%]"
            variants={floatFromRightAbout}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <AltimeterGraph 
              points={descentData.points}
              title="Descent"
              difference="loss"
              totalAltitude={descentData.totals.altitudeLoss}
              distanceCovered={descentData.totals.distanceCovered}
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Altimeter;