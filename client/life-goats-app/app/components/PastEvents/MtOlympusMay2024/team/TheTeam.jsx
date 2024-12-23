'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
  floatFromLeftContact,
  floatFromRightContact,
} from "../../../../../motion/home-sections";
import { fadeIn } from "../../../../../motion/motion";
import { mtOlympusMay2024TeamData } from "../../../../../data/team";
import { theTeam } from "@/public/assets/the-team";
import TeamBubble from "./TeamBubble";

const TheTeam = ({ isSmallScreen }) => {
  return (
    <section
      className="bg-background
      relative bg-cover bg-no-repeat w-full h-full inset-0 overflow-hidden pt-2 pb-12 z-10 mb-[130px]"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Meet
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-1 md:pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          The Team
        </motion.h2>
      </motion.div>

      <motion.div className="flex flex-row justify-evenly items-center mx-auto">
        <motion.div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-1 md:gap-4 mb-1 md:mb-3">
          {mtOlympusMay2024TeamData.slice(0, 6).map((member, index) => (
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
                },
              }}
            >
              <TeamBubble key={index} {...member} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-row justify-center items-center mx-auto py-5">
        <motion.img
          src={theTeam}
          alt="The Team"
          className="w-[90%] md:w-[70%] lg:w-[50%] z-0 rounded-2xl shadow-lg"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
        />
      </motion.div>

      <motion.div
        className="flex flex-row justify-center text-center mx-auto
          text-primary font-body text-[16px] py-5 md:mt-2 w-[90%] md:w-[70%] lg:w-[50%]"
        variants={floatFromLeftContact}
        initial="initial"
        whileInView="animate"
      >
        <motion.p className="my-auto mr-4">
          Special thanks to our photographer{" "}
          <span className="text-tertiary font-subtitle text-center text-[18px] font-bold">
            {mtOlympusMay2024TeamData[6].title}{" "}
          </span>
        </motion.p>

        <img
          src={mtOlympusMay2024TeamData[6].image}
          alt={mtOlympusMay2024TeamData[6].alt}
          className="object-cover w-[150px] h-[150px] rounded-full shadow-lg"
        />
      </motion.div>

      <motion.div
        className="flex flex-row justify-center text-center mx-auto
          text-primary font-body text-[16px] py-5 w-[90%] md:w-[70%] lg:w-[50%]"
        variants={floatFromRightContact}
        initial="initial"
        whileInView="animate"
      >
        <img
          src={mtOlympusMay2024TeamData[7].image}
          alt={mtOlympusMay2024TeamData[7].alt}
          className="object-cover w-[150px] h-[150px] rounded-full shadow-lg"
        />

        <motion.p className="my-auto ml-4">
          Special appearance by{" "}
          <span className="text-tertiary font-subtitle text-center text-[18px] font-bold">
            {mtOlympusMay2024TeamData[7].title}
          </span>
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-row justify-center text-center mx-auto
          text-primary font-body text-[16px] py-5 w-[90%] md:w-[650%] lg:w-[50%]"
        variants={floatFromLeftContact}
        initial="initial"
        whileInView="animate"
      >
        <motion.p className="my-auto mr-4">
          And the{" "}
          <span className="text-tertiary font-subtitle text-center text-[18px] font-bold">
            {mtOlympusMay2024TeamData[8].title}
          </span>{" "}
          as {mtOlympusMay2024TeamData[8].responsibilty}
        </motion.p>

        <img
          src={mtOlympusMay2024TeamData[8].image}
          alt={mtOlympusMay2024TeamData[8].alt}
          className="object-cover w-[150px] h-[150px] rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default TheTeam;
