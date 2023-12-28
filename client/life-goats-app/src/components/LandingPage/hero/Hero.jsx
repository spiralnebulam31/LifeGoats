import { motion } from "framer-motion";
import {
  floatFromUpHeroTitle,
  floatFromUpHeroSubtitle,
  floatFromUpHeroText1,
  floatFromUpHeroText2,
  heroGoatPrintsVariant,
  goatPrintsSliderVariant,
} from "../../../motion/hero";
import {
  goatPrints,
  heroBackground2,
  calendar,
} from "../../../assets/index.js";

const Hero = ({ isSmallScreen }) => {

  return (
    <section className="bg-background sticky top-0 w-screen h-screen mx-auto overflow-hidden z-10">
      <img
        src={heroBackground2}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
      />
      <div className="absolute inset-0 top-[150px] md:top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        {/* Hero text */}
        <motion.div
          className="flex flex-col justify-center items-center mx-auto"
          variants={floatFromUpHeroTitle}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={floatFromUpHeroSubtitle}
            className="text-earth font-title font-bold lg:text-[85px] md:text-[75px] text-[70px] lg:leading-[80px] leading-[70px] mt-4 lg:mt-2 z-40 flex flex-wrap justify-center items-center mb-4 gap-1 md:gap-4"
            style={{ textShadow: "3px 2px 3px rgba(0, 0, 0, 0.3)" }}
          >
            LIFE GOATS
          </motion.h1>
          <motion.div
            variants={floatFromUpHeroText1}
            className="text-primary max-w-md md:max-w-xl font-bold lg:text-[38px] md:text-[32px] text-[28px] lg:leading-[40px] mb-4 z-40 text-center"
          >
            <p className="font-subtitle">Mount Olympus</p>
          </motion.div>
          <motion.div
            variants={floatFromUpHeroText2}
            className="text-primary font-body max-w-md md:max-w-2xl font-bold lg:text-[26px] md:text-[24px] text-[20px] lg:leading-[40px] leading-[35px] mt-2 mb-3 z-40 text-center"
          >
            <div className="flex flex-row justify-center items-center gap-2">
              <img
                src={calendar}
                alt="calendar"
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain z-40 mb-5"
              />
              <p className="mb-5">tentatively Tue 28th - Fri 31st May</p>
            </div>
            <p className="lg:text-[30px] md:text-[28px] text-[23px] max-w-sm md:max-w-2xl">
              A collaborative retreat for coaches, therapists, carers and other
              people centered professionals.
            </p>
            <p className="mt-4 font-bold font-subtitle lg:text-[32px] md:text-[30px] text-[26px]">
              A retreat from us, for us.
            </p>
          </motion.div>
        </motion.div>

        {/* Goat print slider */}
        <motion.div
          variants={heroGoatPrintsVariant}
          initial="initial"
          animate="animate"
          className="absolute bottom-5 md:bottom-70 w-full flex justify-center items-center mx-auto z-40"
        >
          <a href="#about">
            <motion.div
              variants={heroGoatPrintsVariant}
              className="w-[35px] h-[75px] rounded-3xl border-4 border-primary flex justify-start items-start z-40"
            >
              <motion.div variants={goatPrintsSliderVariant}>
                <img
                  src={goatPrints}
                  alt="goat hoof prints"
                  className="w-[60px] h-[60px] object-contain z-50"
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
