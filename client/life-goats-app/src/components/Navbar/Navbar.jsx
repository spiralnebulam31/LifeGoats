import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { homeLinks } from "../../constants/constants";
import { lifeGoatsLogo, menuMountain, menuClose } from "../../assets";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link.title);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background shadow-xl px-6 py-2 h-[75px] align-middle my-auto">
      <div className="flex w-full mx-auto my-auto justify-between align-middle text-center gap-20">
        <div className="flex items-center justify-start">
          <Link
            to="/"
            className="flex flex-row items-center justify-start gap-2 my-auto"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={lifeGoatsLogo}
              alt="logo"
              className="h-[65px] w-auto cursor-pointer object-contain -mt-0.5"
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
          <div className="lg:hidden flex flex-1 justify-end items-center">
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
