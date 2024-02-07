import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../motion/home-sections";
import { RouteAltimeter, RouteInfoTextDisplay, RouteImageSlider } from "../components/TheHike";
import { ascentData, descentData, totalAscentData, totalDescentData, routeText, imageSliderData } from "../constants/theHike";

const TheRoute = () => {  

  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0
      overflow-hidden pt-2 pb-2 z-10 mb-[129px]"
    >
      <motion.div
        className="flex flex-col gap-10 justify-center items-start mx-auto pt-28 pb-10 text-primary
        font-body md:text-[16px] text-[14px] w-[90%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >

        <RouteAltimeter routeTimelineData={ascentData} totalData={totalAscentData} title="Ascent" totalAltitude={1780} />
        <RouteAltimeter routeTimelineData={descentData} totalData={totalDescentData} title="Descent" totalAltitude={1842} />

      </motion.div>

    <RouteInfoTextDisplay routeText={routeText} />

    <RouteImageSlider imageSliderData={imageSliderData} />


    </motion.div>
  );
};

export default TheRoute;
