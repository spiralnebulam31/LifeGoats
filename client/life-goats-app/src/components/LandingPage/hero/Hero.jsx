import { motion } from "framer-motion";
import {
  heroVariant,
  heroGoatPrintsVariant,
  goatPrintsSliderVariant,
} from "../../../motion/motion.js";
import {
  goatPrints,
  heroBackground2,
  calendar,
} from "../../../assets/index.js";

const Hero = () => {
  return (
      <section className="bg-background relative w-full h-screen mx-auto overflow-hidden">
      <img src={heroBackground2} alt="hero background" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-40" />
      <div
        className="absolute inset-0 top-[150px] md:top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        {/* Hero text */}
        <motion.div
          className="flex flex-col justify-center items-center mx-auto"
          variants={heroVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={heroVariant}
            className="text-earth font-title font-bold lg:text-[85px] text-[75px] lg:leading-[80px] leading-[70px] mt-2 z-40 flex flex-wrap justify-center items-center gap-1 md:gap-4"
            style={{ textShadow: "3px 2px 3px rgba(0, 0, 0, 0.3)" }}>
            LIFE GOATS
          </motion.h1>
          <motion.div
            variants={heroVariant}
            className="text-primary max-w-md md:max-w-xl font-bold lg:text-[38px] text-[30px] lg:leading-[40px] mb-4 z-40 text-center">
          <p className="font-body lg:text-[28px] text-[20px]">of</p>
          <p className="font-subtitle">Mount Olympus</p>
          </motion.div>
          <motion.div
            variants={heroVariant}
            className="text-primary font-body max-w-md md:max-w-2xl font-bold lg:text-[28px] text-[19px] lg:leading-[40px] leading-[35px] mt-2 mb-3 z-40 text-center">
          <div className="flex flex-row justify-center items-center gap-2">
          <img src={calendar} alt="calendar" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain z-40 mb-5" />
          <p className="mb-5">May 2024 (tentatively Tuesday 28th - Friday 31st)</p>
          </div>
          <p className="lg:text-[26px] text-[21px]">A collaborative retreat for coaches, therapists, carers and other <span className="underline">people centered professionals</span>.</p>
          {/* <p className="mt-4 font-bold lg:text-[32px] text-[26px]">A retreat from us, for us.</p> */}
          </motion.div>
          </motion.div>

      {/* Floating clouds */}
      {/* <motion.div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <motion.img
          src={starrySky1}
          alt="Starry background"
          className="absolute left-0 w-2/4 h-full object-cover pointer-events-none z-0 opacity-40"
          variants={starryHeroVariant1}
          initial="initial"
          animate="animate"
        />

        <motion.img
          src={starrySky2}
          alt="Starry background"
          className="absolute right-0 w-2/4 h-full object-cover pointer-events-none z-1 opacity-40"
          variants={starryHeroVariant2}
          initial="initial"
          animate="animate"
        />
      </motion.div> */}

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
            className="w-[35px] h-[75px] rounded-3xl border-4 border-primary flex justify-center items-start z-40"
          >
            <motion.div variants={goatPrintsSliderVariant}>
              <img
                src={goatPrints}
                alt="arrow star"
                className="w-[60px] h-[60px] object-contain z-50"
              />
            </motion.div>
          </motion.div>
        </a>
      </motion.div>
    </div>
    </section>
  );
}

export default Hero;