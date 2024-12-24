import { motion } from 'framer-motion';
import Image from 'next/image';

import PropTypes from 'prop-types';

const TeamBubble = ({ alt, image, title, responsibilty }) => {
  return (
    <motion.div
      className="z-0 m-3 overflow-hidden"
      >
        <Image
          src={image}
          alt={alt}
          className="object-cover w-[150px] h-[150px] rounded-full shadow-lg"
          width={300}
          height={300}
        />
        <div className="px-6 pt-3 pb-1 flex flex-col mx-auto w-[150px] h-auto">
          <h2 className="text-tertiary font-subtitle text-center text-[18px] font-bold max-w-6xl py-0">
            {title}
          </h2>
          <p className="text-primary font-body text-center text-[14px] md:text-[16px] max-w-6xl py-0">
            {responsibilty}
          </p>
        </div>
      </motion.div>
  );
}

TeamBubble.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  responsibilty: PropTypes.string.isRequired,
};

export default TeamBubble;
