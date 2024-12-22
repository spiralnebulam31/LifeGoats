'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { floatFromLeftAbout, floatFromRightAbout, floatFromDownPreTitle, floatFromDownMainTitle } from '../../../../motion/home-sections';
import { introText } from '../../../../data/intro';
import { aboutPhoto } from '../../../../../public/assets';

const Intro = ( { isSmallScreen } ) => {

  const photoRef = useRef();
  const textRef = useRef();

  const photoInView = useInView(photoRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });
  
  return (
    <section className="overflow-hidden bg-gradient-to-b from-background via-blue-100 to-blue-400 relative bg-cover
    w-full h-auto min-h-full left-0 right-0 top-0 pt-2 pb-12 z-10">
      
      <motion.div className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-14 mb-5 z-10 overflow-hidden">
          <motion.p className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle} initial="initial" whileInView="animate" viewport={{once: true}}
          >
            The host's reflections
          </motion.p>
          <motion.h2 className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-2 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}
          variants={floatFromDownMainTitle} initial="initial" whileInView="animate" viewport={{once: true}}
          >
            About The Retreat
          </motion.h2>
        </motion.div>

        <motion.div className="flex flex-col lg:flex-row items-center justify-center mx-auto mt-2 lg:mt-6 mb-8">
  <motion.img src={aboutPhoto} alt="host Maria with dog Ruby on Mount Olympus" className="w-[75%] md:w-[80%] lg:w-[55%] h-auto rounded-2xl drop-shadow-xl"
  variants={floatFromLeftAbout} initial="initial" ref={photoRef} animate={photoInView ? "animate" : "initial"}
  />
  <motion.div className="w-[85%] md:w-[80%] lg:w-[35%] py-4 mt-5 lg:mt-0 bg-background rounded-2xl drop-shadow-xl opacity-85 lg:-ml-20 opacity-80"
  variants={floatFromRightAbout} initial="initial" ref={textRef} animate={textInView ? "animate" : "initial"}
  >
    {introText.map((text, index) => (
      <motion.div key={index} className="w-full px-6 py-2 font-body text-primary">
        {text.paragraph && <p className="md:text-[15px] text-[14px]">{text.paragraph}</p>}
        {text.lastParagraph && <p className="md:text-[15px] text-[14px] font-bold">{text.lastParagraph}</p>}
        {text.endText && <p className="md:text-[17px] text-[16px] font-bold text-center">{text.endText}</p>}
      </motion.div>
    ))}
  </motion.div>
</motion.div>





    </section>
  )
}

export default Intro;
