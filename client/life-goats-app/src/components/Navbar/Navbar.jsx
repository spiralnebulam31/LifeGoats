import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/constants";
import { lifeGoatsLogo, menuMountain, menuClose } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  return (
    <nav
      className={
        "fixed w-full top-0 z-50 bg-background shadow-xl pr-8 pl-5 py-2"
      }
    >
      <div className="flex w-full mx-auto justify-between gap-20">
        {/* beginning of flex div */}
        <div className="flex items-center justify-start">
          {/* beginning of left side div */}
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
        </div>{" "}
        {/* end of left side div */}
        <div className="flex items-center justify-end">
          {" "}
          {/* beginning of right side div */}
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id
                    ? "text-secondary underline"
                    : "text-primary"
                } hover:text-tertiary text-[20px] font-links font-bold cursor-pointer`}
                onClick={() => {
                  setActive(link.id);
                  window.scrollTo(0, 0);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          {/* mobile menu button */}
          <motion.div>
          <div className="lg:hidden flex flex-1 justify-end items-center gap-">
            <img
              src={mobile ? menuClose : menuMountain}
              alt="menu"
              className="w-16 h-auto cursor-pointer object-contain z-30"
              onClick={() => setMobile(!mobile)}
            />
          </div>
          {/* mobile menu */}
          
          <motion.div
            className={`${!mobile ? "hidden" : "flex"}
              absolute right-0 top-0 bottom-0 w-[50%] h-screen mx-0 my-0
              z-10 flex-col items-end gap-60`}
            initial={mobile ? "open" : "closed"}
            animate={mobile ? "open" : "closed"}
          >
            
              <ul className="list-none font-links font-bold flex flex-col justify-center text-center items-center gap-6 bg-background px-16 w-[90%] h-screen">
                {navLinks.map((link) => (
                  <motion.div key={link.id}>
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "text-secondary underline"
                          : "text-primary"
                      } hover:text-tertiary text-[20px] hover:text-[24px] font-medium cursor-pointer leading-7 w-[86px]`}
                      onClick={() => {
                        setMobile(!mobile);
                        setActive(link.title);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  </motion.div>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          {/* end of mobile menu */}
        </div>
        {/* end of mobile menu button */}
      </div>
      {/* end of right side div */}
    </nav>
  );
};

export default Navbar;
