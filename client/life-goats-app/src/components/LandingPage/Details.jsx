import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn, floatFromLeftVariant } from '../../motion/motion.js';
import { details } from '../../constants/constants.js';

const DetailCard = ({ index, name, icon, alt, text }) => {
  return (
    <Tilt
     className="w-[250px]"
     style={{
          transformStyle: 'preserve-3d',
        }}
      >
      <motion.div
        variants={fadeIn('left', 'spring', 0.5, 1.25)}
        className="bg-gradient-to-b from-secondary via-tertiary to-earth p-[2px] m-3 w-[100px] rounded-2xl shadow-card"
        style={{
          transform: 'translateZ(60px)',
        }}
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-background rounded-2xl flex justify-evenly items-center flex-col p-3"
        >
          <img
            src={icon}
            alt={alt}
            className="w-full object-contain rounded-2xl max-h-20"
          />
          <p className="text-primary text-center text-[10px] font-bold max-w-6xl pt-2">{name}</p>
          <p className="text-primary text-center text-[14px] max-w-6xl pt-2">{text}</p>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}

const Details = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="details" className="overflow-hidden">
    <div className="bg-background relative bg-cover w-full h-[50vh] top-0 left-0 right-0 bottom-0 pt-5 pb-10">
      <h1>Details</h1>
      <motion.div variants={floatFromLeftVariant} initial="initial" ref={ref} animate={isInView ? "animate" : "initial"}>
          <motion.div className="flex flex-wrap px-9 space-x-2 justify-center w-full lg:w-[90%] mx-auto">
            <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-1 mt-10 mb-10">
              {details.map((detail, index) => (
                <DetailCard key={index} {...detail}  />
              ))}
            </motion.div>
          </motion.div>
          </motion.div>
    </div>
    </section>
  )
}

export default Details
