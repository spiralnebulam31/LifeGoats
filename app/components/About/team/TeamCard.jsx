import { motion } from 'framer-motion';
import parse, { domToReact } from 'html-react-parser';
import Image from 'next/image';
import PropTypes from 'prop-types';
import "@/src/scss/components/About/team/TeamCard.scss";

const transform = (node) => {
  if (node.type === 'tag' && node.name === 'a') {
    return (
      <a href={node.attribs.href} className="team-card__link">
        {domToReact(node.children)}
      </a>
    );
  }
  // Return null for all other nodes, which tells html-react-parser to use the default conversion
  return null;
};

const TeamCard = ({ alt, image, title, text, url }) => {
  return (
    <motion.div
      className="team-card"
      >
        <Image
          src={image}
          alt={alt}
          className="team-card__photo"
          width={400}
          height={400}
        />
        <div className="team-card__body">
        <a href={url} target="_blank" rel="noreferrer">
          <h2 className="team-card__name">
            {title}
          </h2>
        </a>
          <p className="team-card__text">
          {parse(text, { replace: transform })}
          </p>
        </div>
      </motion.div>
  );
};

TeamCard.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TeamCard;
