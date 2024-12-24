import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TestimonialsPageCard = ({ name, text }) => {
  return (
    <motion.div
      className="flex flex-row mx-auto gap-1 justify-center text-center my-auto w-[340px] h-auto px-2 z-0 bg-background m-2 rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="px-2 pt-3 pb-1 flex flex-col justify-center text-center mx-auto">
        <div className="text-primary font-body text-center text-[14px] md:text-[16px] py-2">
          {text.length > 1 ? (
             text.map((line, index) => (
              <p key={index}>
                {line}
                {line === "" && <br />}
              </p>
            ))
          ) : (
            <p>{text}</p>
          )}
        </div>
        <p className="text-primary font-subtitle text-center text-[14px] font-bold py-2 italic">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

TestimonialsPageCard.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
};

export default TestimonialsPageCard;