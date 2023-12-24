import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { homeLinks } from "../../constants/constants";
import {
  lifeGoatsLogo,
  menuMountain,
  menuClose
} from "../../assets";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link.title);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background shadow-xl pr-8 pl-5 py-2">
      <div className="flex w-full mx-auto justify-between gap-20">
        <div className="flex items-center justify-start">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={lifeGoatsLogo}
              alt="logo"
              className="w-20 lg:w-[70px] h-auto top-0 left-0 object-contain"
            />
            <p className="text-primary text-[26px] font-title cursor-pointer lg:block hidden">
              Life Goats
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {homeLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-secondary underline"
                    : "text-primary"
                } hover:text-tertiary text-[20px] font-links font-bold cursor-pointer`}
                onClick={() => handleLinkClick(link)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex flex-1 justify-end items-center gap-">
            <img
              src={mobile ? menuClose : menuMountain}
              alt="menu"
              className="w-16 h-auto cursor-pointer object-contain z-30"
              onClick={() => setMobile(!mobile)}
            />
          </div>
          <MobileMenu
            active={active}
            setActive={setActive}
            mobile={mobile}
            setMobile={setMobile}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;