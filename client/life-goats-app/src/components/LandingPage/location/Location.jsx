import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { locationData, locationDataInfo } from "../../../constants/constants";
import { motion, useInView } from "framer-motion";
import { fadeIn, textVariant, floatFromLeftVariant, floatFromRightVariant } from "../../../motion/motion.js";

const Location = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-20px" });

  return (
    <section id="location" className="overflow-hidden">
      <div className="bg-background relative bg-cover w-full h-auto left-0 right-0 bottom-0 top-0 pb-16 pt-14">
        <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-2">
          <motion.div className="text-start w-[80%] lg:w-[70%] mx-auto lg:mr-4 lg:ml-auto pt-6 mb-5">
            <p className="md:text-[18px] text-[14px] text-secondary font-subtitle font-bold uppercase tracking-wider">
              discover
            </p>
            <h2 className="text-earth font-bold font-title uppercase md:text-[55px] sm:text-[45px] text-[40px] pb-3 mt-0"
            style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}>
              The Location
            </h2>

            <motion.div
              ref={ref}
              variants={floatFromLeftVariant} initial="initial" animate={isInView ? "animate" : "initial"}
            >
            {locationDataInfo.map((data) => (
              <div key={data.index} className="flex flex-row items-center text-primary">
                {data.paragraph && <p className="pb-5 md:text-[16px] text-[14px]">{data.paragraph}</p>}
                {data.googleMapsLink && (
                  <p className="font-links font-bold">
                    <a
                      href={data.googleMapsLink}
                      alt="Google Maps link"
                      className="hover:text-tertiary md:text-[18px] text-[16px]"
                    >
                      See on Google Maps
                    </a>
                  </p>
                )}
              </div>
            ))}
            </motion.div>
          </motion.div>

          <motion.div className="flex mb-6 pt-6 items-center mx-auto lg:ml-4 lg:mr-auto w-[90%] md:w-[80%] xl:w-[75%] z-0"
          variants={floatFromRightVariant} initial="initial" ref={ref} animate={isInView ? "animate" : "initial"}
          >
            <MapContainer
              attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              center={[40.102947, 22.502612]}
              zoom={11}
              scrollWheelZoom={false}
              className="w-[700px] h-[450px] z-0 object-contain rounded-2xl shadow-md"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {locationData.map((location) => (
                <Marker
                  key={location.id}
                  position={[location.lat, location.lng]}
                >
                  <Popup>
                    <h2 className="font-links font-bold">{location.name}</h2>
                    <p className="font-body">Latitude: {location.lat}</p>
                    <p className="font-body">Longitude: {location.lng}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
