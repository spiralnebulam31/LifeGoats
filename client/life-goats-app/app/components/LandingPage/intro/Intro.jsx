'use client';

import { motion } from 'framer-motion';
import { fadeIn } from "../../../../motion/motion";
import { goal, comeTogether, connect, brainstorm, recharge, enjoy } from "../../../../motion/intro-section";

const Intro = () => {

  return (
    <section id="intro" className="overflow-hidden bg-background relative bg-cover w-full h-auto min-h-full left-0 right-0 top-0 z-10 lg:text-[34px] sm:text-[28px] text-[20px] text-primary 
            font-body font-bold lg:leading-[60px] leading-[40px] p-10 md:p-16">

      <motion.div 
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center justify-center text-center mx-auto w-[90%] lg:w-[60%]">

        <div className="pb-10 justify-normal">
          Our <motion.span 
          className="font-title text-tertiary"
          variants={goal}
          initial="initial"
          whileInView="animate"
          >
          goal
          </motion.span>{' '}
          is to help each other press pause on the momentum of daily life,{' '}
          <motion.span
            variants={comeTogether}
            initial="initial"
            whileInView="animate"
          >
            come together
          </motion.span>,{' '} 
          <motion.span
            variants={connect}
            initial="initial"
            whileInView="animate"
          >
          connect
          </motion.span>,{' '}
          <motion.span
            variants={brainstorm}
            initial="initial"
            whileInView="animate"
          >
          brainstorm
          </motion.span>,{' '}
          <motion.span
            variants={recharge}
            initial="initial"
            whileInView="animate"
          >
          recharge
          </motion.span>
          {' '}and{' '}
           <motion.span
            variants={enjoy}
            initial="initial"
            whileInView="animate"
          >
            enjoy reinventing ourselves
          </motion.span>.
        </div>
        <div className="">
          As people-centered professionals, our performance depends on that.
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;