'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion";
import { RouteAltimeter, RouteInfoTextDisplay, RouteLinksDisplay, ImageCarousel } from "../components/TheHike";
import { ascentData, descentData, totalAscentData, totalDescentData, routeText, routeLinks, imageSliderData } from "../../../data/theHike";

const TheRoute = () => {  

  return (
    <motion.div
      className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0
      overflow-hidden pt-2 pb-2 z-10 mb-[130px]"
    >
      <motion.div
        className="flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center items-center mx-auto pt-28 pb-3 text-primary
        font-body md:text-[16px] text-[14px] w-[90%] lg:w-[80%]"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >

        <RouteAltimeter routeTimelineData={ascentData} totalData={totalAscentData} title="Ascent" difference="gain" totalAltitude={1780} />
        <RouteAltimeter routeTimelineData={descentData} totalData={totalDescentData} title="Descent" difference="loss" totalAltitude={1842} />

        {/* <div className="flex flex-col items-center  mx-auto justify-center text-justify w-[80%] lg:w-[60%] font-title text-xl">
        <p><span className="text-secondary">Note:</span> Something is wrong with the altimeters of the hike. They will be back up as soon as possible. Thank you for your patience!</p>
        </div> */}

        </motion.div>

        <motion.div
        className="flex flex-col gap-10 justify-center items-start mx-auto pt-1 lg:pt-10 pb-3 lg:pb-10 text-primary
        font-body md:text-[16px] text-[14px] w-full"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >
     
    <RouteInfoTextDisplay routeText={routeText} />

    <RouteLinksDisplay routeLinks={routeLinks} />

    <ImageCarousel imageSliderData={imageSliderData} />


</motion.div>
    </motion.div>
  );
};

export default TheRoute;
