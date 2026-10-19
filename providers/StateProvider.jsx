'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive'; 
import { StateContext } from '../contexts/StateContext';

export function StateProvider({ children }) {
  const [modalState, setModalState] = useState({ locationOpen: false });

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const value = {
    modalState,
    setModalState,
    isSmallScreen,
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
