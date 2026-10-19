'use client';

import { motion } from "framer-motion";
import {
  floatFromUpHomeHeroTitle,
  heroGoatPrintsVariant,
  goatPrintsSliderVariant,
} from "../../../../motion/hero";
import {
  goatPrintsLight,
  olympus2024BG3,
} from "@/src/assets/index";
import Image from 'next/image';
import Link from "next/link";
import "@/src/scss/components/LandingPage/hero/Hero.scss";

const Hero = () => {

  return (
    <section className="home-hero">
      <Image
        src={olympus2024BG3}
        alt="hero background"
        className="home-hero__background"
        with={1920}
        height={1080}
      />
      <div className="home-hero__content">
        {/* Hero text */}
          <motion.div
            variants={floatFromUpHomeHeroTitle}
            initial="initial"
            animate="animate"
            className="home-hero__intro"
          >
            <p className="home-hero__tagline">
            A community and event series for people who value relationship building and spending quality time together in the great outdoors.
            </p>
          </motion.div>
        
        {/* Goat print slider */}
        <motion.div
          variants={heroGoatPrintsVariant}
          initial="initial"
          animate="animate"
          className="home-hero__slider"
        >
          <Link href="/#intro">
            <motion.div
              variants={heroGoatPrintsVariant}
              initial="initial"
              animate="animate"
              className="home-hero__slider-track"
            >
              <motion.div variants={goatPrintsSliderVariant} initial="initial" animate="animate">
                <Image
                  src={goatPrintsLight}
                  alt="goat hoof prints"
                  className="home-hero__slider-prints"
                  width={60}
                  height={60}
                  style={{ width: "auto", height: "auto" }}
                />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
