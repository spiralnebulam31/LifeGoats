'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";
import { subscribeBG } from "@/public/assets";
import Image from "next/image";

const Subscribe = () => {
  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto"
    >
      <Image
        src={subscribeBG}
        alt="mountain background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10 opacity-30"
        width={1920}
        height={1080}
      />
      <motion.div className="bg-background rounded-2xl drop-shadow-xl opacity-80 relative top-[100px] mb-[150px] lg:mb-[197px] z-20 w-[80%] lg:w-[70%] text-center mx-auto">
        <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-3 overflow-hidden">
          <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
            Subscribe
          </motion.h1>
          <motion.h2 className="text-primary font-subtitle text-xl lg:text-3xl font-bold">
            to our newsletter
          </motion.h2>
        </motion.div>
        <motion.div className="bg-background flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[80%] lg:w-[70%]" variants={fadeIn} initial="initial" whileInView="animate">
          <p>If you have received the first Life Goats newsletter, it means you've automatically subscribed by having attended one of our events, physically or mentally!</p>
          <br />
          <p>If you wish to unsubscribe, all you have to do is send a message with your name and email to 
            <a href="mailto:anastasiaadamoudi@gmail.com" className="cursor-pointer text-secondary hover:text-tertiary"> anastasiaadamoudi@gmail.com</a>
          </p>
          <br />
          <p>Automatic subscribe/unsubscribe button functionality is being plotted by our goat Anastasia and it will be available soon!</p>
          <br />
          <div className="relative z-20 w-[80%] lg:w-[70%] mx-auto pt-10 pb-8 font-body lg:text-lg text-md">
            <motion.div className="w-[90%] mx-auto" variants={fadeIn} initial="initial" whileInView="animate">
              <GoatPrintsWalking />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Subscribe;