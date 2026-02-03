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

  // Check if routes are circular (start and end at same point)
  const isAscentCircular = ascentData?.points && ascentData.points.length > 0 && 
    ascentData.points[0].location === ascentData.points[ascentData.points.length - 1].location;
  const isDescentCircular = descentData?.points && descentData.points.length > 0 && 
    descentData.points[0].location === descentData.points[descentData.points.length - 1].location;
  
  // Determine route titles
  const getRouteTitle = (routeData, index, isCircular) => {
    if (isCircular && showBoth && ascentData && descentData) {
      return index === 0 ? "Route 1" : "Route 2";
    }
    if (isCircular) return "Circular Route";
    return index === 0 ? "Ascent" : "Descent";
  };
  
  const getRouteDifference = (routeData, index, isCircular) => {
    if (isCircular) return "circular";
    return index === 0 ? "gain" : "loss";
  };

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
            title={getRouteTitle(ascentData, 0, isAscentCircular)}
            difference={getRouteDifference(ascentData, 0, isAscentCircular)}
            totalAltitude={ascentData.totals.altitudeGain}
            totalAltitudeLoss={isAscentCircular ? ascentData.totals.altitudeLoss : null}
            distanceCovered={ascentData.totals.distanceCovered}
            isCircular={isAscentCircular}
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
              title={getRouteTitle(descentData, 1, isDescentCircular)}
              difference={getRouteDifference(descentData, 1, isDescentCircular)}
              totalAltitude={isDescentCircular ? descentData.totals.altitudeGain : descentData.totals.altitudeLoss}
              totalAltitudeLoss={isDescentCircular ? descentData.totals.altitudeLoss : null}
              distanceCovered={descentData.totals.distanceCovered}
              isCircular={isDescentCircular}
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Altimeter;