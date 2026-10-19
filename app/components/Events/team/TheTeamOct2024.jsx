'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
  floatFromLeftContact,
} from "../../../../motion/home-sections";
import { mtOlympusOct2024TeamData } from "../../../../data/team";
import TeamBubble from "./TeamBubble";
import "@/src/scss/components/Events/team/Team.scss";
import Image from "next/image";

const TheTeamOct2024 = () => {
  return (
    <section
      className="event-team"
    >
      <motion.div
        className="event-team__header"
      >
        <motion.p
          className="event-team__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Meet
        </motion.p>
        <motion.h2
          className="event-team__title"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          The Team
        </motion.h2>
      </motion.div>

      <motion.div className="event-team__row">
        <motion.div className="event-team__grid event-team__grid--three">
          {mtOlympusOct2024TeamData.slice(0, 3).map((member, index) => (
            <motion.div
              key={index}
              className="event-team__item"
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
                },
              }}
            >
              <TeamBubble key={index} {...member} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="event-team__thanks event-team__thanks--spaced"
        variants={floatFromLeftContact}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <motion.p className="event-team__thanks-text event-team__thanks-text--before-image">
          And special thanks to our photographer{" "}
          <span className="event-team__name">
            {mtOlympusOct2024TeamData[3].title}{" "}
          </span>
        </motion.p>

        <Image
          src={mtOlympusOct2024TeamData[3].image}
          alt={mtOlympusOct2024TeamData[3].alt}
          className="event-team__avatar"
          width={300}
          height={300}
        />
      </motion.div>
    </section>
  );
};

export default TheTeamOct2024;
