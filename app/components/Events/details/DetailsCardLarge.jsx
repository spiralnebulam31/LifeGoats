import DetailCard from './DetailCard.jsx';
import { motion } from 'framer-motion';
import { useMediaQuery } from "react-responsive";
import { fadeIn } from '../../../../motion/motion.js';
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/details/Details.scss";

const DetailsCardLarge = ( { details } ) => {

  DetailsCardLarge.propTypes = {
    details: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
  };  

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.div className="details-card-large"
      variants={fadeIn} initial="initial" whileInView="animate" 
viewport={{ once: true }}
    >
        <motion.div className="details-card-large__inner">
        
        {isSmallScreen && (
          <div>
          <motion.div className="details-card-large__grid details-card-large__grid--top">
            {details.slice(0,3).map((detail, index) => (
              <DetailCard key={index} {...detail} />
            ))}
          </motion.div>
          <motion.div className="details-card-large__grid details-card-large__grid--bottom">
            {details.slice(3,5).map((detail, index) => (
              <DetailCard key={index} {...detail} />
            ))}
          </motion.div>
          </div>
          )}

          {!isSmallScreen && (
          <motion.div className="details-card-large__grid details-card-large__grid--all">
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
