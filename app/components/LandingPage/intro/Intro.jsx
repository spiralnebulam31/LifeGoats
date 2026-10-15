"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../../motion/motion";
import {
  goal,
  comeTogether,
  connect,
  brainstorm,
  recharge,
  enjoy,
} from "../../../../motion/intro-section";
import { introSectionImg } from "@/src/assets/index";
import Image from 'next/image';

const Intro = () => {
  // New animation variants for the expanded content
  const paragraphVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const highlightVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="intro"
      className="overflow-hidden bg-background relative bg-cover w-full h-auto min-h-full left-0 right-0 top-0 z-10 lg:text-[34px] sm:text-[28px] text-[20px] text-primary 
            font-body font-bold lg:leading-[60px] leading-[40px] p-10 md:p-16"
    >
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center mx-auto w-[90%] lg:w-[60%] space-y-12"
      >
        {/* First paragraph - original with animations */}
        <motion.div
          className="pb-4"
          variants={paragraphVariants}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
          viewport={{ once: true }}
        >
        Our{" "}
          <motion.span
            className="font-title text-tertiary"
            variants={goal}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >
            goal
          </motion.span>{" "}
          is to help each other press pause on the momentum of daily life,{" "}
          <motion.span
            variants={comeTogether}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >
            come together
          </motion.span>
          ,{" "}
          <motion.span
            variants={connect}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >
            connect
          </motion.span>
          ,{" "}
          <motion.span
            variants={brainstorm}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >
            brainstorm
          </motion.span>
          ,{" "}
          <motion.span
            variants={recharge}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >
            recharge
          </motion.span>{" "}
          and{" "}
          <motion.span variants={enjoy} initial="initial" whileInView="animate" 
viewport={{ once: true }}>
            enjoy reinventing ourselves
          </motion.span>
          .
        </motion.div>

        {/* Mission statement - highlighted */}
        <motion.div
          className="relative"
          variants={highlightVariants}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Our{" "}
            <motion.span
              className="font-title text-tertiary text-[1.1em]"
              variants={goal}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            >
               mission
            </motion.span>{" "}
            is all about expanding the meaning of{" "}
            <motion.span
            className="text-secondary"
            variants={comeTogether}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >
              family
            </motion.span>
            . A united and open team that works in{" "}
            <motion.span
            className="text-secondary"
            variants={comeTogether}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >harmony</motion.span>.
        </motion.div>

        {/* Supporting paragraphs with staggered animation */}
        <motion.div
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
          viewport={{ once: true, margin: "-50px" }}
        >

          {/* Image */}
          {/* <motion.div
            variants={{
              initial: { opacity: 0, scale: 0.8 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.5 },
              },
            }}
            className="flex justify-center py-6"
          >
            <Image
              src={introSectionImg}
              alt="Community gathering"
              className="rounded-2xl shadow-lg max-w-full h-auto"
              width={600}
              height={400}
            />
          </motion.div> */}


          <motion.p
            variants={{
              initial: { opacity: 0, scale: 0.95 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6, delay: 0.8 },
              },
            }}
            className="text-primary"
          >
            One that allows and welcomes fresh air, new roles, new experiences
            and change while remaining rooted and in a
            continuum.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
