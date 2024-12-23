'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import GoatPrintsWalking from "../../components/Loaders/GoatPrintsWalking";
import { neededItemsBG } from "@/public/assets";
import NeededItemsText from "../../components/TheHike/NeededItemsText";

const PackingList = () => {
  return (
    <motion.div className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto">
      <img
        src={neededItemsBG}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
      />
      <motion.div className="bg-background rounded-2xl drop-shadow-xl opacity-90 relative top-[100px] mb-10 z-20 w-[80%] lg:w-[70%] text-center mx-auto">
        <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-3 overflow-hidden">
          <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
            List of Needed Items
          </motion.h1>
          <motion.h2 className="text-primary font-subtitle text-xl lg:text-3xl font-bold">
            for a comfortable hike
          </motion.h2>
        </motion.div>
        {/* Text */}
        <NeededItemsText />
        {/* End of text */}
      </motion.div>
      <div className="relative z-20 w-[80%] lg:w-[70%] mx-auto pt-10 pb-8 font-body lg:text-lg text-md">
        <motion.p
          className="font-bold pt-14 pb-4 text-center"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
        >
          Let's get ready and pack our bags!
        </motion.p>
        <motion.div
          className="w-[90%] mx-auto"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
        >
          <GoatPrintsWalking />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PackingList;
