import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { homeLinks, hikeLinks } from "../../constants/navLinks";
import { lifeGoatsLogo, menuMountain, menuClose } from "../../assets";
import MobileMenu from "./MobileMenu";
import { HomeLinkDropdown, HikeLinkDropdown } from "../LinksColumns";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link.title);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background shadow-xl px-6 py-2 h-[75px]">
      <div className="flex w-full mx-auto justify-between gap-20">
        <div className="flex justify-start">
          <Link
            to="/"
            className="flex flex-row items-center =justify-start gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={lifeGoatsLogo}
              alt="logo"
              className="h-[65px] w-auto cursor-pointer object-contain pb-1"
            />
            <p className="text-primary text-[26px] font-title cursor-pointer lg:block hidden">
              Life Goats
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-end">
        <div className="hidden lg:flex flex-row items-center justify-end gap-10">
        <HomeLinkDropdown
            active={active}
            setActive={setActive}
            handleLinkClick={handleLinkClick}
            homeLinks={homeLinks}
            className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
          />
          <HikeLinkDropdown
            active={active}
            setActive={setActive}
            handleLinkClick={handleLinkClick}
            hikeLinks={hikeLinks}
            className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
          />

          <Link
            to="/contact"
            className="text-primary hover:text-tertiary text-[20px] font-bold font-links hover:text-[24px] cursor-pointer leading-7"
            onClick={() => {
              setActive("Contact");
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </Link>
        </div>

          <div className="lg:hidden flex flex-1 justify-end items-center pb-1">
            <img
              src={mobile ? menuClose : menuMountain}
              alt="menu"
              className="h-[60px] w-auto cursor-pointer object-contain z-30"
              onClick={() => setMobile(!mobile)}
            />
          </div>
          <motion.div>
            <AnimatePresence>
              {mobile && (
                <MobileMenu
                  key="mobile-menu-animation"
                  active={active}
                  setActive={setActive}
                  mobile={mobile}
                  setMobile={setMobile}
                  homeLinks={homeLinks}
                  hikeLinks={hikeLinks}
                  handleLinkClick={handleLinkClick}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
