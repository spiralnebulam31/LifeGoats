'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import { goatPrintSingle } from "@/src/assets";
import {
  stepTopRight,
  stepBottomRight,
  stepTopLeft,
  stepBottomLeft,
  stepsRepeat,
  stepsRepeatMobile,
} from "../../../motion/loading-goat-prints";

const MotionImage = motion.create(Image);

import PropTypes from 'prop-types';
import "@/src/scss/components/Loaders/GoatPrintsWalking.scss";

const GoatPrintsWalking = ({ isSmallScreen }) => {

    return (

<motion.div className="goat-prints"
          variants={isSmallScreen ? stepsRepeatMobile : stepsRepeat}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
        >
          <motion.div className="goat-prints__row goat-prints__row--top">
            <MotionImage
              src={goatPrintSingle}
              alt=""
              className="goat-prints__print"
              variants={stepTopLeft}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            />
            <MotionImage
              src={goatPrintSingle}
              alt=""
              className="goat-prints__print"
              variants={stepTopRight}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            />
          </motion.div>
          <motion.div className="goat-prints__row goat-prints__row--bottom">
            <MotionImage
              src={goatPrintSingle}
              alt=""
              className="goat-prints__print"
              variants={stepBottomLeft}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            />
            <MotionImage
              src={goatPrintSingle}
              alt=""
              className="goat-prints__print"
              variants={stepBottomRight}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>

    );

};

GoatPrintsWalking.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired,
};

export default GoatPrintsWalking;