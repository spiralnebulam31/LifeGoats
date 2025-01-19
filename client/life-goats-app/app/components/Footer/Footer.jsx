"use client";

import { useContext } from "react";
import Link from "next/link";
import { StateContext } from "../../../contexts/StateContext";
import PrivacyModal from "./PrivacyModal";
import AccessibilityModal from "./AccessibilityModal";

const Footer = () => {

  const { modalState, setModalState } = useContext(StateContext);

  const { privacyOpen, accessibilityOpen } = modalState;

  const togglePrivacyModal = () => {
    setModalState({
      privacyOpen: !privacyOpen,
      accessibilityOpen,
    });
  };

  const toggleAccessibilityModal = () => {
    setModalState({
      privacyOpen,
      accessibilityOpen: !accessibilityOpen,
    });
  };

  return (
    <footer className="bg-primary bg-contain bg-center bg-no-repeat fixed z-1 bottom-0 left-0 right-0 w-full h-[180px] flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col justify-center items-center align-middle mx-auto my-auto gap-3">
       
        {/*Copyright & Developer*/}
        <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body font-bold text-lg">
            Copyright
            <span className="text-secondary font-links font-bold text-lg mx-2">
              ©
            </span>
            2023-2025 Life Goats
          </p>
        </div>

        <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body font-bold text-md">
            Designed & developed by
            <a
              href="https://anastasiaadamoudi.com/"
              target="_blank"
              rel="noreferrer"
              className="text-tertiary hover:text-secondary font-links font-bold underline text-md mx-2"
            >
              Anastasia Adamoudi
            </a>
          </p>
        </div>

        {/*Subscribe to our newsletter*/}
        <div className="flex justify-center items-center">
          <Link
            href="/subscriptions?action=subscribe"
            className="bg-secondary text-background font-links uppercase cursor-pointer font-bold text-md no-underline hover:bg-tertiary hover:text-earth py-2 px-4 rounded-lg tracking-wider"
          >
            Subscribe to our newsletter
          </Link>
        </div>

        {/*Privacy & Accessibility Modals*/}
        <div className="flex flex-row gap-2">
          <button
            type="button"
            onClick={togglePrivacyModal}
            className="text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Privacy Policy
          </button>

          <PrivacyModal isOpen={privacyOpen} onClose={togglePrivacyModal} />

          <span className="text-secondary font-links font-bold mx-2">|</span>

          <button
            type="button"
            onClick={toggleAccessibilityModal}
            className="text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Web Accessibility Statement
          </button>

          <AccessibilityModal
            isOpen={accessibilityOpen}
            onClose={toggleAccessibilityModal}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
