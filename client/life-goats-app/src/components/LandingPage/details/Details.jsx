import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { floatFromLeftVariant } from '../../../motion/motion.js';
import { details } from '../../../constants/constants.js';
import DetailCard from './DetailCard.jsx';

const Details = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section id="details" className="overflow-hidden">
    <div className="bg-background relative bg-cover w-full h-auto top-0 left-0 right-0 bottom-0 pt-20 pb-5">

      <motion.div variants={floatFromLeftVariant} initial="initial" ref={ref} animate={isInView ? "animate" : "initial"}
      className="flex items-center justify-center mx-auto">
        <motion.div className="bg-gradient-to-b from-secondary via-tertiary to-earth p-2 m-3 w-[60%] rounded-2xl shadow-lg">
        <motion.div className="bg-background rounded-2xl flex flex-col p-2">
          <motion.div className="flex flex-wrap px-9 space-x-2 justify-start w-full lg:w-[80%] mx-auto">
            <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 my-6 lg:my-10 mx-auto">
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
