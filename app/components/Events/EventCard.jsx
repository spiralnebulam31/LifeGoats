import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import "@/src/scss/components/Events/EventCard.scss";

const EventCard = ({ alt, src, link, title, isClickable = true, isAboveFold = false }) => {

  const cardContent = (
    <>
      <motion.div
        className="event-card__frame"
      >
        <Image
          src={src}
          alt={alt}
          className="event-card__image"
          width={450}
          height={250}
          loading={isAboveFold ? "eager" : "lazy"}
        />
      </motion.div>        
    
      <div className="event-card__body">
        <h2 className="event-card__title">
          {title}
        </h2>
        {/* <p className="text-primary font-body text-center text-[14px] md:text-[16px] max-w-6xl pt-2 pb-1">
          {text}
        </p> */}
      </div>
    </>
  );

  return (
    <>
      {isClickable ? (
        <Link href={link}>
          {cardContent}
        </Link>
      ) : (
        <div className="event-card--static">
          {cardContent}
        </div>
      )}
    </>
  );
};
EventCard.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isClickable: PropTypes.bool,
  isAboveFold: PropTypes.bool,
};

export default EventCard;
