import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { navLinks } from "../../constants/constants";
import { lifeGoatsLogo, menuMountain, menuClose } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobile, setMobile] = useState(false);

  return (
     
    <nav className={"fixed w-full top-0 z-50 bg-background shadow-xl pr-8 pl-5 py-2"}>

      <div className="flex w-full mx-auto justify-between gap-20"> {/* beginning of flex div */}
        <div className="flex items-center justify-start"> {/* beginning of left side div */}
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
        </div>  {/* end of left side div */}

        <div className="flex items-center justify-end"> {/* beginning of right side div */}
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? "text-earth underline" : "text-primary"
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

          <div className="lg:hidden flex flex-1 justify-end items-center gap-2">
            <img
              src={mobile ? menuClose : menuMountain}
              alt="menu"
              className="w-16 h-auto cursor-pointer object-contain"
              onClick={() => setMobile(!mobile)}
            />
          </div>
        </div> {/* end of right side div */}
      </div> {/* end of flex div */}
    </nav>
  );
};

export default Navbar;