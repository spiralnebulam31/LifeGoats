import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { floatFromLeftAbout, floatFromRightAbout, floatFromDownPreTitle, floatFromDownMainTitle } from '../../../motion/home-sections';
import { aboutText } from '../../../constants/constants';
import { aboutPhoto } from '../../../assets';

const About = ( { isSmallScreen } ) => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: window.innerWidth < 768 ? "100px" : "-100px" });
  
  return (
    <section id="about" className="overflow-hidden bg-gradient-to-b from-background via-blue-100 to-blue-400 relative bg-cover
    w-full h-full top-0 left-0 right-0 bottom-0 pt-5 pb-16">
      
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

        <motion.div className="flex flex-col lg:flex-row items-center justify-center mx-auto mt-8 mb-8">
  <motion.img src={aboutPhoto} alt="host Maria with dog Ruby on Mount Olympus" className="w-[85%] md:w-[80%] lg:w-[55%] h-auto rounded-2xl drop-shadow-xl"
  variants={floatFromLeftAbout} initial="initial" ref={ref} animate={isInView ? "animate" : "initial"}
  />
  <motion.div className="w-[85%] md:w-[80%] lg:w-[35%] py-4 mt-5 lg:mt-0 bg-background rounded-2xl drop-shadow-xl opacity-85 lg:-ml-20 opacity-80"
  variants={floatFromRightAbout} initial="initial" ref={ref} animate={isInView ? "animate" : "initial"}
  >
    {aboutText.map((text, index) => (
      <motion.div key={index} className="w-full px-6 py-2">
        {text.paragraph && <p className="md:text-[15px] text-[14px] font-body text-primary">{text.paragraph}</p>}
        {text.endText && <p className="md:text-[16px] text-[15px] font-bold font-body text-secondary">{text.endText}</p>}
      </motion.div>
    ))}
  </motion.div>
</motion.div>





    </section>
  )
}

export default About
