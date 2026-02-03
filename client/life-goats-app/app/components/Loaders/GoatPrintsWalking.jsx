'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import { goatPrintSingle } from "@/public/assets";
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

const GoatPrintsWalking = ({ isSmallScreen }) => {

    return (

<motion.div className="w-[90%] flex flex-col justify-center items-center mx-auto"
          variants={isSmallScreen ? stepsRepeatMobile : stepsRepeat}
          initial="initial"
          whileInView="animate" 
viewport={{ once: true }}
        >
          <motion.div className="flex flex-row justify-center items-center mt-6 w-[90%]">
            <MotionImage
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
              variants={stepTopLeft}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            />
            <MotionImage
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
              variants={stepTopRight}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            />
          </motion.div>
          <motion.div className="flex flex-row justify-center items-center mb-5 w-[90%]">
            <MotionImage
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
              variants={stepBottomLeft}
              initial="initial"
              whileInView="animate" 
viewport={{ once: true }}
            />
            <MotionImage
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
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