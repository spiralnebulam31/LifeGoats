import { motion } from "framer-motion";
import {
  heroVariant,
  heroGoatPrintsVariant,
  goatPrintsSliderVariant,
} from "../../motion/motion.js";
import {
  goatPrints,
  heroBackground2
} from "../../assets";

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
            className="text-earth font-title font-bold lg:text-[85px] text-[75px] lg:leading-[98px] leading-[80px] my-2 z-40 flex flex-wrap justify-center items-center gap-1 md:gap-4">
            LIFE GOATS
          </motion.h1>
          <motion.div
            variants={heroVariant}
            className="text-primary max-w-md md:max-w-xl font-bold lg:text-[34px] text-[28px] lg:leading-[40px] my-2 z-40 text-center">
          <p className="font-subtitle">Mount Olympus</p>
          <p className="font-body">coaching conversations</p>
          </motion.div>
          <motion.div
            variants={heroVariant}
            className="text-primary font-body max-w-md md:max-w-3xl font-bold lg:text-[28px] text-[21px] lg:leading-[40px] my-2 z-40 text-center">
          <p className="mb-2">May 2024 (tentatively Tuesday 28 - Friday 31)</p>
          <p>A collaborative retreat for coaches, therapists, carers and other <span className="underline">people centered professionals</span>.</p>
          <p className="mt-2 font-bold lg:text-[32px] text-[26px]">A retreat from us, for us. </p>
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