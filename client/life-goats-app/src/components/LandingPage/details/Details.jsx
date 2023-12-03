import DetailsCardLarge from "./DetailsCardLarge";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
} from "../../../assets/index.js";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <section
      id="details"
      className="bg-background relative bg-cover w-full h-full top-0 left-0 right-0 bottom-0 py-5 overflow-hidden">

<motion.div className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-5 z-10 overflow-hidden">
          <p className="md:text-[18px] text-[14px] text-secondary font-subtitle
          font-bold uppercase tracking-wider">
            The retreat in brief
          </p>
          <h2 className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-2 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}>
           Details
          </h2>
        </motion.div>

      <div className="grid grid-cols-6 lg:grid-cols-4 gap-3 w-full h-full p-4 relative">

        <div className="order-4 lg:order-1 row-span-4 col-span-3 lg:row-span-3 lg:col-span-1">
          <img src={photo1} alt="Maria and Natasa in a stream on the mountain" className="rounded-2xl" />
        </div>
        <div className="order-1 lg:order-2 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <img src={photo2} alt="donkeys near the top of the mountain" className="rounded-2xl" />
        </div>
        <div className="order-2 lg:order-3 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <img src={photo3} alt="king of the mountain" className="rounded-2xl" />
        </div>
        <div className="order-5 lg:order-4 row-span-4 col-span-3 lg:row-span-3 lg:col-span-1">
          <img src={photo4} alt="trees on the mountain" className="rounded-2xl" />
        </div>
        <div className="order-3 lg:order-5 row-span-4 col-span-6 lg:row-span-1 lg:col-span-2">
        <DetailsCardLarge />
        </div>
        <div className="order-6 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <img src={photo5} alt="Elizabeth on the mountain" className="rounded-2xl" />
        </div>
        <div className="order-7 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <img src={photo6} alt="Ruby on the mountain" className="rounded-2xl" />
        </div>

      </div>

    </section>
  );
};

export default Details;
