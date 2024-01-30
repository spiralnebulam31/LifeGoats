import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../motion/home-sections";
import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";

const SafetyConsiderations = () => {

  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 bottom-0 top-0
      overflow-hidden pt-2 pb-2"
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-28 mb-5 z-10 overflow-hidden"
      >
        <motion.p
          className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Information about
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-1 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Safety Considerations
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center mx-auto mt-2 py-4 text-primary
        font-body md:text-[16px] text-[14px] w-[80%] lg:w-[45%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >

        <p className="flex flex-wrap justify-center text-center mx-auto pt-4 pb-8 font-bold uppercase font-subtitle md:text-[20px] text-[16px]">
          coming soon
        </p>

        <motion.div className="w-[90%] pb-80">
          <GoatPrintsWalking />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SafetyConsiderations;
