'use client';

import { motion } from "framer-motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
  floatFromLeftContact,
} from "../../../../motion/home-sections";
import { mtOlympusOct2024TeamData } from "../../../../data/team";
import TeamBubble from "./TeamBubble";
import Image from "next/image";

const TheTeamOct2024 = () => {
  return (
    <section
      className="bg-background
      relative bg-cover bg-no-repeat w-full h-full inset-0 overflow-hidden pt-2 pb-12 z-10 mb-[180px]"
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
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-4 mb-1 md:mb-3">
          {mtOlympusOct2024TeamData.slice(0, 3).map((member, index) => (
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

      <motion.div
        className="flex flex-row justify-center text-center mx-auto
          text-primary font-body text-[16px] py-5 md:mt-2 w-[90%] md:w-[70%] lg:w-[50%]"
        variants={floatFromLeftContact}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
        <motion.p className="my-auto mr-4">
          And special thanks to our photographer{" "}
          <span className="text-tertiary font-subtitle text-center text-[18px] font-bold">
            {mtOlympusOct2024TeamData[3].title}{" "}
          </span>
        </motion.p>

        <Image
          src={mtOlympusOct2024TeamData[3].image}
          alt={mtOlympusOct2024TeamData[3].alt}
          className="object-cover w-[150px] h-[150px] rounded-full shadow-lg"
          width={300}
          height={300}
        />
      </motion.div>
    </section>
  );
};

export default TheTeamOct2024;
