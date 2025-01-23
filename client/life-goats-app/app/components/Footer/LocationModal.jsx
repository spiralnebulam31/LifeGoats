"use client";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Modals.css";
import MapDisplay from "../Location/MapDisplay";
import { footerLocation } from "../../../data/location";
import Link from "next/link";
import PropTypes from "prop-types";

const LocationModal = ({ isOpen, onClose }) => {
  const closeIcon = (
    <svg fill="#7BA862" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4"
        stroke="#7BA862"
        strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  const locationData = footerLocation;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      closeIcon={closeIcon}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      id="locationModal"
      aria-labelledby="location-modal"
    >
      <div className="flex flex-col items-center justify-center mx-auto p-4">
        <h2 className="text-earth text-2xl font-bold mb-4 font-subtitle">
          Location
        </h2>
        <MapDisplay
          locationData={locationData}
          zoom={6}
          width="200px"
          widthMd="300px"
          widthLg="350px"
          widthXl="400px"
          height="200px"
          heightMd="250px"
          heightLg="150px"
          heightXl="150px"
        />
        <p className="font-links font-bold mt-5">
          <Link
            href="https://maps.app.goo.gl/RymGxrJB2mA4APUE7"
            alt="Google Maps link"
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-tertiary md:text-[16px] text-[15px]"
          >
            See on Google Maps
          </Link>
        </p>
      </div>
    </Modal>
  );
};

LocationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LocationModal;
