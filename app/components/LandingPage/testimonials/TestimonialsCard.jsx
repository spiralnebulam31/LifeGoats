import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import "@/src/scss/components/LandingPage/testimonials/TestimonialsCard.scss";

const TestimonialsCard = ({ name, text }) => {
  return (
    <motion.div
      className="testimonials-card"
      >
        {/* <img
          src={image}
          alt={alt}
          className="flex justify-center text-center my-auto object-cover w-28 h-28 md:w-36 md:h-36 rounded-full drop-shadow-lg"
        /> */}
        <div className="testimonials-card__body">
          <p className="testimonials-card__text">
            {text}
          </p>
          <p className="testimonials-card__name">
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
