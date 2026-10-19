'use client';

import { MotionConfig } from 'framer-motion';
import PropTypes from 'prop-types';

// Turns off Framer Motion's transform/layout animations for visitors whose
// system asks for reduced motion (opacity fades still run).
export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

MotionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
