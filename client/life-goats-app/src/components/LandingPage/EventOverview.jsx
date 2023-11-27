import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { transparentMountainBG } from "../../assets";
import { overviewData } from "../../constants/constants";
import OverviewCard from "./OverviewCard";

const EventOverview = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="event-overview" className="bg-gradient-to-b from-[#2F6FB7] via-[#96beeb] to-[#e1f0fc]
      relative bg-cover w-screen min-h-screen inset-0 left-0 right-0 bottom-0 top-0
      overflow-hidden">

        <motion.div className="text-start w-[80%] lg:w-[90%] mx-auto lg:mr-4 lg:ml-[15%]
        pt-6 mb-5 z-10 overflow-hidden">
          <p className="md:text-[18px] text-[14px] text-background font-subtitle
          font-bold uppercase tracking-wider">
            A retreat from us, for us.
          </p>
          <h2 className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-4 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(255,255,255, 0.3)" }}>
            What to expect
          </h2>
        </motion.div>

        <motion.div className="flex flex-row justify-evenly items-center">
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-5"
            ref={ref} animate={isInView ? "animate" : "initial"}>
              {overviewData.map((overview, index) => (
                <OverviewCard key={index} {...overview} />
              ))}
            </motion.div>
          </motion.div>

          <div className="w-full mt-8 md:mt-2 lg:mt-1 xl:mt-0">
          <img
            src={transparentMountainBG}
            alt="mountain top"
            className="w-full h-auto object-contain object-bottom z-40"
          />
        </div>

    </section>
  );
};

export default EventOverview;
