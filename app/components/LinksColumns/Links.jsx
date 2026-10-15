'use client';

import { motion } from "framer-motion";

import PropTypes from 'prop-types';

const Links = ({ links, onClick }) => (
  <motion.div
    className="list-none font-links font-bold flex flex-col justify-center text-center items-center gap-6 px-16 w-[30%]"
  >
    {links.map((link) => (
      <motion.div key={link.id}>
        <li
          key={link.id}
          className="hover:text-tertiary text-[20px] hover:text-[24px] font-medium cursor-pointer leading-7 w-[86px]"
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
