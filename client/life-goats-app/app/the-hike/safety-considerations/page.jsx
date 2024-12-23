'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import GoatPrintsWalking from "../../components/Loaders/GoatPrintsWalking";
import { safetyConsiderationsBG } from "@/public/assets";
import Image from "next/image";

const SafetyConsiderations = () => {
  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto"
    >
      <Image
        src={safetyConsiderationsBG}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
        width={1920}
        height={1080}
      />
      <motion.div className="bg-background rounded-2xl drop-shadow-xl opacity-80 relative top-[100px] mb-10 z-20 w-[80%] lg:w-[70%] text-center mx-auto">
        <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-3 overflow-hidden">
          <motion.h1 className="text-earth font-title text-3xl md:text-4xl lg:text-6xl font-bold pb-5">
            Safety Considerations
          </motion.h1>
        </motion.div>
        <motion.ul className="w-[80%] mx-auto text-left pb-10" variants={fadeIn} initial="initial" whileInView="animate">
        <li>
        <p className="pb-5 italic">{"\u279c"} Alternative plan:</p>
        <p>There are some things that are out of our control.</p>
        <p>One of these things is the WEATHER!</p>
        <p>We can’t control the weather, but we can control whether or not we let that bother us 😉</p>
        <p className="pb-10">So, we have a list of alternative activities and shorter day hikes in our back pocket in case the weather conditions make the full mountain ascent a bad idea. Stay tuned!</p>
        </li>
        <li>
        <p className="pb-5 italic">{"\u279c"} Speak up!</p>
        <p>Although we will have a slow pace and break as often as necessary for everyone, hiking for long hours with steep stretches and altitude changes can be dangerous if we don’t listen to our bodies.</p>
        <p className="pb-10">While we will be your guides and check in with you often, be mindful to speak up honestly about how you are feeling. We will have some tips about staying hydrated and keeping your energy and blood sugar at good levels beforehand and some strong coaching motivation to pull you through some safe yet challenging stretches 😉</p>
        </li>
        <li>
        <p className="pb-5 italic">{"\u279c"} Helmets for the last 40 minutes of the ascent to the highest point (Mytikas peak) are a MUST.</p>
        <p className="pb-15">They can be rented for €8 at Kakalos refuge or Apostolidis refuge at the Plateau of the Muses (base camp).</p>
        </li>
        </motion.ul>
        <div className="w-[80%] mx-auto pb-10 font-bold">
        <p className="pb-5">If you would like any more info or have questions that need answering, feel free to ask!</p>
        <p className="pb-5">We are here for you 🐐🐐🐐</p>
        </div>
      </motion.div>
      <div className="relative z-20 w-[80%] lg:w-[70%] mx-auto pt-10 pb-8 font-body lg:text-lg text-md">
        <motion.p className="font-bold pt-14 pb-4 text-center" variants={fadeIn} initial="initial" whileInView="animate">
        Respect the mountain. Come prepared and with both ambition and humility...
        </motion.p>
        <motion.div className="w-[90%] mx-auto" variants={fadeIn} initial="initial" whileInView="animate">
          <GoatPrintsWalking />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SafetyConsiderations;
