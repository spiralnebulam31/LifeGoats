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
      <img src={heroBackground2} alt="hero background" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-50" />
      <div
        className="absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        {/* Hero text */}
        <motion.div
          className="flex flex-col justify-center items-center mx-auto"
          variants={heroVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={heroVariant}
            className="text-earth font-title font-bold lg:text-[80px] text-[60px] lg:leading-[98px] leading-[80px] my-2 z-40 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] flex flex-wrap justify-center items-center gap-1 md:gap-4">
            LIFE GOATS
          </motion.h1>
          <motion.p
            variants={heroVariant}
            className="text-primary font-body max-w-md md:max-w-2xl font-bold lg:text-[40px] sm:text-[36px] xs:text-[30px] text-[26px] lg:leading-[40px] mt-2 z-40 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-center">
           Mount Olympus coaching conversations 
          </motion.p>
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