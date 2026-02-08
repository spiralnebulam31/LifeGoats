'use client';

// import Upcoming from "../../components/Events/Upcoming";
import { motion } from "framer-motion";
import {
  floatFromDownMainTitle,
} from "../../../motion/home-sections";
import { upcomingEventsData } from "../../../data/upcoming-events";
import EventCard from "../../components/Events/EventCard";


const UpcomingEvents = () => {
  return (
    <div className="bg-background relative bg-cover w-full h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[180px] flex flex-col justify-center text-center mx-auto">
      <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto my-10 overflow-hidden">
        <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold"
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
        >
          Upcoming Events
        </motion.h1>
      </motion.div>

      {/* Comment out the line below if there are NO upcoming events to show */}
      {/* <Upcoming /> */}

      {/* Comment out the code below if there ARE upcoming events to show */}
      <motion.div className="flex flex-row justify-evenly items-center">
              <motion.div className={`grid gap-8 md:gap-20 mb-2 md:mb-4 ${upcomingEventsData.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2'}`}>
                {upcomingEventsData.map((event, index) => (
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
                    <EventCard key={index} {...event} isClickable={false} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
      
    </div>
  );
};

export default UpcomingEvents;