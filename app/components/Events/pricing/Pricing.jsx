'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import MainPricingCard from './MainPricingCard';
import AdditionalCostsCard from './AdditionalCostsCard';
import { motion } from 'framer-motion';
import { fadeIn } from "../../../../motion/motion";
import {
  floatFromDownPreTitle,
  floatFromDownMainTitle,
} from "../../../../motion/home-sections";
import GoatPrintsWalking from "../../Loaders/GoatPrintsWalking";
import "@/src/scss/components/Events/pricing/Pricing.scss";

const Pricing = ({
  pretitle = "Details about the",
  title = "Pricing",
  pricingData,
  additionalTitle = "Additional costs",
  additionalCosts,
  download,
  note,
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section
      className="pricing"
      aria-labelledby="pricing-title"
    >
      <motion.div
        className="pricing__header"
      >
        <motion.p
          className="pricing__pretitle"
          variants={floatFromDownPreTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {pretitle}
        </motion.p>
        <motion.h2
          id="pricing-title"
          className="pricing__title"
          style={{ textShadow: "2px 2px 3px rgba(0,0,0, 0.3)" }}
          variants={floatFromDownMainTitle}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
      </motion.div>

      <motion.div
        className="pricing__cards"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {pricingData.map((item, index) => (
          <motion.div key={item.title} className="pricing__card-wrap">
            <MainPricingCard index={index} {...item} isOpen={isOpen} toggleOpen={toggleOpen} />
          </motion.div>
        ))}
      </motion.div>

      {additionalCosts && additionalCosts.length > 0 && (
        <motion.div
          className="pricing__additional"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="pricing__additional-title">{additionalTitle}</h3>
          {additionalCosts.map((item, index) => (
            <AdditionalCostsCard key={item.description} index={index} {...item} />
          ))}
        </motion.div>
      )}

      {(download || note) && (
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {download && (
            <a
              href={download.href}
              download={download.fileName}
              className="pricing__download"
            >
              {download.text}
            </a>
          )}

          {note && <p className="pricing__coming-soon">{note}</p>}
        </motion.div>
      )}

      <motion.div className="pricing__prints">
        <GoatPrintsWalking />
      </motion.div>
    </section>
  );
};

Pricing.propTypes = {
  pretitle: PropTypes.string,
  title: PropTypes.string,
  pricingData: PropTypes.arrayOf(PropTypes.object).isRequired,
  additionalTitle: PropTypes.string,
  additionalCosts: PropTypes.arrayOf(PropTypes.object),
  download: PropTypes.shape({
    href: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  note: PropTypes.string,
};

export default Pricing;
