// DetailsCardLarge.jsx
import DetailCard from './DetailCard.jsx';
import { motion } from 'framer-motion';
import { details } from '../../../constants/constants.js';

const DetailsCardLarge = () => {
  return (
    <motion.div className="flex items-center justify-center mx-auto">
      {/* <motion.div className="bg-background flex flex-col px-2 rounded-2xl drop-shadow-xl"> */}
        <motion.div className="flex flex-wrap px-2 space-x-2 justify-start w-full mx-auto my-auto">
          <motion.div className="grid grid-cols-2 lg:grid-cols-5 gap-1 my-4 mx-auto">
            {details.map((detail, index) => (
              <DetailCard key={index} {...detail} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    // </motion.div>
  );
};

export default DetailsCardLarge;
