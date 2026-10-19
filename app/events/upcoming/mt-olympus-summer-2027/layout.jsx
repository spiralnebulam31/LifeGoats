import PropTypes from 'prop-types';

// Hidden for now: nothing on the site links here, it's left out of the
// sitemap, and search engines are asked not to index it.
export const metadata = {
  title: 'Mount Olympus, Summer 2027 | Life Goats',
  description: 'A summer retreat on Mount Olympus, Greece, for up to 15 people.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Summer2027Layout({ children }) {
  return children;
}

Summer2027Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
