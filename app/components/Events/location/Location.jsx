"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  floatFromDownLocationMobile,
} from "../../../../motion/home-sections";
import MapDisplay from "../../Location/MapDisplay";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import "@/src/scss/components/Events/location/Location.scss";

const Location = ({ isSmallScreen, title, mainTitle, locationData, locationDataInfo, image1, image2, imageAlt1, imageAlt2, googleMapsLink }) => {

  Location.propTypes = {
    isSmallScreen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    mainTitle: PropTypes.string.isRequired, 
    locationData: PropTypes.object.isRequired,
    locationDataInfo: PropTypes.arrayOf(
      PropTypes.shape({
        paragraph: PropTypes.string,
        googleMapsLink: PropTypes.string,
      })
    ).isRequired,
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,    
    imageAlt1: PropTypes.string.isRequired,
    imageAlt2: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
  };

  const mapDisplayRef = useRef();
  const locationInfoRef = useRef();
  const mountainStefaniRef = useRef();
  const mountainEnipeasRef = useRef();

  const mapDisplayInView = useInView(mapDisplayRef, { threshold: 0.5 });
  const locationInfoInView = useInView(locationInfoRef, { threshold: 0.5 });
  const mountainStefaniInView = useInView(mountainStefaniRef, {
    threshold: 0.5,
  });
  const mountainEnipeasInView = useInView(mountainEnipeasRef, {
    threshold: 0.5,
  });

  return (
    <section
      className="location"
    >
      <motion.div className="location__header">
        <motion.p
          className="location__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          {title}
        </motion.p>
        <motion.h2
          className="location__title"
          style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate" 
          viewport={{ once: true }}
        >
          {mainTitle}
        </motion.h2>
      </motion.div>

      <motion.div className="location__body">
        <motion.div
          className="location__map"
          variants={
            isSmallScreen ? floatFromLeftLocationMobile : floatFromLeftLocation
          }
          initial="initial"
          ref={mapDisplayRef}
          animate={mapDisplayInView ? "animate" : "initial"}
          viewport={isSmallScreen ? { once: true } : { once: false }}
        >
          <MapDisplay
            locationData={locationData}
            zoom={11}
            width="350px"
            widthMd="550px"
            widthLg="400px"
            widthXl="550px"
            height="400px"
            heightMd="400px"
            heightLg="450px"
            heightXl="550px"
          />
        </motion.div>

        <motion.div
          className="location__info"
          variants={
            isSmallScreen ? floatFromDownLocationMobile : floatFromDownLocation
          }
          initial="initial"
          ref={locationInfoRef}
          animate={locationInfoInView ? "animate" : "initial"}
          viewport={isSmallScreen ? { once: true } : { once: false }}
        >
          {locationDataInfo.map((data, index) => (
            <motion.div key={index} className="location__info-item">
              {data.paragraph && (
                <p className="location__paragraph">
                  {data.paragraph}
                </p>
              )}
              {data.googleMapsLink && (
                <p className="location__maps">
                  <Link
                    href={googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="location__maps-link"
                  >
                    See on Google Maps
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </Link>
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="location__photos">
          <motion.div
            className="location__photo location__photo--tilt-left"
            variants={
              isSmallScreen
                ? floatFromRightLocation1Mobile
                : floatFromRightLocation1
            }
            initial="initial"
            ref={mountainStefaniRef}
            animate={mountainStefaniInView ? "animate" : "initial"}
            viewport={isSmallScreen ? { once: true } : { once: false }}
          >
            <Image
              src={image1}
              alt={imageAlt1}
              className="location__photo-image"
              layout="responsive"
              width={500}
              height={300}
            />
          </motion.div>

          <motion.div
            className="location__photo location__photo--tilt-right"
            variants={
              isSmallScreen
                ? floatFromRightLocation2Mobile
                : floatFromRightLocation2
            }
            initial="initial"
            ref={mountainEnipeasRef}
            animate={mountainEnipeasInView ? "animate" : "initial"}
            viewport={isSmallScreen ? { once: true } : { once: false }}
          >
            <Image
              src={image2}
              alt={imageAlt2}
              className="location__photo-image"
              layout="responsive"
              width={500}
              height={300}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Location;