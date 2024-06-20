import DetailCard from './DetailCard.jsx';
import { motion } from 'framer-motion';
import { details } from '../../../../constants/details';
import { useMediaQuery } from "react-responsive";
import { fadeIn } from '../../../../motion/motion';

const DetailsCardLarge = () => {

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.div className="flex items-center justify-center mx-auto"
      variants={fadeIn} initial="initial" whileInView="animate"
    >
        <motion.div className="flex flex-wrap px-2 space-x-2 justify-center w-full mx-auto my-auto">
        
        {isSmallScreen && (
          <div>
          <motion.div className="grid grid-cols-3 gap-4 mb-1 mt-4 mx-auto">
            {details.slice(0,3).map((detail, index) => (
              <DetailCard key={index} {...detail} />
            ))}
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-1 my-1 mx-auto px-20 -py-3">
            {details.slice(3,5).map((detail, index) => (
              <DetailCard key={index} {...detail} />
            ))}
          </motion.div>
          </div>
          )}

          {!isSmallScreen && (
          <motion.div className="grid grid-cols-5 gap-4 lg:gap-1 mb-1 mt-4 mx-auto">
            {details.map((detail, index) => (
              <DetailCard key={index} {...detail} />
            ))}
          </motion.div>
          )}

        </motion.div>
      </motion.div>
  );
};

export default DetailsCardLarge;
