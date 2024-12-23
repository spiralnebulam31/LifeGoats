'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import {
  floatFromDownMainTitle,
  floatFromLeftContact,
  floatFromRightContact,
} from "../../../motion/home-sections";
import GoatPrintsWalking from "../../components/Loaders/GoatPrintsWalking";
import { upcomingEvents } from "@/public/assets/index.js";
import Link from "next/link";
import Image from "next/image";

const MotionImage = motion(Image);

const UpcomingEvents = () => {
  return (
    <motion.div className="bg-background relative bg-cover w-screen h-auto min-h-screen inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mb-[130px] flex flex-col justify-center text-center mx-auto">
      <motion.div className="bg-background relative top-[50px] mb-10 z-20 w-[80%] lg:w-[70%] text-center mx-auto">
        <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto my-10 overflow-hidden">
          <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold"
          variants={floatFromDownMainTitle}
          initial="initial"
          animate="animate"
          >
            Upcoming Events
          </motion.h1>
        </motion.div>
        <MotionImage
          src={upcomingEvents}
          alt="hikers on Muses Plateau"
          className="flex mx-auto rounded-2xl shadow-lg w-[90%] md:w-[70%] lg:w-[60%] xl:[40%] h-auto"
          variants={floatFromLeftContact}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="bg-background flex flex-col justify-center text-center mx-auto pt-10 pb-8 font-body lg:text-lg text-md w-[80%] lg:w-[70%]"
          variants={floatFromRightContact}
          initial="initial"
          animate="animate"
        >
          <motion.p
            className="font-bold mt-0 pb-4 text-center"
          >
            More retreats and events coming soon. Stay tuned!
          </motion.p>
          <motion.div
            className="w-[90%] mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
          >
            <GoatPrintsWalking />
          </motion.div>
          <motion.p
            className="font-bold mt-2 pb-4 text-center"
          >
            If you have any suggestions or ideas for future events, don't hesitate to send us a <span className="line-through font-links">goat</span> note!
          </motion.p>
          <motion.div
            className="flex justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-primary text-background font-subtitle font-bold uppercase tracking-wider py-2 mt-3 px-4 rounded-lg shadow-lg
          hover:bg-tertiary hover:text-earth"
            >
              Contact Us
            </Link>
            </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UpcomingEvents;