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
} from "@/public/assets/index";
import Image from 'next/image';

const Hero = ({ isSmallScreen }) => {

  return (
    <section className="bg-background sticky top-0 w-screen h-screen mx-auto overflow-hidden z-10">
      <Image
        src={olympus2024BG3}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
        with={1920}
        height={1080}
      />
      <div className="absolute inset-0 top-[100px] md:top-[30px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        {/* Hero text */}
          <motion.div
            variants={floatFromUpHomeHeroTitle}
            initial="initial"
            animate="animate"
            className="flex justify-center items-center mx-auto pb-10 text-white font-body w-[90%] lg:w-[80%] xl:w-full max-w-md md:max-w-7xl font-bold lg:text-[30px] md:text-[24px] text-[20px] lg:leading-[60px] leading-[35px] my-auto z-40 text-center drop-shadow-md"
          >
            <p className="lg:text-[50px] sm:text-[40px] text-[26px] max-w-sm sm:max-w-5xl md:max-w-7xl drop-shadow-xl">
            A community and event series for people centered professionals who value relationship building and spending quality time together in the great outdoors.
            </p>
          </motion.div>
        
        {/* Goat print slider */}
        <motion.div
          variants={heroGoatPrintsVariant}
          initial="initial"
          animate="animate"
          className="absolute bottom-16 my-2 w-full flex justify-center items-center mx-auto z-40"
        >
          <a href="/#intro">
            <motion.div
              variants={heroGoatPrintsVariant}
              initial="initial"
              animate="animate"
              className="w-[35px] h-[75px] rounded-3xl border-4 border-background flex justify-start items-start z-40"
            >
              <motion.div variants={goatPrintsSliderVariant} initial="initial" animate="animate">
                <Image
                  src={goatPrintsLight}
                  alt="goat hoof prints"
                  className="w-[60px] h-[60px] object-contain z-50"
                  width={60}
                  height={60}
                  style={{ width: "auto", height: "auto" }}
                />
              </motion.div>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
