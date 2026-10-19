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
import "@/src/scss/components/Events/Upcoming.scss";

const MotionImage = motion.create(Image);

const Upcoming = () => {

  Upcoming.propTypes = {
    isSmallScreen: PropTypes.bool,
  };

  return (
    <motion.div className="upcoming">
        <MotionImage
          src={upcomingEvents}
          alt="hikers on Muses Plateau"
          className="upcoming__image"
          variants={floatFromLeftContact}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="upcoming__content"
          variants={floatFromRightContact}
          initial="initial"
          animate="animate"
        >
          <motion.p
            className="upcoming__text"
          >
            More retreats and events coming soon. Stay tuned!
          </motion.p>
          <motion.div
            className="upcoming__prints"
            variants={fadeIn}
            initial="initial"
            whileInView="animate" 
viewport={{ once: true }}
          >
            <GoatPrintsWalking />
          </motion.div>
          <motion.p
            className="upcoming__text upcoming__text--note"
          >
            If you have any suggestions or ideas for future events, don&apos;t hesitate to send us a <span className="upcoming__strike">goat</span> note!
          </motion.p>
          <motion.div
            className="upcoming__cta-row"
          >
            <Link
              href="/contact"
              className="upcoming__cta"
            >
              Contact Us
            </Link>
            </motion.div>
        </motion.div>
      </motion.div>
  )
}

export default Upcoming
