'use client';

// import Upcoming from "../../components/Events/Upcoming";
import { motion } from "framer-motion";
import {
  floatFromDownMainTitle,
} from "../../../motion/home-sections";
import { upcomingEventsData } from "../../../data/upcoming-events";
import EventCard from "../../components/Events/EventCard";
import "@/src/scss/pages/Page.scss";
import "@/src/scss/pages/events/EventList.scss";


const UpcomingEvents = () => {
  return (
    <div className="page page--fluid page--full-height">
      <motion.div className="page__heading page__heading--spaced">
        <motion.h1 className="page__title"
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
      <motion.div className="event-list">
              <motion.div className={`event-list__grid ${upcomingEventsData.length > 1 ? 'event-list__grid--double' : ''}`}>
                {upcomingEventsData.map((event, index) => (
                  <motion.div
                    key={index}
                    className="event-list__item"
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
                    <EventCard key={index} {...event} isClickable={false} isAboveFold={index < 2} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
      
    </div>
  );
};

export default UpcomingEvents;