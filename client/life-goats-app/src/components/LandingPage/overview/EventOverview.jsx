import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { overviewData } from "../../../constants/constants";
import OverviewCard from "./OverviewCard";

const EventOverview = ( { isSmallScreen } ) => {

  // const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section
      id="overview"
      // ref={ref}
      className="bg-gradient-to-b from-blue-400 via-blue-100 to-background
      relative bg-cover bg-no-repeat w-full h-full inset-0 overflow-hidden">
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-5 z-10 overflow-hidden">
        <p
          className="md:text-[18px] text-[14px] text-background font-subtitle
          font-bold uppercase tracking-wider"
        >
          A retreat from us, for us.
        </p>
        <h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}
        >
          What to expect
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-row justify-evenly items-center"
      >
        <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20 mt-1 mb-20 mr-8"
        >
          {overviewData.map((overview, index) => (
            <motion.div
        key={index}
        className="relative z-10"
        // style={{ y: cardsY }}
      >
  {/* <OverviewCard key={index} {...overview} yMoving={cardsY} /> */}

  <OverviewCard key={index} {...overview} />

    </motion.div>
))}

        </motion.div>
      </motion.div>

    </section>
  );
};

export default EventOverview;
