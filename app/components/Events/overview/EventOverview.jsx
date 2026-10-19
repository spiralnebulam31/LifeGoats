'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import OverviewCard from "./OverviewCard";
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/overview/EventOverview.scss";

const EventOverview = ( { title, mainTitle, overviewData } ) => {

  EventOverview.propTypes = {
    title: PropTypes.string.isRequired,   
    mainTitle: PropTypes.string.isRequired,
    overviewData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,   
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <section
      className="event-overview"
    >
      <motion.div
        className="event-overview__header"
      >
        <motion.p
          className="event-overview__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          {title}
        </motion.p>
        <motion.h2
          className="event-overview__title"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          {mainTitle}
        </motion.h2>
      </motion.div>

      <motion.div className="event-overview__row">
        <motion.div className="event-overview__grid">
          {overviewData.map((overview, index) => (
            <motion.div
              key={index}
              className="event-overview__item"
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
              <OverviewCard key={index} {...overview} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EventOverview;
