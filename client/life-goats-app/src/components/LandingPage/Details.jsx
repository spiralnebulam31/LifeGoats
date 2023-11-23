import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn, floatFromLeftVariant } from '../../motion/motion.js';
import { details } from '../../constants/constants.js';

const DetailCard = ({ index, name, icon, alt, text }) => {
  return (
    <motion.div
    variants={fadeIn('left', 'spring', 1, 1.75)}
    className="bg-background rounded-2xl flex justify-center items-center flex-col"
    style={{
      transform: 'translateZ(60px)',
    }}
  >
    <Tilt
     className="w-18"
     style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-background rounded-2xl flex justify-evenly items-center flex-row p-1"
        >
          <img
            src={icon}
            alt={alt}
            className="w-20 object-contain rounded-2xl h-20 p-2 mb-1 shadow-md"
          />
        </motion.div>
    </Tilt>
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-background rounded-2xl flex justify-evenly items-center flex-col pt-1 px-1 h-20"
        >
          <p className="text-tertiary text-center text-[12px] font-bold max-w-6xl pt-2 px-4 h-10">{name}</p>
          <p className="text-primary flex flex-wrap text-center text-[16px] w-24 h-10 justify-center items-start mx-auto">{text}</p>
        </motion.div>
      </motion.div>
  );
}

const Details = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="details" className="overflow-hidden">
    <div className="bg-background relative bg-cover w-full h-auto top-0 left-0 right-0 bottom-0 pt-3 pb-10">
      <h1>Details</h1>
      <motion.div variants={floatFromLeftVariant} initial="initial" ref={ref} animate={isInView ? "animate" : "initial"}
      className="flex items-center justify-center mx-auto">
        <motion.div className="bg-gradient-to-b from-secondary via-tertiary to-earth p-2 m-3 w-[60%] rounded-2xl shadow-card">
        <motion.div className="bg-background rounded-2xl flex flex-col p-2">
          <motion.div className="flex flex-wrap px-9 space-x-2 justify-start w-full lg:w-[80%] mx-auto">
            <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-1 mt-10 mb-10">
              {details.map((detail, index) => (
                <DetailCard key={index} {...detail}  />
              ))}
            </motion.div>
          </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    </section>
  )
}

export default Details
