"use client";

import DetailsCardLarge from "./DetailsCardLarge";
import {
  floatFromDownMainTitle,
  floatFromLeftDetails1,
  floatFromLeftDetails2,
  floatFromRightDetails1,
  floatFromRightDetails2,
  floatFromDownDetails,
  floatFromUpDetails,
} from "../../../../motion/home-sections";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import PropTypes from 'prop-types';

const Details = ( { title, mainTitle, details, images, bgColor, titleColor } ) => {

  Details.propTypes = {
    title: PropTypes.string.isRequired,
    mainTitle: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({     
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })      
    ).isRequired,
    bgColor: PropTypes.string,
    titleColor: PropTypes.string,
  };

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const oneInView = useInView(ref1, { threshold: 0.5 });
  const twoInView = useInView(ref2, { threshold: 0.5 });
  const threeInView = useInView(ref3, { threshold: 0.5 });
  const fourInView = useInView(ref4, { threshold: 0.5 });
  const fiveInView = useInView(ref5, { threshold: 0.5 });
  const sixInView = useInView(ref6, { threshold: 0.5 });

  return (
    <section
      className={`${
        bgColor === "gradient"
        ? "bg-gradient-to-b from-blue-400 via-blue-100 to-background"
        : "bg-background"
        } relative bg-cover w-full h-full top-0 left-0 right-0 bottom-0 overflow-hidden pt-2 pb-12 z-10`}
    >
      <motion.div
        className="text-center w-[80%] lg:w-[90%] mx-auto
        pt-8 mb-1 z-10 overflow-hidden"
      >
        <motion.p
           className={`${
          titleColor === "white"
          ? "text-background"
          : "text-secondary"
          } md:text-[18px] text-[14px] font-subtitle
          font-bold uppercase tracking-wider"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}`}
        >
          {title}
        </motion.p>
        <motion.h2
          className="text-earth font-bold font-title uppercase md:text-[55px]
          sm:text-[45px] text-[40px] outline-background-2 pb-2 mt-0"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {mainTitle}
        </motion.h2>
      </motion.div>

      <motion.div className="grid grid-cols-6 lg:grid-cols-4 gap-3 w-full h-full p-4 relative">
        <motion.div className="order-4 lg:order-1 row-span-4 col-span-3 lg:row-span-3 lg:col-span-1">
          <Image
            src={images[0].image}
            alt={images[0].alt}
            className="rounded-2xl"
            variants={floatFromDownDetails}
            initial="initial"
            animate={oneInView ? "animate" : "initial"}
            ref={ref1}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="order-1 lg:order-2 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <Image
            src={images[1].image}
            alt={images[1].alt}
            className="rounded-2xl"
            variants={floatFromLeftDetails2}
            initial="initial"
            animate={twoInView ? "animate" : "initial"}
            ref={ref2}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="order-2 lg:order-3 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <Image
            src={images[2].image}
            alt={images[2].alt}
            className="rounded-2xl"
            variants={floatFromLeftDetails1}
            initial="initial"
            animate={threeInView ? "animate" : "initial"}
            ref={ref3}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="order-5 lg:order-4 row-span-4 col-span-3 lg:row-span-3 lg:col-span-1">
          <Image
            src={images[3].image}
            alt={images[3].alt}
            className="rounded-2xl"
            variants={floatFromUpDetails}
            initial="initial"
            animate={fourInView ? "animate" : "initial"}
            ref={ref4}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="order-3 lg:order-5 row-span-4 col-span-6 lg:row-span-1 lg:col-span-2">
          <DetailsCardLarge details={details} />
        </motion.div>
        <motion.div className="order-6 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <Image
            src={images[4].image}
            alt={images[4].alt}
            className="rounded-2xl"
            variants={floatFromRightDetails2}
            initial="initial"
            animate={fiveInView ? "animate" : "initial"}
            ref={ref5}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="order-7 row-span-1 col-span-3 lg:row-span-1 lg:col-span-1">
          <Image
            src={images[5].image}
            alt={images[5].alt}
            className="rounded-2xl"
            variants={floatFromRightDetails1}
            initial="initial"
            animate={sixInView ? "animate" : "initial"}
            ref={ref6}
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Details;
