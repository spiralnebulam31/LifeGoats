'use client';

import { useState } from 'react';
import { StateContext } from '../contexts/StateContext';

export function StateProvider({ children }) {
  const [modalState, setModalState] = useState({
    privacyOpen: false,
    accessibilityOpen: false,
  });

  const [phoneIsHovered, setPhoneIsHovered] = useState(false);
  const [emailIsHovered, setEmailIsHovered] = useState(false);
  const [email2IsHovered, setEmail2IsHovered] = useState(false);

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      accessibilityOpen: false,
    });
  };

  const handlePhoneMouseEnter = () => setPhoneIsHovered(true);
  const handlePhoneMouseLeave = () => setPhoneIsHovered(false);
  const handleEmailMouseEnter = () => setEmailIsHovered(true);
  const handleEmailMouseLeave = () => setEmailIsHovered(false);
  const handleEmail2MouseEnter = () => setEmail2IsHovered(true);
  const handleEmail2MouseLeave = () => setEmail2IsHovered(false);

  const value = {
    modalState,
    setModalState,
    closeModal,
    phoneIsHovered,
    emailIsHovered,
    email2IsHovered,
    handlePhoneMouseEnter,
    handlePhoneMouseLeave,
    handleEmailMouseEnter,
    handleEmailMouseLeave,
    handleEmail2MouseEnter,
    handleEmail2MouseLeave,
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}