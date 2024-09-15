import { motion } from 'framer-motion';
import { floatFromLeftAbout, floatFromRightAbout, floatFromDownPreTitle, floatFromDownMainTitle } from '../../motion/home-sections';
import RouteAltimeter from "./RouteAltimeter";
import { ascentData, descentData, totalAscentData, totalDescentData } from "../../constants/theHike";

const TheHikeComponent = () => {  

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
        className="flex flex-col lg:flex-row gap-2 justify-center items-center mx-auto pt-5 pb-3 text-primary
        font-body md:text-[16px] text-[14px] w-[90%] xl:w-full xl:ml-[7%]"
      >
      <motion.div
        className="w-[90%] xl:w-full"
        variants={floatFromLeftAbout}
        initial="initial"
        whileInView="animate"
        >
          <RouteAltimeter 
            routeTimelineData={ascentData} 
            totalData={totalAscentData} 
            title="Ascent" 
            difference="gain" 
            totalAltitude={1780}
          />
        </motion.div>
        <motion.div
        className="w-[90%] xl:w-full"
        variants={floatFromRightAbout}
        initial="initial"
        whileInView="animate"
        >
          <RouteAltimeter 
            routeTimelineData={descentData} 
            totalData={totalDescentData} 
            title="Descent" 
            difference="loss" 
            totalAltitude={1842} 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TheHikeComponent;
