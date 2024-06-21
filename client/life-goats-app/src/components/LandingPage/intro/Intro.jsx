import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  fadeIn,
} from "../../../motion/motion";

const Intro = ({ isSmallScreen }) => {

  const textRef = useRef();

  return (
    <section id="intro" className="overflow-hidden bg-background relative bg-cover
    w-full h-auto min-h-full left-0 right-0 top-0 py-16 z-10">

      <div className="max-w-7xl mx-auto flex">

        {/* Intro text */}
          <motion.div
            variants={fadeIn}
            ref={textRef}
            initial="initial"
            whileInView="animate"
            className="flex flex-col justify-center items-center mx-auto lg:text-[34px] sm:text-[28px] text-[20px] text-primary 
            font-body w-[90%] md:w-[80%] xl:w-[90%] max-w-md sm:max-w-6xl font-bold 
            lg:leading-[60px] leading-[40px] my-auto z-40 text-center"
          >
            <p className="pb-5">
            Our goal is to help each other press pause on the momentum of daily life, come together, connect, brainstorm, recharge and enjoy reinventing ourselves.</p>
            <p className="pb-5">As people-centered professionals, our performance depends on that.</p>
            <p>Join us!</p>
          </motion.div>
       
      </div>
    </section>
  );
};

export default Intro;
