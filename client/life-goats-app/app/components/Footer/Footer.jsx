'use client';

import { useContext } from "react";
import { StateContext } from '../../../contexts/StateContext';
import PrivacyModal from "./PrivacyModal";
import AccessibilityModal from "./AccessibilityModal";
// import { useState } from "react";
// import { facebook, instagram, downArrow } from "@/public/assets";
// import HomeDropdown from "./HomeDropdown";
// import HomeLinks from "../LinksColumns/HomeLinks";
// import { homeLinks } from "../../data/navLinks";

const Footer = () => {

  // const [toggleDropdown, setToggleDropdown] = useState(false);

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
    <footer className="bg-primary bg-contain bg-center bg-no-repeat fixed z-1 bottom-0 left-0 right-0 w-full h-[130px] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="flex flex-col justify-center items-center align-middle mx-auto my-auto gap-3">
        

        {/* Social Media
        <div className="flex flex-col justify-center items-center">
          <p className="text-background font-body font-bold text-lg mb-1">Follow us on</p>
          <div className="flex flex-row justify-center items-center">
            <a href="https://www.facebook.com/Life-Goats" target="_blank" rel="noreferrer">
              <Image src={facebook} alt="facebook" className="w-8 h-8 mx-2" />
            </a>
            <a href="https://www.instagram.com/life_goats/" target="_blank" rel="noreferrer">
              <Image src={instagram} alt="instagram" className="w-8 h-8 mx-2" />
            </a>
          </div>
        </div>

        Home Links
        <div className="items-center w-[90%] my-2">
          <h2 className="text-background font-body font-bold text-lg mb-1">Home</h2>
          <div className="hidden md:flex md:items-center md:justify-center">
            <HomeLinks links={homeLinks} onClick={() => setToggleDropdown(false)} />
          </div>
          <div className="md:hidden flex flex-1 justify-end items-center gap-">
            <Image
              src={downArrow}
              alt="menu"
              className="w-16 h-auto cursor-pointer object-contain z-30"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
          </div>
          {toggleDropdown && (
            <div className="md:hidden">
              <HomeDropdown toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} />
            </div>
          )}
        </div>

        Navigation Links

        Horizontal Line
        <div className="items-center w-[90%] my-2">
          <hr className="border-2 border-secondary" />
        </div> */}

        {/*Copyright & Developer*/}
        <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body font-bold text-lg">
            Copyright
            <span className="text-secondary font-links font-bold text-lg mx-2">©</span>
            2023-2024 Life Goats
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

          <AccessibilityModal isOpen={accessibilityOpen} onClose={toggleAccessibilityModal} />

        </div>
      </div>

    </footer>
  );
};

export default Footer;
