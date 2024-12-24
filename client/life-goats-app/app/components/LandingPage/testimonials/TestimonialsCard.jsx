import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TestimonialsCard = ({ name, text }) => {
  return (
    <motion.div
      className="flex flex-row mx-auto gap-1 justify-center text-center my-auto w-[340px] h-[300px] md:w-[400px] px-2 z-0 bg-background m-2 rounded-2xl shadow-lg overflow-hidden"
      >
        {/* <img
          src={image}
          alt={alt}
          className="flex justify-center text-center my-auto object-cover w-28 h-28 md:w-36 md:h-36 rounded-full drop-shadow-lg"
        /> */}
        <div className="px-2 pt-3 pb-1 flex flex-col justify-center text-center mx-auto">
          <p className="text-primary font-body text-center text-[14px] md:text-[16px] py-2">
            {text}
          </p>
          <p className="text-primary font-subtitle text-center text-[14px] font-bold py-2 italic">
            {name}
          </p>
        </div>
      </motion.div>
  );
};

TestimonialsCard.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TestimonialsCard;
