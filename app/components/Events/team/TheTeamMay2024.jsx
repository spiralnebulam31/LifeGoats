'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
  floatFromLeftContact,
  floatFromRightContact,
} from "../../../../motion/home-sections";
import { fadeIn } from "../../../../motion/motion";
import { mtOlympusMay2024TeamData } from "../../../../data/team";
import { theTeam } from "@/src/assets/the-team";
import TeamBubble from "./TeamBubble";
import "@/src/scss/components/Events/team/Team.scss";
import Image from "next/image";

const MotionImage = motion.create(Image);

const TheTeam = () => {
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
        <motion.div className="event-team__grid event-team__grid--six">
          {mtOlympusMay2024TeamData.slice(0, 6).map((member, index) => (
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

      <motion.div className="event-team__photo-row">
        <MotionImage
          src={theTeam}
          alt="The Team"
          className="event-team__photo"
          variants={fadeIn}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
          width={1500}
          height={800}
        />
      </motion.div>

      <motion.div
        className="event-team__thanks event-team__thanks--spaced"
        variants={floatFromLeftContact}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <motion.p className="event-team__thanks-text event-team__thanks-text--before-image">
          Special thanks to our photographer{" "}
          <span className="event-team__name">
            {mtOlympusMay2024TeamData[6].title}{" "}
          </span>
        </motion.p>

        <Image
          src={mtOlympusMay2024TeamData[6].image}
          alt={mtOlympusMay2024TeamData[6].alt}
          className="event-team__avatar"
          width={300}
          height={300}
        />
      </motion.div>

      <motion.div
        className="event-team__thanks"
        variants={floatFromRightContact}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <Image
          src={mtOlympusMay2024TeamData[7].image}
          alt={mtOlympusMay2024TeamData[7].alt}
          className="event-team__avatar"
          width={300}
          height={300}
        />

        <motion.p className="event-team__thanks-text event-team__thanks-text--after-image">
          Special appearance by{" "}
          <span className="event-team__name">
            {mtOlympusMay2024TeamData[7].title}
          </span>
        </motion.p>
      </motion.div>

      <motion.div
        className="event-team__thanks event-team__thanks--wide"
        variants={floatFromLeftContact}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <motion.p className="event-team__thanks-text event-team__thanks-text--before-image">
          And the{" "}
          <span className="event-team__name">
            {mtOlympusMay2024TeamData[8].title}
          </span>{" "}
          as {mtOlympusMay2024TeamData[8].responsibilty}
        </motion.p>

        <Image
          src={mtOlympusMay2024TeamData[8].image}
          alt={mtOlympusMay2024TeamData[8].alt}
          className="event-team__avatar"
          width={300}
          height={300}
        />
      </motion.div>
    </section>
  );
};

export default TheTeam;
