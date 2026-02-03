'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion/motion";
import {
  floatFromLeftContact,
  floatFromRightContact,
} from "../../../motion/home-sections";
import GoatPrintsWalking from "../../components/Loaders/GoatPrintsWalking";
import { upcomingEvents } from "@/src/assets/index.js";
import Link from "next/link";
import Image from "next/image";
import PropTypes from 'prop-types';

const MotionImage = motion.create(Image);

const Upcoming = () => {

  Upcoming.propTypes = {
    isSmallScreen: PropTypes.bool,
  };

  return (
    <motion.div className="bg-background relative top-[50px] mb-10 z-20 w-[80%] lg:w-[70%] text-center mx-auto">
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
viewport={{ once: true }}
          >
            <GoatPrintsWalking />
          </motion.div>
          <motion.p
            className="font-bold mt-2 pb-4 text-center"
          >
            If you have any suggestions or ideas for future events, don&apos;t hesitate to send us a <span className="line-through font-links">goat</span> note!
          </motion.p>
          <motion.div
            className="flex justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-primary text-background font-links font-bold uppercase tracking-wider py-2 mt-3 px-4 rounded-lg shadow-lg
          hover:bg-tertiary hover:text-earth"
            >
              Contact Us
            </Link>
            </motion.div>
        </motion.div>
      </motion.div>
  )
}

export default Upcoming
