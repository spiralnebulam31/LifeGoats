import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../motion/home-sections";
import RouteTimeline from "../components/TheHike/RouteTimeline";
import { ascentData, descentData, totalAscentData, totalDescentData, routeText } from "../constants/theHike";

const TheRoute = () => {  

  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0
      overflow-hidden pt-2 pb-2 z-10 mb-[129px]"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-28 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Information about
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
          The Route
        </motion.h2>
      </motion.div>

      <motion.div className="flex flex-col justify-center items-center mx-auto w-[90%]">
      <motion.div
        className="flex flex-col lg:flex-row gap-10 justify-center items-start mx-auto mt-2 py-4 text-primary
        font-body md:text-[16px] text-[14px] w-[90%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >

        <RouteTimeline routeTimelineData={ascentData} totalData={totalAscentData} title="The Ascent" />
        <RouteTimeline routeTimelineData={descentData} totalData={totalDescentData} title="The Descent" />

      </motion.div>

      <motion.div className="flex flex-col justify-center items-start mx-auto my-3 py-4 text-primary
        font-body md:text-[16px] text-[14px] w-[70%]">
            {routeText.map((text) => (
              <p key={text} className="font-medium text-lg font-body py-2">{text}</p>
            ))}
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default TheRoute;
