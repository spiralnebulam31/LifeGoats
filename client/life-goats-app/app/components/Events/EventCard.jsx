import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const EventCard = ({ alt, src, link, title, isClickable = true }) => {

  const cardContent = (
    <>
      <motion.div
        className="w-[310px] h-[200px] lg:h-[250px] lg:w-[450px] z-0 bg-background m-3 rounded-2xl shadow-lg overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          className="w-full object-cover"
          width={450}
          height={250}
        />
      </motion.div>        
    
      <div className="px-6 pt-1 pb-1 flex flex-col mx-auto w-[310px] h-auto lg:w-[450px]">
        <h2 className="text-tertiary font-subtitle text-center text-[20px] font-bold max-w-6xl pt-1 pb-1">
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
        <Link href={link} alt={title} target="_blank" rel="noreferrer">
          {cardContent}
        </Link>
      ) : (
        <div className="cursor-default">
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
};

export default EventCard;
