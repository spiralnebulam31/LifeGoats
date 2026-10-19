'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../../motion";
import "@/src/scss/components/TheHike/TheRoute.scss";
import { RouteAltimeter, RouteInfoTextDisplay, RouteLinksDisplay, ImageCarousel } from "../components/TheHike";
import { ascentData, descentData, totalAscentData, totalDescentData, routeText, routeLinks, imageSliderData } from "../../../data/theHike";

const TheRoute = () => {  

  return (
    <motion.div
      className="the-route"
    >
      <motion.div
        className="the-route__altimeters"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >

        <RouteAltimeter routeTimelineData={ascentData} totalData={totalAscentData} title="Ascent" difference="gain" totalAltitude={1780} />
        <RouteAltimeter routeTimelineData={descentData} totalData={totalDescentData} title="Descent" difference="loss" totalAltitude={1842} />

        </motion.div>

        <motion.div
        className="the-route__info"
        variants={fadeIn}
        initial="initial"
        whileInView="animate" 
viewport={{ once: true }}
      >
     
    <RouteInfoTextDisplay routeText={routeText} />

    <RouteLinksDisplay routeLinks={routeLinks} />

    <ImageCarousel imageSliderData={imageSliderData} />


</motion.div>
    </motion.div>
  );
};

export default TheRoute;
