'use client';

import { motion } from 'framer-motion';
import { fadeIn } from "../../../../motion/motion";
import { goal, comeTogether, connect, brainstorm, recharge, enjoy } from "../../../../motion/intro-section";
import { introSectionImg } from "@/public/assets/index";
import Image from 'next/image';

const Intro = () => {
  // New animation variants for the expanded content
  const paragraphVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const highlightVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="intro" className="overflow-hidden bg-background relative bg-cover w-full h-auto min-h-full left-0 right-0 top-0 z-10 lg:text-[34px] sm:text-[28px] text-[20px] text-primary 
            font-body font-bold lg:leading-[60px] leading-[40px] p-10 md:p-16">

      <motion.div 
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        className="flex flex-col items-center justify-center text-center mx-auto w-[90%] lg:w-[60%] space-y-12">

        {/* First paragraph - original with animations */}
        <motion.div 
          className="pb-4"
          variants={paragraphVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.span 
          className="font-title text-tertiary"
          variants={goal}
          initial="initial"
          whileInView="animate"
          >
          Our goal
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
        </motion.div>

        {/* Mission statement - highlighted */}
        <motion.div 
          className="relative"
          variants={highlightVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-r from-tertiaryLight/20 to-tertiary/20 rounded-2xl p-8 border-l-4 border-tertiary">
            <motion.span 
              className="font-title text-tertiary text-[1.1em]"
              variants={goal}
              initial="initial"
              whileInView="animate"
            >
              Our mission
            </motion.span> is all about expanding the meaning of{' '}
            <motion.span 
              className="font-title text-tertiary"
              variants={comeTogether}
              initial="initial"
              whileInView="animate"
            >
              family
            </motion.span>.
          </div>
        </motion.div>

        {/* Supporting paragraphs with staggered animation */}
        <motion.div 
          className="space-y-8 text-[0.9em] lg:text-[0.85em]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p
            variants={{
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            We know that strong, supportive relationships are{' '}
            <span className="text-tertiary font-title">priceless</span>.
          </motion.p>

          <motion.p
            variants={{
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
          >
            They provide peace of mind, no matter the external challenges the world throws your way.
          </motion.p>

          {/* Image */}
<motion.div
  variants={{
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } }
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
</motion.div>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
            }}
          >
            A united and open team that works in{' '}
            <span className="text-tertiary font-title">harmony</span>, not out of obligation.
          </motion.p>

          <motion.p
            variants={{
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.8 } }
            }}
            className="text-secondary"
          >
            One that allows and welcomes fresh air, new roles, new experiences and change while remaining{' '}
            <span className="text-tertiary font-title">rooted</span> and in a continuum.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;