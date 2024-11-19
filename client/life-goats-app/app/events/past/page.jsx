import { motion } from "framer-motion";
// import { historyBG } from "../assets";
import {
  floatFromDownMainTitle,
} from "../motion/home-sections";
import { pastEventsData } from "../constants/past-events";
import EventCard from "../components/PastEvents/EventCard";

const PastEvents = ({ isSmallScreen }) => {

  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden p-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto"
    >
      {/* <img
        src={historyBG}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
      /> */}
      <motion.div
        className="py-auto text-center w-[80%] lg:w-[90%] mx-auto
        mt-2 mb-5 z-10 overflow-hidden"
      >
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-1 md:pb-4 mt-20"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Past Events
        </motion.h2>
      </motion.div>

      <motion.div className="flex flex-row justify-evenly items-center">
        <motion.div className="grid grid-cols-1 gap-8 mb-2 md:mb-4">
        {/* <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 mb-2 md:mb-4"> - keep this line instead of the above if there are more than one events */}
          {pastEventsData.map((event, index) => (
            <motion.div
              key={index}
              className="relative z-10"
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
              <EventCard key={index} {...event} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PastEvents;
