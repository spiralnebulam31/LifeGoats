'use client';

import { motion } from "framer-motion";
import {
  floatFromUpHeroTitle,
  floatFromUpHeroSubtitle,
  floatFromUpHeroText1,
  floatFromUpHeroText2,
  heroGoatPrintsVariant,
  goatPrintsSliderVariant,
} from "../../../../motion/hero";
import {
  goatPrints,
  calendar,
} from "@/src/assets/index.js";
import Image from "next/image";
import PropTypes from 'prop-types';
import Link from "next/link";
import "@/src/scss/components/Events/hero/Hero.scss";

const Hero = ( { image, locationTitle, date, p1, p2, slider } ) => {

  Hero.propTypes = {
    image: PropTypes.string.isRequired,
    locationTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,      
    p1: PropTypes.string.isRequired,
    p2: PropTypes.string.isRequired,
    slider: PropTypes.bool.isRequired,
  };

  return (
    <section className="event-hero">
      <Image
        src={image}
        alt=""
        className="event-hero__background"
        width={2400}
        height={1600}
      />
      <div className="event-hero__content">
        {/* Hero text */}
        <motion.div
          className="event-hero__intro"
          variants={floatFromUpHeroTitle}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={floatFromUpHeroSubtitle}
            className="event-hero__title"
            style={{ textShadow: "3px 2px 3px rgba(0, 0, 0, 0.3)" }}
          >
            LIFE GOATS
          </motion.h1>
          <motion.div
            variants={floatFromUpHeroText1}
            className="event-hero__location"
          >
            <p className="event-hero__location-name">{locationTitle}</p>
          </motion.div>
          <motion.div
            variants={floatFromUpHeroText2}
            className="event-hero__details"
          >
            <div className="event-hero__date-row">
              <Image
                src={calendar}
                alt=""
                className="event-hero__calendar"
                width={50}
                height={50}
              />
              <p className="event-hero__date">{date}</p>
            </div>
            <p className="event-hero__p1">
              {p1}
            </p>
            <p className="event-hero__p2">
              {p2}
            </p>
          </motion.div>
        </motion.div>

        {/* Goat print slider */}
        {slider && (
        <motion.div
          variants={heroGoatPrintsVariant}
          initial="initial"
          animate="animate"
          className="event-hero__slider"
        >
          <Link href="/#intro" aria-label="Scroll to the introduction">
            <motion.div
              variants={heroGoatPrintsVariant}
              className="event-hero__slider-track"
            >
              <motion.div variants={goatPrintsSliderVariant}>
                <Image
                  src={goatPrints}
                  alt=""
                  className="event-hero__slider-prints"
                  width={60}
                  height={60}
                  style={{ width: "auto", height: "auto" }}
                />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>)}
      </div>
    </section>
  );
};

export default Hero;
