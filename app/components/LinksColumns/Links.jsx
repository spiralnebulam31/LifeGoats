'use client';

import { motion } from "framer-motion";

import PropTypes from 'prop-types';
import "@/src/scss/components/LinksColumns/Links.scss";

const Links = ({ links, onClick }) => (
  <motion.div
    className="links"
  >
    {links.map((link) => (
      <motion.div key={link.id}>
        <li
          key={link.id}
          className="links__item"
          onClick={() => {
            onClick();
            window.scrollTo(0, 0);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      </motion.div>
    ))}
  </motion.div>
);

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Links;
