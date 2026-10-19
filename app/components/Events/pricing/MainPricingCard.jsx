import { AnimatePresence, motion } from "framer-motion";
import { locationIcon, priceIcon2 } from "@/src/assets";
import { fadeIn } from "../../../../motion/motion";
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/pricing/Pricing.scss";

const MainPricingCard = ({
  index,
  title,
  accommodation,
  link,
  alt,
  location,
  pricePerNight,
  priceForFiveNights,
  notes,
  isOpen,
  toggleOpen,
}) => {
  return (
    <motion.div
      key={index}
      className="pricing-card"
    >
      <p className="pricing-card__title">
        🐐{title}
      </p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          alt={alt}
          className="pricing-card__accommodation pricing-card__accommodation--link"
        >
          {accommodation}
        </a>
      ) : (
        <p className="pricing-card__accommodation">
          {accommodation}
        </p>
      )}

      <div className="pricing-card__row pricing-card__row--location">
        <img
          src={locationIcon}
          alt="location of accommodation icon"
          className="pricing-card__icon pricing-card__icon--location"
        />
        <p className="pricing-card__text">
          {location}
        </p>
      </div>

      <div className="pricing-card__price-block">
        <div className="pricing-card__row">
          <img
            src={priceIcon2}
            alt="price icon"
            className="pricing-card__icon pricing-card__icon--price"
          />
          <p className="pricing-card__text pricing-card__price-line">
            from
          </p>
        </div>
        <p className="pricing-card__text pricing-card__price-line pricing-card__price">
          {pricePerNight}
        </p>
        <p className="pricing-card__text pricing-card__price-line">
          per night
        </p>
        <p className="pricing-card__text pricing-card__price-line pricing-card__price-line--last">
          (<span className="pricing-card__bold">{priceForFiveNights}</span> for 5 nights)
        </p>
      </div>

      {!isOpen && (
        /* Read More Link */
        <div className="pricing-card__toggle-row">
          <p
            className="pricing-card__toggle"
            onClick={toggleOpen}
            alt="click to read more"
          >
            read more
          </p>
        </div>
      )}

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={{
              open: { width: "100%", right: "0", zIndex: 2 },
              closed: { width: "100%", right: "0", zIndex: 1 },
            }}
          >
            {/* Rest of the expanded content */}
            <motion.div
              className="pricing-card__expanded"
              variants={fadeIn}
            >
              {notes && (
                <ul className="pricing-card__notes">
                  {notes.map((note, index) => (
                    <li key={index}>➤ {note}</li>
                  ))}
                </ul>
              )}

              {/* Read Less Link */}
              <div className="pricing-card__toggle-row pricing-card__toggle-row--less">
                <p
                  className="pricing-card__toggle"
                  onClick={toggleOpen}
                  alt="click to read less"
                >
                  read less
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

MainPricingCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  accommodation: PropTypes.string.isRequired,
  link: PropTypes.string,
  alt: PropTypes.string,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.string.isRequired,
  priceForFiveNights: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MainPricingCard;
