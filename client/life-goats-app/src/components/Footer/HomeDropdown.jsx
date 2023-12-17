import { motion } from "framer-motion";
import HomeLinks from "../LinksColumns/HomeLinks";
import { homeLinks } from "../../constants/constants";

const HomeDropdown = ({ toggleDropdown, setToggleDropdown }) => (
  <motion.div
    className={`${
      !toggleDropdown ? "hidden" : "flex"
    } absolute right-0 top-0 bottom-0 w-[50%] h-screen mx-0 my-0 z-10 flex-col items-end gap-60`}
    initial={toggleDropdown ? "open" : "closed"}
    animate={toggleDropdown ? "open" : "closed"}
  >
    <HomeLinks links={homeLinks} onClick={() => setToggleDropdown(!toggleDropdown)} />
  </motion.div>
);

export default HomeDropdown;
