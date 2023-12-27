import { motion } from "framer-motion";
import { goatPrintSingle } from "../../assets";
import {
  stepTopRight,
  stepBottomRight,
  stepTopLeft,
  stepBottomLeft,
  stepsRepeat,
  stepsRepeatMobile,
} from "../../motion/loading-goat-prints";

const GoatPrintsWalking = ({ isSmallScreen }) => {

    return (

<motion.div className="w-[90%] flex flex-col justify-center items-center mx-auto"
          variants={isSmallScreen ? stepsRepeatMobile : stepsRepeat}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="flex flex-row justify-center items-center mt-6 w-[90%]">
            <motion.img
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
              variants={stepTopLeft}
              initial="initial"
              whileInView="animate"
            />
            <motion.img
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
              variants={stepTopRight}
              initial="initial"
              whileInView="animate"
            />
          </motion.div>
          <motion.div className="flex flex-row justify-center items-center mb-5 w-[90%]">
            <motion.img
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
              variants={stepBottomLeft}
              initial="initial"
              whileInView="animate"
            />
            <motion.img
              src={goatPrintSingle}
              alt="Goat Print"
              className="w-[20px] h-auto object-contain"
              variants={stepBottomRight}
              initial="initial"
              whileInView="animate"
            />
          </motion.div>
        </motion.div>

    );
}

export default GoatPrintsWalking;