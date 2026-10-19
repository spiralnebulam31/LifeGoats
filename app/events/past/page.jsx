'use client';

import { motion } from "framer-motion";
import {
  floatFromDownMainTitle,
} from "../../../motion/home-sections";
import { pastEventsData } from "../../../data/past-events";
import EventCard from "../../components/Events/EventCard";
import "@/src/scss/pages/events/EventList.scss";

const PastEvents = () => {

  return (
    <motion.div
      className="past-events"
    >
      <motion.div
        className="past-events__header"
      >
        <motion.h1
          className="past-events__title"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Past Events
        </motion.h1>
      </motion.div>

      <motion.div className="event-list event-list--centered">
        <motion.div className={`event-list__grid event-list__grid--wide ${pastEventsData.length > 1 ? 'event-list__grid--double' : ''}`}>
          {pastEventsData.map((event, index) => (
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
              <EventCard key={index} {...event} isClickable={true} isAboveFold={index < 2} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PastEvents;
