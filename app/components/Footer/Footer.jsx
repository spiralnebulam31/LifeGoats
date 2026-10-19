"use client";

import { useContext } from "react";
import Link from "next/link";
import { StateContext } from "../../../contexts/StateContext";
import LocationModal from "./LocationModal";
import "@/src/scss/components/Footer/Footer.scss";

const Footer = () => {
  const { modalState, setModalState } = useContext(StateContext);

  const { locationOpen } = modalState;

  const toggleLocationModal = () => {
    setModalState({ ...modalState, locationOpen: !locationOpen });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/*Copyright & Developer*/}
        <div className="site-footer__row">
          <p className="site-footer__copyright">
            Copyright
            <span className="site-footer__copyright-symbol">
              ©
            </span>
            2026{' '}
            <Link href="/" className="site-footer__home-link">
              Life Goats
            </Link>
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
        <div className="site-footer__links">
          <Link
            href="/about/team"
            className="site-footer__link"
          >
            Team
          </Link>

          <span className="site-footer__separator" aria-hidden="true">|</span>

          <button
            type="button"
            onClick={toggleLocationModal}
            className="site-footer__link"
          >
            Location
          </button>

          <LocationModal isOpen={locationOpen} onClose={toggleLocationModal} />

          <span className="site-footer__separator" aria-hidden="true">|</span>

          <Link
            href="/contact"
            className="site-footer__link"
          >
            Contact
          </Link>
        </div>

        {/*Subscribe to our newsletter*/}
        <div className="site-footer__row">
          <Link
            href="/subscription-to-newsletter"
            className="site-footer__newsletter"
          >
            Newsletter
          </Link>
        </div>

        {/*Privacy & Accessibility*/}
        <div className="site-footer__links">
          <Link
            href="/privacy-policy"
            className="site-footer__link"
          >
            Privacy Policy
          </Link>

          <span className="site-footer__separator" aria-hidden="true">|</span>

          <Link
            href="/accessibility-statement"
            className="site-footer__link"
          >
            Accessibility Statement
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
