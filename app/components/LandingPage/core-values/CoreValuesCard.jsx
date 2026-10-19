import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import "@/src/scss/components/LandingPage/core-values/CoreValues.scss";

const CoreValuesCard = ({ alt, image, title, text }) => {
  return (
    <motion.div
      className="core-values-card"
      >
        <img
          src={image.src || image}
          alt={alt}
          className="core-values-card__image"
        />
        <div className="core-values-card__body">
          <h2 className="core-values-card__title">
            {title}
          </h2>
          <p className="core-values-card__text">
            {text}
          </p>
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