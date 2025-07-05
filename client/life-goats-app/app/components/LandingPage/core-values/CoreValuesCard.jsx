import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CoreValuesCard = ({ alt, image, title, text }) => {
  return (
    <motion.div
      className="w-[280px] h-[430px] lg:w-[750px] lg:h-[250px] z-0 bg-background m-3 rounded-2xl shadow-lg overflow-hidden lg:flex lg:flex-col"
      >
        <h2 className="text-tertiary font-subtitle text-center text-[20px] font-bold px-6 py-3 flex-shrink-0">
          {title}
        </h2>
        <div className="flex-1 lg:flex overflow-hidden lg:items-center">
          <img
            src={image}
            alt={alt}
            className="w-full object-cover h-40 lg:w-[280px] lg:h-[150px] lg:flex-shrink-0"
          />
          <div className="px-6 pt-3 pb-1 flex flex-col mx-auto lg:flex-1 lg:justify-center lg:px-8 overflow-hidden lg:h-full">
            <div className="flex-1 overflow-y-auto lg:flex lg:items-center lg:justify-center">
              <p className="text-primary font-body text-center text-[14px] lg:text-[16px] max-w-6xl py-1 mb-2">
                {text}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
  );
};

CoreValuesCard.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CoreValuesCard;