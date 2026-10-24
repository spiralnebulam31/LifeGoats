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
  location,
  pricePerNight,
  priceForFiveNights,
  notes,
  isOpen,
  toggleOpen,
}) => {
  const notesId = `pricing-card-notes-${index}`;

  return (
    <motion.div
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
          className="pricing-card__accommodation pricing-card__accommodation--link"
        >
          {accommodation}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      ) : (
        <p className="pricing-card__accommodation">
          {accommodation}
        </p>
      )}

      <div className="pricing-card__row pricing-card__row--location">
        <img
          src={locationIcon.src}
          alt=""
          className="pricing-card__icon pricing-card__icon--location"
        />
        <p className="pricing-card__text">
          {location}
        </p>
      </div>

      <div className="pricing-card__price-block">
        {pricePerNight ? (
          <>
            <div className="pricing-card__row">
              <img
                src={priceIcon2.src}
                alt=""
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
            {priceForFiveNights && (
              <p className="pricing-card__text pricing-card__price-line pricing-card__price-line--last">
                (<span className="pricing-card__bold">{priceForFiveNights}</span> for 5 nights)
              </p>
            )}
          </>
        ) : (
          <div className="pricing-card__row">
            <img
              src={priceIcon2.src}
              alt=""
              className="pricing-card__icon pricing-card__icon--price"
            />
            <p className="pricing-card__text pricing-card__tbc">
              Price to be confirmed
            </p>
          </div>
        )}
      </div>

      {notes && notes.length > 0 && (
        <>
          <div className={`pricing-card__toggle-row ${isOpen ? "pricing-card__toggle-row--less" : ""}`}>
            <button
              type="button"
              className="pricing-card__toggle"
              onClick={toggleOpen}
              aria-expanded={isOpen}
              aria-controls={notesId}
            >
              {isOpen ? "read less" : "read more"}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                id={notesId}
                className="pricing-card__expanded"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <ul className="pricing-card__notes">
                  {notes.map((note) => (
                    <li key={note}>➤ {note}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
};

MainPricingCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  accommodation: PropTypes.string.isRequired,
  link: PropTypes.string,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.string,
  priceForFiveNights: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default MainPricingCard;
