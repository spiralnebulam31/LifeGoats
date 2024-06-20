import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  floatFromLeftLocation, 
  floatFromRightLocation1, 
  floatFromRightLocation2, 
  floatFromDownLocation, 
  floatFromDownPreTitle, 
  floatFromDownMainTitle,
  floatFromLeftLocationMobile,
  floatFromRightLocation1Mobile,
  floatFromRightLocation2Mobile,
  floatFromDownLocationMobile
 } from '../../../../motion/home-sections';
import { mountainStefani, mountainEnipeas } from "../../../../assets";
import { locationDataInfo } from "../../../../constants/location";
import MapDisplay from './MapDisplay';

const Location = ( { isSmallScreen } ) => {

  const mapDisplayRef = useRef();
  const locationInfoRef = useRef();
  const mountainStefaniRef = useRef();
  const mountainEnipeasRef = useRef();

  const mapDisplayInView = useInView(mapDisplayRef, { threshold: 0.5 });
  const locationInfoInView = useInView(locationInfoRef, { threshold: 0.5 });
  const mountainStefaniInView = useInView(mountainStefaniRef, { threshold: 0.5 });
  const mountainEnipeasInView = useInView(mountainEnipeasRef, { threshold: 0.5 });

  return (
    <section id="location" className="bg-background relative bg-cover w-full h-auto min-h-full left-0 right-0 bottom-0 top-0
    pt-2 pb-12 overflow-hidden z-10">
        
          <motion.div className="text-center w-[80%] lg:w-[90%] mx-auto pt-8 mb-5 z-10 overflow-hidden">
            <motion.p className="md:text-[18px] text-[14px] text-secondary font-subtitle font-bold uppercase tracking-wider"
            variants={floatFromDownPreTitle} initial="initial" whileInView="animate" viewport={{once: true}}
            >
              discover
            </motion.p>
            <motion.h2 className="text-earth font-bold font-title uppercase md:text-[55px] sm:text-[45px] text-[40px] pb-1 mt-0"
            style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
            variants={floatFromDownMainTitle} initial="initial" whileInView="animate" viewport={{once: true}}
            >
              The Location
            </motion.h2>
          </motion.div>
          
          <motion.div className="flex flex-col lg:flex-row items-center justify-center mx-auto mt-0 mb-4">
          <motion.div
          className="flex mb-6 pt-6 justify-center items-center mx-auto z-2 lg:ml-20 lg:mr-auto w-[80%] md:w-[80%] lg:w-[45%] xl:w-[35%] z-0"
          variants={isSmallScreen ? floatFromLeftLocationMobile : floatFromLeftLocation}
          initial="initial"
          ref={mapDisplayRef}
          animate={mapDisplayInView ? 'animate' : 'initial'}
          viewport={isSmallScreen ? {once: true} : {once: false}}
        >
          <MapDisplay />
        </motion.div>


        <motion.div
          className="relative flex flex-col mx-auto w-[80%] md:w-[70%] lg:w-[60%] xl:w-[35%] p-4 -mt-10 -mb-10 rotate-6 lg:rotate-0 lg:mb-0 lg:mt-2 xl:-mt-16 lg:-ml-20 lg:-mr-6 xl:-ml-24 xl:-mr-10 z-10 rounded-2xl bg-background drop-shadow-xl opacity-85 opacity-80"
          variants={isSmallScreen ? floatFromDownLocationMobile : floatFromDownLocation}
          initial="initial"
          ref={locationInfoRef}
          animate={locationInfoInView ? 'animate' : 'initial'}
          viewport={isSmallScreen ? {once: true} : {once: false}}
        >
            {locationDataInfo.map((data, index) => (
              <motion.div key={index} className="items-center text-primary">
                {data.paragraph && <p className="pb-5 md:text-[15px] text-[14px]">{data.paragraph}</p>}
                {data.googleMapsLink && (
                  <p className="font-links font-bold">
                    <a
                      href={data.googleMapsLink}
                      alt="Google Maps link"
                      className="hover:text-tertiary md:text-[16px] text-[15px]"
                    >
                      See on Google Maps
                    </a>
                  </p>
                )}
              </motion.div>
            ))}
            </motion.div>

          <motion.div className="flex flex-col items-center justify-center relative mx-auto z-2 mb-6 mt-2 lg:mt-6 xl:-mt-16 pt-6 lg:mr-28 lg:ml-auto w-[85%] md:w-[70%] lg:w-[40%] xl:w-[28%] h-auto">
          <motion.img
            src={mountainStefani}
            alt="Stefani on Mount Olympus"
            className="rounded-2xl drop-shadow-xl -rotate-6 mb-2"
            variants={isSmallScreen ? floatFromRightLocation1Mobile : floatFromRightLocation1}
            initial="initial"
            ref={mountainStefaniRef}
            animate={mountainStefaniInView ? 'animate' : 'initial'}
            viewport={isSmallScreen ? {once: true} : {once: false}}
          />
          <motion.img
            src={mountainEnipeas}
            alt="Enipeas on Mount Olympus"
            className="rounded-2xl drop-shadow-xl rotate-6 mt-2"
            variants={isSmallScreen ? floatFromRightLocation2Mobile : floatFromRightLocation2}
            initial="initial"
            ref={mountainEnipeasRef}
            animate={mountainEnipeasInView ? 'animate' : 'initial'}
            viewport={isSmallScreen ? {once: true} : {once: false}}
          />
          </motion.div>


        </motion.div>

    </section>
  );
};

export default Location;