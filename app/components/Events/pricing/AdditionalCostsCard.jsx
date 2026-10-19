'use client';

import { motion } from "framer-motion";

import PropTypes from 'prop-types';
import "@/src/scss/components/Events/pricing/Pricing.scss";

const AdditionalCostsCard = ({ index, description, details }) => {
  return (
            <motion.div
            key={index}
            className="additional-costs-card"
            >
            <p className="additional-costs-card__text">➤ {description}</p>
            {details && <ul className="additional-costs-card__text">
            {details.map((details, index) => (
            <li key={index}>
            ↪ {details}
            </li>
            ))}
            </ul>}
            </motion.div>
  )
};

AdditionalCostsCard.propTypes = {
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string)
};

export default AdditionalCostsCard;
