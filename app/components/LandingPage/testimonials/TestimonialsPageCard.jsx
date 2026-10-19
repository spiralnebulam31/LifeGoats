import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import "@/src/scss/components/LandingPage/testimonials/TestimonialsCard.scss";

const TestimonialsPageCard = ({ name, text }) => {
  return (
    <motion.div
      className="testimonials-card testimonials-card--page"
    >
      <div className="testimonials-card__body">
        <div className="testimonials-card__text">
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
        <p className="testimonials-card__name">
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