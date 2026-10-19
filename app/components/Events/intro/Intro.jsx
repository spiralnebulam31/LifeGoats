'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { floatFromLeftAbout, floatFromRightAbout, floatFromDownPreTitle, floatFromDownMainTitle } from '../../../../motion/home-sections';
import Image from 'next/image';
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/intro/Intro.scss";

const MotionImage = motion.create(Image);

const Intro = ( { title, mainTitle, image, introText } ) => {

  Intro.propTypes = {
    title: PropTypes.string.isRequired,   
    mainTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    introText: PropTypes.arrayOf(
      PropTypes.shape({
        paragraph: PropTypes.string,
        lastParagraph: PropTypes.string,
        endText: PropTypes.string,
      })
    ).isRequired,
  };

  const photoRef = useRef();
  const textRef = useRef();

  const photoInView = useInView(photoRef, { threshold: 0.5 });
  const textInView = useInView(textRef, { threshold: 0.5 });
  
  return (
    <section className="event-intro">
      
      <motion.div className="event-intro__header">
          <motion.p className="event-intro__pretitle"
          variants={floatFromDownPreTitle} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
          >
            {title}
          </motion.p>
          <motion.h2 className="event-intro__title"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}
          variants={floatFromDownMainTitle} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
          >
            {mainTitle}
          </motion.h2>
        </motion.div>

        <motion.div className="event-intro__body">
  <MotionImage src={image} alt="host Maria with dog Ruby on Mount Olympus" className="event-intro__image"
  variants={floatFromLeftAbout} initial="initial" ref={photoRef} animate={photoInView ? "animate" : "initial"}
  />
  <motion.div className="event-intro__card"
  variants={floatFromRightAbout} initial="initial" ref={textRef} animate={textInView ? "animate" : "initial"}
  >
    {introText.map((text, index) => (
      <motion.div key={index} className="event-intro__paragraph-group">
        {text.paragraph && <p className="event-intro__paragraph">{text.paragraph}</p>}
        {text.lastParagraph && <p className="event-intro__paragraph event-intro__paragraph--bold">{text.lastParagraph}</p>}
        {text.endText && <p className="event-intro__end-text">{text.endText}</p>}
      </motion.div>
    ))}
  </motion.div>
</motion.div>
    </section>
  )
}

export default Intro;
