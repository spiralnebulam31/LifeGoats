import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/overview/EventOverview.scss";

const OverviewCard = ({ alt, image, title, text }) => {

  OverviewCard.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };  

  return (
    <motion.div
      className="overview-card"
      >
        <img
          src={image.src || image}
          alt={alt}
          className="overview-card__image"
        />
        <div className="overview-card__body">
          <h2 className="overview-card__title">
            {title}
          </h2>
          <p className="overview-card__text">
            {text}
          </p>
        </div>
      </motion.div>
  );
};

export default OverviewCard;
