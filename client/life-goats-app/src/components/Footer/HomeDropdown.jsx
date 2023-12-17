import { homeLinks } from "../../constants/constants";
import { motion } from "framer-motion";

const HomeDropdown = ({ toggleDropdown, setToggleDropdown }) => {

  return (
<motion.div
        className={`${
          !toggleDropdown ? "hidden" : "flex"
        } absolute right-0 top-0 bottom-0 w-[50%] h-screen mx-0 my-0
        z-10 flex-col items-end gap-60`}
        initial={toggleDropdown ? "open" : "closed"}
      animate={toggleDropdown ? "open" : "closed"}
      >
        <ul className="list-none font-links font-bold flex flex-col justify-center text-center items-center gap-6 px-16 w-[30%]">
          {homeLinks.map((link) => (
            <motion.div key={link.id}>
              <li
                key={link.id}
                className="hover:text-tertiary text-[20px] hover:text-[24px] font-medium cursor-pointer leading-7 w-[86px]"
                onClick={() => {
                  setToggleDropdown(!toggleDropdown);
                  window.scrollTo(0, 0);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            </motion.div>
          ))}
        </ul>
      </motion.div>
  )
}

export default HomeDropdown;
