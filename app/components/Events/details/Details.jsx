"use client";

import DetailsCardLarge from "./DetailsCardLarge";
import {
  floatFromDownPreTitle,
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
import "@/src/scss/components/Events/details/Details.scss";

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
        ? "details details--gradient" : "details" }`}
    >
      <motion.div
        className="details__header"
      >
        <motion.p
          className={`details__pretitle ${
            titleColor === "white" ? "details__pretitle--white" : ""
          }`}
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {title}
        </motion.p>
        <motion.h2
          className="details__title"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0,0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          {mainTitle}
        </motion.h2>
      </motion.div>

      <motion.div className="details__grid">
        <motion.div className="details__cell details__cell--1">
          <Image
            src={images[0].image}
            alt={images[0].alt}
            className="details__image details__image--fill"
            variants={floatFromDownDetails}
            initial="initial"
            animate={oneInView ? "animate" : "initial"}
            ref={ref1}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="details__cell details__cell--2">
          <Image
            src={images[1].image}
            alt={images[1].alt}
            className="details__image"
            variants={floatFromLeftDetails2}
            initial="initial"
            animate={twoInView ? "animate" : "initial"}
            ref={ref2}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="details__cell details__cell--3">
          <Image
            src={images[2].image}
            alt={images[2].alt}
            className="details__image"
            variants={floatFromLeftDetails1}
            initial="initial"
            animate={threeInView ? "animate" : "initial"}
            ref={ref3}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="details__cell details__cell--4">
          <Image
            src={images[3].image}
            alt={images[3].alt}
            className="details__image details__image--fill"
            variants={floatFromUpDetails}
            initial="initial"
            animate={fourInView ? "animate" : "initial"}
            ref={ref4}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="details__cell details__cell--5">
          <DetailsCardLarge details={details} />
        </motion.div>
        <motion.div className="details__cell details__cell--6">
          <Image
            src={images[4].image}
            alt={images[4].alt}
            className="details__image"
            variants={floatFromRightDetails2}
            initial="initial"
            animate={fiveInView ? "animate" : "initial"}
            ref={ref5}
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div className="details__cell details__cell--7">
          <Image
            src={images[5].image}
            alt={images[5].alt}
            className="details__image"
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
