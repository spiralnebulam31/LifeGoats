import { motion } from 'framer-motion';
import Image from 'next/image';

import PropTypes from 'prop-types';
import "@/src/scss/components/Events/team/Team.scss";

const TeamBubble = ({ alt, image, title, responsibilty }) => {
  return (
    <motion.div
      className="team-bubble"
      >
        <Image
          src={image}
          alt={alt}
          className="event-team__avatar"
          width={300}
          height={300}
        />
        <div className="team-bubble__body">
          <h2 className="team-bubble__title">
            {title}
          </h2>
          <p className="team-bubble__role">
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
