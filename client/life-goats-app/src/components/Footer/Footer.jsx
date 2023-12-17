import { useState } from "react";
import Popup from "reactjs-popup";
import { facebook, instagram, downArrow } from "../../assets";
import HomeDropdown from "./HomeDropdown";
import { homeLinks } from "../../constants/constants";

const Footer = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [privacyOpen, setPrivacyOpen] = useState(false);
  const closePrivacyModal = () => setPrivacyOpen(false);

  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const closeAccessibilityModal = () => setAccessibilityOpen(false);

  return (
    <div className="bg-primary bg-contain bg-center bg-no-repeat bg-fixed z-1 relative inset-0 w-full h-auto flex flex-col items-center justify-center bottom-0 overflow-hidden">
      <div className="flex flex-col justify-center items-center mx-auto mb-0.1 mt-3 z-0">
        <div className="flex flex-col justify-center items-center">
          <p className="text-background font-body font-bold text-lg mb-1">
            Follow us on
          </p>
          <div className="flex flex-row justify-center items-center">
            <a
              href="https://www.facebook.com/Life-Goats"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" className="w-8 h-8 mx-2" />
            </a>
            <a
              href="https://www.instagram.com/life_goats/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" className="w-8 h-8 mx-2" />
            </a>
          </div>
        </div>

        <div className="items-center w-[90%] my-2">
          <h2 className="text-background font-body font-bold text-lg mb-1">
            Home
          </h2>
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {homeLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-tertiary text-[20px] font-links font-bold cursor-pointer"
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex flex-1 justify-end items-center gap-">
            <img
              src={downArrow}
              alt="menu"
              className="w-16 h-auto cursor-pointer object-contain z-30"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
          </div>
          <HomeDropdown
            toggleDropdown={toggleDropdown}
            setToggleDropdown={setToggleDropdown}
          />
        </div>

        <div className="items-center w-[90%] my-2">
          <hr className="border-2 border-secondary" />
        </div>

        <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body font-bold text-lg mb-1">
            Copyright
            <span className="text-secondary font-links font-bold text-lg mx-2">
              ©
            </span>
            2023 Life Goats
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-background font-body font-bold text-md mb-1 mt-1">
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
      </div>

      <div className="mx-auto mb-0.1 mt-0.1 z-0">
        <div className="flex flex-row gap-2 ">
          <button
            type="button"
            onClick={() => setPrivacyOpen((o) => !o)}
            className="pb-3 pt-2 text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Privacy Policy
          </button>
          <Popup
            open={privacyOpen}
            closeOnDocumentClick
            onClose={closePrivacyModal}
          >
            {/* Privacy Policy content */}
          </Popup>
          <span className="text-secondary font-links font-bold text-2xl mx-2 pb-3 pt-2">
            |
          </span>
          <button
            type="button"
            onClick={() => setAccessibilityOpen((o) => !o)}
            className="pb-3 pt-2 text-tertiary hover:text-secondary font-links font-bold text-md no-underline"
          >
            Web Accessibility Statement
          </button>
          <Popup
            open={accessibilityOpen}
            closeOnDocumentClick
            onClose={closeAccessibilityModal}
          >
            {/* Accessibility Statement content */}
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Footer;
