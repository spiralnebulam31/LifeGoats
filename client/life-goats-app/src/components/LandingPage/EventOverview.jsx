import { motion } from "framer-motion";
import { transparentMountainBG } from "../../assets";

const EventOverview = () => {
  return (
    <section id="event-overview" className="bg-gradient-to-b from-[#2F6FB7] via-[#96beeb] to-[#e1f0fc]
      relative bg-cover max-w-screen min-h-screen inset-0 left-0 right-0 bottom-0 top-0
      overflow-hidden">

        <motion.div className="text-start w-[80%] lg:w-[90%] mx-auto lg:mr-4 lg:ml-[15%]
        pt-6 mb-5 z-10 overflow-hidden">
          <p className="md:text-[18px] text-[14px] text-background font-subtitle
          font-bold uppercase tracking-wider">
            A retreat from us, for us.
          </p>
          <h2 className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] pb-3 mt-0">
            What to expect
          </h2>
        </motion.div>

        <motion.div className=" h-[200px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2
        pb-20">

        </motion.div>

        <div className="w-screen min-h-screen overflow-hidden">
        <img
          src={transparentMountainBG}
          alt="mountain top"
          className="absolute w-screen h-full object-fit:cover z-40 left-0 bottom-0
          right-0 overflow-hidden"
        />
        </div>

    </section>
  );
};

export default EventOverview;
