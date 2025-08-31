"use client";

import { useContext } from "react";
import Link from "next/link";
import { StateContext } from "../../../contexts/StateContext";
import AccessibilityModal from "./AccessibilityModal";
import LocationModal from "./LocationModal";

const Footer = () => {
  const { modalState, setModalState } = useContext(StateContext);

  const { locationOpen, accessibilityOpen } = modalState;

  const toggleLocationModal = () => {
    setModalState({
      locationOpen: !locationOpen,
      accessibilityOpen,
    });
  };

  const toggleAccessibilityModal = () => {
    setModalState({
      locationOpen,
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

        {/* <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body font-bold text-md">
            Website designed & developed by
            <a
              href="https://anastasiaadamoudi.com/"
              target="_blank"
              rel="noreferrer"
              className="text-tertiary hover:text-secondary font-links font-bold underline text-md mx-2"
            >
              Anastasia Adamoudi
            </a>
          </p>
        </div> */}

        {/*Page links*/}
        <div className="flex flex-row gap-2">
          <Link
            href="/about/team"
            className="text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Team
          </Link>

          <span className="text-secondary font-links font-bold mx-2">|</span>

          <button
            type="button"
            onClick={toggleLocationModal}
            className="text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Location
          </button>

          <LocationModal isOpen={locationOpen} onClose={toggleLocationModal} />

          <span className="text-secondary font-links font-bold mx-2">|</span>

          <Link
            href="/contact"
            className="text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Contact
          </Link>
        </div>

        {/*Subscribe to our newsletter*/}
        <div className="flex justify-center items-center">
          <Link
            href="/subscription-to-newsletter"
            className="bg-secondary text-background font-links uppercase cursor-pointer font-bold text-md no-underline hover:bg-tertiary hover:text-earth py-2 px-4 rounded-lg tracking-wider"
          >
            Newsletter
          </Link>
        </div>

        {/*Privacy & Accessibility Modals*/}
        <div className="flex flex-row gap-2">
          <Link
            href="/privacy-policy"
            className="text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Privacy Policy
          </Link>

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
